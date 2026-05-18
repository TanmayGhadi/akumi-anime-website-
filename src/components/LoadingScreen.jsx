import React, { useState, useEffect } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const logs = [
    'SYSTEM BOOT: INITIALIZING AKUMI CORE v4.0.9...',
    'ESTABLISHING CONNECTION TO NEO-TOKYO SERVERS...',
    'SYNCING JIKAN & ANILIST ANIME APIS...',
    'LOADING HIGH-FIDELITY BACKDROPS AND CONTENT...',
    'GENERATING HOLOGRAPHIC SOUND MATRIX...',
    'DECRYPTING CYBERPUNK USER INTERFACE...',
    'SYSTEM STATUS: SECURE. WELCOME TO AKUMI.'
  ];

  useEffect(() => {
    // Increment progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Varied speeds for realistic boot feel
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    // Rotate logs based on progress
    const nextLogTrigger = Math.floor((100 / logs.length) * (logIndex + 1));
    if (progress >= nextLogTrigger && logIndex < logs.length - 1) {
      setLogIndex((prev) => prev + 1);
    }

    if (progress === 100) {
      const delay = setTimeout(() => {
        setFadeOut(true);
        const completeDelay = setTimeout(() => {
          onComplete();
        }, 600); // match transition duration
        return () => clearTimeout(completeDelay);
      }, 500);
      return () => clearTimeout(delay);
    }
  }, [progress, logIndex, onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-[#050505] z-[99999] flex flex-col items-center justify-center font-mono select-none transition-all duration-600 ease-out ${
        fadeOut ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Neo-Tokyo Grid Background Effect */}
      <div className="absolute inset-0 grid-perspective opacity-20 pointer-events-none">
        <div className="absolute inset-0 cyber-grid w-full h-[200%] -top-[50%]"></div>
      </div>

      {/* Cyber Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-neon-pink/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

      <div className="relative max-w-md w-full px-6 flex flex-col items-center">
        {/* Holographic Logo */}
        <div className="relative mb-8 text-center animate-float">
          <h1 className="text-6xl font-bold font-display tracking-[0.2em] text-white glow-text-pink drop-shadow-[0_0_15px_rgba(255,0,127,0.8)]">
            AKUMI
          </h1>
          <p className="text-[10px] tracking-[0.4em] text-neon-blue mt-2 glow-text-blue select-none">
            STREAMING CORE // アクミ
          </p>
          {/* Scanline reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-full w-full pointer-events-none scanlines"></div>
        </div>

        {/* Terminals Console Log */}
        <div className="w-full bg-[#0a0a0f] border border-white/5 rounded-lg p-4 mb-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 text-[9px] text-white/20 select-none">
            SYS_INIT_SEC_B
          </div>
          
          {/* Hologram scanlines effect inside terminal */}
          <div className="absolute inset-0 bg-neon-blue/2 pointer-events-none scanlines opacity-30"></div>
          <div className="absolute top-0 left-0 w-full h-[1px] bg-neon-blue/30 animate-scanline pointer-events-none"></div>

          <div className="text-[11px] text-neon-blue/70 mb-2 border-b border-white/5 pb-2 flex items-center justify-between">
            <span>TERMINAL CONNECTION STATE:</span>
            <span className="text-neon-pink animate-pulse">● ACTIVE</span>
          </div>

          <div className="h-20 flex flex-col justify-end text-[10px] space-y-1 overflow-hidden">
            {/* Historical logs */}
            {logs.slice(Math.max(0, logIndex - 2), logIndex).map((log, idx) => (
              <div key={idx} className="text-white/40 truncate">
                &gt; {log}
              </div>
            ))}
            {/* Active log with flashing cursor */}
            <div className="text-neon-blue truncate font-bold">
              &gt; {logs[logIndex]}
              <span className="inline-block w-1.5 h-3 bg-neon-blue ml-1 animate-ping"></span>
            </div>
          </div>
        </div>

        {/* Glowing Progress bar */}
        <div className="w-full">
          <div className="flex justify-between items-center text-[10px] text-white/50 mb-2">
            <span>MEM_BUFFER_SYNC</span>
            <span className="text-neon-pink font-bold">{progress}%</span>
          </div>
          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden p-[1px] border border-white/10 relative">
            <div
              className="h-full rounded-full bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue relative shadow-[0_0_8px_rgba(255,0,127,0.8)] transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            >
              {/* Core glow light indicator */}
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-white blur-[2px]"></div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-[9px] text-white/20 text-center uppercase tracking-widest">
          © {new Date().getFullYear()} AKUMI ENTERTAINMENT SYSTEMS
        </div>
      </div>
    </div>
  );
}
