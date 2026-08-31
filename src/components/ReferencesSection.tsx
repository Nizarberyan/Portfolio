import React, { useState } from 'react';
import { citations } from '../data/portfolioData';
import { Check, Copy } from 'lucide-react';

export const ReferencesSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopyCitation = (citationText: string, id: number) => {
    navigator.clipboard.writeText(citationText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="references" className="mt-8 pt-2 scroll-mt-20">
      <div className="wiki-heading-2">
        <span className="font-serif">References</span>
        <span className="text-xs text-gray-500 dark:text-gray-400 font-sans font-normal">
          {citations.length} citations
        </span>
      </div>

      <ol className="list-none space-y-2.5 text-sm leading-relaxed text-wiki-lightText dark:text-wiki-darkText pl-0">
        {citations.map((cite) => {
          const citationBib = `${cite.author ? cite.author + ' ' : ''}(${cite.date || 'n.d.'}). "${cite.title}". ${cite.publisher ? cite.publisher + '. ' : ''}${cite.url}`;

          return (
            <li
              key={cite.id}
              id={`cite_note-${cite.id}`}
              className="flex items-start gap-2 p-1.5 rounded-xs transition-all group hover:bg-gray-100/70 dark:hover:bg-gray-800/50"
            >
              <span className="text-gray-400 dark:text-gray-500 select-none font-mono text-xs w-6 text-right shrink-0 mt-0.5">
                {cite.id}.
              </span>

              <a
                href={`#cite_ref-${cite.id}`}
                title="Jump up to citation origin"
                className="text-[#0645ad] dark:text-[#6ea8fe] hover:underline shrink-0 text-xs font-bold mt-0.5"
              >
                ^
              </a>

              <div className="flex-1">
                {cite.author && (
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    {cite.author}{' '}
                  </span>
                )}
                {cite.date && (
                  <span className="text-gray-600 dark:text-gray-400">
                    ({cite.date}).{' '}
                  </span>
                )}
                <span className="italic">"{cite.title}"</span>.{' '}
                {cite.publisher && (
                  <span className="text-gray-600 dark:text-gray-400">
                    {cite.publisher}.{' '}
                  </span>
                )}
                <a
                  href={cite.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wiki-link inline-flex items-center gap-0.5 font-mono text-xs break-all"
                >
                  {cite.url} <span className="text-[10px] opacity-75">↗</span>
                </a>
                {cite.accessDate && (
                  <span className="text-gray-500 dark:text-gray-400 text-xs ml-1">
                    Retrieved {cite.accessDate}.
                  </span>
                )}
                {cite.quote && (
                  <div className="mt-1 text-xs text-gray-600 dark:text-gray-400 italic bg-gray-50 dark:bg-[#27292d] p-2 rounded-xs border-l-2 border-gray-300 dark:border-gray-600">
                    "{cite.quote}"
                  </div>
                )}
              </div>

              <button
                onClick={() => handleCopyCitation(citationBib, cite.id)}
                title="Copy formal citation"
                className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded-xs shrink-0 cursor-pointer"
              >
                {copiedId === cite.id ? (
                  <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </li>
          );
        })}
      </ol>
    </section>
  );
};
