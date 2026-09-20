import React from "react";
import xaneSide from "@/assets/xane-side.png";

interface WaitlistBackgroundProps {
  children: React.ReactNode;
  variant?: "form" | "telegram" | "dashboard" | "leaderboard";
  showWatermark?: boolean;
}

const WaitlistBackground: React.FC<WaitlistBackgroundProps> = ({
  children,
  variant = "form",
  showWatermark = true,
}) => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#0047FF] text-white selection:bg-[#D9FF3F] selection:text-[#111111] flex flex-col justify-between">
      
      {/* 1. TOP-LEFT DARK POLYGON */}
      <div 
        className="pointer-events-none absolute left-0 top-0 z-0 h-[45vh] w-[45vw] max-w-[560px] bg-[#111111]" 
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} 
      />

      {/* 2. TOP-RIGHT DARK POLYGON */}
      <div 
        className="pointer-events-none absolute right-0 top-0 z-0 h-[45vh] w-[40vw] max-w-[500px] bg-[#111111]" 
        style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} 
      />

      {/* 3. LIGHT BEAM FROM BOTTOM RIGHT (For Telegram and Dashboard) */}
      {(variant === "telegram" || variant === "dashboard" || variant === "leaderboard") && (
        <>
          {/* Main Cone Beam */}
          <div 
            className="pointer-events-none absolute right-0 bottom-0 z-0 h-[75vh] w-[50vw] max-w-[700px] opacity-80"
            style={{
              background: 'linear-gradient(225deg, rgba(0, 210, 255, 0.5) 0%, rgba(0, 150, 255, 0.2) 60%, transparent 100%)',
              clipPath: 'polygon(100% 100%, 35% 100%, 100% 15%)'
            }}
          />
          {/* Secondary Soft Beam */}
          <div 
            className="pointer-events-none absolute right-0 bottom-0 z-0 h-[60vh] w-[35vw] max-w-[500px] opacity-60"
            style={{
              background: 'linear-gradient(240deg, rgba(0, 230, 255, 0.4) 0%, transparent 80%)',
              clipPath: 'polygon(100% 100%, 55% 100%, 100% 40%)'
            }}
          />
        </>
      )}

      {/* 4. XANE-SIDES AT THE EDGES OF THE SCREEN */}
      {/* Dashboard: Left Side and Right Side */}
      {variant === "dashboard" && (
        <>
          {/* Left Edge Xane Side */}
          <div className="pointer-events-none absolute -left-12 sm:-left-20 md:-left-28 top-[12%] z-0 w-[240px] sm:w-[360px] md:w-[480px] lg:w-[560px] opacity-35 mix-blend-screen -rotate-12 select-none">
            <img src={xaneSide} alt="" className="w-full object-contain" />
          </div>
          {/* Right Edge Xane Side */}
          <div className="pointer-events-none absolute -right-12 sm:-right-20 md:-right-24 bottom-[8%] z-0 w-[240px] sm:w-[360px] md:w-[480px] lg:w-[540px] opacity-35 mix-blend-screen select-none">
            <img src={xaneSide} alt="" className="w-full object-contain" />
          </div>
        </>
      )}

      {/* Leaderboard: Bottom Right Corner Xane Side */}
      {variant === "leaderboard" && (
        <div className="pointer-events-none absolute -right-8 sm:-right-16 md:-right-20 bottom-0 z-0 w-[260px] sm:w-[380px] md:w-[500px] lg:w-[600px] opacity-35 mix-blend-screen select-none">
          <img src={xaneSide} alt="" className="w-full object-contain" />
        </div>
      )}

      {/* Form: Subtle Edge Xane Side on right */}
      {variant === "form" && (
        <div className="pointer-events-none absolute -right-24 sm:-right-28 bottom-[10%] z-0 w-[300px] sm:w-[420px] opacity-25 mix-blend-screen select-none">
          <img src={xaneSide} alt="" className="w-full object-contain" />
        </div>
      )}

      {/* 5. FLOATING BLACK CIRCLES (ACCURATELY PLACED) */}
      <div className="pointer-events-none absolute left-[3%] top-[55%] z-0 h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute left-[12%] top-[68%] z-0 h-3.5 w-3.5 sm:h-4.5 sm:w-4.5 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute left-[36%] top-[14%] z-0 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute left-[40%] top-[15%] z-0 h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute left-[31%] top-[29%] z-0 h-2.5 w-2.5 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute right-[34%] top-[22%] z-0 h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute right-[28%] top-[50%] z-0 h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute right-[15%] top-[70%] z-0 h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute right-[3%] top-[58%] z-0 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#111111]" />

      {/* 6. MAIN CONTENT */}
      <div className="relative z-10 flex min-h-screen w-full flex-col justify-between">
        {children}
      </div>

      {/* 7. MASSIVE BACKGROUND STROKED TEXT 'Waitlist' */}
      {showWatermark && (
        <div className="pointer-events-none absolute bottom-0 left-0 z-0 flex w-full justify-center select-none overflow-hidden opacity-35">
          <span 
            className="font-sans text-[clamp(110px,21vw,360px)] font-black tracking-tight text-transparent whitespace-nowrap"
            style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.4)' }}
          >
            Waitlist
          </span>
        </div>
      )}
    </div>
  );
};

export default WaitlistBackground;
