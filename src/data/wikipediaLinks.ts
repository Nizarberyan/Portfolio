export const WIKIPEDIA_LINKS: Record<string, string> = {
  // Backend & Languages
  'Node.js': 'https://en.wikipedia.org/wiki/Node.js',
  'NestJS': 'https://en.wikipedia.org/wiki/NestJS',
  'Express': 'https://en.wikipedia.org/wiki/Express.js',
  'Express.js': 'https://en.wikipedia.org/wiki/Express.js',
  'Go': 'https://en.wikipedia.org/wiki/Go_(programming_language)',
  'Dart': 'https://en.wikipedia.org/wiki/Dart_(programming_language)',
  'PHP': 'https://en.wikipedia.org/wiki/PHP',
  'Symfony': 'https://en.wikipedia.org/wiki/Symfony',
  'Laravel': 'https://en.wikipedia.org/wiki/Laravel',
  'PostgreSQL': 'https://en.wikipedia.org/wiki/PostgreSQL',
  'MySQL': 'https://en.wikipedia.org/wiki/MySQL',
  'SQLite': 'https://en.wikipedia.org/wiki/SQLite',
  'MongoDB': 'https://en.wikipedia.org/wiki/MongoDB',
  'TimescaleDB': 'https://en.wikipedia.org/wiki/TimescaleDB',
  'Redis': 'https://en.wikipedia.org/wiki/Redis',
  'Drizzle ORM': 'https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping',
  'Drizzle': 'https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping',
  'Prisma': 'https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping',
  'SQLC': 'https://en.wikipedia.org/wiki/SQL',
  'REST API': 'https://en.wikipedia.org/wiki/REST',
  'CI/CD': 'https://en.wikipedia.org/wiki/CI/CD',

  // Mobile & Frontend
  'React Native': 'https://en.wikipedia.org/wiki/React_Native',
  'Expo': 'https://en.wikipedia.org/wiki/React_Native',
  'Expo Router': 'https://en.wikipedia.org/wiki/React_Native',
  'EAS Build': 'https://en.wikipedia.org/wiki/React_Native',
  'Flutter': 'https://en.wikipedia.org/wiki/Flutter_(software)',
  'Reanimated': 'https://en.wikipedia.org/wiki/React_Native',
  'Skia': 'https://en.wikipedia.org/wiki/Skia_Graphics_Engine',
  'Victory Native': 'https://en.wikipedia.org/wiki/Data_visualization',
  'NativeWind': 'https://en.wikipedia.org/wiki/Tailwind_CSS',
  'React Navigation': 'https://en.wikipedia.org/wiki/React_Native',
  'TypeScript': 'https://en.wikipedia.org/wiki/TypeScript',
  'JavaScript': 'https://en.wikipedia.org/wiki/JavaScript',
  'React': 'https://en.wikipedia.org/wiki/React_(software)',
  'Next.js': 'https://en.wikipedia.org/wiki/Next.js',
  'Tailwind CSS': 'https://en.wikipedia.org/wiki/Tailwind_CSS',
  'Redux': 'https://en.wikipedia.org/wiki/Redux_(JavaScript_library)',
  'i18next': 'https://en.wikipedia.org/wiki/Internationalization_and_localization',
  'AsyncStorage': 'https://en.wikipedia.org/wiki/React_Native',

  // Infrastructure & Tools
  'Docker': 'https://en.wikipedia.org/wiki/Docker_(software)',
  'Nginx': 'https://en.wikipedia.org/wiki/Nginx',
  'Git': 'https://en.wikipedia.org/wiki/Git',
  'Linux': 'https://en.wikipedia.org/wiki/Linux',

  // AI & Concepts
  'Gemini AI': 'https://en.wikipedia.org/wiki/Gemini_(chatbot)',
  'Artificial intelligence': 'https://en.wikipedia.org/wiki/Artificial_intelligence',
  'FLAC': 'https://en.wikipedia.org/wiki/FLAC',
  'Opus': 'https://en.wikipedia.org/wiki/Opus_(audio_format)',
  'Tangier': 'https://en.wikipedia.org/wiki/Tangier',
  'Morocco': 'https://en.wikipedia.org/wiki/Morocco',
  'Mohammed VI Polytechnic University': 'https://en.wikipedia.org/wiki/Mohammed_VI_Polytechnic_University',
  'UM6P': 'https://en.wikipedia.org/wiki/Mohammed_VI_Polytechnic_University',
  'IzyDesk': 'https://izydesk.fr',
  'izydesk.fr': 'https://izydesk.fr',
  'YouCode': 'https://youcode.ma',
  'Simplon.co': 'https://en.wikipedia.org/wiki/Simplon.co',
};

export const getWikiUrl = (term: string): string => {
  if (WIKIPEDIA_LINKS[term]) {
    return WIKIPEDIA_LINKS[term];
  }
  // Default to Wikipedia search URL if not found in map
  return `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(term)}`;
};
