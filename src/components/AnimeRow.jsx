import React, { useRef, useState } from 'react';
import { Play, Heart, Star, ChevronLeft, ChevronRight, Filter, Grid, ArrowUpDown } from 'lucide-react';
import { getStreamingRedirectUrl, getAnimePoster } from '../data/animeData';

// Interactive Anime Card with mouse-reactive 3D tilt physics and neon glows
function AnimeCard({ anime, onAnimeClick, onPlayClick, watchlist, toggleWatchlist, showProgress = false }) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ rotateX: 0, rotateY: 0, scale: 1 });
  const isBookmarked = watchlist.some((a) => a.id === anime.id);

  // Computes mouse position relative to card boundaries to apply smooth 3D tilting
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    
    // Calculate rotation (-10deg to 10deg)
    const rotateY = ((x / box.width) - 0.5) * 15;
    const rotateX = -((y / box.height) - 0.5) * 15;

    setCoords({ rotateX, rotateY, scale: 1.05 });
  };

  const handleMouseLeave = () => {
    setCoords({ rotateX: 0, rotateY: 0, scale: 1 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(600px) rotateX(${coords.rotateX}deg) rotateY(${coords.rotateY}deg) scale(${coords.scale})`,
        transition: 'transform 0.15s ease-out, box-shadow 0.25s ease-out, border-color 0.25s ease-out'
      }}
      className={`relative flex-shrink-0 w-[145px] sm:w-[170px] md:w-[190px] aspect-[2/3] rounded-xl overflow-hidden glass border cursor-pointer group select-none ${
        coords.scale > 1 
          ? 'border-neon-pink/50 shadow-[0_0_15px_rgba(255,0,127,0.35)]' 
          : 'border-white/5 shadow-md'
      }`}
    >
      {/* Background Poster Image */}
      <img
        src={getAnimePoster(anime)}
        alt={anime.title}
        onError={(e) => {
          e.target.src = 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop&q=60';
        }}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-[0.85] group-hover:brightness-75"
        loading="lazy"
        referrerPolicy="no-referrer"
      />

      {/* Floating Meta Ratings badge */}
      <div className="absolute top-2 left-2 z-10 bg-[#050505]/75 backdrop-blur-md px-1.5 py-0.5 rounded-md border border-white/10 flex items-center gap-1">
        <Star size={9} className="text-neon-blue fill-neon-blue" />
        <span className="text-[9px] font-bold text-white">{anime.rating}</span>
      </div>

      {/* Watchlist Bookmark Icon Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleWatchlist(anime);
        }}
        className={`absolute top-2 right-2 z-10 w-6 h-6 rounded-md flex items-center justify-center border transition-all duration-300 cursor-pointer ${
          isBookmarked 
            ? 'bg-neon-pink/20 border-neon-pink/40 text-neon-pink shadow-[0_0_5px_#ff007f]' 
            : 'bg-[#050505]/60 border-white/10 text-white/50 hover:text-white hover:border-white/20'
        }`}
      >
        <Heart size={11} className={isBookmarked ? 'fill-neon-pink text-neon-pink animate-pulse' : ''} />
      </button>

      {/* Central Glass Play Button Overlay on Hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 z-5">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPlayClick(anime);
          }}
          className="w-12 h-12 rounded-full glass flex items-center justify-center border border-white/20 text-white hover:text-neon-pink hover:border-neon-pink/40 hover:shadow-[0_0_15px_rgba(255,0,127,0.6)] transform scale-90 group-hover:scale-100 transition-all duration-300 cursor-pointer"
        >
          <Play size={18} fill="currentColor" className="ml-1" />
        </button>
      </div>

      {/* Card Info Overlay Bottom panel */}
      <div 
        onClick={() => onAnimeClick(anime)}
        className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black via-black/85 to-transparent z-10 flex flex-col justify-end gap-1"
      >
        <h4 className="text-xs font-bold text-white group-hover:text-neon-pink transition-colors truncate">
          {anime.title}
        </h4>
        
        {/* Episodes or remaining specs */}
        <div className="flex justify-between items-center text-[9px] text-white/55">
          <span>{anime.season || 'Series'}</span>
          <span className="truncate max-w-[80px]">{anime.episode || 'Full'}</span>
        </div>

        {/* Dynamic Episode Watch Progress Bar */}
        {showProgress && anime.progress !== undefined && (
          <div className="mt-2 w-full">
            <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-neon-pink to-neon-purple shadow-[0_0_4px_#ff007f]"
                style={{ width: `${anime.progress}%` }}
              ></div>
            </div>
            {anime.timeLeft && (
              <span className="text-[8px] text-neon-pink/80 mt-1 block font-semibold">
                {anime.timeLeft}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Retro Sci-fi scanning lighting glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 scanlines"></div>
    </div>
  );
}

// Parent Anime Row container component
export default function AnimeRow({ 
  title, 
  animes = [], 
  onAnimeClick, 
  onPlayClick, 
  watchlist, 
  toggleWatchlist, 
  layout = 'slider', // 'slider' or 'grid'
  showProgress = false,
  setActiveTab
}) {
  const scrollRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('ALL');

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 450;
    container.scrollTo({
      left: container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount),
      behavior: 'smooth'
    });
  };

  // Filter criteria logic for Anime Library grids
  const isLibrary = title === 'Anime Library';
  const filterCategories = ['ALL', 'TV SERIES', 'MOVIES', 'OVA', 'SPECIALS'];

  const getFilteredAnimes = () => {
    if (!isLibrary || activeFilter === 'ALL') return animes;
    
    return animes.filter(anime => {
      const form = anime.season?.toLowerCase() || '';
      if (activeFilter === 'TV SERIES') return form.includes('season') || form.includes('series');
      if (activeFilter === 'MOVIES') return form.includes('movie');
      if (activeFilter === 'OVA') return form.includes('ova');
      if (activeFilter === 'SPECIALS') return form.includes('special');
      return true;
    });
  };

  const filteredItems = getFilteredAnimes();

  return (
    <section className="relative w-full space-y-4 px-6 md:px-10 lg:pl-32 xl:pl-36 select-none my-8">
      
      {/* Row Header Block */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-2">
        <h2 className="text-lg md:text-xl font-bold font-display tracking-wider text-white uppercase flex items-center gap-2">
          {/* Decorative glowing accent dots */}
          <span className="w-1.5 h-3 bg-neon-pink rounded-full shadow-[0_0_8px_#ff007f]"></span>
          {title}
        </h2>

        {/* Case 1: Custom Filter Trays for Library grid view */}
        {isLibrary && (
          <div className="flex flex-wrap items-center gap-2.5 text-[10px] font-bold">
            <div className="flex bg-white/[0.03] border border-white/10 rounded-lg p-0.5">
              {filterCategories.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-2.5 py-1 rounded-md uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    activeFilter === filter 
                      ? 'bg-neon-pink text-white shadow-[0_0_8px_rgba(255,0,127,0.3)]' 
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Quick Sort / Filter utility buttons */}
            <div className="flex gap-1.5">
              <button className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-lg p-1.5 text-white/60 hover:text-white transition-colors cursor-pointer" title="Sort Order">
                <ArrowUpDown size={12} />
              </button>
              <button className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-lg p-1.5 text-white/60 hover:text-white transition-colors cursor-pointer" title="More Filters">
                <Filter size={12} />
              </button>
            </div>
          </div>
        )}

        {/* Case 2: Custom Navigation Arrows for Horizontal sliders */}
        {layout === 'slider' && animes.length > 0 && (
          <div className="hidden sm:flex items-center gap-4">
            {setActiveTab && (
              <button
                onClick={() => setActiveTab('browse')}
                className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-neon-pink hover:glow-text-pink transition-all duration-300 cursor-pointer mr-1"
              >
                List All
              </button>
            )}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-7 h-7 flex items-center justify-center bg-white/[0.03] hover:bg-white/[0.08] hover:text-neon-pink border border-white/5 hover:border-neon-pink/20 rounded-md transition-all duration-300 cursor-pointer"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-7 h-7 flex items-center justify-center bg-white/[0.03] hover:bg-white/[0.08] hover:text-neon-pink border border-white/5 hover:border-neon-pink/20 rounded-md transition-all duration-300 cursor-pointer"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Row Content Renderer */}
      {filteredItems.length === 0 ? (
        <div className="py-12 glass rounded-xl border border-white/5 text-center text-xs text-white/30">
          No anime content in this category.
        </div>
      ) : layout === 'slider' ? (
        /* Horizontal Slider Layout */
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-5 overflow-x-auto py-3 px-1 no-scrollbar scroll-smooth"
          >
            {filteredItems.map((anime) => (
              <AnimeCard
                key={anime.id}
                anime={anime}
                onAnimeClick={onAnimeClick}
                onPlayClick={onPlayClick}
                watchlist={watchlist}
                toggleWatchlist={toggleWatchlist}
                showProgress={showProgress}
              />
            ))}
          </div>
        </div>
      ) : (
        /* Flat Grid Layout */
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5 py-3">
          {filteredItems.map((anime) => (
            <AnimeCard
              key={anime.id}
              anime={anime}
              onAnimeClick={onAnimeClick}
              onPlayClick={onPlayClick}
              watchlist={watchlist}
              toggleWatchlist={toggleWatchlist}
              showProgress={showProgress}
            />
          ))}
        </div>
      )}

    </section>
  );
}
