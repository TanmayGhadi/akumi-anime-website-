import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles, AlertCircle, Play, ShieldAlert, Cpu } from 'lucide-react';

import LoadingScreen from './components/LoadingScreen';
import CyberEnvironment from './components/CyberEnvironment';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AnimeRow from './components/AnimeRow';
import DetailModal from './components/DetailModal';
import GenreGrid from './components/GenreGrid';
import FooterWidgets from './components/FooterWidgets';

import { 
  ANIME_DATA, 
  getTrendingNow, 
  getContinueWatching, 
  getTopPicks, 
  getWatchlist, 
  getStreamingRedirectUrl 
} from './data/animeData';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [watchlist, setWatchlist] = useState(getWatchlist());
  
  // Immersive sound states
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioRef = useRef(null);

  // Genre filtering overlay state
  const [selectedGenreName, setSelectedGenreName] = useState(null);

  // Cyber premium VIP modal states
  const [showVipModal, setShowVipModal] = useState(false);
  const [vipUpgradeStage, setVipUpgradeStage] = useState('idle');

  // Sync Ambient Cyber Soundtrack Playback
  useEffect(() => {
    if (!audioRef.current) return;
    
    if (soundEnabled) {
      audioRef.current.play().catch(err => {
        console.warn("Audio autoplay blocked by browser policy. Toggle sound manually.", err);
        setSoundEnabled(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [soundEnabled]);

  // Toggle watchlist helper
  const toggleWatchlist = (anime) => {
    const exists = watchlist.some((a) => a.id === anime.id);
    let updated;
    if (exists) {
      updated = watchlist.filter((a) => a.id !== anime.id);
    } else {
      updated = [...watchlist, anime];
    }
    setWatchlist(updated);
    
    // Mutate source list local mock sync
    anime.watchlist = !exists;
  };

  // Launch Watch Redirection Page with custom analytics triggers
  const handlePlayAnime = (anime) => {
    const streamingUrl = getStreamingRedirectUrl(anime);
    
    // Add custom tracking animation / sound effect first
    const soundFeedback = new Audio("https://assets.mixkit.co/active_storage/sfx/2568/2568-84.wav");
    soundFeedback.volume = 0.15;
    soundFeedback.play().catch(() => {});
    
    // Simulate updating Continue Watching state
    const alreadyWatching = getContinueWatching().some(c => c.id === anime.id);
    if (!alreadyWatching) {
      anime.progress = 0;
      anime.timeLeft = "Full episode remaining";
    }

    // Opens correct streaming watch page automatically in new window
    window.open(streamingUrl, '_blank', 'noopener,noreferrer');
  };

  // Quick helper to route genres clicked in child components
  const handleGenreClick = (genreName) => {
    setSelectedGenreName(genreName);
    setActiveTab('genres');
  };

  // Launch VIP secure system upgrade overlay
  const handleUpgradeVip = () => {
    const soundFeedback = new Audio("https://assets.mixkit.co/active_storage/sfx/2568/2568-84.wav");
    soundFeedback.volume = 0.15;
    soundFeedback.play().catch(() => {});
    setShowVipModal(true);
    setVipUpgradeStage('idle');
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#f3f4f6] selection:bg-neon-pink selection:text-white">
      
      {/* 1. Futuristic Loading Console overlay */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* 2. Cyber Tokyo Ambient Canvas particles */}
      <CyberEnvironment />

      {/* 3. Audio soundtrack element (Royalty-free premium cyber synthwave loop) */}
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
        loop
        volume="0.1"
      />



      {/* 5. Main Responsive Grid Dashboard */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Top Navbar */}
        <Navbar 
          activeTab={activeTab} 
          setActiveTab={(tab) => {
            setActiveTab(tab);
            setSelectedGenreName(null); // Reset filters on tab shift
          }} 
          onAnimeClick={setSelectedAnime}
          onUpgradeClick={handleUpgradeVip}
        />

        {/* Sidebar Nav */}
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Content Sections Router */}
        <main className="flex-1 w-full pb-20 lg:pb-10">
          {activeTab === 'home' && (
            <>
              {/* Massive Autoplay Parallax Hero */}
              <Hero 
                onAnimeClick={setSelectedAnime} 
                onWatchClick={handlePlayAnime} 
                watchlist={watchlist}
                toggleWatchlist={toggleWatchlist}
              />
              
              {/* Sliders and dashboard rows */}
              <div className="space-y-6 -mt-16 md:-mt-24 relative z-20">
                <AnimeRow 
                  title="Continue Watching" 
                  animes={getContinueWatching()} 
                  onAnimeClick={setSelectedAnime}
                  onPlayClick={handlePlayAnime}
                  watchlist={watchlist}
                  toggleWatchlist={toggleWatchlist}
                  showProgress={true}
                  setActiveTab={setActiveTab}
                />

                {watchlist.length > 0 && (
                  <AnimeRow 
                    title="My Curated Watchlist" 
                    animes={watchlist} 
                    onAnimeClick={setSelectedAnime}
                    onPlayClick={handlePlayAnime}
                    watchlist={watchlist}
                    toggleWatchlist={toggleWatchlist}
                    setActiveTab={setActiveTab}
                  />
                )}
                
                <AnimeRow 
                  title="Top Picks For You" 
                  animes={getTopPicks()} 
                  onAnimeClick={setSelectedAnime}
                  onPlayClick={handlePlayAnime}
                  watchlist={watchlist}
                  toggleWatchlist={toggleWatchlist}
                  setActiveTab={setActiveTab}
                />

                <GenreGrid onGenreClick={handleGenreClick} />

                <AnimeRow 
                  title="Anime Library" 
                  animes={ANIME_DATA} 
                  onAnimeClick={setSelectedAnime}
                  onPlayClick={handlePlayAnime}
                  watchlist={watchlist}
                  toggleWatchlist={toggleWatchlist}
                  layout="grid"
                  setActiveTab={setActiveTab}
                />

                <FooterWidgets 
                  watchlist={watchlist} 
                  onAnimeClick={setSelectedAnime} 
                  onPlayClick={handlePlayAnime}
                  toggleWatchlist={toggleWatchlist}
                  setActiveTab={setActiveTab}
                  onUpgradeClick={handleUpgradeVip}
                />
              </div>
            </>
          )}

          {activeTab === 'browse' && (
            <div className="pt-8">
              <AnimeRow 
                title="Explore Full Anime Catalog" 
                animes={ANIME_DATA} 
                onAnimeClick={setSelectedAnime}
                onPlayClick={handlePlayAnime}
                watchlist={watchlist}
                toggleWatchlist={toggleWatchlist}
                layout="grid"
                setActiveTab={setActiveTab}
              />
            </div>
          )}

          {activeTab === 'movies' && (
            <div className="pt-8">
              <AnimeRow 
                title="Cinematic Anime Movies" 
                animes={ANIME_DATA.filter(a => a.season === 'Movie')} 
                onAnimeClick={setSelectedAnime}
                onPlayClick={handlePlayAnime}
                watchlist={watchlist}
                toggleWatchlist={toggleWatchlist}
                layout="grid"
                setActiveTab={setActiveTab}
              />
            </div>
          )}

          {activeTab === 'live' && (
            <div className="pt-8 space-y-6 px-6 md:px-10 lg:pl-32 xl:pl-36">
              <div className="glass-premium p-6 rounded-xl border border-white/10 space-y-4">
                <h2 className="text-xl font-bold font-display uppercase tracking-wider text-white flex items-center gap-2">
                  <span className="w-1.5 h-3 bg-neon-pink rounded-full shadow-[0_0_5px_#ff007f]"></span>
                  Live Airing Channels
                </h2>
                <p className="text-xs text-white/60">
                  Join millions of fans streaming raw/subtitled broadcasts in real time. Hover to join high-bitrate voice and text chats!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                  {ANIME_DATA.filter(a => a.liveViewerCount).map((anime) => (
                    <div 
                      key={anime.id} 
                      className="glass bg-[#050505]/40 border border-white/5 hover:border-neon-pink/30 rounded-xl overflow-hidden cursor-pointer group transition-all duration-300 flex flex-col justify-between"
                      onClick={() => setSelectedAnime(anime)}
                    >
                      <div className="relative aspect-[16/9] w-full bg-black overflow-hidden">
                        <img 
                          src={anime.backdrop} 
                          alt={anime.title} 
                          className="w-full h-full object-cover brightness-[0.7] group-hover:scale-105 transition-transform duration-500" 
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-[#050505]/75 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 text-[9px] font-bold text-neon-pink flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-neon-pink rounded-full animate-ping"></span>
                          LIVE
                        </div>
                        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[8px] font-bold text-white/95">
                          {anime.liveViewerCount} WATCHING
                        </div>
                      </div>
                      <div className="p-4 space-y-2">
                        <h3 className="text-sm font-bold text-white group-hover:text-neon-pink transition-colors truncate">
                          {anime.title}
                        </h3>
                        <p className="text-[10px] text-white/50">{anime.season} // {anime.episode}</p>
                        <div className="flex items-center justify-between text-[9px] text-white/40 pt-2 border-t border-white/5">
                          <span>Channel 42 // Ultra 4K</span>
                          <span className="text-neon-blue font-bold">JOIN CHAT</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'watchlist' && (
            <div className="pt-8">
              <AnimeRow 
                title="My Curated Watchlist" 
                animes={watchlist} 
                onAnimeClick={setSelectedAnime}
                onPlayClick={handlePlayAnime}
                watchlist={watchlist}
                toggleWatchlist={toggleWatchlist}
                layout="grid"
                setActiveTab={setActiveTab}
              />
            </div>
          )}

          {activeTab === 'genres' && (
            <div className="pt-8 space-y-6">
              {/* Custom Genre Selector */}
              <div className="px-6 md:px-10 lg:pl-32 xl:pl-36">
                <div className="glass-premium p-4 rounded-xl border border-white/10 flex flex-wrap gap-2.5 items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                      SELECT DYNAMIC ACTIVE GENRE
                    </h3>
                    <p className="text-[10px] text-white/40">
                      Filtering current global anime databases
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedGenreName(null)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer border ${
                        selectedGenreName === null 
                          ? 'bg-neon-pink text-white border-neon-pink shadow-[0_0_8px_#ff007f]' 
                          : 'bg-white/[0.03] border-white/10 hover:border-white/20'
                      }`}
                    >
                      List All
                    </button>
                    {['Action', 'Fantasy', 'Sci-Fi', 'Psychological', 'Shonen', 'Thriller'].map((genre) => (
                      <button
                        key={genre}
                        onClick={() => setSelectedGenreName(genre)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer border ${
                          selectedGenreName === genre 
                            ? 'bg-neon-blue text-black border-neon-blue shadow-[0_0_8px_#00f0ff]' 
                            : 'bg-white/[0.03] border-white/10 hover:border-white/20'
                        }`}
                      >
                        {genre}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <AnimeRow 
                title={selectedGenreName ? `Filtered: ${selectedGenreName}` : 'All Catalogued Genres'} 
                animes={selectedGenreName ? ANIME_DATA.filter(a => a.genres.includes(selectedGenreName)) : ANIME_DATA} 
                onAnimeClick={setSelectedAnime}
                onPlayClick={handlePlayAnime}
                watchlist={watchlist}
                toggleWatchlist={toggleWatchlist}
                layout="grid"
                setActiveTab={setActiveTab}
              />
            </div>
          )}

          {activeTab === 'schedule' && (
            <div className="pt-8 space-y-6 px-6 md:px-10 lg:pl-32 xl:pl-36">
              <div className="glass-premium p-6 rounded-xl border border-white/10 space-y-4">
                <h2 className="text-xl font-bold font-display uppercase tracking-wider text-white flex items-center gap-2">
                  <span className="w-1.5 h-3 bg-neon-pink rounded-full shadow-[0_0_5px_#ff007f]"></span>
                  Live Airing Calendar (JST Standard)
                </h2>
                <p className="text-xs text-white/60">
                  Real-time broadcast countdown synced dynamically from Japan's central Tokyo broadcasting channels.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                  {ANIME_DATA.filter(a => a.upcomingSchedule).map((anime) => (
                    <div 
                      key={anime.id} 
                      onClick={() => setSelectedAnime(anime)}
                      className="p-4 bg-white/[0.02] border border-white/5 hover:border-neon-blue/30 rounded-xl space-y-3 cursor-pointer group transition-all duration-300"
                    >
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-bold text-neon-blue bg-neon-blue/10 px-2 py-0.5 rounded uppercase">
                          {anime.upcomingSchedule.day} at {anime.upcomingSchedule.time}
                        </span>
                        <span className="text-[9px] font-semibold text-white/40">COUNTS AIR</span>
                      </div>
                      <h3 className="text-sm font-bold text-white group-hover:text-neon-blue transition-colors truncate">
                        {anime.title}
                      </h3>
                      <div className="flex justify-between items-center text-[10px] text-white/50 border-t border-white/5 pt-2">
                        <span>{anime.season}</span>
                        <span className="text-neon-pink font-bold flex items-center gap-1">
                          <span className="w-1 h-1 bg-neon-pink rounded-full animate-ping"></span>
                          Airing Next
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'news' && (
            <div className="pt-8 space-y-6 px-6 md:px-10 lg:pl-32 xl:pl-36">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Solo Leveling Season 2 Dynamic OST Announced by Hiroyuki Sawano",
                    date: "May 18, 2026",
                    desc: "Aniplex confirmed that legendary composer Hiroyuki Sawano has completed the vocal themes for Season 2 featuring cyber-beats orchestral synthesis.",
                    tag: "OST"
                  },
                  {
                    title: "Studio Trigger Teases Cyberpunk: Edgerunners Universe Extension",
                    date: "May 15, 2026",
                    desc: "New concept artworks showing the rain-slicked visual aesthetics of Night City were released during the Tokyo Anime Award Festival today.",
                    tag: "Production"
                  }
                ].map((news, idx) => (
                  <div key={idx} className="glass-premium p-6 rounded-xl border border-white/10 space-y-3 hover:border-neon-pink/30 transition-all duration-300">
                    <span className="text-[9px] font-bold bg-neon-pink/15 text-neon-pink border border-neon-pink/30 px-2 py-0.5 rounded uppercase">
                      {news.tag}
                    </span>
                    <h3 className="text-base font-bold text-white hover:text-neon-pink cursor-pointer transition-colors leading-snug pt-1">
                      {news.title}
                    </h3>
                    <p className="text-xs text-white/55 leading-relaxed">{news.desc}</p>
                    <div className="text-[10px] text-white/40 pt-2 border-t border-white/5 flex justify-between">
                      <span>By Akumi Editorial Deck</span>
                      <span>{news.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'mylist' && (
            <div className="pt-8">
              <AnimeRow 
                title="My Curated Watchlist" 
                animes={watchlist} 
                onAnimeClick={setSelectedAnime}
                onPlayClick={handlePlayAnime}
                watchlist={watchlist}
                toggleWatchlist={toggleWatchlist}
                layout="grid"
                setActiveTab={setActiveTab}
              />
            </div>
          )}

          {activeTab === 'history' && (
            <div className="pt-8">
              <AnimeRow 
                title="Recently Watched History" 
                animes={ANIME_DATA.slice(0, 3)} 
                onAnimeClick={setSelectedAnime}
                onPlayClick={handlePlayAnime}
                watchlist={watchlist}
                toggleWatchlist={toggleWatchlist}
                layout="grid"
                showProgress={true}
                setActiveTab={setActiveTab}
              />
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="pt-8 px-6 md:px-10 lg:pl-32 xl:pl-36">
              <div className="glass-premium p-6 md:p-8 rounded-xl border border-white/10 space-y-6 max-w-2xl text-white">
                <h2 className="text-xl font-bold font-display uppercase tracking-wider flex items-center gap-2 border-b border-white/5 pb-3">
                  <Cpu size={18} className="text-neon-blue" />
                  Systems Configuration
                </h2>

                <div className="space-y-4 text-xs font-semibold">
                  <div className="flex items-center justify-between p-3 bg-white/[0.02] border border-white/5 rounded-lg">
                    <div>
                      <p className="text-white">STREAM QUALITY PREFERENTIAL</p>
                      <p className="text-[10px] text-white/40 mt-0.5">Locks standard streams to highest bitrate automatically</p>
                    </div>
                    <select className="bg-[#050505] border border-white/15 px-3 py-1.5 rounded-lg focus:outline-none">
                      <option>Ultra Cinematic 4K</option>
                      <option>1080p FHD Standard</option>
                      <option>720p HD Compact</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white/[0.02] border border-white/5 rounded-lg">
                    <div>
                      <p className="text-white">HOLOGRAPHIC PARALLAX PARTICLES</p>
                      <p className="text-[10px] text-white/40 mt-0.5">Enables CPU/GPU mouse-reactive environment layers</p>
                    </div>
                    <button className="bg-neon-blue text-black font-bold px-4 py-1.5 rounded-lg shadow-[0_0_8px_#00f0ff]">
                      ENABLED
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white/[0.02] border border-white/5 rounded-lg">
                    <div>
                      <p className="text-white">COGNITIVE AMBIENT SYNTHSOUND</p>
                      <p className="text-[10px] text-white/40 mt-0.5">Plays synthwave backtrack soundtrack automatically</p>
                    </div>
                    <button 
                      onClick={() => setSoundEnabled(!soundEnabled)}
                      className={`font-bold px-4 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                        soundEnabled 
                          ? 'bg-neon-pink border-neon-pink text-white shadow-[0_0_8px_#ff007f]' 
                          : 'bg-white/[0.03] border-white/10 hover:border-white/20'
                      }`}
                    >
                      {soundEnabled ? 'ACTIVE' : 'DISABLED'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>

        {/* 6. Dynamic full-screen detailed screen overlay */}
        {selectedAnime && (
          <DetailModal 
            anime={selectedAnime} 
            onClose={() => setSelectedAnime(null)} 
            onAnimeClick={setSelectedAnime}
            onPlayClick={handlePlayAnime} 
            watchlist={watchlist}
            toggleWatchlist={toggleWatchlist}
          />
        )}

        {/* VIP Cyber Premium Upgrade Overlay Modal */}
        {showVipModal && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-6 overflow-y-auto no-scrollbar bg-[#050505]/95 backdrop-blur-md font-mono select-none">
            {/* Ambient cyber glows */}
            <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-neon-pink/10 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>

            {/* Container Card */}
            <div className="relative w-full max-w-md bg-[#0a0a0f] border border-white/10 rounded-2xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.95)] relative overflow-hidden">
              {/* Scanlines inside card */}
              <div className="absolute inset-0 bg-neon-pink/2 pointer-events-none scanlines opacity-30"></div>
              
              {/* Floating Close Button */}
              {vipUpgradeStage !== 'processing' && (
                <button
                  onClick={() => setShowVipModal(false)}
                  className="absolute top-4 right-4 z-50 w-8 h-8 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:text-neon-pink hover:border-neon-pink/30 transition-all duration-300 cursor-pointer"
                  title="Close console"
                >
                  ✕
                </button>
              )}

              {vipUpgradeStage === 'idle' && (
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <div className="inline-flex w-12 h-12 bg-neon-pink/10 border border-neon-pink/30 rounded-xl items-center justify-center text-neon-pink shadow-[0_0_15px_rgba(255,0,127,0.3)] animate-bounce-slow">
                      <Sparkles size={24} />
                    </div>
                    <h3 className="text-lg font-extrabold text-white tracking-widest uppercase">
                      VIP COGNITIVE UPGRADE
                    </h3>
                    <p className="text-[10px] text-white/40 tracking-wider">
                      STREAMING CORE SYSTEM GATE v4.9
                    </p>
                  </div>

                  <div className="space-y-3 bg-[#050505] border border-white/5 rounded-xl p-4">
                    <div className="flex justify-between items-center text-xs border-b border-white/5 pb-2">
                      <span className="text-white/60">SUB-ACCOUNT SPEC:</span>
                      <span className="text-neon-blue font-bold">PREMIUM DIRECT</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pt-1">
                      <span className="text-white/60">CREDITS REQUIRED:</span>
                      <span className="text-neon-pink font-bold">$4.99 / MO</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-[11px] text-white/70">
                    <p className="font-bold text-neon-blue uppercase border-b border-white/5 pb-1">GRANTED PERMISSIONS:</p>
                    <div className="flex items-center gap-2">
                      <span className="text-neon-pink">✔</span>
                      <span>Ad-Free Neuro-Transmitted Feed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-neon-pink">✔</span>
                      <span>Holographic Widescreen Streams</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-neon-pink">✔</span>
                      <span>Early Access to Neo-Tokyo Simulcasts</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setVipUpgradeStage('processing');
                      // Simulate loading sequence
                      setTimeout(() => {
                        setVipUpgradeStage('success');
                        // success sound
                        const successSound = new Audio("https://assets.mixkit.co/active_storage/sfx/2019/2019-200.wav");
                        successSound.volume = 0.1;
                        successSound.play().catch(() => {});
                      }, 2500);
                    }}
                    className="w-full bg-gradient-to-r from-neon-pink to-neon-purple text-white font-bold text-xs uppercase tracking-widest py-3.5 rounded-lg flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,0,127,0.4)] hover:shadow-[0_0_25px_rgba(255,0,127,0.6)] transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5"
                  >
                    ESTABLISH SECURE LINK
                  </button>
                </div>
              )}

              {vipUpgradeStage === 'processing' && (
                <div className="py-8 flex flex-col items-center justify-center space-y-6 text-center">
                  <div className="w-12 h-12 rounded-full border-2 border-neon-pink border-t-transparent animate-spin shadow-[0_0_15px_rgba(255,0,127,0.3)]"></div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-white tracking-widest uppercase animate-pulse">
                      PROCESSING PROTOCOLS...
                    </h4>
                    <p className="text-[9px] text-neon-blue tracking-wide">
                      ESTABLISHING SECURE BANKING SYNAPSE...
                    </p>
                  </div>
                  <div className="w-full bg-[#050505] border border-white/5 rounded-lg p-3 text-[8px] text-white/40 space-y-1 text-left">
                    <div>&gt; REQUESTING ACCOUNT CRYPTO KEYS...</div>
                    <div className="text-neon-blue">&gt; HANDSHAKE SUCCESSFUL [SSL_PORT_443]</div>
                    <div className="text-neon-pink animate-pulse">&gt; DEDUCTING $4.99 FROM DIGITAL PORTFOLIO...</div>
                  </div>
                </div>
              )}

              {vipUpgradeStage === 'success' && (
                <div className="space-y-6 text-center py-4">
                  <div className="inline-flex w-14 h-14 bg-neon-blue/10 border border-neon-blue/30 rounded-full items-center justify-center text-neon-blue shadow-[0_0_20px_rgba(0,240,255,0.4)] animate-pulse">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-extrabold text-neon-blue tracking-widest uppercase glow-text-blue">
                      UPGRADE COMPLETE
                    </h3>
                    <p className="text-xs font-bold text-white">
                      WELCOME COGNITIVE CITIZEN!
                    </p>
                    <p className="text-[10px] text-white/50 leading-relaxed px-4 pt-1">
                      Your premium VIP account is fully provisioned. All ad-blocks, early access content, and ultra bitrate streams are now active.
                    </p>
                  </div>

                  <button
                    onClick={() => setShowVipModal(false)}
                    className="w-full bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-white/20 font-bold text-xs uppercase tracking-widest py-3 rounded-lg transition-colors cursor-pointer"
                  >
                    RETURN TO DASHBOARD
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 7. Floating soundscape indicator HUD controller bottom left */}
        {!isLoading && (
          <div className="fixed bottom-24 lg:bottom-6 left-6 z-50 flex items-center gap-3">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 shadow-xl cursor-pointer ${
                soundEnabled 
                  ? 'bg-neon-pink border-neon-pink text-white shadow-[0_0_12px_rgba(255,0,127,0.5)] scale-110' 
                  : 'bg-[#0a0a0f]/80 backdrop-blur-md border-white/10 text-white/50 hover:text-white hover:border-white/30'
              }`}
              title={soundEnabled ? 'Mute soundscape' : 'Play cyberpunk soundtrack'}
            >
              {soundEnabled ? <Volume2 size={16} className="animate-pulse" /> : <VolumeX size={16} />}
            </button>
            
            {soundEnabled && (
              <div className="hidden sm:flex flex-col bg-[#0a0a0f]/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl text-[9px] font-bold uppercase tracking-wider leading-tight shadow-md animate-float">
                <span className="text-neon-pink">SOUNDSCAPE SYNTH ACTIVE</span>
                <span className="text-white/40 mt-0.5">Helix-Song-8 Loop // 10% Vol</span>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
