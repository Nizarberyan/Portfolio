import React, { useState, useRef, useEffect } from 'react';
import { citations } from '../data/portfolioData';

interface ReferencePopoverProps {
  id: number;
}

export const ReferencePopover: React.FC<ReferencePopoverProps> = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLAnchorElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const citation = citations.find(c => c.id === id);

  const handleMouseEnter = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setCoords({
        top: rect.bottom + window.scrollY + 6,
        left: Math.max(16, Math.min(window.innerWidth - 320, rect.left + window.scrollX - 100))
      });
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const targetElement = document.getElementById(`cite_note-${id}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      targetElement.classList.add('bg-amber-100', 'dark:bg-amber-900/40', 'transition-colors', 'duration-1000');
      setTimeout(() => {
        targetElement.classList.remove('bg-amber-100', 'dark:bg-amber-900/40');
      }, 2000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  if (!citation) {
    return <sup className="wiki-ref-sup">[{id}]</sup>;
  }

  return (
    <>
      <sup
        className="wiki-ref-sup relative inline-block cursor-pointer select-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a
          ref={triggerRef}
          href={`#cite_note-${id}`}
          onClick={handleClick}
          className="text-[#0645ad] dark:text-[#6ea8fe] hover:underline font-semibold"
          aria-label={`Jump to reference ${id}`}
        >
          [{id}]
        </a>
      </sup>

      {isOpen && (
        <div
          ref={popoverRef}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={handleMouseLeave}
          style={{ top: `${coords.top}px`, left: `${coords.left}px` }}
          className="fixed z-50 w-72 sm:w-80 p-3 bg-white dark:bg-[#202122] border border-[#a2a9b1] dark:border-[#54595d] rounded-xs shadow-md text-xs leading-relaxed text-wiki-lightText dark:text-wiki-darkText"
        >
          <div className="font-semibold text-wiki-lightText dark:text-wiki-darkText mb-1 flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-1">
            <span>Reference [{id}]</span>
            <span className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400 font-mono">
              {citation.type}
            </span>
          </div>
          <div className="space-y-1">
            {citation.author && <div className="text-gray-700 dark:text-gray-300"><span className="italic">{citation.author}</span> ({citation.date || 'n.d.'}).</div>}
            <div className="font-medium text-[#0645ad] dark:text-[#6ea8fe]">
              "{citation.title}"
            </div>
            {citation.publisher && (
              <div className="text-gray-600 dark:text-gray-400 italic">
                {citation.publisher}
              </div>
            )}
            {citation.quote && (
              <div className="text-gray-600 dark:text-gray-300 text-[11px] bg-gray-50 dark:bg-[#27292d] p-1.5 rounded-xs mt-1 border-l-2 border-[#0645ad] dark:border-[#6ea8fe]">
                "{citation.quote}"
              </div>
            )}
          </div>
          <div className="mt-2 pt-1 border-t border-gray-100 dark:border-gray-800 flex justify-end">
            <a
              href={citation.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] text-[#0645ad] dark:text-[#6ea8fe] hover:underline"
            >
              Visit source <span className="text-[10px]">↗</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
