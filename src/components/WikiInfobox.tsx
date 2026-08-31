import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { getWikiUrl } from '../data/wikipediaLinks';
import { Mail, FileText, X } from 'lucide-react';

export const WikiInfobox: React.FC = () => {
  const [isPhotoZoomed, setIsPhotoZoomed] = useState(false);

  return (
    <>
      <table className="infobox vcard not-prose">
        <tbody>
          <tr>
            <th colSpan={2} className="infobox-above fn">
              <div>{personalInfo.name}</div>
              {personalInfo.nativeName && (
                <div className="infobox-subheader" dir="rtl">
                  {personalInfo.nativeName}
                </div>
              )}
            </th>
          </tr>

          <tr>
            <td colSpan={2} className="infobox-image">
              <div
                className="cursor-pointer max-w-[220px] mx-auto border border-[#c8ccd1] dark:border-[#54595d] p-0.5 bg-white dark:bg-[#1a1d20]"
                onClick={() => setIsPhotoZoomed(true)}
                title="Click to zoom image"
              >
                <img
                  src="/nizar-beriane.jpg"
                  alt="Nizar Beriane"
                  className="w-full h-auto object-cover max-h-56 block mx-auto"
                />
              </div>
              <div className="infobox-caption">
                Nizar Beriane in 2026
              </div>
            </td>
          </tr>

          {/* Direct CTA Row */}
          <tr>
            <td colSpan={2} className="p-2 bg-[#f0f4f8] dark:bg-[#1c2430] border-t border-b border-[#c8ccd1] dark:border-[#54595d]">
              <div className="flex flex-col gap-1.5">
                <a
                  href={`mailto:${personalInfo.email}?subject=Collaboration%20Inquiry%20-%20Nizar%20Beriane`}
                  className="w-full py-1.5 px-2 bg-[#3366cc] hover:bg-[#0645ad] dark:bg-[#6ea8fe] dark:hover:bg-[#9ec5fe] text-white dark:text-gray-900 text-xs font-semibold rounded-xs transition text-center flex items-center justify-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Get in Touch / Hire
                </a>
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-1 px-2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-600 text-xs font-medium rounded-xs transition text-center flex items-center justify-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-[#3366cc] dark:text-[#6ea8fe]" />
                  Download Resume (PDF)
                </a>
              </div>
            </td>
          </tr>

          <tr>
            <th scope="row" className="infobox-label">Born</th>
            <td className="infobox-data">
              <a href={getWikiUrl("Tangier")} target="_blank" rel="noopener noreferrer" className="wiki-link">
                Tangier
              </a>
              ,{' '}
              <a href={getWikiUrl("Morocco")} target="_blank" rel="noopener noreferrer" className="wiki-link">
                Morocco
              </a>
            </td>
          </tr>

          <tr>
            <th scope="row" className="infobox-label">Occupation</th>
            <td className="infobox-data role">{personalInfo.occupation}</td>
          </tr>

          <tr>
            <th scope="row" className="infobox-label">Education</th>
            <td className="infobox-data">
              <a href="https://youcode.ma" target="_blank" rel="noopener noreferrer" className="wiki-link font-medium">
                YouCode Morocco
              </a>{' '}
              (
              <a href="https://en.wikipedia.org/wiki/Mohammed_VI_Polytechnic_University" target="_blank" rel="noopener noreferrer" className="wiki-link font-medium">
                UM6P
              </a>
              )
              <div className="text-[11px] text-[#54595d] dark:text-[#a2a9b1]">
                Advanced Full-Stack Development (2024–2026)
              </div>
            </td>
          </tr>

          <tr>
            <th scope="row" className="infobox-label">Known for</th>
            <td className="infobox-data">
              <ul className="list-disc list-outside ml-3.5 p-0 m-0 space-y-0.5 text-[11.5px]">
                {personalInfo.knownFor.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </td>
          </tr>

          <tr>
            <th scope="row" className="infobox-label">Languages</th>
            <td className="infobox-data">
              {personalInfo.languages.map((l, i) => (
                <div key={i} className="text-[11.5px]">
                  {l.language}{' '}
                  <span className="text-[#54595d] dark:text-[#a2a9b1]">({l.proficiency})</span>
                </div>
              ))}
            </td>
          </tr>

          <tr>
            <th scope="row" className="infobox-label">Website</th>
            <td className="infobox-data">
              <div>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external"
                >
                  GitHub
                </a>
              </div>
              <div>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external"
                >
                  LinkedIn
                </a>
              </div>
              <div className="mt-0.5">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="wiki-link text-[11px] break-all"
                >
                  {personalInfo.email}
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Lightbox / Zoom Modal */}
      {isPhotoZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs"
          onClick={() => setIsPhotoZoomed(false)}
        >
          <div className="relative max-w-lg max-h-[90vh] p-2 bg-white dark:bg-gray-900 rounded shadow-2xl" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setIsPhotoZoomed(false)}
              className="absolute top-3 right-3 p-1.5 bg-black/70 hover:bg-black text-white rounded-full transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
            <img
              src="/nizar-beriane.jpg"
              alt="Nizar Beriane"
              className="max-h-[75vh] w-auto mx-auto object-contain rounded"
            />
            <div className="p-2 text-center text-xs text-gray-700 dark:text-gray-300 font-serif">
              Nizar Beriane – Full-stack Developer (Tangier, Morocco)
            </div>
          </div>
        </div>
      )}
    </>
  );
};
