import React, { memo } from 'react';
import type { ProjectTheme } from '../../data/mobileThemeConfig';
import { Github, ExternalLink, Cpu, ArrowUpRight, Play } from 'lucide-react';

interface Props {
  project: ProjectTheme;
}

export const ProjectDetailsPanel: React.FC<Props> = memo(({ project }) => {
  const isLight = project.themeStyle.mode === 'light';

  // Contrast guarantees: light backgrounds on dark buttons need solid black text; dark buttons need white text.
  const isBlackTextTheme = project.id === 'ridemate' || project.id === 'healthsphere';

  return (
    <div className={`flex-1 space-y-7 animate-fadeIn ${project.themeStyle.themeClass}`}>
      {/* Editorial Category & Year Kicker */}
      <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono uppercase tracking-widest font-semibold">
        <span style={{ color: project.themeStyle.accentHex }}>{project.category}</span>
        <span className={isLight ? 'text-[#c0ad9f]' : 'text-zinc-600'}>/</span>
        <span className={isLight ? 'text-[#8c776b]' : 'text-zinc-400'}>{project.year}</span>
        <span className={isLight ? 'text-[#c0ad9f]' : 'text-zinc-600'}>/</span>
        <span className={isLight ? 'text-[#8c776b]' : 'text-zinc-400'}>{project.badge}</span>
      </div>

      {/* Title & Tagline & Story */}
      <div className="space-y-3">
        <h1 className={`text-4xl sm:text-5xl font-black tracking-tight font-display ${project.themeStyle.textMain}`}>
          {project.name}
        </h1>

        <p className={`text-xl sm:text-2xl font-semibold leading-snug ${project.themeStyle.textMuted}`}>
          {project.tagline}
        </p>

        <p className={`text-sm sm:text-base leading-relaxed max-w-2xl ${project.themeStyle.textMuted}`}>
          {project.description}
        </p>
      </div>

      {/* Primary Call to Actions (GitHub Source & Demos) - High Contrast & Prominent */}
      <div className="flex flex-wrap items-center gap-3 pt-1">
        {project.frontendGithubUrl && project.backendGithubUrl ? (
          <>
            <a
              href={project.frontendGithubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-3 text-xs rounded-xl transition-all shadow-md active:scale-95 ${
                isBlackTextTheme
                  ? project.id === 'ridemate'
                    ? 'bg-[#c2f019] hover:bg-[#b0dc12] text-black font-extrabold shadow-[#c2f019]/25'
                    : 'bg-[#FF99CC] hover:bg-[#ff80be] text-black font-extrabold shadow-[#FF99CC]/25'
                  : project.id === 'resaly'
                    ? 'bg-[#c65318] hover:bg-[#ad4510] text-white font-bold shadow-[#c65318]/25'
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white font-bold shadow-indigo-950/40'
              }`}
            >
              <Github className={`w-4 h-4 ${isBlackTextTheme ? 'text-black' : 'text-white'}`} />
              <span className={isBlackTextTheme ? 'text-black font-extrabold' : 'text-white font-bold'}>
                Frontend ({project.id === 'zephyr' ? 'Zephyr-mobile' : 'RideMate-mobile'})
              </span>
              <ArrowUpRight className={`w-3.5 h-3.5 ${isBlackTextTheme ? 'text-black' : 'text-white'}`} />
            </a>

            <a
              href={project.backendGithubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-3 text-xs rounded-xl transition-all border active:scale-95 ${
                isLight
                  ? 'bg-white hover:bg-[#faefe8] text-[#8c370b] border-2 border-[#de854f]/35 font-bold shadow-sm'
                  : 'bg-white/10 hover:bg-white/20 text-white border-white/20 font-bold'
              }`}
            >
              <Github className="w-4 h-4 text-current" />
              <span>Backend ({project.id === 'zephyr' ? 'Zephyr Go' : 'RideMateV2'})</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-current opacity-70" />
            </a>
          </>
        ) : (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2.5 px-6 py-3.5 text-xs rounded-xl transition-all shadow-md active:scale-95 ${
              isBlackTextTheme
                ? project.id === 'ridemate'
                  ? 'bg-[#c2f019] hover:bg-[#b0dc12] text-black font-extrabold shadow-[#c2f019]/25'
                  : 'bg-[#FF99CC] hover:bg-[#ff80be] text-black font-extrabold shadow-[#FF99CC]/25'
                : project.id === 'resaly'
                  ? 'bg-[#c65318] hover:bg-[#ad4510] text-white font-bold shadow-[#c65318]/25'
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white font-bold shadow-indigo-950/40'
            }`}
          >
            <Github className={`w-4 h-4 ${isBlackTextTheme ? 'text-black' : 'text-white'}`} />
            <span className={isBlackTextTheme ? 'text-black font-extrabold' : 'text-white font-bold'}>
              {project.id === 'resaly' ? 'Agence & Code IzyDesk' : 'View Source Code'}
            </span>
            <ArrowUpRight className={`w-3.5 h-3.5 ${isBlackTextTheme ? 'text-black' : 'text-white'}`} />
          </a>
        )}

        {project.videoShareUrl && (
          <a
            href={project.videoShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-5 py-3 text-xs rounded-xl transition-all border active:scale-95 ${
              isLight
                ? 'bg-white hover:bg-[#faefe8] text-[#8c370b] border-2 border-[#de854f]/35 font-bold shadow-sm'
                : 'bg-white/10 hover:bg-white/20 text-white border-white/20 font-bold'
            }`}
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Watch Demo Video</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-current opacity-70" />
          </a>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-5 py-3 text-xs rounded-xl transition-all border active:scale-95 ${
              isLight
                ? 'bg-white hover:bg-[#faefe8] text-[#8c370b] border-2 border-[#de854f]/35 font-bold shadow-sm'
                : 'bg-white/10 hover:bg-white/20 text-white border-white/20 font-bold'
            }`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Plateforme en Ligne</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-current opacity-70" />
          </a>
        )}
      </div>

      {/* Key Telemetry Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
        {project.metrics.map((m, idx) => (
          <div 
            key={idx}
            className={`p-4 border transition-all ${project.themeStyle.cardBg} ${project.themeStyle.cardBorder} ${project.themeStyle.cardRadius}`}
          >
            <p className="text-2xl sm:text-3xl font-black font-display tracking-tight" style={{ color: project.themeStyle.accentHex }}>
              {m.value}
            </p>
            <p className={`text-xs font-bold mt-1 ${project.themeStyle.textMain}`}>
              {m.label}
            </p>
            <p className={`text-[11px] mt-0.5 leading-tight ${project.themeStyle.textSubtle}`}>
              {m.detail}
            </p>
          </div>
        ))}
      </div>

      {/* Tech Stack Specs */}
      <div className="space-y-2.5 pt-1">
        <h3 className={`text-xs font-mono uppercase tracking-wider flex items-center gap-2 ${project.themeStyle.textSubtle}`}>
          <Cpu className="w-3.5 h-3.5" /> Production Stack & Dependencies
        </h3>

        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech, idx) => (
            <div
              key={idx}
              className={`px-2.5 py-1 text-xs font-mono border transition-all rounded-md ${
                tech.highlight
                  ? isLight
                    ? 'bg-[#faeae1] border-[#de854f]/30 text-[#a44d1e] font-semibold'
                    : 'bg-white/10 border-white/20 text-white font-semibold'
                  : isLight
                    ? 'bg-white/60 border-[#ead8cb] text-[#68554b]'
                    : 'bg-white/[0.03] border-white/10 text-zinc-300'
              }`}
            >
              <span>{tech.name}</span>
              <span className="text-[10px] ml-1.5 opacity-60 font-sans">
                {tech.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default ProjectDetailsPanel;
