import React, { useState, memo, useEffect, useRef } from 'react';
import type { ProjectTheme } from '../../data/mobileThemeConfig';
import { 
  Wifi, Battery, Play, ChevronLeft, ChevronRight, Activity, 
  Calendar, Heart, Navigation, Dumbbell, Footprints, Bike, 
  Database, Zap, Trophy, Clock, Users, Flame, Video, Image as ImageIcon
} from 'lucide-react';

interface Props {
  project: ProjectTheme;
}

const ZEPHYR_TOP_ARTISTS = [
  { rank: 1, name: 'Queen', plays: 44, pct: 100 },
  { rank: 2, name: 'Heart', plays: 42, pct: 95 },
  { rank: 3, name: 'Weezer', plays: 37, pct: 84 },
  { rank: 4, name: 'The Beatles', plays: 36, pct: 82 },
  { rank: 5, name: 'Radiohead', plays: 33, pct: 75 },
];

const CALENDAR_DAYS = [
  { day: 'L', num: 12 },
  { day: 'M', num: 13 },
  { day: 'M', num: 14 },
  { day: 'J', num: 15, active: true },
  { day: 'V', num: 16 },
  { day: 'S', num: 17 },
  { day: 'D', num: 18 },
];

export const PhoneFrame: React.FC<Props> = memo(({ project }) => {
  const isLight = project.themeStyle.mode === 'light';
  const [selectedScreenshotIndex, setSelectedScreenshotIndex] = useState(0);
  const [showRideMateVideo, setShowRideMateVideo] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  // Reset screenshot index and video toggle whenever the active project changes
  useEffect(() => {
    setSelectedScreenshotIndex(0);
    setShowRideMateVideo(false);
  }, [project.id]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent, totalScreens: number) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    const SWIPE_THRESHOLD = 45;
    if (diff > SWIPE_THRESHOLD) {
      setSelectedScreenshotIndex((prev) => (prev < totalScreens - 1 ? prev + 1 : 0));
    } else if (diff < -SWIPE_THRESHOLD) {
      setSelectedScreenshotIndex((prev) => (prev > 0 ? prev - 1 : totalScreens - 1));
    }
    touchStartXRef.current = null;
  };

  const isScreenshotApp = project.id === 'resaly' || project.id === 'ridemate';

  return (
    <div className="relative flex flex-col items-center w-full">
      {/* Modern Flagship Smartphone Chassis with Responsive Max-Width */}
      <div className={`relative w-full max-w-[340px] sm:max-w-[360px] h-[660px] sm:h-[700px] rounded-[48px] sm:rounded-[52px] p-3 sm:p-3.5 shadow-2xl transition-all duration-500 ${
        isLight
          ? 'bg-[#ded2c7] border-4 border-[#c8b7a9] ring-1 ring-black/10 shadow-[0_25px_60px_-15px_rgba(42,27,20,0.22)]'
          : 'bg-[#0c0d12] border-4 border-[#24283b]/60 ring-1 ring-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]'
      }`}>
        {/* Outer Titanium Side Reflection */}
        <div className={`absolute inset-0 rounded-[44px] sm:rounded-[48px] pointer-events-none ring-1 ring-inset ${
          isLight ? 'ring-white/40' : 'ring-white/10'
        }`} />

        {/* Screen Bezel Container */}
        <div className={`relative w-full h-full rounded-[38px] sm:rounded-[42px] overflow-hidden flex flex-col justify-between select-none border transition-colors duration-500 ${
          isLight 
            ? 'bg-[#fcf8f4] text-[#2a1b14] border-[#e8d8cc]' 
            : 'bg-[#000000] text-white border-white/5'
        }`}>
          {/* Status Bar */}
          <div className={`pt-3 px-6 flex items-center justify-between text-[11px] font-semibold z-30 transition-colors ${
            isScreenshotApp 
              ? isLight ? 'text-[#3a281e] bg-gradient-to-b from-white/70 to-transparent' : 'text-zinc-200 bg-gradient-to-b from-black/70 to-transparent'
              : isLight ? 'text-[#4a3930]' : 'text-zinc-300'
          }`}>
            <span>09:41</span>
            
            {/* Dynamic Island */}
            <div className={`absolute left-1/2 -translate-x-1/2 top-2.5 h-6 px-3 rounded-full flex items-center gap-2 shadow-md ${
              isLight
                ? 'bg-[#1e1511] border border-black/20 text-white'
                : 'bg-zinc-950 border border-white/10 text-white'
            }`}>
              {project.themeStyle.phoneDynamicIslandContent.type === 'stats' && (
                <>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] text-zinc-300 font-mono">{project.themeStyle.phoneDynamicIslandContent.title}</span>
                  <Activity className="w-2.5 h-2.5 text-indigo-400" />
                </>
              )}
              {project.themeStyle.phoneDynamicIslandContent.type === 'navigation' && (
                <>
                  <Navigation className="w-2.5 h-2.5 text-[#c2f019]" />
                  <span className="text-[10px] text-[#c2f019] font-mono">3 min • Malabata</span>
                </>
              )}
              {project.themeStyle.phoneDynamicIslandContent.type === 'fitness' && (
                <>
                  <Heart className="w-2.5 h-2.5 text-[#FF99CC] fill-[#FF99CC]" />
                  <span className="text-[10px] text-[#FF99CC] font-mono">Streak 145j</span>
                </>
              )}
              {project.themeStyle.phoneDynamicIslandContent.type === 'booking' && (
                <>
                  <Calendar className="w-2.5 h-2.5 text-[#de854f]" />
                  <span className="text-[10px] text-[#de854f] font-mono">Resaly Pro Live</span>
                </>
              )}
            </div>

            <div className={`flex items-center gap-1.5 ${isScreenshotApp ? (isLight ? 'text-[#3a281e]' : 'text-zinc-200') : (isLight ? 'text-[#7e695d]' : 'text-zinc-400')}`}>
              <Wifi className="w-3 h-3" />
              <span className="text-[10px] font-mono font-bold">5G</span>
              <Battery className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* SCREEN CONTENT AREA: FULL EDGE-TO-EDGE FOR SCREENSHOT APPS */}
          {isScreenshotApp ? (
            <div 
              onTouchStart={handleTouchStart}
              onTouchEnd={(e) => handleTouchEnd(e, project.screenshots.length)}
              className="absolute inset-0 w-full h-full overflow-hidden touch-pan-y"
            >
              {/* RideMate Video Player Override */}
              {project.id === 'ridemate' && showRideMateVideo && project.videoUrl ? (
                <div className="absolute inset-0 w-full h-full z-20 bg-black flex flex-col pt-12 pb-6">
                  <iframe
                    src={project.videoUrl}
                    title="RideMate Video Demonstration"
                    className="w-full h-full flex-1"
                    allow="autoplay; encrypted-media"
                  />
                </div>
              ) : (
                /* Native Edge-to-Edge Screenshot Image with Zero Crookedness */
                <img
                  src={project.screenshots[selectedScreenshotIndex]?.imagePath || '/images/resaly/23613_edit.png'}
                  alt={project.screenshots[selectedScreenshotIndex]?.title || `${project.name} Screen`}
                  loading="eager"
                  className="w-full h-full object-cover object-top select-none animate-fadeIn"
                />
              )}

              {/* RideMate Video / Screens Switcher Floating Pill */}
              {project.id === 'ridemate' && project.videoUrl && (
                <button
                  onClick={() => setShowRideMateVideo(!showRideMateVideo)}
                  className={`absolute top-12 right-3 z-30 px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold flex items-center gap-1.5 shadow-lg backdrop-blur-md border transition-all active:scale-95 ${
                    showRideMateVideo
                      ? 'bg-[#c2f019] text-black border-[#c2f019]'
                      : 'bg-black/75 text-white border-white/25 hover:bg-black/90'
                  }`}
                  aria-label={showRideMateVideo ? 'Basculer vers les captures d’écran' : 'Lire la démonstration vidéo'}
                >
                  {showRideMateVideo ? (
                    <>
                      <ImageIcon className="w-3 h-3" />
                      <span>Screens</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 text-[#c2f019] fill-[#c2f019]" />
                      <span>Vidéo Démo</span>
                    </>
                  )}
                </button>
              )}

              {/* Left / Right Chevron Navigation Controls with Accessible Hit Target */}
              {(!showRideMateVideo || project.id !== 'ridemate') && (
                <>
                  <button
                    onClick={() => setSelectedScreenshotIndex((prev) => (prev > 0 ? prev - 1 : project.screenshots.length - 1))}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-80 hover:opacity-100 shadow-xl transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    title="Écran précédent"
                    aria-label="Écran précédent"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setSelectedScreenshotIndex((prev) => (prev < project.screenshots.length - 1 ? prev + 1 : 0))}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-80 hover:opacity-100 shadow-xl transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    title="Écran suivant"
                    aria-label="Écran suivant"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Floating Pagination Indicator Dots above Home Bar */}
                  <div 
                    role="group" 
                    aria-label="Sélecteur d'écran"
                    className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 flex items-center gap-1.5 shadow-xl"
                  >
                    {project.screenshots.map((s, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedScreenshotIndex(idx)}
                        className="p-1 relative flex items-center justify-center rounded-full focus-visible:outline-none"
                        aria-label={`Aller à l'écran ${idx + 1}: ${s.title}`}
                        aria-current={selectedScreenshotIndex === idx ? 'true' : undefined}
                      >
                        <span
                          className={`block h-1.5 rounded-full transition-all ${
                            selectedScreenshotIndex === idx
                              ? project.id === 'resaly' ? 'w-5 bg-[#de854f]' : 'w-5 bg-[#c2f019]'
                              : 'w-1.5 bg-white/40 hover:bg-white/70'
                          }`}
                        />
                      </button>
                    ))}
                  </div>

                  {/* Bottom Home Indicator Bar on Screenshot */}
                  <div className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 z-30 w-32 h-1 rounded-full ${isLight ? 'bg-black/25' : 'bg-white/40'}`} />
                </>
              )}
            </div>
          ) : (
            /* INTERACTIVE CODE MOCKUPS: ZEPHYR & HEALTHSPHERE */
            <div className="flex-1 overflow-y-auto px-3.5 py-2 scrollbar-none">
              {/* 3. ZEPHYR - MUSIC TELEMETRY DASHBOARD */}
            {project.id === 'zephyr' && (
              <div className="space-y-3 pt-1 animate-fadeIn text-left">
                {/* Header */}
                <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center">
                      <Zap className="w-3 h-3 text-indigo-400 fill-indigo-400" />
                    </div>
                    <span className="text-xs font-bold text-white tracking-tight font-display">Zephyr</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[9px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>TimescaleDB Ingestion</span>
                  </div>
                </div>

                {/* Hero Now Playing / Recent Scrobble Card */}
                <div className="p-3 rounded-2xl bg-[#0F0F14] border border-white/10 space-y-2.5 shadow-lg">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="font-mono text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-1">
                      <Clock className="w-3 h-3 text-indigo-400" /> DERNIER SCROBBLE
                    </span>
                    <span className="font-mono text-zinc-500 text-[9px]">Il y a 2m</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <img
                      src="/images/zephyr-hypnotize.jpg"
                      alt="System of a Down - Hypnotize"
                      className="w-12 h-12 rounded-xl object-cover border border-white/10 shadow-md"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-white truncate">Stealing Society</p>
                      <p className="text-[11px] text-zinc-400 truncate">System of a Down</p>
                      <p className="text-[9px] text-indigo-400 font-mono mt-0.5">Hypnotize (2005) • 28 plays</p>
                    </div>
                  </div>

                  {/* Playback progress */}
                  <div className="space-y-1">
                    <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full w-full" />
                    </div>
                    <div className="flex items-center justify-between text-[8px] font-mono text-zinc-500">
                      <span>02:34</span>
                      <span className="text-indigo-400">100% Ingested</span>
                      <span>02:34</span>
                    </div>
                  </div>
                </div>

                {/* 3-Column Metrics Bar */}
                <div className="grid grid-cols-3 gap-1.5 text-center">
                  <div className="p-2 rounded-xl bg-[#0F0F14] border border-white/10">
                    <p className="text-sm font-black text-white font-display">1,066</p>
                    <p className="text-[8px] text-zinc-500 font-mono">SCROBBLES</p>
                  </div>
                  <div className="p-2 rounded-xl bg-[#0F0F14] border border-white/10">
                    <p className="text-sm font-black text-indigo-300 font-display">114</p>
                    <p className="text-[8px] text-zinc-500 font-mono">ARTISTES</p>
                  </div>
                  <div className="p-2 rounded-xl bg-[#0F0F14] border border-white/10">
                    <p className="text-sm font-black text-amber-300 font-display">60h</p>
                    <p className="text-[8px] text-zinc-500 font-mono">ÉCOUTE</p>
                  </div>
                </div>

                {/* Top Artists Leaderboard */}
                <div className="p-3 rounded-2xl bg-[#0F0F14] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="font-mono text-zinc-400 font-bold uppercase tracking-wider flex items-center gap-1">
                      <Trophy className="w-3 h-3 text-amber-400" /> Top Artistes (Queen #1)
                    </span>
                    <span className="font-mono text-indigo-400 text-[9px]">44 scrobbles</span>
                  </div>

                  <div className="space-y-1.5 pt-0.5">
                    {ZEPHYR_TOP_ARTISTS.slice(0, 4).map((artist) => (
                      <div key={artist.name} className="flex items-center justify-between text-[10px]">
                        <div className="flex items-center gap-2">
                          <span className="w-4 font-mono text-[9px] text-zinc-500 font-bold">#{artist.rank}</span>
                          <span className="font-bold text-white">{artist.name}</span>
                        </div>
                        <span className="font-mono text-zinc-400 text-[9px]">{artist.plays} plays</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Latency Footer */}
                <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-[9px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1"><Database className="w-3 h-3 text-indigo-400" /> TimescaleDB</span>
                  <span className="text-indigo-300">time_bucket &lt; 8.4ms</span>
                </div>
              </div>
            )}

            {/* 4. HEALTHSPHERE - OFFLINE FITNESS TELEMETRY */}
            {project.id === 'healthsphere' && (
              <div className="space-y-3 pt-1 animate-fadeIn text-left">
                {/* Header with Streak */}
                <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
                  <div>
                    <span className="text-xs font-bold text-white tracking-tight font-display">HealthSphere</span>
                    <p className="text-[9px] text-[#FF99CC] font-mono font-medium">Challenger • Série 145j 🔥</p>
                  </div>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#FF99CC]/15 text-[#FF99CC] font-bold">
                    SQLite Local
                  </span>
                </div>

                {/* 7-Day Calendar Strip */}
                <div className="grid grid-cols-7 gap-1 text-center">
                  {CALENDAR_DAYS.map((d, i) => (
                    <div
                      key={i}
                      className={`p-1 rounded-lg border transition-all ${
                        d.active
                          ? 'bg-[#FF99CC] border-[#FF99CC] text-black font-bold'
                          : 'bg-white/[0.03] border-white/5 text-zinc-400'
                      }`}
                    >
                      <p className="text-[8px] font-mono">{d.day}</p>
                      <p className="text-[10px] font-bold">{d.num}</p>
                    </div>
                  ))}
                </div>

                {/* Daily Rings & Metrics */}
                <div className="grid grid-cols-3 gap-1.5 text-center">
                  <div className="p-2 rounded-xl bg-[#141416] border border-white/10">
                    <p className="text-sm font-black text-[#FF99CC] font-display">342</p>
                    <p className="text-[8px] text-zinc-500 font-mono">KCAL BRÛLÉES</p>
                  </div>
                  <div className="p-2 rounded-xl bg-[#141416] border border-white/10">
                    <p className="text-sm font-black text-white font-display">45m</p>
                    <p className="text-[8px] text-zinc-500 font-mono">DURÉE TOTALE</p>
                  </div>
                  <div className="p-2 rounded-xl bg-[#141416] border border-white/10">
                    <p className="text-sm font-black text-emerald-400 font-display">3</p>
                    <p className="text-[8px] text-zinc-500 font-mono">SÉANCES</p>
                  </div>
                </div>

                {/* Today's Workout Sessions */}
                <div className="space-y-1.5">
                  <p className="text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-wider">Séances Enregistrées</p>

                  <div className="p-2.5 rounded-xl bg-[#141416] border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#FF99CC]/15 border border-[#FF99CC]/30 flex items-center justify-center text-[#FF99CC]">
                        <Footprints className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-white">Course Matinale</p>
                        <p className="text-[9px] text-zinc-400 font-mono">30 min • 210 kcal</p>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono text-emerald-400 font-bold">Complété</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#141416] border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                        <Dumbbell className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-white">Développé Couché</p>
                        <p className="text-[9px] text-zinc-400 font-mono">45 min • 4 séries • 85kg</p>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono text-emerald-400 font-bold">Complété</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#141416] border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400">
                        <Bike className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-white">Cardio Cyclisme</p>
                        <p className="text-[9px] text-zinc-400 font-mono">60 min • Endurance</p>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono text-amber-400 font-bold">Planifié</span>
                  </div>
                </div>

                {/* Storage Engine Footer */}
                <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-[9px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1"><Database className="w-3 h-3 text-[#FF99CC]" /> Drizzle ORM + SQLite</span>
                  <span className="text-[#FF99CC]">100% Offline-First</span>
                </div>
              </div>
            )}
          </div>
        )}

          {/* Device Home Indicator Bar (for interactive code apps) */}
          {!isScreenshotApp && (
            <div className="py-2 flex justify-center z-30">
              <div className={`w-32 h-1 rounded-full ${isLight ? 'bg-black/25' : 'bg-white/40'}`} />
            </div>
          )}
        </div>
      </div>

      {/* Screen Caption & Story Card Below Phone Frame */}
      {isScreenshotApp && project.screenshots && project.screenshots.length > 0 && !showRideMateVideo && (
        <div className={`mt-3 w-full max-w-[340px] sm:max-w-[360px] p-3.5 rounded-2xl border text-left transition-all shadow-sm ${project.themeStyle.cardBg} ${project.themeStyle.cardBorder}`}>
          <div className="flex items-center justify-between gap-2">
            <h4 className="text-xs font-bold truncate font-display" style={{ color: project.themeStyle.accentHex }}>
              {project.screenshots[selectedScreenshotIndex]?.title}
            </h4>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
              isLight ? 'bg-black/5 text-[#8c776b]' : 'bg-white/10 text-zinc-300'
            }`}>
              {selectedScreenshotIndex + 1} / {project.screenshots.length}
            </span>
          </div>
          <p className={`text-xs mt-1 leading-relaxed ${project.themeStyle.textMuted}`}>
            {project.screenshots[selectedScreenshotIndex]?.caption}
          </p>
        </div>
      )}
    </div>
  );
});

export default PhoneFrame;
