import React, { useEffect, useRef } from 'react';

export default function CyberEnvironment() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas sizes
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles (bokeh)
    const particleCount = 45;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 1.5,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: -Math.random() * 0.8 - 0.2, // always floating upwards
        color: Math.random() > 0.5 ? 'rgba(255, 0, 127, ' : 'rgba(0, 240, 255, ', // pink or blue
        opacity: Math.random() * 0.4 + 0.1,
        fadeSpeed: (Math.random() - 0.5) * 0.005,
        depth: Math.random() * 1.5 + 0.5 // depth factor for 3D parallax
      });
    }

    // Create Cyber Rain streaks
    const rainCount = 60;
    const rainDrops = [];
    for (let i = 0; i < rainCount; i++) {
      rainDrops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height,
        length: Math.random() * 25 + 15,
        speed: Math.random() * 15 + 10,
        opacity: Math.random() * 0.35 + 0.1,
        thickness: Math.random() * 1.2 + 0.5,
        color: Math.random() > 0.55 ? '#ff007f' : '#00f0ff',
        depth: Math.random() * 1.2 + 0.4
      });
    }

    // Main animation loop
    const animate = () => {
      // Clear canvas with slight alpha trail for motion blur
      ctx.fillStyle = 'rgba(5, 5, 5, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Automated float coordinates based on sine waves for a stunning automated parallax shift!
      const time = Date.now() * 0.0004;
      const mouse = mouseRef.current;
      mouse.x = Math.sin(time) * 15;
      mouse.y = Math.cos(time * 0.8) * 10;

      // Draw perspective grid bottom lighting (subtle)
      const centerY = canvas.height * 0.8;
      ctx.strokeStyle = 'rgba(255, 0, 127, 0.015)';
      ctx.lineWidth = 1;
      
      // Update and draw floating particles (bokeh)
      particles.forEach((p) => {
        // Apply mouse movement scaled by depth (3D parallax)
        const renderX = p.x - mouse.x * p.depth;
        const renderY = p.y - mouse.y * p.depth;

        // Draw glowing particle
        ctx.beginPath();
        const radGrd = ctx.createRadialGradient(renderX, renderY, 0, renderX, renderY, p.size * 2);
        radGrd.addColorStop(0, `${p.color}${p.opacity})`);
        radGrd.addColorStop(0.5, `${p.color}${p.opacity * 0.4})`);
        radGrd.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = radGrd;
        ctx.arc(renderX, renderY, p.size * 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Update parameters
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += p.fadeSpeed;

        // Pulse opacities
        if (p.opacity > 0.65 || p.opacity < 0.05) {
          p.fadeSpeed = -p.fadeSpeed;
        }

        // Boundary checks
        if (p.y < -20) {
          p.y = canvas.height + 20;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
      });

      // Update and draw neon cyberpunk rain
      rainDrops.forEach((drop) => {
        // Parallax shift for rain
        const renderX = drop.x - mouse.x * drop.depth;
        const renderY = drop.y - mouse.y * drop.depth;

        ctx.beginPath();
        // Draw falling line with glowing gradient
        const gradient = ctx.createLinearGradient(renderX, renderY, renderX, renderY + drop.length);
        gradient.addColorStop(0, 'rgba(0,0,0,0)');
        gradient.addColorStop(1, drop.color);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = drop.thickness;
        ctx.moveTo(renderX, renderY);
        ctx.lineTo(renderX, renderY + drop.length);
        ctx.stroke();

        // Update speed and reset when off-screen
        drop.y += drop.speed;
        if (drop.y > canvas.height + 30) {
          drop.y = Math.random() * -100 - 30;
          drop.x = Math.random() * canvas.width;
          drop.speed = Math.random() * 15 + 10;
        }
      });

      // Draw custom background overlays (Vignette & Ambient light sources)
      ctx.fillStyle = 'rgba(0,0,0,0)';
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none w-full h-full bg-[#050505]"
        style={{ opacity: 0.85 }}
      />
      {/* Heavy CSS gradients for cinematic glass environment overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Deep ambient dark pink/blue corners glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#ff007f]/5 rounded-full blur-[140px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#00f0ff]/5 rounded-full blur-[140px] mix-blend-screen animate-pulse"></div>
        
        {/* Radial vignette centering attention */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#050505_95%)]"></div>
        
        {/* Matrix grid horizon overlay at the very bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-[#050505] to-transparent z-1 pointer-events-none"></div>
      </div>
    </>
  );
}
