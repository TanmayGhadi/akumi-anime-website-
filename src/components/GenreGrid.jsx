import React from 'react';
import * as Icons from 'lucide-react';
import { GENRES } from '../data/animeData';

export default function GenreGrid({ onGenreClick }) {
  
  // Custom helper to dynamically fetch icons by their name string
  const renderIcon = (iconName, colorClass) => {
    const LucideIcon = Icons[iconName] || Icons.HelpCircle;
    return <LucideIcon className={`w-6 h-6 ${colorClass}`} />;
  };

  const getIconColor = (genreId) => {
    if (genreId.includes('scifi')) return 'text-cyan-400 drop-shadow-[0_0_6px_#00f0ff]';
    if (genreId.includes('action')) return 'text-red-400 drop-shadow-[0_0_6px_#ff3b30]';
    if (genreId.includes('fantasy')) return 'text-fuchsia-400 drop-shadow-[0_0_6px_#ff007f]';
    if (genreId.includes('urban')) return 'text-violet-400 drop-shadow-[0_0_6px_#ab00ff]';
    if (genreId.includes('adventure')) return 'text-emerald-400 drop-shadow-[0_0_6px_#10b981]';
    return 'text-amber-400 drop-shadow-[0_0_6px_#f55f0b]';
  };

  return (
    <section className="w-full space-y-4 px-6 md:px-10 lg:pl-32 xl:pl-36 select-none my-8">
      
      {/* Genre Section Title */}
      <div className="flex items-center justify-between border-b border-white/5 pb-2">
        <h2 className="text-lg md:text-xl font-bold font-display tracking-wider text-white uppercase flex items-center gap-2">
          <span className="w-1.5 h-3 bg-neon-blue rounded-full shadow-[0_0_8px_#00f0ff]"></span>
          Explore by Genre
        </h2>
      </div>

      {/* Futuristic Neo-Tokyo Grid of Genres */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5 py-3">
        {GENRES.map((genre) => (
          <div
            key={genre.id}
            onClick={() => onGenreClick(genre.name)}
            className={`relative rounded-xl overflow-hidden glass border border-white/5 hover:border-white/20 p-5 flex flex-col items-center justify-center gap-4 text-center cursor-pointer group transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:${genre.glow}`}
          >
            {/* Background Neon Glow Layer on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${genre.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            
            {/* Glass refraction layer overlay */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* Glowing Icon Container */}
            <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/5 group-hover:border-white/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300 relative">
              {renderIcon(genre.icon, getIconColor(genre.id))}
            </div>

            {/* Title & Count meta */}
            <div className="space-y-1 relative z-10">
              <h3 className="text-xs font-bold text-white group-hover:text-neon-blue transition-colors">
                {genre.name}
              </h3>
              <p className="text-[9px] font-semibold text-white/40 tracking-wider">
                {genre.count}
              </p>
            </div>

            {/* Tech scanline visual overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 scanlines"></div>
          </div>
        ))}
      </div>

    </section>
  );
}
