import React from 'react';
import { 
  personalInfo, 
  careerExperience, 
  educationList, 
  skillCategories, 
  projects 
} from '../data/portfolioData';
import { getWikiUrl } from '../data/wikipediaLinks';
import { ReferencePopover } from './ReferencePopover';
import { ProjectCard } from './ProjectCard';
import { ReferencesSection } from './ReferencesSection';
import { TableOfContents } from './TableOfContents';
import { WikiInfobox } from './WikiInfobox';

interface ArticleBodyProps {
  searchQuery: string;
  onOpenHistory: () => void;
}

export const ArticleBody: React.FC<ArticleBodyProps> = ({
  searchQuery,
  onOpenHistory,
}) => {
  const filteredProjects = projects.filter((project) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(query) ||
      project.subtitle.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.techStack.some((t) => t.toLowerCase().includes(query)) ||
      project.category.toLowerCase().includes(query)
    );
  });

  return (
    <div className="mw-body">
      {/* Titlebar (Vector 2022) */}
      <header className="vector-page-titlebar">
        <h1 id="firstHeading" className="firstHeading mw-first-heading">
          <span lang="en" dir="ltr">
            <span className="mw-page-title-main">{personalInfo.name}</span>
          </span>
        </h1>
        <div className="text-xs text-[#54595d] dark:text-[#a2a9b1] font-sans">
          <span>(full-stack developer)</span>
        </div>
      </header>

      {/* Page Toolbar / Tabs (Vector 2022) */}
      <div className="vector-page-toolbar">
        <div className="vector-tabs">
          <span className="vector-tab selected">Article</span>
          <a
            href={`mailto:${personalInfo.email}?subject=Talk%20/%20Inquiry%20-%20Nizar%20Beriane`}
            className="vector-tab"
            title="Email Nizar directly"
          >
            Talk
          </a>
        </div>

        <div className="vector-tabs">
          <span className="vector-tab selected">Read</span>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="vector-tab"
          >
            View source
          </a>
          <button
            onClick={onOpenHistory}
            className="vector-tab"
          >
            View history
          </button>
        </div>
      </div>

      {/* Body Content */}
      <div id="bodyContent" className="vector-body">
        <div id="mw-content-text" className="mw-body-content">
          <div className="mw-parser-output">
            {/* Hatnote */}
            <div className="hatnote navigation-not-searchable" role="note">
              This article is about the full-stack developer. For other uses, see{' '}
              <a
                href="https://en.wikipedia.org/wiki/Nizar"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                Nizar (disambiguation)
              </a>
              .
            </div>

            {/* Infobox floats right at the top of content */}
            <WikiInfobox />

            {/* Lede Paragraphs */}
            <p>
              <strong className="font-bold">{personalInfo.name}</strong> (Arabic: {personalInfo.nativeName}; born in{' '}
              <a href={getWikiUrl("Tangier")} target="_blank" rel="noopener noreferrer" className="wiki-link">
                Tangier
              </a>
              ,{' '}
              <a href={getWikiUrl("Morocco")} target="_blank" rel="noopener noreferrer" className="wiki-link">
                Morocco
              </a>
              ) is a Moroccan full-stack developer specializing in{' '}
              <a href={getWikiUrl("TypeScript")} target="_blank" rel="noopener noreferrer" className="wiki-link">
                TypeScript
              </a>
              , high-fidelity{' '}
              <a href={getWikiUrl("React Native")} target="_blank" rel="noopener noreferrer" className="wiki-link">
                React Native
              </a>{' '}
              applications, and scalable{' '}
              <a href={getWikiUrl("Node.js")} target="_blank" rel="noopener noreferrer" className="wiki-link">
                Node.js
              </a>{' '}
              backends.
              <ReferencePopover id={1} />
            </p>

            <p>
              He is known for owning digital products end-to-end — from real-time distributed architecture and{' '}
              <a href={getWikiUrl("Artificial intelligence")} target="_blank" rel="noopener noreferrer" className="wiki-link">
                AI integration
              </a>{' '}
              to shipping cross-platform mobile experiences — with a focus on measurable outcomes.
              <ReferencePopover id={2} />
            </p>

            {/* Inline TOC on narrow screens */}
            <div className="xl:hidden">
              <TableOfContents variant="inline" />
            </div>

            {/* Career */}
            <section id="career" className="scroll-mt-16 clear-left">
              <h2>
                <span className="mw-headline">Career</span>
                <span className="mw-editsection">
                  <span className="mw-editsection-bracket">[</span>
                  <a
                    href={`mailto:${personalInfo.email}?subject=Career%20Inquiry%20-%20Nizar%20Beriane`}
                    className="wiki-link"
                    title="Send inquiry"
                  >
                    inquire
                  </a>
                  <span className="mw-editsection-bracket">]</span>
                </span>
              </h2>

              {careerExperience.map((exp, index) => (
                <div key={index} id="career-izydesk" className="mb-4">
                  <h3>
                    <span>
                      {exp.role},{' '}
                      <a
                        href="https://izydesk.fr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="wiki-link"
                      >
                        IzyDesk
                      </a>{' '}
                      ({exp.period})
                    </span>
                    <ReferencePopover id={exp.citationId} />
                  </h3>
                  <p>
                    <a
                      href="https://izydesk.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="wiki-link"
                    >
                      IzyDesk
                    </a>{' '}
                    (<a href="https://izydesk.fr" target="_blank" rel="noopener noreferrer" className="wiki-link font-mono text-sm">izydesk.fr</a>) is a custom enterprise software development agency focused on internal tools for B2B clients. During this internship, designed the backend for Resaly Pro, a salon management system, using{' '}
                    <a href={getWikiUrl("Symfony")} target="_blank" rel="noopener noreferrer" className="wiki-link">Symfony</a> and{' '}
                    <a href={getWikiUrl("PostgreSQL")} target="_blank" rel="noopener noreferrer" className="wiki-link">PostgreSQL</a>, achieving sub-100ms scheduling response times. Built the cross-platform mobile client in{' '}
                    <a href={getWikiUrl("Flutter")} target="_blank" rel="noopener noreferrer" className="wiki-link">Flutter</a> for automated scheduling and billing, boosting operational efficiency by 30%. Developed analytical dashboards via a custom{' '}
                    <a href={getWikiUrl("REST API")} target="_blank" rel="noopener noreferrer" className="wiki-link">REST API</a>, saving salon managers over 5 hours weekly on manual reporting. Resaly Pro was adopted by 15+ local businesses.
                  </p>
                </div>
              ))}
            </section>

            {/* Education */}
            <section id="education" className="scroll-mt-16">
              <h2>
                <span className="mw-headline">Education</span>
                <span className="mw-editsection">
                  <span className="mw-editsection-bracket">[</span>
                  <a
                    href={`mailto:${personalInfo.email}?subject=Education%20Inquiry%20-%20Nizar%20Beriane`}
                    className="wiki-link"
                    title="Send inquiry"
                  >
                    inquire
                  </a>
                  <span className="mw-editsection-bracket">]</span>
                </span>
              </h2>

              {educationList.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3>
                    <span>
                      <a href="https://youcode.ma" target="_blank" rel="noopener noreferrer" className="wiki-link">YouCode Morocco</a> (
                      <a href="https://en.wikipedia.org/wiki/Mohammed_VI_Polytechnic_University" target="_blank" rel="noopener noreferrer" className="wiki-link">UM6P</a>
                      ), in partnership with{' '}
                      <a href={getWikiUrl("Simplon.co")} target="_blank" rel="noopener noreferrer" className="wiki-link">
                        {edu.partner}
                      </a>{' '}
                      ({edu.period})
                    </span>
                    <ReferencePopover id={edu.citationId} />
                  </h3>
                  <p>
                    {edu.summary} Focus areas included backend systems in{' '}
                    <a href={getWikiUrl("Go")} target="_blank" rel="noopener noreferrer" className="wiki-link">Go</a> and{' '}
                    <a href={getWikiUrl("Node.js")} target="_blank" rel="noopener noreferrer" className="wiki-link">Node.js</a>, and infrastructure management with{' '}
                    <a href={getWikiUrl("Docker")} target="_blank" rel="noopener noreferrer" className="wiki-link">Docker</a> and{' '}
                    <a href={getWikiUrl("CI/CD")} target="_blank" rel="noopener noreferrer" className="wiki-link">CI/CD</a>.
                  </p>
                </div>
              ))}
            </section>

            {/* Technical Skills */}
            <section id="technical-skills" className="scroll-mt-16">
              <h2>
                <span className="mw-headline">Technical skills</span>
              </h2>

              <ul>
                {skillCategories.map((cat, idx) => (
                  <li key={idx} id={cat.category === 'Backend' ? 'backend-skills' : cat.category.includes('Frontend') ? 'frontend-skills' : 'infra-skills'}>
                    <strong>{cat.category}: </strong>
                    {cat.skills.map((skill, sIdx) => (
                      <React.Fragment key={skill.name}>
                        <a
                          href={skill.wikiUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="wiki-link"
                          title={`${skill.name} – Wikipedia`}
                        >
                          {skill.name}
                        </a>
                        {sIdx < cat.skills.length - 1 && <span>, </span>}
                      </React.Fragment>
                    ))}
                  </li>
                ))}
              </ul>
            </section>

            {/* Selected Works */}
            <section id="selected-works" className="scroll-mt-16">
              <h2>
                <span className="mw-headline">Selected works</span>
              </h2>

              <div className="space-y-4">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>

            {/* See also */}
            <section id="see-also" className="scroll-mt-16">
              <h2>
                <span className="mw-headline">See also</span>
              </h2>
              <ul>
                <li>
                  <a
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external"
                  >
                    Curriculum Vitae (PDF)
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external"
                  >
                    GitHub: github.com/Nizarberyan
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external"
                  >
                    LinkedIn: linkedin.com/in/nizar-beriane
                  </a>
                </li>
              </ul>
            </section>

            {/* References */}
            <ReferencesSection />

            {/* External links */}
            <section id="external-links" className="scroll-mt-16">
              <h2>
                <span className="mw-headline">External links</span>
              </h2>
              <ul>
                <li>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external"
                  >
                    Official GitHub repository directory
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external"
                  >
                    Official LinkedIn profile
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="wiki-link"
                  >
                    Electronic mail: {personalInfo.email}
                  </a>
                </li>
              </ul>
            </section>

            {/* Categories box */}
            <div id="catlinks" className="catlinks" data-mw="interface">
              <div id="mw-normal-catlinks" className="mw-normal-catlinks">
                <a href="https://en.wikipedia.org/wiki/Help:Category" title="Help:Category">Categories</a>:
                <ul className="inline-flex flex-wrap list-none ml-2 p-0 gap-x-2 gap-y-1">
                  <li><a href="https://en.wikipedia.org/wiki/Category:Living_people" className="wiki-link">Living people</a></li>
                  <li>|</li>
                  <li><a href="https://en.wikipedia.org/wiki/Category:Moroccan_software_engineers" className="wiki-link">Moroccan software engineers</a></li>
                  <li>|</li>
                  <li><a href="https://en.wikipedia.org/wiki/Category:Full-stack_developers" className="wiki-link">Full-stack developers</a></li>
                  <li>|</li>
                  <li><a href="https://en.wikipedia.org/wiki/Category:People_from_Tangier" className="wiki-link">People from Tangier</a></li>
                  <li>|</li>
                  <li><a href="https://en.wikipedia.org/wiki/Category:TypeScript_programmers" className="wiki-link">TypeScript programmers</a></li>
                  <li>|</li>
                  <li><a href="https://en.wikipedia.org/wiki/Category:Go_programmers" className="wiki-link">Go programmers</a></li>
                  <li>|</li>
                  <li><a href="https://en.wikipedia.org/wiki/Category:React_Native_developers" className="wiki-link">React Native developers</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
