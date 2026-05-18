import React from 'react';
import { Radio, Calendar, Heart, Zap, Play, ArrowRight, Clock, Star } from 'lucide-react';
import { getLiveNow, getUpcomingSchedule, getStreamingRedirectUrl, getAnimePoster } from '../data/animeData';

export default function FooterWidgets({ watchlist, onAnimeClick, onPlayClick, toggleWatchlist, setActiveTab, onUpgradeClick }) {
  const liveChannels = getLiveNow();
  const airingSchedule = getUpcomingSchedule();

  return (
    <section className="w-full space-y-6 px-6 md:px-10 lg:pl-32 xl:pl-36 select-none my-12 text-white">
      
      {/* Grid container for widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        
        {/* Widget 1: Live Now Streams */}
        <div className="glass bg-[#050505]/40 border border-white/5 rounded-xl p-4 flex flex-col justify-between min-h-[300px]">
          <div>
            <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
              <h3 className="text-xs font-bold tracking-wider text-white uppercase flex items-center gap-2">
                <Radio size={14} className="text-neon-pink animate-pulse" />
                Live Now
              </h3>
              <span className="text-[9px] bg-neon-pink/10 text-neon-pink px-1.5 py-0.5 rounded font-bold uppercase tracking-wider animate-pulse">
                AIR-CAST
              </span>
            </div>

            <div className="space-y-3">
              {liveChannels.slice(0, 3).map((anime) => (
                <div
                  key={anime.id}
                  onClick={() => onAnimeClick(anime)}
                  className="flex items-center gap-3 p-1.5 hover:bg-white/[0.03] rounded-lg transition-colors cursor-pointer group"
                >
                  <div className="relative w-9 h-12 object-cover rounded overflow-hidden border border-white/5">
                    <img src={getAnimePoster(anime)} alt={anime.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    {/* Live red overlay */}
                    <div className="absolute inset-0 bg-red-600/10 mix-blend-color"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-white group-hover:text-neon-pink transition-colors truncate">
                      {anime.title}
                    </h4>
                    <p className="text-[9px] text-white/40 mt-0.5 truncate">{anime.episode}</p>
                    <span className="inline-flex items-center gap-1 text-[8px] font-bold text-neon-pink mt-1 bg-neon-pink/10 px-1 rounded-sm">
                      <span className="w-1 h-1 bg-neon-pink rounded-full animate-ping"></span>
                      {anime.liveViewerCount}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={() => setActiveTab && setActiveTab('live')}
            className="w-full mt-4 text-[9px] font-bold uppercase tracking-widest text-center text-white/40 hover:text-neon-pink transition-colors pt-2 border-t border-white/5 flex items-center justify-center gap-1 cursor-pointer"
          >
            VIEW ALL LIVE STREAMS
            <ArrowRight size={10} />
          </button>
        </div>

        {/* Widget 2: Upcoming Schedule */}
        <div className="glass bg-[#050505]/40 border border-white/5 rounded-xl p-4 flex flex-col justify-between min-h-[300px]">
          <div>
            <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
              <h3 className="text-xs font-bold tracking-wider text-white uppercase flex items-center gap-2">
                <Calendar size={14} className="text-neon-blue" />
                Upcoming Schedule
              </h3>
              <span className="text-[8px] text-white/40 uppercase font-semibold">Weekly</span>
            </div>

            <div className="space-y-3">
              {airingSchedule.slice(0, 4).map((anime) => (
                <div
                  key={anime.id}
                  onClick={() => onAnimeClick(anime)}
                  className="flex items-center justify-between p-1.5 hover:bg-white/[0.03] rounded-lg transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-7 h-7 rounded bg-white/[0.03] border border-white/5 flex items-center justify-center text-[10px] font-bold text-neon-blue group-hover:text-neon-pink transition-colors flex-shrink-0">
                      {anime.upcomingSchedule.time}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-white group-hover:text-neon-pink transition-colors truncate">
                        {anime.title}
                      </h4>
                      <p className="text-[8px] text-white/40 mt-0.5 truncate">
                        {anime.season} // {anime.episode}
                      </p>
                    </div>
                  </div>
                  
                  <span className="text-[8px] text-white/50 bg-white/[0.04] px-1.5 py-0.5 rounded whitespace-nowrap">
                    {anime.upcomingSchedule.day}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={() => setActiveTab && setActiveTab('schedule')}
            className="w-full mt-4 text-[9px] font-bold uppercase tracking-widest text-center text-white/40 hover:text-neon-blue transition-colors pt-2 border-t border-white/5 flex items-center justify-center gap-1 cursor-pointer"
          >
            SEE FULL SCHEDULE
            <ArrowRight size={10} />
          </button>
        </div>

        {/* Widget 3: My Watchlist */}
        <div className="glass bg-[#050505]/40 border border-white/5 rounded-xl p-4 flex flex-col justify-between min-h-[300px]">
          <div>
            <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
              <h3 className="text-xs font-bold tracking-wider text-white uppercase flex items-center gap-2">
                <Heart size={14} className="text-neon-pink fill-neon-pink/20" />
                My Watchlist
              </h3>
              <span className="text-[9px] text-neon-pink font-bold">
                {watchlist.length} ITEMS
              </span>
            </div>

            {watchlist.length === 0 ? (
              <div className="py-12 text-center text-xs text-white/30 space-y-2">
                <Heart size={20} className="mx-auto text-white/10" />
                <p>Your watchlist is empty.</p>
                <p className="text-[10px]">Add some anime using the heart icons!</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-[170px] overflow-y-auto no-scrollbar">
                {watchlist.slice(0, 3).map((anime) => (
                  <div
                    key={anime.id}
                    onClick={() => onAnimeClick(anime)}
                    className="flex items-center gap-3 p-1.5 hover:bg-white/[0.03] rounded-lg transition-colors cursor-pointer group"
                  >
                    <img src={getAnimePoster(anime)} alt={anime.title} className="w-8 h-11 object-cover rounded border border-white/5" referrerPolicy="no-referrer" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-white group-hover:text-neon-pink transition-colors truncate">
                        {anime.title}
                      </h4>
                      <div className="flex gap-2 text-[8px] text-white/40 mt-1">
                        <span>★ {anime.rating}</span>
                        <span>{anime.season}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button 
            onClick={() => setActiveTab && setActiveTab('watchlist')}
            className="w-full mt-4 text-[9px] font-bold uppercase tracking-widest text-center text-white/40 hover:text-neon-pink transition-colors pt-2 border-t border-white/5 flex items-center justify-center gap-1 cursor-pointer"
          >
            SEE ALL WATCHLIST
            <ArrowRight size={10} />
          </button>
        </div>

        {/* Widget 4: Premium Upgrade plan */}
        <div className="glass bg-[#050505]/40 border border-white/5 rounded-xl p-4 flex flex-col justify-between min-h-[300px] relative overflow-hidden group">
          
          {/* Animated decorative premium particle rings */}
          <div className="absolute top-[-20%] right-[-20%] w-40 h-40 bg-neon-pink/15 rounded-full blur-[40px] pointer-events-none group-hover:scale-110 transition-transform duration-500"></div>
          <div className="absolute bottom-[-25%] left-[-25%] w-40 h-40 bg-neon-purple/15 rounded-full blur-[40px] pointer-events-none group-hover:scale-110 transition-transform duration-500"></div>
          
          <div>
            <div className="text-[9px] font-bold tracking-[0.2em] text-neon-pink uppercase mb-1 glow-text-pink">
              PREMIUM ACCESS PLAN
            </div>
            
            <h3 className="text-base font-extrabold font-display text-white tracking-wide uppercase leading-tight mb-3">
              Unlock The Full Experience
            </h3>

            {/* List advantages */}
            <div className="space-y-2 text-xs font-medium text-white/70">
              <div className="flex items-center gap-2">
                <Zap size={11} className="text-neon-blue" />
                <span>Ad-free streaming streaming</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={11} className="text-neon-blue" />
                <span>Early access to new releases</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={11} className="text-neon-blue" />
                <span>HD & Ultra 4K cinematic streams</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={11} className="text-neon-blue" />
                <span>Offline local watch downloads</span>
              </div>
            </div>
          </div>

          <button
            onClick={onUpgradeClick}
            className="w-full bg-neon-pink hover:bg-[#d9006b] text-white font-bold text-xs uppercase tracking-widest py-3 rounded-lg flex items-center justify-center gap-2 shadow-[0_0_12px_rgba(255,0,127,0.3)] hover:shadow-[0_0_20px_rgba(255,0,127,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 mt-4 cursor-pointer"
          >
            <Zap size={12} fill="white" />
            Upgrade Now
          </button>
        </div>

      </div>

    </section>
  );
}
