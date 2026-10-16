import React, { memo } from 'react';
import { personalInfo, careerExperience, educationList } from '../../data/portfolioData';
import type { ProjectTheme } from '../../data/mobileThemeConfig';
import { Smartphone, Zap, Database, Layers, GraduationCap, Briefcase } from 'lucide-react';

interface Props {
  project: ProjectTheme;
}

export const MobileTechArsenal: React.FC<Props> = memo(({ project }) => {
  const isLight = project.themeStyle.mode === 'light';

  const coreCompetencies = [
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: 'Cross-Platform Frameworks',
      description: 'Production React Native (0.83+) with Expo Router v55 and Google Flutter (Dart) for high-performance iOS and Android deployments.',
      tags: ['React Native', 'Expo Router', 'Flutter', 'Dart', 'TypeScript'],
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Native Gesture & Canvas Shaders',
      description: 'Bypassing bridge bottlenecks using React Native Reanimated worklets and Shopify Skia 2D canvas shaders for gesture-driven UI.',
      tags: ['Reanimated 4', 'Shopify Skia', 'Gesture Handler', 'Victory Native'],
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: 'Offline-First & Local Storage',
      description: 'Architecting local-first data layers with embedded SQLite and Drizzle ORM migrations to provide instant responsiveness in spotty network zones.',
      tags: ['SQLite', 'Drizzle ORM', 'Local-First', 'Conflict-Free Sync'],
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: 'Full-Stack Mobile Backends',
      description: 'Building companion microservices with Go (Fiber) and NestJS, integrating WebSockets, TimescaleDB time-series, and Subsonic audio streams.',
      tags: ['Go (Fiber)', 'NestJS', 'TimescaleDB', 'PostGIS', 'WebSockets'],
    },
  ];

  return (
    <section className={`mt-20 pt-16 border-t space-y-12 transition-colors duration-500 ${isLight ? 'border-[#ead8cb]' : 'border-white/10'} ${project.themeStyle.themeClass}`}>
      {/* Section Heading */}
      <div className="max-w-3xl space-y-3">
        <h2 className={`text-3xl sm:text-4xl font-black tracking-tight font-display ${project.themeStyle.textMain}`}>
          {project.id === 'resaly' ? 'Architecture Mobile & Solutions Clientes' : 'Crafting High-Fidelity Mobile Experiences'}
        </h2>
        <p className={`text-sm sm:text-base leading-relaxed ${project.themeStyle.textMuted}`}>
          Spécialisé dans les applications mobiles multi-plateformes tactiles où la performance native, la résilience hors-ligne et la fluidité visuelle sont prioritaires.
        </p>
      </div>

      {/* Competencies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {coreCompetencies.map((comp, idx) => (
          <div 
            key={idx}
            className={`p-6 border space-y-3 transition-all ${project.themeStyle.cardBg} ${project.themeStyle.cardBorder} ${project.themeStyle.cardRadius}`}
          >
            <div 
              className={`w-10 h-10 flex items-center justify-center shadow-sm ${isLight ? 'rounded-2xl' : 'rounded-xl'}`}
              style={{
                backgroundColor: `${project.themeStyle.accentHex}1a`,
                color: project.themeStyle.accentHex,
              }}
            >
              {comp.icon}
            </div>
            <h3 className={`text-lg font-bold font-display ${project.themeStyle.textMain}`}>{comp.title}</h3>
            <p className={`text-xs sm:text-sm leading-relaxed ${project.themeStyle.textMuted}`}>{comp.description}</p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {comp.tags.map((t, i) => (
                <span 
                  key={i} 
                  className={`px-2.5 py-1 text-[11px] font-mono border rounded-md ${
                    isLight 
                      ? 'bg-black/[0.03] border-[#ead8cb] text-[#68554b]' 
                      : 'bg-white/5 border-white/10 text-zinc-300'
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Experience & Education Brief */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {/* Career Experience */}
        <div className={`p-6 border space-y-4 ${project.themeStyle.cardBg} ${project.themeStyle.cardBorder} ${project.themeStyle.cardRadius}`}>
          <div className={`flex items-center gap-2 text-xs font-mono uppercase tracking-wider ${project.themeStyle.textSubtle}`}>
            <Briefcase className="w-4 h-4 opacity-70" /> Expérience Professionnelle
          </div>
          {careerExperience.map((exp, i) => (
            <div key={i} className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className={`text-base font-bold font-display ${project.themeStyle.textMain}`}>{exp.role}</h4>
                <span className={`text-xs font-mono ${project.themeStyle.textSubtle}`}>{exp.period}</span>
              </div>
              <p className="text-xs font-semibold" style={{ color: project.themeStyle.accentHex }}>
                {exp.company} • {exp.location}
              </p>
              <ul className={`space-y-1.5 text-xs list-disc list-inside ${project.themeStyle.textMuted}`}>
                {exp.achievements.map((ach, j) => (
                  <li key={j}>{ach}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className={`p-6 border space-y-4 ${project.themeStyle.cardBg} ${project.themeStyle.cardBorder} ${project.themeStyle.cardRadius}`}>
          <div className={`flex items-center gap-2 text-xs font-mono uppercase tracking-wider ${project.themeStyle.textSubtle}`}>
            <GraduationCap className="w-4 h-4 opacity-70" /> Formation d’Ingénierie
          </div>
          {educationList.map((edu, i) => (
            <div key={i} className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className={`text-base font-bold font-display ${project.themeStyle.textMain}`}>{edu.degree}</h4>
                <span className={`text-xs font-mono ${project.themeStyle.textSubtle}`}>{edu.period}</span>
              </div>
              <p className="text-xs font-semibold" style={{ color: project.themeStyle.accentHex }}>
                {edu.institution} • {edu.location}
              </p>
              <ul className={`space-y-1.5 text-xs list-disc list-inside ${project.themeStyle.textMuted}`}>
                {edu.focusAreas.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
