import React, { useState, useEffect } from 'react';
import { Play, Plus, Clock, Flame, Check } from 'lucide-react';
import { ANIME_DATA, getStreamingRedirectUrl, getAnimeBackdrop } from '../data/animeData';

export default function Hero({ onAnimeClick, onWatchClick, watchlist, toggleWatchlist }) {
  // Feature slides
  const featuredIds = ['solo-leveling', 'cyberpunk-edgerunners', 'jujutsu-kaisen'];
  const featuredAnimes = ANIME_DATA.filter((a) => featuredIds.includes(a.id));
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState('opacity-100 scale-100');
  const [countdownTime, setCountdownTime] = useState({ hrs: 0, mins: 23, secs: 47 });

  const activeAnime = featuredAnimes[currentIndex] || featuredAnimes[0];

  // Auto slide effect
  useEffect(() => {
    const slideTimer = setInterval(() => {
      handleNextSlide();
    }, 9000); // 9 seconds rotation

    return () => clearInterval(slideTimer);
  }, [currentIndex]);

  // Next Slide helper with custom zoom-fade transitions
  const handleNextSlide = (specificIndex = null) => {
    setFadeState('opacity-0 scale-105 blur-sm');
    setTimeout(() => {
      if (specificIndex !== null) {
        setCurrentIndex(specificIndex);
      } else {
        setCurrentIndex((prev) => (prev + 1) % featuredAnimes.length);
      }
      setFadeState('opacity-100 scale-100 blur-0');
    }, 450); // duration matching transitions
  };

  // Live ticking countdown for next episode
  useEffect(() => {
    const clockTimer = setInterval(() => {
      setCountdownTime((prev) => {
        let { hrs, mins, secs } = prev;
        if (secs > 0) {
          secs--;
        } else {
          secs = 59;
          if (mins > 0) {
            mins--;
          } else {
            mins = 59;
            if (hrs > 0) {
              hrs--;
            } else {
              // Loop countdown for demo purposes
              hrs = 1;
              mins = 45;
              secs = 0;
            }
          }
        }
        return { hrs, mins, secs };
      });
    }, 1000);

    return () => clearInterval(clockTimer);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, '0');

  const inWatchlist = watchlist.some((a) => a.id === activeAnime.id);

  return (
    <section className="relative w-full h-[85vh] lg:h-[75vh] xl:h-[80vh] overflow-hidden select-none bg-black">
      
      {/* Background Cinematic Image layers with slow zooming (Ken Burns Effect) */}
      <div className="absolute inset-0 z-0">
        <div className={`w-full h-full relative transition-all duration-600 ease-out ${fadeState}`}>
          {/* Main Backdrop Poster */}
          <img
            src={getAnimeBackdrop(activeAnime)}
            alt={activeAnime.title}
            className="w-full h-full object-cover object-top brightness-[0.55] saturate-[1.1] scale-105 animate-pulse-slow"
            referrerPolicy="no-referrer"
          />
          {/* Cinematic lighting overlay layers */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/20 to-transparent"></div>
          
          {/* Ambient Cyberpunk Color Pulses inside the active slide */}
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-neon-pink/15 rounded-full blur-[90px] mix-blend-screen animate-pulse pointer-events-none"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-neon-blue/15 rounded-full blur-[90px] mix-blend-screen animate-pulse pointer-events-none"></div>
        </div>
      </div>

      {/* Hero Interactive Panels */}
      <div className="relative z-10 w-full h-full px-6 md:px-10 lg:pl-32 xl:pl-36 flex flex-col justify-end pb-8 lg:pb-12">
        
        {/* Decorative Top Hologram Scanline effect on Banner */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-neon-pink/35 to-transparent shadow-[0_0_10px_#ff007f]"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end w-full">
          
          {/* Left panel: Info and Actions */}
          <div className={`lg:col-span-8 space-y-4 md:space-y-5 transition-all duration-500 ${fadeState}`}>
            
            {/* Tagline category label */}
            <div className="flex items-center gap-3">
              <span className="bg-neon-pink/20 text-neon-pink border border-neon-pink/35 px-3 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase shadow-[0_0_8px_rgba(255,0,127,0.2)]">
                NEW EPISODE
              </span>
              <span className="text-white/60 text-xs font-semibold flex items-center gap-1.5">
                <Flame size={12} className="text-neon-blue" />
                Air-Time Primetime
              </span>
            </div>

            {/* Cinematic Big Title */}
            <div className="space-y-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-wide text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] uppercase">
                {activeAnime.title}
              </h1>
              {activeAnime.japaneseTitle && (
                <p className="text-xs md:text-sm font-semibold text-neon-blue tracking-[0.25em] glow-text-blue uppercase opacity-90">
                  {activeAnime.japaneseTitle}
                </p>
              )}
            </div>

            {/* Metas & Genre pills */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-white/90">
              <span className="text-neon-pink font-bold">★ {activeAnime.rating} score</span>
              <span className="w-1 h-1 bg-white/20 rounded-full"></span>
              <span>{activeAnime.season}</span>
              <span className="w-1 h-1 bg-white/20 rounded-full"></span>
              <span>{activeAnime.episode}</span>
              <span className="w-1 h-1 bg-white/20 rounded-full"></span>
              <span>{activeAnime.year}</span>
              
              <div className="flex flex-wrap gap-1.5 ml-2">
                {activeAnime.genres.map((g) => (
                  <span key={g} className="bg-white/5 border border-white/10 px-2 py-0.5 rounded text-[9px] uppercase tracking-wider">
                    {g}
                  </span>
                ))}
              </div>
            </div>

            {/* Synopsis Description */}
            <p className="text-xs md:text-sm text-white/70 max-w-xl leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)] line-clamp-3">
              {activeAnime.synopsis}
            </p>

            {/* Hero Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Watch Now Button */}
              <button
                onClick={() => onWatchClick(activeAnime)}
                className="bg-neon-pink hover:bg-[#d9006b] text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-lg flex items-center gap-2.5 shadow-[0_0_15px_rgba(255,0,127,0.4)] hover:shadow-[0_0_25px_rgba(255,0,127,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Play size={14} fill="white" />
                Watch Now
              </button>

              {/* Add to List Button */}
              <button
                onClick={() => toggleWatchlist(activeAnime)}
                className="bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-white/25 font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-lg flex items-center gap-2.5 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                {inWatchlist ? (
                  <>
                    <Check size={14} className="text-neon-blue" />
                    In My List
                  </>
                ) : (
                  <>
                    <Plus size={14} />
                    Add to List
                  </>
                )}
              </button>
            </div>

            {/* Carousel navigation slide dots indicators */}
            <div className="flex gap-2 pt-4">
              {featuredAnimes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNextSlide(idx)}
                  className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-neon-pink shadow-[0_0_8px_#ff007f]' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

          </div>

          {/* Right panel: Live countdown & Trending rankings */}
          <div className="lg:col-span-4 flex flex-col gap-6 w-full xl:pl-6">
            
            {/* 1. Next Episode Countdown Widget */}
            {activeAnime.upcomingSchedule && (
              <div className="glass-hologram p-4 rounded-xl relative overflow-hidden group select-none animate-glow-pulse">
                
                {/* Neon bottom/top blinking dots */}
                <div className="absolute top-2 right-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-neon-pink rounded-full animate-ping"></span>
                  <span className="text-[8px] font-bold text-neon-pink tracking-widest uppercase">AIRING</span>
                </div>

                <div className="flex items-center gap-2 text-white/50 text-[10px] font-bold tracking-widest uppercase">
                  <Clock size={12} className="text-neon-blue" />
                  NEXT EPISODE AIRING
                </div>

                {/* Clock face ticking */}
                <div className="flex items-center gap-1 text-2xl xl:text-3xl font-mono font-bold text-white tracking-widest my-2.5 glow-text-blue">
                  <span>{formatNumber(countdownTime.hrs)}</span>
                  <span className="animate-pulse text-neon-blue">:</span>
                  <span>{formatNumber(countdownTime.mins)}</span>
                  <span className="animate-pulse text-neon-blue">:</span>
                  <span className="text-neon-pink drop-shadow-[0_0_5px_#ff007f]">{formatNumber(countdownTime.secs)}</span>
                </div>

                <div className="text-[9px] font-semibold text-white/40 tracking-wider">
                  SCHEDULED RELEASE: {activeAnime.upcomingSchedule.label} (JST)
                </div>
              </div>
            )}

            {/* 2. Trending Now rank widgets */}
            <div className="glass bg-[#050505]/60 backdrop-blur-xl border border-white/5 rounded-xl p-4 space-y-3">
              <h3 className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase border-b border-white/5 pb-2">
                TRENDING NOW
              </h3>
              
              <div className="flex flex-col gap-2.5">
                {featuredAnimes.map((anime, rankIdx) => (
                  <div
                    key={anime.id}
                    onClick={() => handleNextSlide(rankIdx)}
                    className={`flex items-center justify-between p-2 rounded-lg border transition-all duration-300 cursor-pointer ${
                      currentIndex === rankIdx 
                        ? 'bg-neon-pink/10 border-neon-pink/30 shadow-[inset_0_0_8px_rgba(255,0,127,0.15)] scale-[1.02]' 
                        : 'bg-white/[0.01] border-white/5 hover:bg-white/[0.03] hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`font-display font-bold text-sm tracking-wide ${
                        currentIndex === rankIdx ? 'text-neon-pink' : 'text-white/20'
                      }`}>
                        {formatNumber(rankIdx + 1)}
                      </span>
                      <span className={`text-xs font-bold truncate max-w-[120px] xl:max-w-[160px] ${
                        currentIndex === rankIdx ? 'text-white' : 'text-white/60'
                      }`}>
                        {anime.title}
                      </span>
                    </div>

                    <span className="text-[9px] font-semibold bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-white/50">
                      ★ {anime.rating}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
