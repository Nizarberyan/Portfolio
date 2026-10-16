export interface ProjectTheme {
  id: 'zephyr' | 'ridemate' | 'healthsphere' | 'resaly';
  name: string;
  tagline: string;
  category: string;
  year: string;
  iconName: 'Music' | 'Navigation' | 'Activity' | 'Calendar' | 'BarChart2';
  badge: string;
  themeStyle: {
    mode: 'dark' | 'light';
    themeClass: string;
    bgBase: string;
    bgAccentGlow: string;
    primaryColor: string;
    secondaryColor: string;
    accentHex: string;
    textMain: string;
    textMuted: string;
    textSubtle: string;
    cardBg: string;
    cardBorder: string;
    cardRadius: string;
    buttonStyle: string;
    secondaryButtonStyle: string;
    headerBg: string;
    dockBg: string;
    phoneDynamicIslandContent: {
      title: string;
      subtitle: string;
      type: 'audio' | 'navigation' | 'fitness' | 'booking' | 'stats';
    };
    ambientThemeDescription: string;
  };
  metrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  techStack: {
    name: string;
    role: string;
    highlight?: boolean;
  }[];
  description: string;
  architectureHighlights: {
    title: string;
    description: string;
    badge: string;
  }[];
  githubUrl: string;
  frontendGithubUrl?: string;
  backendGithubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  videoShareUrl?: string;
  screenshots: {
    id: string;
    title: string;
    caption: string;
    imagePath?: string;
  }[];
}

export const mobileProjects: ProjectTheme[] = [
  {
    id: 'resaly',
    name: 'Resaly Pro',
    tagline: 'Salon & Appointment Client with Real-Time Booking',
    category: 'Enterprise Client & B2B Solutions',
    year: '2025',
    iconName: 'Calendar',
    badge: 'Flutter Client • 15+ Local Salons',
    themeStyle: {
      mode: 'light',
      themeClass: 'theme-resaly',
      bgBase: 'from-[#fdf8f4] via-[#f7eee6] to-[#f0dfd3]',
      bgAccentGlow: 'radial-gradient(circle at 50% 15%, rgba(222, 133, 79, 0.18) 0%, transparent 60%)',
      primaryColor: 'text-[#de854f]',
      secondaryColor: 'text-[#c6692f]',
      accentHex: '#de854f',
      textMain: 'text-[#2a1b14]',
      textMuted: 'text-[#68554b]',
      textSubtle: 'text-[#9c897f]',
      cardBg: 'bg-[#ffffff]/95 backdrop-blur-md shadow-sm shadow-[#2a1b14]/5',
      cardBorder: 'border-[#ebd9cc]',
      cardRadius: 'rounded-2xl',
      buttonStyle: 'bg-[#c65318] hover:bg-[#ad4510] text-white font-bold shadow-md shadow-[#c65318]/25 rounded-xl',
      secondaryButtonStyle: 'bg-white hover:bg-[#faefe8] text-[#8c370b] border-2 border-[#de854f]/35 font-bold shadow-sm rounded-xl',
      headerBg: 'bg-[#fdf8f4]/90 border-[#ebd9cc] text-[#2a1b14]',
      dockBg: 'bg-[#ffffff]/95 border-[#ead8cb] text-[#68554b] shadow-xl shadow-[#2a1b14]/10',
      phoneDynamicIslandContent: {
        title: 'Tableau de Bord Pro',
        subtitle: 'Solde: 4,587,866 MAD',
        type: 'booking',
      },
      ambientThemeDescription: 'French Atelier Aesthetic & High-Concurrency Booking',
    },
    metrics: [
      { label: 'Chiffre d’Affaires Pro', value: '4.58M MAD', detail: 'Solde géré en direct sur l’app' },
      { label: 'Salons Actifs', value: '15+ Salons', detail: 'Tanger & Région Nord Maroc' },
      { label: 'Gain d’Efficacité', value: '+25%', detail: 'Zéro chevauchement de rendez-vous' },
      { label: 'Framework & Engine', value: 'Flutter / Dart', detail: 'Rendu 60 FPS iOS & Android' },
    ],
    techStack: [
      { name: 'Flutter', role: 'Multi-Platform Client', highlight: true },
      { name: 'Dart', role: 'Type-Safe App Logic', highlight: true },
      { name: 'Symfony', role: 'Enterprise Backend Engine', highlight: true },
      { name: 'MySQL', role: 'Relational Scheduling DB' },
      { name: 'RESTful API', role: 'Real-Time Sync Protocol' },
      { name: 'Provider State', role: 'Reactive Calendar Updates' },
      { name: 'Push Notifications', role: 'Appointment Reminders' },
    ],
    description:
      'Application mobile Flutter professionnelle conçue pour les salons de beauté et instituts de coiffure au Maroc. Offre un tableau de bord financier en temps réel avec courbes de réservation, gestion multi-stylistes sans conflits d’horaires, et flux de réservation instantané couplé à une API REST Symfony.',
    architectureHighlights: [
      {
        title: 'Verrouillage de Créneau sans Conflit en Temps Réel',
        description: 'Contrôle de concurrence optimiste empêchant les réservations simultanées entre clients sur un même collaborateur.',
        badge: 'Zéro Conflits',
      },
      {
        title: 'Optimisation du Render Tree Flutter (60 FPS)',
        description: 'Grilles de calendrier multi-colonnes fluides et réactives avec widgets personnalisés et gestion d’état Provider sans latence.',
        badge: 'Rendu 60 FPS',
      },
      {
        title: 'Intégration Entreprise Symfony REST Haute Performance',
        description: 'Sérialisation allégée des charges utiles permettant des confirmations de rendez-vous 25% plus rapides même sur réseau mobile 3G/4G.',
        badge: '+25% Rapidité',
      },
    ],
    githubUrl: 'https://izydesk.fr',
    screenshots: [
      {
        id: 'dashboard',
        title: 'Tableau de Bord & Analytics',
        caption: 'Solde disponible en MAD, courbe des réservations hebdomadaire et liste des rendez-vous (Maquillage, Épilation, Manucure)',
        imagePath: '/images/resaly/23613_edit.png',
      },
      {
        id: 'welcome',
        title: 'Splash Screen & Identité Visuelle',
        caption: 'Design soyeux caramel et terracotta avec logo épuré Resaly et accès Se connecter / Créer un compte',
        imagePath: '/images/resaly/23608_edit.png',
      },
      {
        id: 'salon-login',
        title: 'Portail Professionnel Salon',
        caption: 'Interface d’authentification sécurisée dédiée aux propriétaires d’établissements (Nom du salon & Mot de passe)',
        imagePath: '/images/resaly/23606_edit.png',
      },
      {
        id: 'client-register',
        title: 'Inscription Client & Authentification',
        caption: 'Création de compte client avec vérification anti-robot et connexion sociale rapide Google & Facebook',
        imagePath: '/images/resaly/23605_edit.jpg',
      },
    ],
  },
  {
    id: 'ridemate',
    name: 'RideMate',
    tagline: 'Real-Time Sustainable Mobility & Carpooling App',
    category: 'Real-Time Transit & Maps',
    year: '2026',
    iconName: 'Navigation',
    badge: '500+ Active Users • Live GPS',
    themeStyle: {
      mode: 'dark',
      themeClass: 'theme-ridemate',
      bgBase: 'from-[#0a0f0d] via-[#0d1410] to-[#080c0a]',
      bgAccentGlow: 'radial-gradient(circle at 50% 15%, rgba(194, 240, 25, 0.12) 0%, transparent 60%)',
      primaryColor: 'text-[#c2f019]',
      secondaryColor: 'text-emerald-400',
      accentHex: '#c2f019',
      textMain: 'text-white',
      textMuted: 'text-zinc-300',
      textSubtle: 'text-zinc-500',
      cardBg: 'bg-[#111914]/90 backdrop-blur-md shadow-xl shadow-black/20',
      cardBorder: 'border-white/10',
      cardRadius: 'rounded-2xl',
      buttonStyle: 'bg-[#c2f019] hover:bg-[#aee00b] text-black font-extrabold shadow-lg shadow-[#c2f019]/25 rounded-xl',
      secondaryButtonStyle: 'bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-xl',
      headerBg: 'bg-[#0a0f0d]/85 border-white/10 text-white',
      dockBg: 'bg-[#080d0a]/90 border-white/15 text-zinc-300 shadow-2xl shadow-black/60',
      phoneDynamicIslandContent: {
        title: 'Driver En Route • San Francisco',
        subtitle: 'Toyota Prius (4.9 ★) • 3 min',
        type: 'navigation',
      },
      ambientThemeDescription: 'Neon Cyber Transit & Geospatial WebSockets',
    },
    metrics: [
      { label: 'Active Commuters', value: '500+', detail: 'Verified peer carpoolers' },
      { label: 'Location Sync Latency', value: '< 200ms', detail: 'WebSocket real-time channel' },
      { label: 'CO2 Offset Estimated', value: '2.4 Tons', detail: 'Shared urban vehicle miles' },
      { label: 'Push Delivery Rate', value: '99.4%', detail: 'Instant driver match alerts' },
    ],
    techStack: [
      { name: 'React Native', role: 'Mobile Framework', highlight: true },
      { name: 'Expo', role: 'Toolchain & EAS', highlight: true },
      { name: 'TypeScript', role: 'Strict Type System' },
      { name: 'WebSockets', role: 'Real-Time Geo Sync', highlight: true },
      { name: 'Node.js', role: 'Backend Microservices' },
      { name: 'PostGIS / PostgreSQL', role: 'Spatial Route Matching' },
      { name: 'Mapbox / Google Maps', role: 'Dynamic Polylines & Navigation' },
      { name: 'Reanimated', role: 'Gesture Physics & Sheet Transitions' },
    ],
    description:
      'A cross-platform carpooling platform designed to reduce urban commuter congestion in Morocco. Integrates real-time geolocation tracking with geospatial indexing, push notifications for instant ride acceptance, secure multi-token auth, and synchronized mobile-to-web coordination.',
    architectureHighlights: [
      {
        title: 'Real-Time Spatial Geospatial Matching',
        description: 'PostGIS queries match drivers with prospective riders along active corridors, trimming average commuter wait times by 30%.',
        badge: 'Spatial Indexing',
      },
      {
        title: 'Resilient WebSocket Connection Fallback',
        description: 'Ensures zero dropped location updates even under fluctuating 3G/4G network transitions common during transit.',
        badge: '99.9% Reliability',
      },
      {
        title: 'Multi-lingual Internationalization (Arabic, French, English)',
        description: 'Fully responsive right-to-left (RTL) layout switching for Arabic speakers combined with localized push notifications.',
        badge: 'Full RTL Support',
      },
    ],
    githubUrl: 'https://github.com/Nizarberyan/RideMate-mobile',
    frontendGithubUrl: 'https://github.com/Nizarberyan/RideMate-mobile',
    backendGithubUrl: 'https://github.com/Nizarberyan/RideMateV2',
    videoUrl: 'https://drive.google.com/file/d/1OaZHDXGaL-055WF-CnKm0NFxSeG59SMt/preview',
    videoShareUrl: 'https://drive.google.com/file/d/1OaZHDXGaL-055WF-CnKm0NFxSeG59SMt/view?usp=sharing',
    screenshots: [
      {
        id: 'dashboard',
        title: 'Tableau de Bord & Trajets Récents',
        caption: 'Suivi de l’empreinte CO2 (24.5 kg économisés), statut des réservations en direct (Confirmé / En attente) et bascule Passager/Conducteur',
        imagePath: '/images/ridemate/ridemate-dashboard.png',
      },
      {
        id: 'details',
        title: 'Détails du Trajet & Carte GPS',
        caption: 'Visualisation cartographique interactive avec calcul d’itinéraire San Francisco ➔ Hayward et étapes précises',
        imagePath: '/images/ridemate/ridemate-details.png',
      },
      {
        id: 'search',
        title: 'Recherche Intra & Inter-Villes',
        caption: 'Filtrage par destination, date de départ et sélection de places disponibles en temps réel',
        imagePath: '/images/ridemate/ridemate-search.png',
      },
      {
        id: 'auth',
        title: 'Connexion Sécurisée & Passkey',
        caption: 'Authentification sans mot de passe avec Passkey biométrique et gestion des sessions',
        imagePath: '/images/ridemate/ridemate-auth.png',
      },
    ],
  },
  {
    id: 'zephyr',
    name: 'Zephyr Mobile',
    tagline: 'Self-Hosted Music Scrobbling & Stats Service',
    category: 'Music Analytics & Telemetry',
    year: '2025–2026',
    iconName: 'BarChart2',
    badge: 'TimescaleDB • ListenBrainz Ingestion',
    themeStyle: {
      mode: 'dark',
      themeClass: 'theme-zephyr',
      bgBase: 'from-[#0b0d13] via-[#0f1118] to-[#08090d]',
      bgAccentGlow: 'radial-gradient(circle at 50% 15%, rgba(99, 102, 241, 0.12) 0%, transparent 60%)',
      primaryColor: 'text-indigo-400',
      secondaryColor: 'text-slate-400',
      accentHex: '#6366f1',
      textMain: 'text-white',
      textMuted: 'text-zinc-300',
      textSubtle: 'text-zinc-500',
      cardBg: 'bg-white/[0.03] backdrop-blur-md shadow-xl shadow-black/20',
      cardBorder: 'border-white/10',
      cardRadius: 'rounded-2xl',
      buttonStyle: 'bg-indigo-600 hover:bg-indigo-500 text-white font-bold shadow-lg shadow-indigo-950/50 rounded-xl',
      secondaryButtonStyle: 'bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-xl',
      headerBg: 'bg-[#0b0d13]/85 border-white/10 text-white',
      dockBg: 'bg-[#090b10]/90 border-white/15 text-zinc-300 shadow-2xl shadow-black/60',
      phoneDynamicIslandContent: {
        title: 'Zephyr • Scrobbler Active',
        subtitle: '1,066 Scrobbles • TimescaleDB Live',
        type: 'stats',
      },
      ambientThemeDescription: 'Audiophile Listening Stats & TimescaleDB Telemetry',
    },
    metrics: [
      { label: 'Scrobbles Recorded', value: '1,066+', detail: 'TimescaleDB hypertable telemetry' },
      { label: 'Top Artist Plays', value: '44 (Queen)', detail: 'Time-series aggregation queries' },
      { label: 'Query Latency', value: '< 15ms', detail: 'Timescale time_bucket grouping' },
      { label: 'External APIs', value: '0 (Self-Hosted)', detail: 'Direct Navidrome SSO & cover proxy' },
    ],
    techStack: [
      { name: 'React Native', role: 'Mobile Framework', highlight: true },
      { name: 'Expo Router', role: 'File-based Navigation' },
      { name: 'Reanimated', role: 'Story & Chart Animations', highlight: true },
      { name: 'Go (Fiber)', role: 'Microservice Backend', highlight: true },
      { name: 'TimescaleDB', role: 'Hypertable Partitioning', highlight: true },
      { name: 'Navidrome Fork', role: 'Custom ListenBrainz Webhooks', highlight: true },
      { name: 'Subsonic SSO', role: 'Salt-Hashed Auth & Cover Proxy' },
      { name: 'Victory Native', role: 'Time-Series Histograms' },
    ],
    description:
      'A bespoke self-hosted music scrobbling, telemetry, and analytics companion (a Maloja alternative) engineered for personal media libraries. Connects to a custom-forked Navidrome server that injects user UUIDs and cover art IDs into native ListenBrainz scrobble webhooks, processes streams with Go (Fiber) into TimescaleDB hypertables, and visualizes listening habits, peak hours, and animated Spotify-Wrapped style Weekly Recaps without external third-party APIs.',
    architectureHighlights: [
      {
        title: 'Modified ListenBrainz Webhook Ingestion',
        description: 'Forked Navidrome to inject internal UUID, artist ID, cover ID, and playback duration into scrobble payloads sent to the Go backend.',
        badge: 'Native Go Ingestion',
      },
      {
        title: 'Zero External APIs & Subsonic Cover Proxy',
        description: 'Authentication is verified against Navidrome using Subsonic token/salt hashing, and cover artwork is served directly from the local library.',
        badge: '100% Self-Hosted',
      },
      {
        title: 'TimescaleDB Hypertable Analytics',
        description: 'Aggregates 1,066+ scrobbles using time_bucket partitioning for sub-15ms hourly distribution, timeline trends, and weekly recaps.',
        badge: 'Sub-15ms Latency',
      },
    ],
    githubUrl: 'https://github.com/Nizarberyan/Zephyr-mobile',
    frontendGithubUrl: 'https://github.com/Nizarberyan/Zephyr-mobile',
    backendGithubUrl: 'https://github.com/Nizarberyan/Zephyr',
    screenshots: [
      {
        id: 'soad',
        title: 'Live Scrobble Feed',
        caption: 'Recent scrobbles with cover art, track info, and completion percentage',
        imagePath: '/images/zephyr-hypnotize.jpg',
      },
      {
        id: 'queen',
        title: 'Top Artist Analytics',
        caption: 'Queen (#1 artist, 44 plays) time-series ranking and milestone stats',
        imagePath: '/images/zephyr-queen.jpg',
      },
      {
        id: 'tool',
        title: 'Hourly Distribution & Trends',
        caption: 'Listening habits and peak hours partitioned via TimescaleDB hypertables',
        imagePath: '/images/zephyr-tool.jpg',
      },
    ],
  },
  {
    id: 'healthsphere',
    name: 'HealthSphere',
    tagline: 'Offline-First Fitness Companion with Drizzle SQLite',
    category: 'Offline-First Fitness & Biometrics',
    year: '2025–2026',
    iconName: 'Activity',
    badge: 'SQLite + Drizzle ORM • NestJS',
    themeStyle: {
      mode: 'dark',
      themeClass: 'theme-healthsphere',
      bgBase: 'from-[#0e0e11] via-[#121212] to-[#0a0a0c]',
      bgAccentGlow: 'radial-gradient(circle at 50% 15%, rgba(255, 153, 204, 0.12) 0%, transparent 60%)',
      primaryColor: 'text-[#FF99CC]',
      secondaryColor: 'text-zinc-400',
      accentHex: '#FF99CC',
      textMain: 'text-zinc-100',
      textMuted: 'text-zinc-300',
      textSubtle: 'text-zinc-500',
      cardBg: 'bg-[#1A1A1A]/90 backdrop-blur-md shadow-xl shadow-black/20',
      cardBorder: 'border-white/10',
      cardRadius: 'rounded-2xl',
      buttonStyle: 'bg-[#FF99CC] hover:bg-[#ff80be] text-black font-extrabold shadow-lg shadow-[#FF99CC]/25 rounded-xl',
      secondaryButtonStyle: 'bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-xl',
      headerBg: 'bg-[#121212]/85 border-white/10 text-white',
      dockBg: 'bg-[#0f0f10]/90 border-white/15 text-zinc-300 shadow-2xl shadow-black/60',
      phoneDynamicIslandContent: {
        title: 'Challenger • Musculation',
        subtitle: '🔥 145 Day Streak • Level 2',
        type: 'fitness',
      },
      ambientThemeDescription: 'On-Device SQLite • Drizzle Migrations • NestJS',
    },
    metrics: [
      { label: 'Offline Availability', value: '100%', detail: 'Zero cloud latency to log workouts' },
      { label: 'Local DB Query Time', value: '<1.2ms', detail: 'Indexed SQLite + Drizzle ORM' },
      { label: 'Navigation Architecture', value: '3-Layer Matrix', detail: 'Expo Stack + Tabs + Side Drawer' },
      { label: 'Exercise Catalog', value: 'Multi-Modal', detail: 'Course, Musculation, Vélo, Natation, Yoga' },
    ],
    techStack: [
      { name: 'React Native', role: 'Mobile Framework', highlight: true },
      { name: 'Expo Router', role: 'Stack, Tabs & Drawer', highlight: true },
      { name: 'SQLite (expo-sqlite)', role: 'Embedded On-Device Storage', highlight: true },
      { name: 'Drizzle ORM', role: 'Type-Safe Schema & Migrations', highlight: true },
      { name: 'NestJS', role: 'Backend REST API & Seeder', highlight: true },
      { name: 'MongoDB / Mongoose', role: 'Cloud Directory & Favorites' },
      { name: 'NativeWind (Tailwind)', role: 'Design System & Dark Mode' },
      { name: 'Reanimated', role: 'Progress & Filter Transitions' },
    ],
    description:
      'An offline-first fitness companion engineered for uninterrupted gym performance. Powered by on-device SQLite with Drizzle ORM schema migrations for sub-2ms query execution and zero-latency logging. Built with Expo Router across a 3-layer navigation matrix (Stack, Bottom Tabs, Drawer), featuring a multi-discipline exercise catalog (Course, Musculation, Vélo, Natation, Yoga), and a NestJS cloud backend for exercises seed data and favorites.',
    architectureHighlights: [
      {
        title: 'Zero-Latency On-Device SQLite & Drizzle ORM',
        description: 'Replaced slow AsyncStorage with an embedded SQLite database using Drizzle ORM, ensuring instant read/writes with zero thread blocking.',
        badge: 'Sub-2ms DB',
      },
      {
        title: 'Tri-Tier Unified Navigation Hierarchy',
        description: 'Cleanly harmonized Expo Stack, bottom Tabs (Statistiques, Exercices, Favoris, Historique) and side Drawer (Profile, Settings, About) into a responsive one-thumb UX.',
        badge: 'Stack + Tabs + Drawer',
      },
      {
        title: 'NestJS Cloud Microservice & Exercise Catalog API',
        description: 'Engineered a companion NestJS backend with MongoDB and automated seed runner to deliver scalable exercise directories and favorite persistence.',
        badge: 'NestJS REST API',
      },
    ],
    githubUrl: 'https://github.com/Nizarberyan/HealthSphere',
    screenshots: [
      { id: 'stats', title: 'Tableau de Bord & Statistiques', caption: 'Suivi des séances, temps total et calories avec calendrier 7 jours et niveau Challenger' },
      { id: 'catalog', title: 'Catalogue Multi-Disciplines', caption: 'Filtres interactifs par sport (Course, Musculation, Vélo, Natation, Yoga) et cartes pastel' },
      { id: 'profile', title: 'Profil Utilisateur & Niveau 2', caption: 'Série de 145 jours de streak, badge Challenger et historique personnel' },
      { id: 'offline', title: 'Moteur Offline SQLite & Drizzle', caption: 'Stockage local persistant sur appareil sans aucune dépendance réseau pour logger' },
    ],
  },
];

export default mobileProjects;
