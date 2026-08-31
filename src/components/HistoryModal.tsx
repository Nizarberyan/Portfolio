import React from 'react';
import { X, GitCommit } from 'lucide-react';

interface HistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HistoryModal: React.FC<HistoryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const revisions = [
    {
      date: "August 2026",
      time: "12:53",
      user: "NizarBeriane (author)",
      bytes: "+4,892",
      summary: "Published RideMate, LMS API, Zephyr time-series engine, and updated technical skills architecture.",
      tag: "cur"
    },
    {
      date: "August 2025",
      time: "17:00",
      user: "IzyDeskEng",
      bytes: "+2,140",
      summary: "Completed Mobile Developer Internship; deployed Resaly Pro backend & Flutter client with sub-100ms response metrics.",
      tag: "prev"
    },
    {
      date: "May 2025",
      time: "09:00",
      user: "NizarBeriane",
      bytes: "+1,650",
      summary: "Shipped MoneyMind: AI predictive finance analytics SaaS with Gemini AI integration.",
      tag: "prev"
    },
    {
      date: "September 2024",
      time: "08:30",
      user: "YouCodeUM6P",
      bytes: "+3,100",
      summary: "Enrolled in Advanced Full-Stack Development Program at YouCode Morocco (UM6P) & Simplon.co.",
      tag: "prev"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#202122] border border-wiki-lightBorder dark:border-wiki-darkBorder w-full max-w-2xl rounded-xs shadow-2xl overflow-hidden max-h-[85vh] flex flex-col text-sm">
        {/* Header */}
        <div className="bg-[#f8f9fa] dark:bg-[#27292d] px-4 py-3 border-b border-wiki-lightBorder dark:border-wiki-darkBorder flex items-center justify-between shrink-0">
          <h2 className="font-serif font-bold text-base text-wiki-lightText dark:text-wiki-darkText">
            Revision history of "Nizar Beriane"
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 p-1 rounded-xs cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Wikipedia History list */}
        <div className="p-4 overflow-y-auto space-y-3 leading-relaxed">
          <p className="text-gray-600 dark:text-gray-400 italic text-xs">
            For any version listed below, click its date to review historical milestones and achievements.
          </p>

          <div className="divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700 rounded-xs bg-gray-50/50 dark:bg-[#1a1d20]">
            {revisions.map((rev, idx) => (
              <div key={idx} className="p-3 space-y-1 hover:bg-white dark:hover:bg-gray-800 transition">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-mono text-[#0645ad] dark:text-[#6ea8fe] font-semibold flex items-center gap-1">
                    <GitCommit className="w-3.5 h-3.5" />
                    {rev.date}, {rev.time}
                  </span>
                  <span className="text-gray-500 font-mono">by</span>
                  <span className="font-medium text-wiki-lightText dark:text-wiki-darkText">
                    {rev.user}
                  </span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-mono font-semibold">
                    ({rev.bytes})
                  </span>
                </div>
                <div className="text-wiki-lightText dark:text-wiki-darkText pl-4 border-l-2 border-[#0645ad] dark:border-[#6ea8fe] text-xs">
                  {rev.summary}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3 bg-gray-50 dark:bg-[#27292d] border-t border-gray-200 dark:border-gray-700 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#3366cc] hover:bg-[#0645ad] dark:bg-[#6ea8fe] dark:hover:bg-[#9ec5fe] text-white dark:text-gray-900 font-medium rounded-xs text-xs cursor-pointer"
          >
            Close History
          </button>
        </div>
      </div>
    </div>
  );
};
