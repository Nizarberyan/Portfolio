import React, { useEffect, useRef, useState } from 'react';
import type { ProjectTheme } from '../../data/mobileThemeConfig';

interface Props {
  project: ProjectTheme;
}

// Convert hex color to normalized RGB float array [0..1]
function hexToRgb(hex: string): [number, number, number] {
  let clean = hex.replace('#', '').trim();
  if (clean.length === 3) {
    clean = clean.split('').map(c => c + c).join('');
  }
  const num = parseInt(clean, 16);
  if (isNaN(num)) return [0.5, 0.5, 0.5];
  return [
    ((num >> 16) & 255) / 255,
    ((num >> 8) & 255) / 255,
    (num & 255) / 255,
  ];
}

// Theme color lookups for the GPU shaders
const THEME_GPU_COLORS: Record<string, { primary: [number, number, number]; secondary: [number, number, number] }> = {
  zephyr: {
    primary: [0.39, 0.40, 0.95], // Electric Indigo #6366f1
    secondary: [0.20, 0.23, 0.32], // Deep Charcoal Slate
  },
  ridemate: {
    primary: [0.76, 0.94, 0.10], // Electric Chartreuse Lime #c2f019
    secondary: [0.06, 0.10, 0.08], // Deep Matte Charcoal Obsidian
  },
  healthsphere: {
    primary: [1.0, 0.60, 0.80], // Bubblegum Athletic Pink #FF99CC
    secondary: [0.12, 0.10, 0.14], // Deep Velvet Obsidian
  },
  resaly: {
    primary: [0.87, 0.52, 0.31], // Terracotta #de854f
    secondary: [0.93, 0.78, 0.68], // Warm Atelier Champagne
  },
};

export const GPUAtmosphereCanvas: React.FC<Props> = ({ project }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [renderMode, setRenderMode] = useState<'WebGPU' | 'Hardware-Canvas' | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let isDestroyed = false;
    let animFrameId: number;
    let cleanupWebGPU: (() => void) | null = null;

    // Palette targets for smooth interpolation
    const colors = THEME_GPU_COLORS[project.id] || THEME_GPU_COLORS.zephyr;
    const targetPrimary = [...colors.primary];
    const targetSecondary = [...colors.secondary];
    const currentPrimary = [...targetPrimary];
    const currentSecondary = [...targetSecondary];

    // High performance particle state
    const PARTICLE_COUNT = 45;
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0006,
      vy: (Math.random() - 0.5) * 0.0006,
      size: 1.5 + Math.random() * 3,
      alpha: 0.2 + Math.random() * 0.5,
    }));

    // Detect WebGPU availability safely with runtime feature detection
    const initWebGPU = async (): Promise<boolean> => {
      const navGpu = (navigator as unknown as { gpu?: any }).gpu;
      if (!navGpu) {
        return false;
      }
      try {
        const adapter = await navGpu.requestAdapter({
          powerPreference: 'high-performance',
        });
        if (!adapter) return false;

        const device = await adapter.requestDevice();
        if (isDestroyed) {
          device.destroy();
          return false;
        }

        const context = (canvas as any).getContext('webgpu');
        if (!context) return false;

        const presentationFormat = navGpu.getPreferredCanvasFormat();
        context.configure({
          device,
          format: presentationFormat,
          alphaMode: 'premultiplied',
        });

        // WGSL Shader: Fast procedurally animated gradient with zero CPU load
        const shaderCode = `
          struct Uniforms {
            resolution: vec2<f32>,
            time: f32,
            projectId: f32,
            primaryColor: vec3<f32>,
            secondaryColor: vec3<f32>,
          };

          @group(0) @binding(0) var<uniform> uniforms: Uniforms;

          struct VertexOutput {
            @builtin(position) position: vec4<f32>,
            @location(0) uv: vec2<f32>,
          };

          @vertex
          fn vs_main(@builtin(vertex_index) vertexIndex: u32) -> VertexOutput {
            var pos = array<vec2<f32>, 4>(
              vec2<f32>(-1.0, -1.0),
              vec2<f32>( 1.0, -1.0),
              vec2<f32>(-1.0,  1.0),
              vec2<f32>( 1.0,  1.0)
            );
            var uvs = array<vec2<f32>, 4>(
              vec2<f32>(0.0, 1.0),
              vec2<f32>(1.0, 1.0),
              vec2<f32>(0.0, 0.0),
              vec2<f32>(1.0, 0.0)
            );

            var output: VertexOutput;
            output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
            output.uv = uvs[vertexIndex];
            return output;
          }

          @fragment
          fn fs_main(input: VertexOutput) -> @location(0) vec4<f32> {
            let uv = input.uv;
            let t = uniforms.time * 0.4;
            
            // Kinetic fluid wave equation
            let wave1 = sin(uv.x * 3.5 + t) * cos(uv.y * 3.0 + t * 0.7);
            let wave2 = sin(uv.x * 2.0 - t * 0.5) * 0.5;
            let combined = (wave1 + wave2) * 0.5;

            // Center glow focal point
            let centerDist = distance(uv, vec2<f32>(0.7, 0.3));
            let glow = max(0.0, 1.0 - centerDist * 1.8);

            // Interpolate theme colors
            let color = mix(uniforms.primaryColor, uniforms.secondaryColor, clamp(uv.y + combined * 0.3, 0.0, 1.0));
            let finalAlpha = clamp((glow * 0.14) + (abs(combined) * 0.08), 0.0, 0.22);

            return vec4<f32>(color * finalAlpha, finalAlpha);
          }
        `;

        const shaderModule = device.createShaderModule({ code: shaderCode });

        const pipeline = device.createRenderPipeline({
          layout: 'auto',
          vertex: {
            module: shaderModule,
            entryPoint: 'vs_main',
          },
          fragment: {
            module: shaderModule,
            entryPoint: 'fs_main',
            targets: [
              {
                format: presentationFormat,
                blend: {
                  color: {
                    srcFactor: 'src-alpha',
                    dstFactor: 'one-minus-src-alpha',
                    operation: 'add',
                  },
                  alpha: {
                    srcFactor: 'one',
                    dstFactor: 'one-minus-src-alpha',
                    operation: 'add',
                  },
                },
              },
            ],
          },
          primitive: {
            topology: 'triangle-strip',
          },
        });

        // 12 floats: [resX, resY, time, projId, r1, g1, b1, pad, r2, g2, b2, pad]
        const uniformBufferSize = 48;
        const gpuBufferUsage = (window as any).GPUBufferUsage || { UNIFORM: 0x0040, COPY_DST: 0x0008 };
        const uniformBuffer = device.createBuffer({
          size: uniformBufferSize,
          usage: gpuBufferUsage.UNIFORM | gpuBufferUsage.COPY_DST,
        });

        const bindGroup = device.createBindGroup({
          layout: pipeline.getBindGroupLayout(0),
          entries: [
            {
              binding: 0,
              resource: { buffer: uniformBuffer },
            },
          ],
        });

        let startTime = performance.now();

        const renderWebGPU = () => {
          if (isDestroyed || document.hidden) {
            animFrameId = requestAnimationFrame(renderWebGPU);
            return;
          }

          const now = performance.now();
          const elapsed = (now - startTime) / 1000;

          // Smooth lerp colors
          for (let i = 0; i < 3; i++) {
            currentPrimary[i] += (targetPrimary[i] - currentPrimary[i]) * 0.04;
            currentSecondary[i] += (targetSecondary[i] - currentSecondary[i]) * 0.04;
          }

          const uniformData = new Float32Array([
            canvas.width, canvas.height,
            elapsed, 1.0,
            currentPrimary[0], currentPrimary[1], currentPrimary[2], 0.0,
            currentSecondary[0], currentSecondary[1], currentSecondary[2], 0.0,
          ]);

          device.queue.writeBuffer(uniformBuffer, 0, uniformData.buffer);

          const commandEncoder = device.createCommandEncoder();
          const textureView = context.getCurrentTexture().createView();

          const renderPass = commandEncoder.beginRenderPass({
            colorAttachments: [
              {
                view: textureView,
                clearValue: { r: 0, g: 0, b: 0, a: 0 },
                loadOp: 'clear',
                storeOp: 'store',
              },
            ],
          });

          renderPass.setPipeline(pipeline);
          renderPass.setBindGroup(0, bindGroup);
          renderPass.draw(4);
          renderPass.end();

          device.queue.submit([commandEncoder.finish()]);

          animFrameId = requestAnimationFrame(renderWebGPU);
        };

        animFrameId = requestAnimationFrame(renderWebGPU);
        setRenderMode('WebGPU');

        cleanupWebGPU = () => {
          device.destroy();
        };

        return true;
      } catch (err) {
        console.warn('WebGPU initialization skipped, falling back to GPU Canvas 2D:', err);
        return false;
      }
    };

    // Hardware-accelerated Canvas 2D Fallback (Ultra-fast, zero reflows)
    const runCanvas2D = () => {
      const ctx = canvas.getContext('2d', { alpha: true });
      if (!ctx) return;

      setRenderMode('Hardware-Canvas');
      let startTime = performance.now();

      const render2D = () => {
        if (isDestroyed || document.hidden) {
          animFrameId = requestAnimationFrame(render2D);
          return;
        }

        const width = canvas.width;
        const height = canvas.height;
        const now = performance.now();
        const elapsed = (now - startTime) / 1000;

        // Lerp colors towards current active project
        for (let i = 0; i < 3; i++) {
          currentPrimary[i] += (targetPrimary[i] - currentPrimary[i]) * 0.05;
          currentSecondary[i] += (targetSecondary[i] - currentSecondary[i]) * 0.05;
        }

        ctx.clearRect(0, 0, width, height);

        // Ambient fluid gradient orb rendered directly on GPU
        const cx = width * (0.65 + Math.sin(elapsed * 0.25) * 0.1);
        const cy = height * (0.35 + Math.cos(elapsed * 0.3) * 0.08);
        const radius = Math.min(width, height) * 0.55;

        const r1 = Math.round(currentPrimary[0] * 255);
        const g1 = Math.round(currentPrimary[1] * 255);
        const b1 = Math.round(currentPrimary[2] * 255);

        const r2 = Math.round(currentSecondary[0] * 255);
        const g2 = Math.round(currentSecondary[1] * 255);
        const b2 = Math.round(currentSecondary[2] * 255);

        const gradient = ctx.createRadialGradient(cx, cy, 20, cx, cy, radius);
        gradient.addColorStop(0, `rgba(${r1}, ${g1}, ${b1}, 0.16)`);
        gradient.addColorStop(0.5, `rgba(${r2}, ${g2}, ${b2}, 0.07)`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        // Draw micro-particles smoothly without layout engine overhead
        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = 1;
          if (p.x > 1) p.x = 0;
          if (p.y < 0) p.y = 1;
          if (p.y > 1) p.y = 0;

          const px = p.x * width;
          const py = p.y * height;

          ctx.beginPath();
          ctx.arc(px, py, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r1}, ${g1}, ${b1}, ${p.alpha * 0.25})`;
          ctx.fill();
        });

        animFrameId = requestAnimationFrame(render2D);
      };

      animFrameId = requestAnimationFrame(render2D);
    };

    // Size canvas accurately with DPR clamped to 1.5 to prevent memory waste
    const resize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Initialize WebGPU, or fall back to 2D canvas
    initWebGPU()
      .then((supported) => {
        if (!supported && !isDestroyed) {
          runCanvas2D();
        }
      })
      .catch(() => {
        if (!isDestroyed) {
          runCanvas2D();
        }
      });

    return () => {
      isDestroyed = true;
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', resize);
      if (cleanupWebGPU) cleanupWebGPU();
    };
  }, [project.id]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
        style={{ willChange: 'transform' }}
      />
    </div>
  );
};
