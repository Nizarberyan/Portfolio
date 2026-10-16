import React, { useEffect, memo } from 'react';
import type { ProjectTheme } from '../../data/mobileThemeConfig';
import { mobileProjects } from '../../data/mobileThemeConfig';
import { Music, Navigation, Activity, Calendar, BarChart2 } from 'lucide-react';

interface Props {
  activeProject: ProjectTheme;
  onSelectProject: (project: ProjectTheme) => void;
}

export const AppDock: React.FC<Props> = memo(({ activeProject, onSelectProject }) => {
  const isLight = activeProject.themeStyle.mode === 'light';

  // Keyboard navigation 1-4
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['1', '2', '3', '4'].includes(e.key)) {
        const index = parseInt(e.key) - 1;
        if (mobileProjects[index]) {
          onSelectProject(mobileProjects[index]);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onSelectProject]);

  const getIcon = (name: ProjectTheme['iconName']) => {
    switch (name) {
      case 'BarChart2': return <BarChart2 className="w-5 h-5" />;
      case 'Music': return <Music className="w-5 h-5" />;
      case 'Navigation': return <Navigation className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'Calendar': return <Calendar className="w-5 h-5" />;
    }
  };

  return (
    <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${activeProject.themeStyle.themeClass}`}>
      <div 
        role="tablist"
        aria-label="Navigation des projets mobiles"
        className={`p-2 backdrop-blur-2xl border transition-all duration-500 flex items-center gap-1.5 sm:gap-3 ${activeProject.themeStyle.dockBg} ${activeProject.themeStyle.cardRadius}`}
      >
        {mobileProjects.map((p, idx) => {
          const isActive = p.id === activeProject.id;
          return (
            <button
              key={p.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`project-panel-${p.id}`}
              aria-label={`Démonstration ${p.name} - ${p.category}`}
              tabIndex={0}
              onClick={() => onSelectProject(p)}
              className={`group relative flex items-center gap-2.5 px-3.5 py-2.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 ${
                isLight ? 'focus-visible:ring-[#de854f]' : 'focus-visible:ring-white/80'
              } ${activeProject.themeStyle.cardRadius} ${
                isActive
                  ? isLight
                    ? 'bg-[#faefe8] text-[#2a1b14] shadow-md border border-[#de854f]/40 scale-105'
                    : 'bg-white/15 text-white shadow-lg shadow-black/40 border border-white/20 scale-105'
                  : isLight
                    ? 'text-[#846f63] hover:text-[#2a1b14] hover:bg-black/5 border border-transparent'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              {/* App Icon */}
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                  isActive
                    ? 'shadow-sm'
                    : 'opacity-70 group-hover:opacity-100'
                }`}
                style={{
                  backgroundColor: isActive ? `${p.themeStyle.accentHex}2a` : 'transparent',
                  color: isActive ? p.themeStyle.accentHex : undefined,
                }}
              >
                {getIcon(p.iconName)}
              </div>

              {/* Name & Hotkey */}
              <div className="text-left hidden md:block">
                <div className="flex items-center gap-1.5">
                  <span className={`text-xs font-bold leading-none font-display ${isActive ? (isLight ? 'text-[#2a1b14]' : 'text-white') : ''}`}>
                    {p.name}
                  </span>
                  <span className={`text-[10px] font-mono ${isLight ? 'text-[#9c897f]' : 'text-zinc-500'}`}>
                    [{idx + 1}]
                  </span>
                </div>
                <span className={`text-[10px] font-mono block mt-0.5 truncate max-w-[120px] ${isLight ? 'text-[#7e695d]' : 'text-zinc-400'}`}>
                  {p.category.split('&')[0]}
                </span>
              </div>

              {/* Active Indicator Dot */}
              {isActive && (
                <div
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: p.themeStyle.accentHex }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
});
