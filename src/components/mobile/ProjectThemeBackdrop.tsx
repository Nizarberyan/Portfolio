import React, { memo } from 'react';
import type { ProjectTheme } from '../../data/mobileThemeConfig';
import { GPUAtmosphereCanvas } from './GPUAtmosphereCanvas';

interface Props {
  currentProject: ProjectTheme;
}

export const ProjectThemeBackdrop: React.FC<Props> = memo(({ currentProject }) => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden transition-all duration-700 -z-10">
      {/* WebGPU / Hardware-accelerated Canvas Atmospheric Engine */}
      <GPUAtmosphereCanvas project={currentProject} />
      {/* Background radial gradient glow */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          background: currentProject.themeStyle.bgAccentGlow,
        }}
      />

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          opacity: currentProject.themeStyle.mode === 'light' ? 0.04 : 0.03,
          backgroundImage: currentProject.themeStyle.mode === 'light'
            ? `linear-gradient(to right, #2a1b14 1px, transparent 1px), linear-gradient(to bottom, #2a1b14 1px, transparent 1px)`
            : `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* ZEPHYR: Clean Soundboard Atmosphere */}
      {currentProject.id === 'zephyr' && (
        <div className="absolute inset-0 animate-fadeIn transition-all duration-1000">
          {/* Bottom Audio Visualizer Spectrum Bars (GPU Composited) */}
          <div className="absolute bottom-0 left-0 right-0 h-36 flex items-end justify-center gap-1.5 px-8 opacity-20">
            {[35, 65, 45, 80, 25, 60, 85, 40, 70, 35, 75, 55, 30, 60, 75, 45, 80, 40, 65, 50, 70, 25, 80, 50, 35, 60, 75, 40].map((h, i) => (
              <div
                key={i}
                className="w-1 rounded-t-full bg-zinc-500/80"
                style={{
                  height: `${h}%`,
                  transformOrigin: 'bottom',
                  willChange: 'transform',
                  animation: `equalizer ${1.4 + (i % 5) * 0.25}s ease-in-out infinite alternate`,
                  animationDelay: `${(i * 0.08)}s`,
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* RIDEMATE: Subtle Transit Axis */}
      {currentProject.id === 'ridemate' && (
        <div className="absolute inset-0 animate-fadeIn transition-all duration-1000">
          <div className="absolute bottom-10 left-10 font-mono text-[11px] text-emerald-400/30 tracking-wider hidden lg:block">
            <p>LAT: 35.7595° N • LNG: 5.8340° W</p>
            <p>CORRIDOR: TANGIER METROTRANSIT • ROUTE MATCHING</p>
          </div>
        </div>
      )}

      {/* HEALTHSPHERE: Minimal Biometrics */}
      {currentProject.id === 'healthsphere' && (
        <div className="absolute inset-0 animate-fadeIn transition-all duration-1000">
          <div className="absolute bottom-10 left-10 font-mono text-[11px] text-lime-400/30 tracking-wider hidden lg:block">
            <p>STORAGE: SQLITE EMBEDDED • MONOTONIC LOG</p>
            <p>SYNC ENGINE: DRIZZLE ORM • ZERO LATENCY</p>
          </div>
        </div>
      )}

      {/* RESALY PRO: Studio Lighting */}
      {currentProject.id === 'resaly' && (
        <div className="absolute inset-0 animate-fadeIn transition-all duration-1000">
          <div className="absolute bottom-10 left-10 font-mono text-[11px] text-[#de854f]/40 tracking-wider hidden lg:block">
            <p>SYSTEM: SALON ENTERPRISE B2B • FLUTTER 60 FPS</p>
            <p>SCHEDULING: OPTIMISTIC LOCKING • SYMFONY REST</p>
          </div>
        </div>
      )}
    </div>
  );
});
