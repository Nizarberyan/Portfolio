import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { X, Send, MessageSquare, Check, Mail } from 'lucide-react';

interface TalkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TalkModal: React.FC<TalkModalProps> = ({ isOpen, onClose }) => {
  const [subject, setSubject] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailtoSubject = encodeURIComponent(subject || 'Portfolio Inquiry');
    const mailtoBody = encodeURIComponent(
      `Hello Nizar,\n\n${message}\n\nFrom: ${senderName} (${senderEmail})\nSent via Wikipedia Portfolio Talk Page`
    );

    window.open(`mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`, '_blank');
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#202122] border border-wiki-lightBorder dark:border-wiki-darkBorder w-full max-w-lg rounded-xs shadow-2xl overflow-hidden text-sm">
        {/* Header */}
        <div className="bg-[#f8f9fa] dark:bg-[#27292d] px-4 py-3 border-b border-wiki-lightBorder dark:border-wiki-darkBorder flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-[#0645ad] dark:text-[#6ea8fe]" />
            <h2 className="font-serif font-bold text-base text-wiki-lightText dark:text-wiki-darkText">
              Talk:Nizar_Beriane — Add a new topic
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 p-1 rounded-xs cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Wikipedia Talk notice */}
        <div className="p-4 text-xs bg-gray-50 dark:bg-[#27292d] border-b border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
          <p className="leading-relaxed">
            <strong>Discussion page</strong>: Leave a message for Nizar regarding software engineering opportunities, collaborations, or tech inquiries. Submitting will deliver directly to <span className="font-mono">{personalInfo.email}</span>.
          </p>
        </div>

        {isSent ? (
          <div className="p-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 mx-auto flex items-center justify-center">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-gray-900 dark:text-gray-100">
              Message Dispatched
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Opening your email client. You can also contact directly at <a href={`mailto:${personalInfo.email}`} className="wiki-link">{personalInfo.email}</a>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-4 space-y-3 text-xs sm:text-sm">
            <div>
              <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1 text-xs">
                Subject / Topic Header:
              </label>
              <input
                type="text"
                required
                placeholder="e.g., Engineering Opportunity / Collaboration"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-xs bg-white dark:bg-[#1a1d20] text-wiki-lightText dark:text-wiki-darkText focus:outline-hidden focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1 text-xs">
                  Your Name:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Jane Doe"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-xs bg-white dark:bg-[#1a1d20] text-wiki-lightText dark:text-wiki-darkText focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1 text-xs">
                  Your Email:
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-xs bg-white dark:bg-[#1a1d20] text-wiki-lightText dark:text-wiki-darkText focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1 text-xs">
                Message Body:
              </label>
              <textarea
                required
                rows={4}
                placeholder="Write your note or inquiry here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-xs bg-white dark:bg-[#1a1d20] text-wiki-lightText dark:text-wiki-darkText focus:outline-hidden focus:ring-1 focus:ring-blue-500 font-sans text-xs sm:text-sm"
              />
              <div className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 font-mono">
                Sign your comment by submitting ~~~~
              </div>
            </div>

            <div className="pt-2 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <div className="text-xs text-gray-500 flex items-center gap-1">
                <Mail className="w-3 h-3" /> {personalInfo.email}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-xs text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-[#3366cc] hover:bg-[#0645ad] dark:bg-[#6ea8fe] dark:hover:bg-[#9ec5fe] text-white dark:text-gray-900 font-medium rounded-xs flex items-center gap-1.5 cursor-pointer text-xs"
                >
                  <Send className="w-3 h-3" />
                  Publish Topic
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
