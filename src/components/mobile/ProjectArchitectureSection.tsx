import React, { memo } from 'react';
import type { ProjectTheme } from '../../data/mobileThemeConfig';
import { Layers } from 'lucide-react';

interface Props {
  project: ProjectTheme;
}

export const ProjectArchitectureSection: React.FC<Props> = memo(({ project }) => {
  const isLight = project.themeStyle.mode === 'light';

  return (
    <section className={`pt-12 border-t space-y-6 transition-colors duration-500 ${
      isLight ? 'border-[#ead8cb]' : 'border-white/10'
    } ${project.themeStyle.themeClass}`}>
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div 
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-semibold"
            style={{ color: project.themeStyle.accentHex }}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Systems & Mobile Engineering</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl font-black tracking-tight font-display mt-1 ${project.themeStyle.textMain}`}>
            Technical Architecture & Design Decisions
          </h2>
        </div>
        <span className={`text-xs font-mono ${isLight ? 'text-[#8c776b]' : 'text-zinc-500'}`}>
          Production Grade • High Reliability
        </span>
      </div>

      {/* 3-Column Architecture Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {project.architectureHighlights.map((arch, i) => (
          <div 
            key={i}
            className={`p-6 border space-y-3 transition-all ${project.themeStyle.cardBg} ${project.themeStyle.cardBorder} ${project.themeStyle.cardRadius}`}
          >
            <div className="flex items-center justify-between">
              <span 
                className="text-[11px] font-mono px-2.5 py-1 rounded font-bold"
                style={{
                  backgroundColor: `${project.themeStyle.accentHex}18`,
                  color: project.themeStyle.accentHex,
                }}
              >
                {arch.badge}
              </span>
              <span className={`text-[10px] font-mono ${isLight ? 'text-[#8c776b]' : 'text-zinc-500'}`}>
                Module 0{i + 1}
              </span>
            </div>

            <h3 className={`text-base font-bold leading-snug font-display ${project.themeStyle.textMain}`}>
              {arch.title}
            </h3>

            <p className={`text-xs sm:text-sm leading-relaxed ${project.themeStyle.textMuted}`}>
              {arch.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
});

export default ProjectArchitectureSection;
