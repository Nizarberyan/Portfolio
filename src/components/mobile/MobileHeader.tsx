import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import type { ProjectTheme } from '../../data/mobileThemeConfig';
import { Github, Linkedin, Mail, FileDown, Smartphone } from 'lucide-react';

interface Props {
  project: ProjectTheme;
}

export const MobileHeader: React.FC<Props> = ({ project }) => {
  const isLight = project.themeStyle.mode === 'light';

  return (
    <header className={`w-full border-b backdrop-blur-xl sticky top-0 z-40 transition-colors duration-500 ${project.themeStyle.headerBg} ${project.themeStyle.themeClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Identity */}
        <div className="flex items-center gap-3">
          <div 
            className={`w-9 h-9 flex items-center justify-center font-black text-sm shadow-md transition-all ${
              isLight ? 'rounded-full text-white' : 'rounded-xl text-black'
            }`}
            style={{ backgroundColor: project.themeStyle.accentHex }}
          >
            NB
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-bold tracking-tight font-display ${project.themeStyle.textMain}`}>
                {personalInfo.name}
              </span>
              <span className={`hidden sm:inline-block text-[11px] font-mono font-medium ${
                isLight ? 'text-[#8c776b]' : 'text-zinc-400'
              }`}>
                • Mobile & Full-Stack Architect
              </span>
            </div>
            <p className={`text-[11px] flex items-center gap-1.5 ${project.themeStyle.textMuted}`}>
              <Smartphone className="w-3 h-3 opacity-60" /> React Native & Flutter Specialist
            </p>
          </div>
        </div>

        {/* Socials & Resume CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 transition-all ${project.themeStyle.cardRadius} ${
              isLight 
                ? 'text-[#68554b] hover:text-[#2a1b14] hover:bg-black/5' 
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 transition-all ${project.themeStyle.cardRadius} ${
              isLight 
                ? 'text-[#68554b] hover:text-[#2a1b14] hover:bg-black/5' 
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className={`p-2 transition-all ${project.themeStyle.cardRadius} ${
              isLight 
                ? 'text-[#68554b] hover:text-[#2a1b14] hover:bg-black/5' 
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
            title="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold border transition-all ${
              isLight ? 'rounded-full' : 'rounded-xl'
            }`}
            style={{
              borderColor: `${project.themeStyle.accentHex}66`,
              color: project.themeStyle.accentHex,
              backgroundColor: `${project.themeStyle.accentHex}14`,
            }}
          >
            <FileDown className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">CV / Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
};
