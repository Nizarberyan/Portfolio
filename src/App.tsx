import { useState, useEffect } from 'react';
import { WikiHeader } from './components/WikiHeader';
import { TableOfContents } from './components/TableOfContents';
import { ArticleBody } from './components/ArticleBody';
import { WikiFooter } from './components/WikiFooter';
import { HistoryModal } from './components/HistoryModal';
import { X } from 'lucide-react';

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

  const handleToggleWidescreen = () => {
    setIsWidescreen(prev => {
      const next = !prev;
      localStorage.setItem('wiki_widescreen', String(next));
      return next;
    });
  };

  return (
    <div className={`min-h-screen skin-vector-2022 ${isWidescreen ? 'widescreen-enabled' : ''}`}>
      {/* Wikipedia Vector 2022 Sticky Header */}
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

      {/* Wikipedia Vector 2022 Page Container */}
      <div className="mw-page-container">
        <div className="mw-page-container-inner">
          {/* Column Start: Sticky Pinned Sidebar TOC */}
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

      {/* Mobile Drawer */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
          <div className="fixed left-0 top-0 bottom-0 w-72 bg-white dark:bg-[#202122] p-4 shadow-xl z-50 overflow-y-auto">
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-2 mb-3">
              <span className="font-bold text-sm">Contents</span>
              <button
                onClick={() => setIsMobileSidebarOpen(false)}
                className="p-1 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <TableOfContents variant="inline" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
