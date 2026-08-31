import React, { useState, useRef } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Search, Sun, Moon, Menu, FileText, Settings, X, Mail } from 'lucide-react';

interface WikiHeaderProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  isWidescreen: boolean;
  onToggleWidescreen: () => void;
  fontSize: 'sm' | 'base' | 'lg';
  onChangeFontSize: (size: 'sm' | 'base' | 'lg') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onToggleSidebarMobile: () => void;
}

export const WikiHeader: React.FC<WikiHeaderProps> = ({
  darkMode,
  onToggleDarkMode,
  isWidescreen,
  onToggleWidescreen,
  fontSize,
  onChangeFontSize,
  searchQuery,
  onSearchChange,
  onToggleSidebarMobile,
}) => {
  const [isAppearanceOpen, setIsAppearanceOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const suggestions = [
    { label: 'TypeScript', type: 'Skill', sectionId: 'technical-skills' },
    { label: 'Go & TimescaleDB', type: 'Architecture', sectionId: 'project-zephyr' },
    { label: 'RideMate', type: 'Project', sectionId: 'project-ridemate' },
    { label: 'LMS API (NestJS)', type: 'Project', sectionId: 'project-lms-api' },
    { label: 'MoneyMind (Gemini AI)', type: 'Project', sectionId: 'project-moneymind' },
    { label: 'IzyDesk Experience', type: 'Career', sectionId: 'career-izydesk' },
    { label: 'YouCode Morocco (UM6P)', type: 'Education', sectionId: 'education' },
  ].filter(s => searchQuery ? s.label.toLowerCase().includes(searchQuery.toLowerCase()) : true);

  const handleSelectSuggestion = (sectionId: string, label: string) => {
    onSearchChange(label);
    setIsSearchFocused(false);
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="vector-header-container">
      <header className="vector-header mw-header">
        {/* Left Side: Menu + Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleSidebarMobile}
            className="xl:hidden p-1.5 text-[#54595d] dark:text-[#a2a9b1] hover:bg-[#eaecf0] dark:hover:bg-[#27292d] rounded cursor-pointer"
            aria-label="Main menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <a href="#" className="mw-logo">
            {/* Wikipedia Globe Icon SVG */}
            <svg className="mw-logo-icon" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="23" stroke="#3366cc" strokeWidth="2.5" fill="#f8f9fa"/>
              <text x="25" y="34" fontFamily="Georgia, serif" fontSize="26" fontWeight="bold" fill="#3366cc" textAnchor="middle">W</text>
            </svg>
            <span className="mw-logo-container">
              <span className="mw-logo-wordmark text-[#202122] dark:text-[#eaecf0]">WIKIPEDIA</span>
              <span className="mw-logo-tagline text-[#54595d] dark:text-[#a2a9b1] normal-case italic text-[10px]">Please don't sue me wikipedia</span>
            </span>
          </a>
        </div>

        {/* Center: Search Box */}
        <div className="flex-1 max-w-xl mx-4 hidden sm:block relative">
          <form className="cdx-search-form" onSubmit={(e) => e.preventDefault()}>
            <div className="cdx-search-box">
              <Search className="w-4 h-4 text-[#54595d] dark:text-[#a2a9b1] mr-2 shrink-0" />
              <input
                ref={searchInputRef}
                type="search"
                placeholder="Search Wikipedia"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                className="cdx-search-input"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 mr-1 cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>
            <button type="submit" className="cdx-search-button">Search</button>
          </form>

          {/* Autocomplete dropdown */}
          {isSearchFocused && (
            <>
              <div className="fixed inset-0 z-30" onClick={() => setIsSearchFocused(false)} />
              <div className="absolute left-0 right-0 top-full mt-1 bg-white dark:bg-[#202122] border border-[#a2a9b1] dark:border-[#54595d] rounded-xs shadow-lg z-40 max-h-72 overflow-y-auto text-xs divide-y divide-gray-100 dark:divide-gray-800">
                <div className="p-2 bg-[#f8f9fa] dark:bg-[#27292d] text-[#54595d] font-semibold text-[11px]">
                  Matching Sections & Articles
                </div>
                {suggestions.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectSuggestion(item.sectionId, item.label)}
                    className="w-full text-left p-2.5 hover:bg-[#eaecf0] dark:hover:bg-[#27292d] flex items-center justify-between text-[#202122] dark:text-[#eaecf0] cursor-pointer"
                  >
                    <span className="font-medium text-sm">{item.label}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-mono">
                      {item.type}
                    </span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Right Side: Appearance & Tools */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Appearance Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsAppearanceOpen(!isAppearanceOpen)}
              className="cdx-btn"
              title="Appearance settings"
            >
              <Settings className="w-4 h-4 text-[#54595d] dark:text-[#a2a9b1]" />
              <span className="hidden md:inline">Appearance</span>
            </button>

            {isAppearanceOpen && (
              <>
                <div className="fixed inset-0 z-30" onClick={() => setIsAppearanceOpen(false)} />
                <div className="absolute right-0 top-full mt-1 bg-white dark:bg-[#202122] border border-[#a2a9b1] dark:border-[#54595d] rounded-xs shadow-xl z-40 p-4 w-72 text-xs space-y-4">
                  <div className="font-bold text-sm border-b border-gray-200 dark:border-gray-700 pb-1.5 flex justify-between items-center">
                    <span>Appearance</span>
                    <button onClick={() => setIsAppearanceOpen(false)} className="text-gray-400 hover:text-gray-600">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Text Size */}
                  <div>
                    <label className="font-semibold block text-gray-600 dark:text-gray-400 mb-1.5">Text size</label>
                    <div className="grid grid-cols-3 gap-1">
                      <button
                        onClick={() => onChangeFontSize('sm')}
                        className={`py-1 px-2 border rounded-xs font-mono text-center cursor-pointer ${fontSize === 'sm' ? 'bg-[#3366cc] text-white border-[#3366cc]' : 'border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                      >
                        Small
                      </button>
                      <button
                        onClick={() => onChangeFontSize('base')}
                        className={`py-1 px-2 border rounded-xs font-mono text-center cursor-pointer ${fontSize === 'base' ? 'bg-[#3366cc] text-white border-[#3366cc]' : 'border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                      >
                        Standard
                      </button>
                      <button
                        onClick={() => onChangeFontSize('lg')}
                        className={`py-1 px-2 border rounded-xs font-mono text-center cursor-pointer ${fontSize === 'lg' ? 'bg-[#3366cc] text-white border-[#3366cc]' : 'border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                      >
                        Large
                      </button>
                    </div>
                  </div>

                  {/* Width */}
                  <div>
                    <label className="font-semibold block text-gray-600 dark:text-gray-400 mb-1.5">Content width</label>
                    <div className="grid grid-cols-2 gap-1">
                      <button
                        onClick={() => isWidescreen && onToggleWidescreen()}
                        className={`py-1 px-2 border rounded-xs font-mono text-center cursor-pointer ${!isWidescreen ? 'bg-[#3366cc] text-white border-[#3366cc]' : 'border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                      >
                        Standard
                      </button>
                      <button
                        onClick={() => !isWidescreen && onToggleWidescreen()}
                        className={`py-1 px-2 border rounded-xs font-mono text-center cursor-pointer ${isWidescreen ? 'bg-[#3366cc] text-white border-[#3366cc]' : 'border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                      >
                        Widescreen
                      </button>
                    </div>
                  </div>

                  {/* Color / Theme */}
                  <div>
                    <label className="font-semibold block text-gray-600 dark:text-gray-400 mb-1.5">Color (theme)</label>
                    <div className="grid grid-cols-2 gap-1">
                      <button
                        onClick={() => darkMode && onToggleDarkMode()}
                        className={`py-1 px-2 border rounded-xs font-mono text-center cursor-pointer flex items-center justify-center gap-1 ${!darkMode ? 'bg-[#3366cc] text-white border-[#3366cc]' : 'border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                      >
                        <Sun className="w-3.5 h-3.5" /> Light
                      </button>
                      <button
                        onClick={() => !darkMode && onToggleDarkMode()}
                        className={`py-1 px-2 border rounded-xs font-mono text-center cursor-pointer flex items-center justify-center gap-1 ${darkMode ? 'bg-[#3366cc] text-white border-[#3366cc]' : 'border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                      >
                        <Moon className="w-3.5 h-3.5" /> Dark
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Resume Link */}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cdx-btn hidden sm:inline-flex"
          >
            <FileText className="w-4 h-4 text-[#3366cc] dark:text-[#6ea8fe]" />
            <span>Resume</span>
          </a>

          {/* Direct Email Contact Link */}
          <a
            href={`mailto:${personalInfo.email}?subject=Contact%20from%20Portfolio`}
            className="cdx-btn cdx-btn--primary"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </a>
        </div>
      </header>
    </div>
  );
};
