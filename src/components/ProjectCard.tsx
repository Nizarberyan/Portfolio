import React from 'react';
import { Project } from '../types/portfolio';
import { ReferencePopover } from './ReferencePopover';
import { getWikiUrl } from '../data/wikipediaLinks';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article
      id={`project-${project.id}`}
      className="my-6 pb-6 border-b border-wiki-lightBorderSubtle dark:border-wiki-darkBorderSubtle last:border-b-0"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
        <div className="flex items-baseline gap-2">
          <h3 className="text-xl font-bold font-serif text-wiki-lightText dark:text-wiki-darkText">
            {project.title}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400 font-serif">
            ({project.year})
          </span>
          <ReferencePopover id={project.citationId} />
        </div>

        {/* Wikipedia styled action links */}
        <div className="flex items-center gap-3 text-sm font-sans">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="wiki-link inline-flex items-center gap-1 font-medium"
            >
              Source code
              <span className="text-[11px] opacity-80">↗</span>
            </a>
          )}
          {project.githubUrl && project.liveUrl && (
            <span className="text-gray-300 dark:text-gray-600">•</span>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="wiki-link inline-flex items-center gap-1 font-medium"
            >
              Live deployment
              <span className="text-[11px] opacity-80">↗</span>
            </a>
          )}
        </div>
      </div>

      <div className="text-sm italic text-gray-600 dark:text-gray-400 mb-3">
        {project.subtitle}
      </div>

      <p className="text-base leading-relaxed text-wiki-lightText dark:text-wiki-darkText mb-3">
        {project.description}
      </p>

      {/* Bullet points */}
      <ul className="list-disc list-outside ml-6 space-y-1.5 text-sm sm:text-[15px] leading-relaxed text-wiki-lightText dark:text-wiki-darkText mb-3">
        {project.highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>

      {/* Tech stack inline links */}
      <div className="text-sm pt-1 text-gray-600 dark:text-gray-400">
        <span className="font-semibold text-wiki-lightText dark:text-wiki-darkText mr-1">
          Stack:
        </span>
        {project.techStack.map((tech, i) => (
          <React.Fragment key={tech}>
            <a
              href={getWikiUrl(tech)}
              target="_blank"
              rel="noopener noreferrer"
              className="wiki-link"
            >
              {tech}
            </a>
            {i < project.techStack.length - 1 && <span>, </span>}
          </React.Fragment>
        ))}
      </div>
    </article>
  );
};
