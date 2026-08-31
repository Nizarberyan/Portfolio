import { useState, useEffect } from 'react';
import { WikiHeader } from './components/WikiHeader';
import { TableOfContents } from './components/TableOfContents';
import { ArticleBody } from './components/ArticleBody';
import { WikiFooter } from './components/WikiFooter';
import { HistoryModal } from './components/HistoryModal';
import { personalInfo } from './data/portfolioData';
import { X, List, FileText, Github, Linkedin, Mail, History } from 'lucide-react';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('wiki_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [isWidescreen, setIsWidescreen] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('wiki_widescreen');
      return saved === 'true';
    }
    return false;
  });

  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('wiki_font_size');
      if (saved === 'sm' || saved === 'base' || saved === 'lg') return saved;
    }
    return 'base';
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('wiki_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('wiki_theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.classList.remove('font-size-sm', 'font-size-base', 'font-size-lg');
    document.documentElement.classList.add(`font-size-${fontSize}`);
    localStorage.setItem('wiki_font_size', fontSize);
  }, [fontSize]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleWidescreen = () => {
    setIsWidescreen(prev => {
      const next = !prev;
      localStorage.setItem('wiki_widescreen', String(next));
      return next;
    });
  };

  return (
    <div className={`min-h-screen skin-vector-2022 ${isWidescreen ? 'widescreen-enabled' : ''}`}>
      {/* Wikipedia Sticky Header */}
      <WikiHeader
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        isWidescreen={isWidescreen}
        onToggleWidescreen={handleToggleWidescreen}
        fontSize={fontSize}
        onChangeFontSize={setFontSize}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onToggleSidebarMobile={() => setIsMobileSidebarOpen(true)}
      />

      {/* Wikipedia Page Container */}
      <div className="mw-page-container">
        <div className="mw-page-container-inner">
          {/* Column Start: Sticky Pinned Sidebar TOC (Desktop) */}
          <div className="vector-column-start">
            <TableOfContents variant="sidebar" />
          </div>

          {/* Main Content Area */}
          <div className="mw-content-container">
            <ArticleBody
              searchQuery={searchQuery}
              onOpenHistory={() => setIsHistoryOpen(true)}
            />
          </div>
        </div>
      </div>

      {/* Wikipedia Footer */}
      <WikiFooter />

      {/* Revision History Modal */}
      <HistoryModal
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
      />

      {/* Floating Mobile TOC Quick-Jump Button */}
      {showScrollTop && (
        <button
          onClick={() => setIsMobileSidebarOpen(true)}
          className="xl:hidden fixed bottom-5 right-5 z-40 px-3.5 py-2 bg-[#3366cc] dark:bg-[#6ea8fe] text-white dark:text-gray-900 font-semibold text-xs rounded-full shadow-lg flex items-center gap-1.5 cursor-pointer hover:opacity-90 transition active:scale-95"
          aria-label="Table of contents"
        >
          <List className="w-4 h-4" />
          <span>Contents</span>
        </button>
      )}

      {/* Mobile Drawer (Minerva style sidebar) */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
          <div className="fixed left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-[#202122] shadow-2xl z-50 flex flex-col overflow-hidden">
            {/* Drawer Header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between bg-[#f8f9fa] dark:bg-[#27292d]">
              <div className="flex items-center gap-2">
                <svg className="w-7 h-7 shrink-0" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="25" cy="25" r="23" stroke="#3366cc" strokeWidth="2.5" fill="#ffffff"/>
                  <text x="25" y="34" fontFamily="Georgia, serif" fontSize="26" fontWeight="bold" fill="#3366cc" textAnchor="middle">W</text>
                </svg>
                <span className="font-bold text-sm text-[#202122] dark:text-[#eaecf0]">Wikipedia Menu</span>
              </div>
              <button
                onClick={() => setIsMobileSidebarOpen(false)}
                className="p-1 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Links */}
            <div className="p-3 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-[#202122] space-y-1 text-xs">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-[#202122] dark:text-[#eaecf0]"
              >
                <FileText className="w-4 h-4 text-[#3366cc] dark:text-[#6ea8fe]" />
                <span className="font-medium">Download Resume (PDF)</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-[#202122] dark:text-[#eaecf0]"
              >
                <Github className="w-4 h-4 text-[#3366cc] dark:text-[#6ea8fe]" />
                <span className="font-medium">GitHub Repository</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-[#202122] dark:text-[#eaecf0]"
              >
                <Linkedin className="w-4 h-4 text-[#3366cc] dark:text-[#6ea8fe]" />
                <span className="font-medium">LinkedIn Profile</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}?subject=Contact%20from%20Portfolio`}
                className="flex items-center gap-2.5 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-[#202122] dark:text-[#eaecf0]"
              >
                <Mail className="w-4 h-4 text-[#3366cc] dark:text-[#6ea8fe]" />
                <span className="font-medium">Email: {personalInfo.email}</span>
              </a>
              <button
                onClick={() => {
                  setIsMobileSidebarOpen(false);
                  setIsHistoryOpen(true);
                }}
                className="w-full flex items-center gap-2.5 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-[#202122] dark:text-[#eaecf0] cursor-pointer text-left"
              >
                <History className="w-4 h-4 text-[#3366cc] dark:text-[#6ea8fe]" />
                <span className="font-medium">Revision History</span>
              </button>
            </div>

            {/* Table of Contents in Drawer */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                Article Sections
              </div>
              <div onClick={() => setIsMobileSidebarOpen(false)}>
                <TableOfContents variant="inline" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
