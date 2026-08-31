import React from 'react';
import { WIKIPEDIA_LINKS } from '../data/wikipediaLinks';

/**
 * Parses text and wraps known technical terms with authentic Wikipedia outbound links
 */
export function formatWikipediaText(text: string): React.ReactNode[] {
  // Sort terms by length descending to match multi-word terms first (e.g., 'React Native' before 'React')
  const terms = Object.keys(WIKIPEDIA_LINKS).sort((a, b) => b.length - a.length);
  const regexPattern = new RegExp(`\\b(${terms.map(t => escapeRegex(t)).join('|')})\\b`, 'g');

  const parts = text.split(regexPattern);

  return parts.map((part, index) => {
    if (WIKIPEDIA_LINKS[part]) {
      return React.createElement(
        'a',
        {
          key: index,
          href: WIKIPEDIA_LINKS[part],
          target: '_blank',
          rel: 'noopener noreferrer',
          className: 'wiki-link font-medium inline-flex items-center',
          title: `${part} – Wikipedia`,
        },
        part
      );
    }
    return React.createElement('span', { key: index }, part);
  });
}

function escapeRegex(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
