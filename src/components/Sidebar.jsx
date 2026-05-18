import React from 'react';
import { 
  Home, 
  Compass, 
  Tv, 
  Film, 
  List, 
  Heart, 
  History, 
  Settings
} from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: 'home', name: 'Home', icon: Home },
    { id: 'browse', name: 'Browse', icon: Compass },
    { id: 'live', name: 'Live TV', icon: Tv },
    { id: 'movies', name: 'Movies', icon: Film },
    { id: 'mylist', name: 'My List', icon: List },
    { id: 'watchlist', name: 'Watchlist', icon: Heart },
    { id: 'history', name: 'History', icon: History },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  const socialLinks = [
    { 
      name: 'Discord', 
      url: 'https://discord.com', 
      color: 'hover:text-[#5865F2]',
      svg: (
        <svg size="18" className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.873-.894.076.076 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
        </svg>
      )
    },
    { 
      name: 'X', 
      url: 'https://x.com', 
      color: 'hover:text-white',
      svg: (
        <svg size="18" className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com', 
      color: 'hover:text-[#E1306C]',
      svg: (
        <svg size="18" className="w-[18px] h-[18px] stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )
    },
  ];


  return (
    <>
      {/* Desktop Sidebar (Left side, fixed vertical panel) */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 bottom-0 w-20 xl:w-24 bg-[#0a0a0f]/60 backdrop-blur-xl border-r border-white/5 z-40 py-8 justify-between items-center transition-all duration-300">
        
        {/* Decorative Top Accent Glow */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue"></div>

        {/* Home Navigation Indicator / Custom spacer */}
        <div 
          onClick={() => setActiveTab('home')}
          className="flex flex-col items-center gap-1.5 group cursor-pointer select-none"
        >
          <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center glow-pink-sm relative overflow-hidden transition-all duration-300 group-hover:border-neon-pink/30 group-hover:shadow-[0_0_12px_rgba(255,0,127,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-pink to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Tv size={18} className="relative z-10 text-white group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_6px_rgba(255,0,127,0.8)]" />
          </div>
          <span className="text-[7px] font-extrabold text-white/35 tracking-wider uppercase group-hover:text-neon-pink transition-colors">
            by Tanmay
          </span>
        </div>

        {/* Sidebar Nav Items */}
        <nav className="flex flex-col gap-6 w-full px-2 xl:px-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative w-full py-3 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-all duration-300 group cursor-pointer ${
                  isActive 
                    ? 'text-neon-pink bg-white/[0.03] shadow-[inset_0_0_12px_rgba(255,0,127,0.05)] border border-neon-pink/20' 
                    : 'text-white/40 hover:text-white hover:bg-white/[0.01]'
                }`}
                title={item.name}
              >
                {/* Active Glow Accent Bar on Left */}
                {isActive && (
                  <div className="absolute left-0 top-1/4 bottom-1/4 w-[3px] bg-neon-pink rounded-r-full shadow-[0_0_8px_#ff007f]"></div>
                )}

                <Icon 
                  size={20} 
                  className={`transition-all duration-300 ${
                    isActive 
                      ? 'scale-110 drop-shadow-[0_0_8px_rgba(255,0,127,0.8)] animate-pulse' 
                      : 'group-hover:scale-110 group-hover:text-neon-blue group-hover:drop-shadow-[0_0_5px_rgba(0,240,255,0.8)]'
                  }`} 
                />
                <span className="text-[9px] font-semibold tracking-wider uppercase select-none opacity-80 scale-90">
                  {item.name}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Social Icons Panel */}
        <div className="flex flex-col gap-5 items-center">
          <div className="w-8 h-[1px] bg-white/5"></div>
          <div className="flex flex-col gap-4 text-white/30">
            {socialLinks.map((social) => {
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`transition-colors duration-300 ${social.color} hover:scale-110 flex items-center justify-center`}
                  title={social.name}
                >
                  {social.svg}
                </a>
              );
            })}
          </div>
        </div>
      </aside>

      {/* Mobile / Tablet Bottom Navigation Deck */}
      <nav className="lg:hidden fixed bottom-4 left-4 right-4 h-16 bg-[#0a0a0f]/80 backdrop-blur-xl border border-white/10 rounded-2xl z-40 flex items-center justify-around px-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
        {menuItems.slice(0, 5).map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`relative flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 ${
                isActive ? 'text-neon-pink' : 'text-white/40'
              }`}
            >
              {isActive && (
                <span className="absolute -top-1 w-1.5 h-1.5 bg-neon-pink rounded-full shadow-[0_0_5px_#ff007f]"></span>
              )}
              <Icon 
                size={20} 
                className={`${isActive ? 'scale-110 drop-shadow-[0_0_5px_rgba(255,0,127,0.8)]' : ''}`}
              />
              <span className="text-[8px] font-semibold tracking-wider uppercase mt-1">
                {item.name}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
