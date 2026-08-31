import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Heart, ExternalLink, Globe, Code, ShieldCheck } from 'lucide-react';

export const WikiFooter: React.FC = () => {
  return (
    <footer id="footer" className="mw-footer">
      <div className="max-w-7xl mx-auto px-4 space-y-6">
        
        {/* Support Wikipedia & Wikimedia Foundation Callout */}
        <div className="bg-[#f8f9fa] dark:bg-[#202122] border border-[#a2a9b1] dark:border-[#54595d] p-4 rounded-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-bold text-sm text-[#202122] dark:text-[#eaecf0]">
              <Heart className="w-4 h-4 text-red-600 fill-red-600" />
              <span>I love Wikipedia and you should too!</span>
            </div>
            <p className="text-xs text-[#54595d] dark:text-[#a2a9b1] max-w-2xl leading-relaxed m-0">
              Wikipedia is hosted by the non-profit Wikimedia Foundation and maintained by volunteers around the world. If you find value in open-source information and free encyclopedic knowledge, consider supporting them directly.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="https://donate.wikimedia.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#3366cc] hover:bg-[#0645ad] dark:bg-[#6ea8fe] dark:hover:bg-[#9ec5fe] text-white dark:text-gray-900 text-xs font-semibold rounded-xs transition shadow-xs"
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              Donate to Wikimedia
            </a>
            <a
              href="https://wikimediafoundation.org/support/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-white dark:bg-[#27292d] hover:bg-gray-100 dark:hover:bg-[#32363b] text-gray-800 dark:text-gray-200 border border-[#a2a9b1] dark:border-[#54595d] text-xs font-medium rounded-xs transition"
            >
              Ways to Support
            </a>
          </div>
        </div>

        {/* Other Open Source Foundations & Initiatives */}
        <div className="pt-2">
          <div className="flex items-center gap-1.5 font-bold text-xs text-[#202122] dark:text-[#eaecf0] mb-2">
            <Code className="w-3.5 h-3.5 text-[#3366cc] dark:text-[#6ea8fe]" />
            <span>Support Other Open-Source & Digital Rights Foundations:</span>
          </div>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-1.5 list-none p-0 m-0 text-xs">
            <li>
              <a href="https://www.fsf.org/" target="_blank" rel="noopener noreferrer" className="external">
                Free Software Foundation (FSF)
              </a>
            </li>
            <li>
              <a href="https://opensource.org/" target="_blank" rel="noopener noreferrer" className="external">
                Open Source Initiative (OSI)
              </a>
            </li>
            <li>
              <a href="https://www.eff.org/" target="_blank" rel="noopener noreferrer" className="external">
                Electronic Frontier Foundation (EFF)
              </a>
            </li>
            <li>
              <a href="https://www.mozilla.org/en-US/foundation/" target="_blank" rel="noopener noreferrer" className="external">
                Mozilla Foundation
              </a>
            </li>
            <li>
              <a href="https://www.linuxfoundation.org/" target="_blank" rel="noopener noreferrer" className="external">
                Linux Foundation
              </a>
            </li>
            <li>
              <a href="https://archive.org/donate" target="_blank" rel="noopener noreferrer" className="external">
                Internet Archive
              </a>
            </li>
          </ul>
        </div>

        {/* Footer Info & Legal */}
        <ul id="footer-info" className="space-y-1.5 leading-relaxed pt-2 border-t border-[#c8ccd1] dark:border-[#3c4043]">
          <li id="footer-info-lastmod">
            This page was last edited on 31 August 2026, at 12:53 (UTC).
          </li>
          <li id="footer-info-disclaimer" className="font-medium text-amber-700 dark:text-amber-400">
            Disclaimer: This is a parody for a portfolio and not an infringement on the Wikipedia IP.
          </li>
          <li id="footer-info-copyright">
            Text is available under the{' '}
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="wiki-link"
            >
              Creative Commons Attribution-ShareAlike License 4.0
            </a>
            ; additional terms may apply. By using this site, you agree to the Terms of Use and Privacy Policy. Wikipedia® and Wikimedia® are registered trademarks of the Wikimedia Foundation, Inc.
          </li>
        </ul>

        {/* Wikimedia Projects & Portfolio Contact Links */}
        <div className="pt-2 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
          <ul id="footer-wikimedia-links" className="flex flex-wrap items-center gap-x-4 gap-y-2 list-none p-0 m-0">
            <li className="font-bold text-[#202122] dark:text-[#eaecf0]">Wikimedia:</li>
            <li>
              <a href="https://www.wikipedia.org" target="_blank" rel="noopener noreferrer" className="external">
                Wikipedia.org
              </a>
            </li>
            <li>
              <a href="https://wikimediafoundation.org" target="_blank" rel="noopener noreferrer" className="external">
                Wikimedia Foundation
              </a>
            </li>
            <li>
              <a href="https://commons.wikimedia.org" target="_blank" rel="noopener noreferrer" className="external">
                Wikimedia Commons
              </a>
            </li>
            <li>
              <a href="https://meta.wikimedia.org" target="_blank" rel="noopener noreferrer" className="external">
                Meta-Wiki
              </a>
            </li>
          </ul>

          {/* Portfolio Owner Places */}
          <ul id="footer-places" className="flex flex-wrap items-center gap-x-4 gap-y-2 list-none p-0 m-0 text-xs">
            <li>
              <a href={`mailto:${personalInfo.email}`} className="wiki-link">
                Contact: {personalInfo.email}
              </a>
            </li>
            <li>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="wiki-link">
                GitHub
              </a>
            </li>
            <li>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="wiki-link">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="wiki-link">
                Resume (PDF)
              </a>
            </li>
            <li>
              <a href={`mailto:${personalInfo.email}?subject=Collaboration%20Inquiry`} className="wiki-link">
                Send Email
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
};
