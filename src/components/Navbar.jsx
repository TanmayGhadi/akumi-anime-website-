import React, { useState, useEffect, useRef } from 'react';
import { Search, Bell, User, Flame, LogOut, ShieldAlert, Sparkles, Tv } from 'lucide-react';
import { ANIME_DATA, getStreamingRedirectUrl, getAnimePoster } from '../data/animeData';

export default function Navbar({ activeTab, setActiveTab, onAnimeClick, onUpgradeClick }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [placeholderText, setPlaceholderText] = useState('');
  
  // Custom interactive dropdowns
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  const searchPlaceholders = [
    'Solo Leveling...',
    'Jujutsu Kaisen...',
    'Cyberpunk Edgerunners...',
    'Demon Slayer...',
    'Attack on Titan...',
    'Frieren...',
  ];

  // Typing effect for search input placeholder
  useEffect(() => {
    let timer;
    const currentFullText = searchPlaceholders[placeholderIndex];
    let isDeleting = false;
    let text = '';

    const type = () => {
      const typingSpeed = isDeleting ? 30 : 60;
      
      if (!isDeleting) {
        text = currentFullText.substring(0, text.length + 1);
      } else {
        text = currentFullText.substring(0, text.length - 1);
      }

      setPlaceholderText(text);

      if (!isDeleting && text === currentFullText) {
        timer = setTimeout(() => { isDeleting = true; type(); }, 2000);
      } else if (isDeleting && text === '') {
        isDeleting = false;
        setPlaceholderIndex((prev) => (prev + 1) % searchPlaceholders.length);
        timer = setTimeout(type, 500);
      } else {
        timer = setTimeout(type, typingSpeed);
      }
    };

    type();
    return () => clearTimeout(timer);
  }, [placeholderIndex]);

  // Handle Dynamic API Anime Search with Jikan API and local fallback
  useEffect(() => {
    if (searchQuery.trim().length < 2) {
      setSearchResults([]);
      return;
    }

    const delayDebounce = setTimeout(async () => {
      setIsSearching(true);
      try {
        // Try fetching live anime data from Jikan API
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(searchQuery)}&limit=6`);
        if (response.ok) {
          const resJson = await response.json();
          if (resJson.data && resJson.data.length > 0) {
            // Map Jikan API search results into our format
            const mappedResults = resJson.data.map(item => ({
              id: item.mal_id.toString(),
              title: item.title_english || item.title,
              season: item.type || 'Series',
              episode: item.episodes ? `${item.episodes} Episodes` : 'Airing',
              rating: item.score || 7.5,
              year: item.year || 2024,
              genres: item.genres ? item.genres.slice(0, 2).map(g => g.name) : [],
              synopsis: item.synopsis || '',
              poster: item.images?.jpg?.large_image_url || item.images?.jpg?.image_url || 'https://via.placeholder.com/300x450',
              backdrop: item.images?.jpg?.large_image_url || 'https://via.placeholder.com/1200x675',
              trailerId: item.trailer?.youtube_id || '',
              streamUrl: getStreamingRedirectUrl({ title: item.title }),
              fromApi: true
            }));
            setSearchResults(mappedResults);
            setIsSearching(false);
            return;
          }
        }
      } catch (err) {
        console.warn("Jikan API search failed, falling back to local store search...", err);
      }

      // Fallback search in our curated high-quality local store
      const query = searchQuery.toLowerCase();
      const filtered = ANIME_DATA.filter(
        anime => 
          anime.title.toLowerCase().includes(query) || 
          anime.japaneseTitle?.toLowerCase().includes(query) ||
          anime.genres.some(g => g.toLowerCase().includes(query))
      ).slice(0, 6);
      
      setSearchResults(filtered);
      setIsSearching(false);
    }, 400); // Debounce duration

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  // Click outside to close dropdowns
  useEffect(() => {
    const clickOutside = (e) => {
      if (notificationRef.current && !notificationRef.current.contains(e.target)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener('mousedown', clickOutside);
    return () => document.removeEventListener('mousedown', clickOutside);
  }, []);

  const navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'browse', name: 'Browse' },
    { id: 'genres', name: 'Genres' },
    { id: 'schedule', name: 'Schedule' },
    { id: 'news', name: 'News' },
    { id: 'mylist', name: 'My List' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass bg-[#050505]/40 backdrop-blur-xl border-b border-white/5 py-4 px-6 md:px-10 lg:pl-32 xl:pl-36 flex items-center justify-between select-none">
      
      {/* Brand Logo & Name */}
      <div 
        onClick={() => setActiveTab('home')} 
        className="flex items-center gap-3.5 cursor-pointer group select-none animate-float-slow"
      >
        {/* Futuristic Glowing Logo Icon */}
        <div className="relative w-10 h-10 bg-white/[0.04] border border-white/10 rounded-xl flex items-center justify-center glow-pink-sm overflow-hidden transition-all duration-300 group-hover:border-neon-pink/30 group-hover:shadow-[0_0_15px_rgba(255,0,127,0.3)]">
          <div className="absolute inset-0 bg-gradient-to-tr from-neon-pink to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Tv size={20} className="relative z-10 text-white group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,0,127,0.8)]" />
          <div className="absolute bottom-[-50%] right-[-50%] w-10 h-10 bg-neon-pink/20 rounded-full blur-[10px] pointer-events-none"></div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-bold tracking-[0.15em] bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-neon-pink group-hover:scale-105 transition-all duration-300">
              AKUMI
            </span>
            <span className="text-[9px] font-bold text-white/30 tracking-wider whitespace-nowrap hidden sm:inline-block">
              created by <span className="text-neon-pink font-extrabold hover:text-neon-blue transition-colors duration-300">TanmayGhadi</span>
            </span>
          </div>
          <div className="flex items-center gap-1.5 leading-none -mt-0.5">
            <span className="block text-[8px] font-bold tracking-[0.28em] text-neon-pink glow-text-pink">
              アクミ
            </span>
            <span className="text-[7px] font-bold text-white/20 tracking-wider whitespace-nowrap sm:hidden">
              by TanmayGhadi
            </span>
          </div>
        </div>
      </div>

      {/* Desktop Main Navigation Links */}
      <nav className="hidden md:flex items-center gap-6 lg:gap-8">
        {navLinks.map((link) => {
          const isActive = activeTab === link.id;
          return (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              className={`relative py-1.5 text-sm font-semibold tracking-wide uppercase transition-all duration-300 cursor-pointer ${
                isActive 
                  ? 'text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]' 
                  : 'text-white/60 hover:text-neon-pink hover:glow-text-pink'
              }`}
            >
              {link.name}
              {/* Bottom active pink slide indicator */}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-neon-pink shadow-[0_0_8px_#ff007f] rounded-full animate-pulse"></span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Right-hand side Utilities: Search, notifications, profile */}
      <div className="flex items-center gap-4 md:gap-5">
        
        {/* Futuristic Glass Search Input */}
        <div className="relative flex items-center group">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search ${placeholderText}`}
            className="w-36 sm:w-44 md:w-60 bg-white/[0.04] border border-white/10 rounded-full py-1.5 pl-9 pr-4 text-xs font-medium text-white placeholder-white/30 focus:outline-none focus:border-neon-blue focus:bg-white/[0.07] focus:shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all duration-300"
          />
          <Search size={14} className="absolute left-3.5 text-white/40 group-focus-within:text-neon-blue transition-colors duration-300 pointer-events-none" />
          
          {/* Dynamic Search Results Dropdown */}
          {searchQuery && (
            <div className="absolute right-0 top-11 w-64 md:w-80 glass-premium rounded-xl p-3 border border-white/10 shadow-2xl z-50">
              <div className="text-[10px] uppercase tracking-wider text-neon-blue border-b border-white/5 pb-2 mb-2 flex justify-between">
                <span>Search Results</span>
                {isSearching && <span className="animate-pulse">Searching MAL...</span>}
              </div>

              {searchResults.length === 0 ? (
                <div className="py-6 text-center text-xs text-white/30">
                  No anime found. Try another query!
                </div>
              ) : (
                <div className="flex flex-col gap-2 max-h-72 overflow-y-auto no-scrollbar">
                  {searchResults.map((anime) => (
                    <div
                      key={anime.id}
                      onClick={() => {
                        onAnimeClick(anime);
                        setSearchQuery('');
                      }}
                      className="flex items-center gap-3 p-1.5 hover:bg-white/[0.04] rounded-lg transition-colors cursor-pointer group"
                    >
                      <img 
                        src={getAnimePoster(anime)} 
                        alt={anime.title} 
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop&q=60';
                        }}
                        className="w-9 h-12 object-cover rounded-md border border-white/5 group-hover:border-neon-blue/40 transition-colors"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-white group-hover:text-neon-blue transition-colors truncate">
                          {anime.title}
                        </h4>
                        <div className="flex gap-2 text-[9px] text-white/40 mt-1">
                          <span>{anime.year}</span>
                          <span>★ {anime.rating}</span>
                          {anime.fromApi && (
                            <span className="text-neon-pink bg-neon-pink/10 px-1 rounded-sm text-[8px]">API</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Futuristic Notifications with active animated badge */}
        <div ref={notificationRef} className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="w-9 h-9 flex items-center justify-center bg-white/[0.04] hover:bg-white/[0.08] hover:text-neon-pink border border-white/5 hover:border-neon-pink/30 rounded-full transition-all duration-300 relative cursor-pointer"
          >
            <Bell size={16} />
            {/* Animated ping dot indicator */}
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-neon-pink border-2 border-[#050505] rounded-full">
              <span className="absolute inset-0 bg-neon-pink animate-ping rounded-full opacity-75"></span>
            </span>
          </button>

          {/* Notifications Panel Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 top-11 w-64 glass-premium rounded-xl p-3 border border-white/10 shadow-2xl z-50 animate-float">
              <div className="text-[10px] uppercase tracking-wider text-neon-pink border-b border-white/5 pb-2 mb-2 flex justify-between">
                <span>Alerts Feed</span>
                <span className="text-[8px] opacity-60">SYSTEM HEALTHY</span>
              </div>
              <div className="flex flex-col gap-2 text-xs">
                <div 
                  onClick={() => {
                    const soloLeveling = ANIME_DATA.find(a => a.id === 'solo-leveling');
                    if (soloLeveling) onAnimeClick(soloLeveling);
                    setShowNotifications(false);
                  }}
                  className="p-2 bg-white/[0.02] border border-white/5 rounded-lg flex items-start gap-2 hover:bg-white/[0.04] transition-colors cursor-pointer"
                >
                  <Flame size={12} className="text-neon-pink mt-0.5" />
                  <div>
                    <p className="font-bold text-white">NEW AIRING ALERT</p>
                    <p className="text-[10px] text-white/50 mt-0.5">Solo Leveling Season 2 Episode 8 is airing now!</p>
                  </div>
                </div>
                <div 
                  onClick={() => {
                    const demonSlayer = ANIME_DATA.find(a => a.id === 'demon-slayer');
                    if (demonSlayer) onAnimeClick(demonSlayer);
                    setShowNotifications(false);
                  }}
                  className="p-2 bg-white/[0.02] border border-white/5 rounded-lg flex items-start gap-2 hover:bg-white/[0.04] transition-colors cursor-pointer"
                >
                  <Sparkles size={12} className="text-neon-blue mt-0.5" />
                  <div>
                    <p className="font-bold text-white">WATCHLIST METRICS</p>
                    <p className="text-[10px] text-white/50 mt-0.5">Demon Slayer Season 3 added to My List successfully.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User Account Avatar with glowing system border */}
        <div ref={profileRef} className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="w-9 h-9 rounded-full overflow-hidden border-2 border-neon-blue shadow-[0_0_8px_rgba(0,240,255,0.4)] hover:border-neon-pink hover:shadow-[0_0_8px_rgba(255,0,127,0.4)] transition-all duration-300 cursor-pointer"
          >
            <img 
              src={`${import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL.slice(0, -1) : import.meta.env.BASE_URL}/cyber_profile.png`} 
              alt="Cyber User Profile" 
              className="w-full h-full object-cover"
            />
          </button>

          {/* User Account Dropdown */}
          {showProfileMenu && (
            <div className="absolute right-0 top-11 w-48 glass-premium rounded-xl p-3 border border-white/10 shadow-2xl z-50">
              <div className="text-[10px] uppercase tracking-wider text-neon-blue border-b border-white/5 pb-2 mb-2">
                User profile
              </div>
              <div className="flex flex-col gap-1.5 text-xs text-white/70">
                <div 
                  onClick={() => { onUpgradeClick(); setShowProfileMenu(false); }}
                  className="p-1.5 bg-gradient-to-r from-neon-pink/10 to-neon-purple/10 border border-neon-pink/30 hover:border-neon-pink/60 rounded-lg text-white font-bold flex items-center gap-2 cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,0,127,0.2)]"
                >
                  <Sparkles size={12} className="text-neon-pink" />
                  <span>PREMIUM COGNITIVE</span>
                </div>
                <button 
                  onClick={() => { setActiveTab('settings'); setShowProfileMenu(false); }}
                  className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-white/[0.04] text-left transition-colors cursor-pointer"
                >
                  <User size={13} />
                  <span>Account Settings</span>
                </button>
                <button 
                  onClick={() => { setActiveTab('mylist'); setShowProfileMenu(false); }}
                  className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-white/[0.04] text-left transition-colors cursor-pointer"
                >
                  <Flame size={13} />
                  <span>My Watch History</span>
                </button>
                <div className="h-[1px] bg-white/5 my-1"></div>
                <button 
                  onClick={() => setShowProfileMenu(false)}
                  className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-red-500/10 hover:text-red-400 text-left transition-colors cursor-pointer"
                >
                  <LogOut size={13} />
                  <span>Log Out Sync</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>

    </header>
  );
}
