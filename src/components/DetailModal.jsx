import React, { useEffect, useState } from 'react';
import { X, Play, Heart, Star, Clock, User, MessageCircle, ArrowUpRight } from 'lucide-react';
import { ANIME_DATA, getStreamingRedirectUrl, getAnimeBackdrop, getAnimePoster } from '../data/animeData';

export default function DetailModal({ anime, onClose, onAnimeClick, onPlayClick, watchlist, toggleWatchlist }) {
  const [activeTab, setActiveTab] = useState('episodes');
  const isBookmarked = watchlist.some((a) => a.id === anime.id);

  // Recommendations: select anime sharing at least one genre, excluding the current one
  const recommendations = ANIME_DATA.filter(
    (a) => a.id !== anime.id && a.genres.some((g) => anime.genres.includes(g))
  ).slice(0, 4);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Reset tab to episodes when selecting a new recommended anime
  useEffect(() => {
    setActiveTab('episodes');
  }, [anime?.id]);

  if (!anime) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 overflow-y-auto no-scrollbar bg-[#050505]/90 backdrop-blur-md select-none">
      
      {/* Container Card Modal */}
      <div className="relative w-full max-w-4xl bg-[#0a0a0f] border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] flex flex-col my-8">
        
        {/* Floating Close Button Top Right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:text-cyber-red hover:border-cyber-red/30 transition-all duration-300 shadow-lg cursor-pointer"
          title="Close details"
        >
          <X size={20} />
        </button>

        {/* 1. Cinematic Autoplay Video Trailer Banner */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-black overflow-hidden">
          {anime.trailerId ? (
            <iframe
              src={`https://www.youtube.com/embed/${anime.trailerId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=${anime.trailerId}`}
              title={`${anime.title} Trailer`}
              className="absolute inset-0 w-full h-full object-cover scale-[1.35] brightness-[0.6] pointer-events-none"
              allow="autoplay; encrypted-media"
              frameBorder="0"
            ></iframe>
          ) : (
            <img
              src={getAnimeBackdrop(anime)}
              alt={anime.title}
              className="absolute inset-0 w-full h-full object-cover brightness-[0.5]"
              referrerPolicy="no-referrer"
            />
          )}

          {/* Gradients blending backdrop into the modal bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/80 via-transparent to-transparent"></div>

          {/* Core Info Floating over Banner bottom-left */}
          <div className="absolute bottom-4 left-6 md:left-8 space-y-2 md:space-y-3 max-w-xl">
            <span className="text-[10px] font-bold tracking-widest text-neon-blue bg-neon-blue/15 border border-neon-blue/20 px-2 py-0.5 rounded uppercase">
              {anime.year} Release
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold font-display text-white uppercase tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {anime.title}
            </h2>
            {anime.japaneseTitle && (
              <p className="text-[10px] md:text-xs font-semibold text-neon-pink tracking-[0.2em] glow-text-pink leading-none uppercase">
                {anime.japaneseTitle}
              </p>
            )}
          </div>
        </div>

        {/* 2. Modal Body content */}
        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 bg-[#0a0a0f] text-white">
          
          {/* Left Column: Descriptions, synopsis, tabs */}
          <div className="md:col-span-8 space-y-6">
            
            {/* Quick badges metrics */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-white/70 font-semibold">
              <span className="text-neon-blue flex items-center gap-1">
                <Star size={13} className="fill-neon-blue" />
                {anime.rating} MAL Rating
              </span>
              <span className="w-1 h-1 bg-white/10 rounded-full"></span>
              <span>{anime.season || 'Series'}</span>
              <span className="w-1 h-1 bg-white/10 rounded-full"></span>
              <span>{anime.episode || 'Full'}</span>
            </div>

            {/* Synopsis Description */}
            <p className="text-xs md:text-sm text-white/70 leading-relaxed">
              {anime.synopsis}
            </p>

            {/* Nav Tabs Selector */}
            <div className="flex border-b border-white/5 pb-0.5 gap-4 md:gap-6 text-xs font-bold uppercase tracking-wider">
              <button
                onClick={() => setActiveTab('episodes')}
                className={`py-2 relative transition-all duration-300 cursor-pointer ${
                  activeTab === 'episodes' ? 'text-neon-pink' : 'text-white/40 hover:text-white'
                }`}
              >
                Episodes List
                {activeTab === 'episodes' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-neon-pink shadow-[0_0_5px_#ff007f]"></span>
                )}
              </button>
              <button
                onClick={() => setActiveTab('cast')}
                className={`py-2 relative transition-all duration-300 cursor-pointer ${
                  activeTab === 'cast' ? 'text-neon-pink' : 'text-white/40 hover:text-white'
                }`}
              >
                Character Cast
                {activeTab === 'cast' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-neon-pink shadow-[0_0_5px_#ff007f]"></span>
                )}
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-2 relative transition-all duration-300 cursor-pointer ${
                  activeTab === 'reviews' ? 'text-neon-pink' : 'text-white/40 hover:text-white'
                }`}
              >
                User Reviews ({anime.reviews?.length || 0})
                {activeTab === 'reviews' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-neon-pink shadow-[0_0_5px_#ff007f]"></span>
                )}
              </button>
            </div>

            {/* Tabs Render Container */}
            <div className="min-h-48">
              {activeTab === 'episodes' && (
                <div className="space-y-3 max-h-64 overflow-y-auto no-scrollbar pr-2">
                  {Array.from({ length: anime.currentEpisodeNum || 12 }).map((_, index) => (
                    <div
                      key={index}
                      onClick={() => onPlayClick(anime)}
                      className="flex items-center justify-between p-3 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-neon-pink/20 rounded-xl transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-xs font-bold text-neon-blue group-hover:text-neon-pink transition-colors">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white group-hover:text-neon-pink transition-colors">
                            Episode {index + 1}
                          </p>
                          <p className="text-[9px] text-white/40 mt-0.5">Streaming Portal Standard Subtitled</p>
                        </div>
                      </div>

                      <button className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest text-white/50 group-hover:text-neon-blue transition-colors">
                        WATCH NOW
                        <ArrowUpRight size={10} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'cast' && (
                <div className="grid grid-cols-2 gap-4">
                  {anime.cast?.map((actor, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-2 bg-white/[0.01] border border-white/5 rounded-xl">
                      <div className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/30">
                        <User size={16} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">{actor}</p>
                        <p className="text-[9px] text-white/40 mt-0.5">Voice Actor (Japanese)</p>
                      </div>
                    </div>
                  )) || (
                    <div className="py-12 text-center text-xs text-white/30 w-full col-span-2">
                      No cast catalog logged.
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-4 max-h-64 overflow-y-auto no-scrollbar pr-2">
                  {anime.reviews?.map((review, idx) => (
                    <div key={idx} className="p-3.5 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-bold uppercase">
                        <span className="text-neon-blue flex items-center gap-1.5">
                          <MessageCircle size={11} />
                          {review.user}
                        </span>
                        <span className="text-neon-pink">★ {review.rating}/10</span>
                      </div>
                      <p className="text-xs text-white/60 leading-relaxed font-medium">
                        "{review.text}"
                      </p>
                    </div>
                  )) || (
                    <div className="py-12 text-center text-xs text-white/30">
                      No user feedback submitted yet. Be the first!
                    </div>
                  )}
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Actions block & Similar suggestions */}
          <div className="md:col-span-4 space-y-6">
            
            {/* CTA action cards */}
            <div className="glass-premium p-4 rounded-xl border border-white/10 space-y-4">
              <h4 className="text-[10px] font-bold tracking-widest text-white/40 uppercase">
                PORTAL LINK DIRECT
              </h4>

              <div className="space-y-2.5">
                {/* 1. Main Watch button */}
                <button
                  onClick={() => onPlayClick(anime)}
                  className="w-full bg-neon-pink hover:bg-[#d9006b] text-white font-bold text-xs uppercase tracking-widest py-3.5 rounded-lg flex items-center justify-center gap-2 shadow-[0_0_12px_rgba(255,0,127,0.3)] hover:shadow-[0_0_20px_rgba(255,0,127,0.5)] transition-all duration-300 cursor-pointer"
                >
                  <Play size={12} fill="white" />
                  Watch episode 1
                </button>

                {/* 2. Bookmark toggle */}
                <button
                  onClick={() => toggleWatchlist(anime)}
                  className="w-full bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-white/20 font-bold text-xs uppercase tracking-widest py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Heart size={12} className={isBookmarked ? 'text-neon-pink fill-neon-pink' : ''} />
                  {isBookmarked ? 'Remove Watchlist' : 'Add Watchlist'}
                </button>
              </div>

              {/* Safe legal anime redirect info */}
              <p className="text-[8px] text-white/30 leading-normal text-center pt-2">
                Every click initiates dynamic redirection routing matching the official streaming CDNs legally.
              </p>
            </div>

            {/* Recommendations rows list */}
            {recommendations.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-[10px] font-bold tracking-widest text-white/40 uppercase border-b border-white/5 pb-2">
                  SIMILAR SUGGESTIONS
                </h4>
                
                <div className="flex flex-col gap-2.5">
                  {recommendations.map((rec) => (
                    <div
                      key={rec.id}
                      onClick={() => {
                        onAnimeClick(rec);
                      }}
                      className="flex items-center gap-3 p-1.5 hover:bg-white/[0.04] rounded-lg transition-colors cursor-pointer group"
                    >
                      <img
                        src={getAnimePoster(rec)}
                        alt={rec.title}
                        className="w-8 h-11 object-cover rounded-md border border-white/5 group-hover:border-neon-blue/40"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 min-w-0">
                        <h5 className="text-xs font-bold text-white group-hover:text-neon-blue transition-colors truncate">
                          {rec.title}
                        </h5>
                        <p className="text-[9px] text-white/40 mt-1">★ {rec.rating} Rating</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}
