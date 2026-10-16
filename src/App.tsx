import { useState, useEffect } from 'react';
import type { ProjectTheme } from './data/mobileThemeConfig';
import { mobileProjects } from './data/mobileThemeConfig';
import { ProjectThemeBackdrop } from './components/mobile/ProjectThemeBackdrop';
import { MobileHeader } from './components/mobile/MobileHeader';
import { ProjectDetailsPanel } from './components/mobile/ProjectDetailsPanel';
import { PhoneFrame } from './components/mobile/PhoneFrame';
import { ProjectArchitectureSection } from './components/mobile/ProjectArchitectureSection';
import { AppDock } from './components/mobile/AppDock';
import { MobileTechArsenal } from './components/mobile/MobileTechArsenal';
import { personalInfo } from './data/portfolioData';

export function App() {
  const [activeProject, setActiveProject] = useState<ProjectTheme>(mobileProjects[0]);

  // Dynamically shift body background and dark/light classes based on active project
  useEffect(() => {
    if (activeProject.themeStyle.mode === 'light') {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#fdf8f4';
    } else {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#050408';
    }
  }, [activeProject]);

  return (
    <div className={`min-h-screen selection:bg-white/20 relative transition-colors duration-700 ${activeProject.themeStyle.themeClass}`}>
      <div className={`min-h-screen bg-gradient-to-b ${activeProject.themeStyle.bgBase} transition-all duration-700 relative`}>
        {/* Dynamic Theme Backdrop (Equalizer, Radar, EKG, Luxe Terracotta) */}
        <ProjectThemeBackdrop currentProject={activeProject} />

        {/* Sticky Header */}
        <MobileHeader project={activeProject} />

        {/* Main Showcase Container */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-44 space-y-20">
          {/* Top Project Split Grid: Details + Interactive Phone Mockup */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16">
            {/* Left Column: Telemetry, Story, Actions, Metrics */}
            <div className="w-full lg:w-7/12">
              <ProjectDetailsPanel project={activeProject} />
            </div>

            {/* Right Column: Smartphone Chassis with Dynamic Island */}
            <div className="w-full lg:w-5/12 flex justify-center sticky top-24">
              <PhoneFrame project={activeProject} />
            </div>
          </div>

          {/* Technical Architecture & Systems Design Full-Width Section */}
          <ProjectArchitectureSection project={activeProject} />

          {/* Mobile Engineering Stack & Experience */}
          <MobileTechArsenal project={activeProject} />

          {/* Footer */}
          <footer className={`pt-12 border-t text-center text-xs font-mono space-y-2 transition-colors duration-500 ${
            activeProject.themeStyle.mode === 'light' ? 'border-[#ead8cb] text-[#9c897f]' : 'border-white/10 text-zinc-500'
          }`}>
            <p>Conçu pour l’impact en ingénierie mobile • React Native, Expo, Reanimated, Skia & Flutter</p>
            <p>© {new Date().getFullYear()} {personalInfo.name} • Tanger, Maroc</p>
          </footer>
        </main>

        {/* Floating App Switcher Dock */}
        <AppDock
          activeProject={activeProject}
          onSelectProject={setActiveProject}
        />
      </div>
    </div>
  );
}

export default App;
