import React, { useState, useEffect } from 'react';
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
import { ChevronDown, ChevronUp, ChevronsUpDown, Smartphone, Server } from 'lucide-react';

interface ArticleBodyProps {
  searchQuery: string;
  onOpenHistory: () => void;
}

export const ArticleBody: React.FC<ArticleBodyProps> = ({
  searchQuery,
  onOpenHistory,
}) => {
  // Mobile accordion state for each section
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({
    'career': false,
    'education': false,
    'technical-skills': false,
    'selected-works': false,
    'see-also': false,
    'references': false,
    'external-links': false,
  });

  const [activeFilter, setActiveFilter] = useState<'all' | 'mobile' | 'backend'>('all');

  const toggleSection = (sectionId: string) => {
    setCollapsedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const toggleAllSections = () => {
    const allCollapsed = Object.values(collapsedSections).every(Boolean);
    const newState = Object.keys(collapsedSections).reduce((acc, key) => {
      acc[key] = !allCollapsed;
      return acc;
    }, {} as Record<string, boolean>);
    setCollapsedSections(newState);
  };

  // Automatically expand target section when user taps TOC anchor
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        if (['career', 'career-izydesk'].includes(hash)) {
          setCollapsedSections(prev => ({ ...prev, career: false }));
        } else if (['education'].includes(hash)) {
          setCollapsedSections(prev => ({ ...prev, education: false }));
        } else if (['technical-skills', 'mobile-skills', 'languages-skills', 'backend-skills', 'infra-skills'].includes(hash)) {
          setCollapsedSections(prev => ({ ...prev, 'technical-skills': false }));
        } else if ([
          'selected-works', 
          'mobile-projects', 
          'mobile-projects-heading', 
          'project-ridemate', 
          'project-zephyr', 
          'project-healthsphere', 
          'backend-projects', 
          'backend-projects-heading', 
          'project-lms-api', 
          'project-moneymind'
        ].includes(hash)) {
          setCollapsedSections(prev => ({ ...prev, 'selected-works': false }));
        } else if (['see-also'].includes(hash)) {
          setCollapsedSections(prev => ({ ...prev, 'see-also': false }));
        } else if (['references'].includes(hash) || hash.startsWith('cite_note-')) {
          setCollapsedSections(prev => ({ ...prev, 'references': false }));
        } else if (['external-links'].includes(hash)) {
          setCollapsedSections(prev => ({ ...prev, 'external-links': false }));
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'mobile' && project.category !== 'Mobile') return false;
    if (activeFilter === 'backend' && project.category === 'Mobile') return false;

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

  const mobileProjects = filteredProjects.filter((p) => p.category === 'Mobile');
  const backendProjects = filteredProjects.filter((p) => p.category !== 'Mobile');

  return (
    <div className="mw-body">
      {/* Titlebar (Vector 2022 / Minerva) */}
      <header className="vector-page-titlebar">
        <div>
          <h1 id="firstHeading" className="firstHeading mw-first-heading">
            <span lang="en" dir="ltr">
              <span className="mw-page-title-main">{personalInfo.name}</span>
            </span>
          </h1>
          <div className="text-xs text-[#54595d] dark:text-[#a2a9b1] font-sans mt-0.5">
            <span>({personalInfo.disambiguation})</span>
          </div>
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
            className="vector-tab cursor-pointer bg-transparent border-none"
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
            <div className="hatnote navigation-not-searchable text-xs" role="note">
              This article is about the mobile developer. For other uses, see{' '}
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

            {/* Infobox floats right on desktop, stacks as clean card on mobile */}
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
              ) is a Moroccan mobile developer who builds cross-platform applications in{' '}
              <a href={getWikiUrl("React Native")} target="_blank" rel="noopener noreferrer" className="wiki-link">
                React Native
              </a>{' '}
              and{' '}
              <a href={getWikiUrl("Flutter")} target="_blank" rel="noopener noreferrer" className="wiki-link">
                Flutter
              </a>
              , as well as the{' '}
              <a href={getWikiUrl("TypeScript")} target="_blank" rel="noopener noreferrer" className="wiki-link">
                TypeScript
              </a>{' '}
              backends behind them.
              <ReferencePopover id={1} />
            </p>

            <p>
              He has shipped a real-time carpooling application to 500+ active users and a Flutter booking client adopted by 15+ local businesses. He is experienced with real-time and geolocation features, interactive animations using{' '}
              <a href={getWikiUrl("Reanimated")} target="_blank" rel="noopener noreferrer" className="wiki-link">
                Reanimated
              </a>{' '}
              and{' '}
              <a href={getWikiUrl("Skia")} target="_blank" rel="noopener noreferrer" className="wiki-link">
                Skia
              </a>
              , and offline-first on-device data storage using{' '}
              <a href={getWikiUrl("SQLite")} target="_blank" rel="noopener noreferrer" className="wiki-link">
                SQLite
              </a>{' '}
              and{' '}
              <a href={getWikiUrl("Drizzle ORM")} target="_blank" rel="noopener noreferrer" className="wiki-link">
                Drizzle ORM
              </a>
              .
              <ReferencePopover id={2} />
            </p>

            {/* Inline TOC on mobile / tablet */}
            <div className="xl:hidden my-3">
              <TableOfContents variant="inline" />
            </div>

            {/* Mobile Accordion Expand/Collapse All Button */}
            <div className="flex items-center justify-end md:hidden py-1 mb-2">
              <button
                onClick={toggleAllSections}
                className="inline-flex items-center gap-1 text-[11px] text-[#3366cc] dark:text-[#6ea8fe] font-mono bg-transparent border-none p-0 cursor-pointer"
              >
                <ChevronsUpDown className="w-3 h-3" />
                <span>Toggle all sections</span>
              </button>
            </div>

            {/* Career */}
            <section id="career" className="scroll-mt-14 clear-left">
              <h2
                onClick={() => toggleSection('career')}
                className="mobile-collapsible"
              >
                <span className="flex items-center gap-2">
                  <span className="mw-headline">Career</span>
                  <span className="md:hidden text-gray-400">
                    {collapsedSections['career'] ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                  </span>
                </span>
                <span className="mw-editsection" onClick={(e) => e.stopPropagation()}>
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

              {!collapsedSections['career'] && (
                <div className="section-content">
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
                        (<a href="https://izydesk.fr" target="_blank" rel="noopener noreferrer" className="wiki-link font-mono text-sm">izydesk.fr</a>) is a custom enterprise software development agency focused on internal tools and digital systems for B2B clients. In 2025, Beriane worked as a Mobile Developer Intern, where he built Resaly Pro, a salon management application now deployed and used by 15+ local businesses. He wrote the real-time appointment booking flow in{' '}
                        <a href={getWikiUrl("Flutter")} target="_blank" rel="noopener noreferrer" className="wiki-link">Flutter</a> on top of a{' '}
                        <a href={getWikiUrl("Symfony")} target="_blank" rel="noopener noreferrer" className="wiki-link">Symfony</a>{' '}
                        <a href={getWikiUrl("REST API")} target="_blank" rel="noopener noreferrer" className="wiki-link">REST API</a> and{' '}
                        <a href={getWikiUrl("MySQL")} target="_blank" rel="noopener noreferrer" className="wiki-link">MySQL</a> database, and tuned the backend workflows behind it, raising team efficiency by 25%.
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Selected Works */}
            <section id="selected-works" className="scroll-mt-14">
              <h2
                onClick={() => toggleSection('selected-works')}
                className="mobile-collapsible"
              >
                <span className="flex items-center gap-2">
                  <span className="mw-headline">Selected works</span>
                  <span className="md:hidden text-gray-400">
                    {collapsedSections['selected-works'] ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                  </span>
                </span>
              </h2>

              {!collapsedSections['selected-works'] && (
                <div className="section-content space-y-4">
                  {/* Category Filter Buttons */}
                  <div className="flex flex-wrap items-center gap-1.5 pb-2 border-b border-wiki-lightBorderSubtle dark:border-wiki-darkBorderSubtle not-prose">
                    <span className="text-xs text-gray-500 font-sans mr-1">Filter projects:</span>
                    <button
                      onClick={() => setActiveFilter('all')}
                      className={`px-2.5 py-1 text-xs rounded-xs font-mono transition cursor-pointer ${
                        activeFilter === 'all'
                          ? 'bg-[#3366cc] text-white'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      All ({projects.length})
                    </button>
                    <button
                      onClick={() => setActiveFilter('mobile')}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-xs font-mono transition cursor-pointer ${
                        activeFilter === 'mobile'
                          ? 'bg-[#3366cc] text-white'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      <Smartphone className="w-3 h-3" />
                      Mobile ({projects.filter(p => p.category === 'Mobile').length})
                    </button>
                    <button
                      onClick={() => setActiveFilter('backend')}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-xs font-mono transition cursor-pointer ${
                        activeFilter === 'backend'
                          ? 'bg-[#3366cc] text-white'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      <Server className="w-3 h-3" />
                      Backend & AI ({projects.filter(p => p.category !== 'Mobile').length})
                    </button>
                  </div>

                  {/* Mobile Projects Sub-section */}
                  {mobileProjects.length > 0 && (
                    <div id="mobile-projects" className="pt-2">
                      <h3 id="mobile-projects-heading" className="text-lg font-serif font-bold text-wiki-lightText dark:text-wiki-darkText mb-2 pb-1 border-b border-gray-200 dark:border-gray-700">
                        Mobile applications
                      </h3>
                      <div className="space-y-4">
                        {mobileProjects.map((project) => (
                          <ProjectCard key={project.id} project={project} />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Backend Projects Sub-section */}
                  {backendProjects.length > 0 && (
                    <div id="backend-projects" className="pt-4">
                      <h3 id="backend-projects-heading" className="text-lg font-serif font-bold text-wiki-lightText dark:text-wiki-darkText mb-2 pb-1 border-b border-gray-200 dark:border-gray-700">
                        Backend & systems
                      </h3>
                      <div className="space-y-4">
                        {backendProjects.map((project) => (
                          <ProjectCard key={project.id} project={project} />
                        ))}
                      </div>
                    </div>
                  )}

                  {filteredProjects.length === 0 && (
                    <p className="text-sm italic text-gray-500 py-4">
                      No projects matching your search query.
                    </p>
                  )}
                </div>
              )}
            </section>

            {/* Technical Skills */}
            <section id="technical-skills" className="scroll-mt-14">
              <h2
                onClick={() => toggleSection('technical-skills')}
                className="mobile-collapsible"
              >
                <span className="flex items-center gap-2">
                  <span className="mw-headline">Technical skills</span>
                  <span className="md:hidden text-gray-400">
                    {collapsedSections['technical-skills'] ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                  </span>
                </span>
              </h2>

              {!collapsedSections['technical-skills'] && (
                <div className="section-content">
                  <ul className="space-y-1.5">
                    {skillCategories.map((cat, idx) => {
                      const sectionId = 
                        cat.category === 'Mobile' ? 'mobile-skills' :
                        cat.category === 'Languages' ? 'languages-skills' :
                        cat.category.includes('Backend') ? 'backend-skills' : 'infra-skills';
                      return (
                        <li key={idx} id={sectionId}>
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
                      );
                    })}
                  </ul>
                </div>
              )}
            </section>

            {/* Education */}
            <section id="education" className="scroll-mt-14">
              <h2
                onClick={() => toggleSection('education')}
                className="mobile-collapsible"
              >
                <span className="flex items-center gap-2">
                  <span className="mw-headline">Education</span>
                  <span className="md:hidden text-gray-400">
                    {collapsedSections['education'] ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                  </span>
                </span>
                <span className="mw-editsection" onClick={(e) => e.stopPropagation()}>
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

              {!collapsedSections['education'] && (
                <div className="section-content">
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
                        {edu.summary} Key curriculum areas included cross-platform mobile delivery with{' '}
                        <a href={getWikiUrl("React Native")} target="_blank" rel="noopener noreferrer" className="wiki-link">React Native</a> and{' '}
                        <a href={getWikiUrl("Flutter")} target="_blank" rel="noopener noreferrer" className="wiki-link">Flutter</a>, backend architectures in{' '}
                        <a href={getWikiUrl("TypeScript")} target="_blank" rel="noopener noreferrer" className="wiki-link">TypeScript</a>,{' '}
                        <a href={getWikiUrl("Node.js")} target="_blank" rel="noopener noreferrer" className="wiki-link">Node.js</a> and{' '}
                        <a href={getWikiUrl("Go")} target="_blank" rel="noopener noreferrer" className="wiki-link">Go</a>, on-device data modeling with{' '}
                        <a href={getWikiUrl("SQLite")} target="_blank" rel="noopener noreferrer" className="wiki-link">SQLite</a>, and containerization with{' '}
                        <a href={getWikiUrl("Docker")} target="_blank" rel="noopener noreferrer" className="wiki-link">Docker</a> and{' '}
                        <a href={getWikiUrl("CI/CD")} target="_blank" rel="noopener noreferrer" className="wiki-link">CI/CD</a>.
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* See also */}
            <section id="see-also" className="scroll-mt-14">
              <h2
                onClick={() => toggleSection('see-also')}
                className="mobile-collapsible"
              >
                <span className="flex items-center gap-2">
                  <span className="mw-headline">See also</span>
                  <span className="md:hidden text-gray-400">
                    {collapsedSections['see-also'] ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                  </span>
                </span>
              </h2>

              {!collapsedSections['see-also'] && (
                <div className="section-content">
                  <ul>
                    {personalInfo.website && (
                      <li>
                        <a
                          href={personalInfo.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="external font-medium"
                        >
                          Personal Website: nizarberiane.dev
                        </a>
                      </li>
                    )}
                    <li>
                      <a
                        href={personalInfo.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="external font-medium"
                      >
                        Curriculum Vitae – Mobile Developer (PDF)
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
                </div>
              )}
            </section>

            {/* References */}
            <section id="references" className="scroll-mt-14">
              <h2
                onClick={() => toggleSection('references')}
                className="mobile-collapsible"
              >
                <span className="flex items-center gap-2">
                  <span className="mw-headline">References</span>
                  <span className="md:hidden text-gray-400">
                    {collapsedSections['references'] ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                  </span>
                </span>
              </h2>

              {!collapsedSections['references'] && (
                <div className="section-content">
                  <ReferencesSection />
                </div>
              )}
            </section>

            {/* External links */}
            <section id="external-links" className="scroll-mt-14">
              <h2
                onClick={() => toggleSection('external-links')}
                className="mobile-collapsible"
              >
                <span className="flex items-center gap-2">
                  <span className="mw-headline">External links</span>
                  <span className="md:hidden text-gray-400">
                    {collapsedSections['external-links'] ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                  </span>
                </span>
              </h2>

              {!collapsedSections['external-links'] && (
                <div className="section-content">
                  <ul>
                    {personalInfo.website && (
                      <li>
                        <a
                          href={personalInfo.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="external font-medium"
                        >
                          Official website: nizarberiane.dev
                        </a>
                      </li>
                    )}
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
                    {personalInfo.phone && (
                      <li className="text-gray-700 dark:text-gray-300">
                        Telephone: {personalInfo.phone}
                      </li>
                    )}
                  </ul>
                </div>
              )}
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
                  <li><a href="https://en.wikipedia.org/wiki/Category:Mobile_developers" className="wiki-link">Mobile developers</a></li>
                  <li>|</li>
                  <li><a href="https://en.wikipedia.org/wiki/Category:React_Native_developers" className="wiki-link">React Native developers</a></li>
                  <li>|</li>
                  <li><a href="https://en.wikipedia.org/wiki/Category:People_from_Tangier" className="wiki-link">People from Tangier</a></li>
                  <li>|</li>
                  <li><a href="https://en.wikipedia.org/wiki/Category:TypeScript_programmers" className="wiki-link">TypeScript programmers</a></li>
                  <li>|</li>
                  <li><a href="https://en.wikipedia.org/wiki/Category:Dart_(programming_language)_programmers" className="wiki-link">Dart programmers</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
