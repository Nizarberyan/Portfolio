import React, { useState, useEffect } from 'react';
import { sectionsList } from '../data/portfolioData';

interface TableOfContentsProps {
  variant?: 'inline' | 'sidebar';
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ variant = 'inline' }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('introduction');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sectionsList.length - 1; i >= 0; i--) {
        const section = sectionsList[i];
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'introduction') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', ' ');
      return;
    }
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const topLevelSections = sectionsList.filter(s => s.level === 1 && s.id !== 'introduction');

  if (variant === 'sidebar') {
    return (
      <div className="vector-sticky-pinned-container">
        <nav id="mw-panel-toc" aria-label="Contents" className="vector-toc">
          <div className="vector-toc-header">
            <h2 className="text-sm font-bold m-0 text-[#202122] dark:text-[#eaecf0]">Contents</h2>
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="text-xs text-[#3366cc] dark:text-[#6ea8fe] hover:underline cursor-pointer bg-transparent border-none p-0"
            >
              {collapsed ? 'show' : 'hide'}
            </button>
          </div>

          {!collapsed && (
            <ul className="vector-toc-contents">
              <li className="vector-toc-item">
                <a
                  href="#"
                  onClick={(e) => handleLinkClick(e, 'introduction')}
                  className={`vector-toc-link ${activeSection === 'introduction' ? 'active' : ''}`}
                >
                  <div className="vector-toc-text">(Top)</div>
                </a>
              </li>

              {topLevelSections.map((sec, idx) => {
                const isActive = activeSection === sec.id;
                return (
                  <li key={sec.id} className="vector-toc-item">
                    <a
                      href={`#${sec.id}`}
                      onClick={(e) => handleLinkClick(e, sec.id)}
                      className={`vector-toc-link ${isActive ? 'active' : ''}`}
                    >
                      <span className="vector-toc-numb">{idx + 1}</span>
                      <span className="vector-toc-text">{sec.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </nav>
      </div>
    );
  }

  // Classic Inline TOC Box (Inside article)
  return (
    <div className="border border-[#a2a9b1] dark:border-[#54595d] bg-[#f8f9fa] dark:bg-[#202122] p-3 table my-4 rounded-xs text-xs">
      <div className="flex items-center justify-between gap-6 font-bold border-b border-[#c8ccd1] dark:border-[#3c4043] pb-1 mb-2">
        <span className="font-serif text-sm">Contents</span>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-xs text-[#3366cc] dark:text-[#6ea8fe] hover:underline cursor-pointer bg-transparent border-none p-0 font-mono"
        >
          [{collapsed ? 'show' : 'hide'}]
        </button>
      </div>

      {!collapsed && (
        <ul className="space-y-1 pl-0 list-none m-0">
          <li>
            <a href="#" onClick={(e) => handleLinkClick(e, 'introduction')} className="wiki-link">
              <span className="text-[#54595d] dark:text-[#a2a9b1] mr-1.5 font-mono">(Top)</span>
            </a>
          </li>
          {topLevelSections.map((sec, idx) => (
            <li key={sec.id}>
              <a
                href={`#${sec.id}`}
                onClick={(e) => handleLinkClick(e, sec.id)}
                className="wiki-link"
              >
                <span className="text-[#54595d] dark:text-[#a2a9b1] mr-1.5 font-mono">{idx + 1}</span>
                <span>{sec.title}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
