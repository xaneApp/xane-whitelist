import React from "react";
import xaneSide from "@/assets/xane-side.png";
import telegramPlane2 from "@/assets/telegramplane2.png";

interface WaitlistBackgroundProps {
  children: React.ReactNode;
  variant?: "form" | "telegram" | "celebration" | "dashboard" | "leaderboard";
  showWatermark?: boolean;
}

const WaitlistBackground: React.FC<WaitlistBackgroundProps> = ({
  children,
  variant = "form",
  showWatermark = true,
}) => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#0047FF] text-white selection:bg-[#D9FF3F] selection:text-[#111111] flex flex-col justify-between">
      
      {/* 1. TOP-LEFT DARK POLYGON (Only on form and leaderboard) */}
      {(variant === "form" || variant === "leaderboard") && (
        <div 
          className="pointer-events-none absolute left-0 top-0 z-0 h-[45vh] w-[45vw] max-w-[560px] bg-[#111111]" 
          style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} 
        />
      )}

      {/* 2. TOP-RIGHT DARK POLYGON (Only on form, telegram, and leaderboard) */}
      {(variant === "form" || variant === "telegram" || variant === "leaderboard") && (
        <div 
          className="pointer-events-none absolute right-0 top-0 z-0 h-[45vh] w-[40vw] max-w-[500px] bg-[#111111]" 
          style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} 
        />
      )}

      {/* 3. LEADERBOARD BOTTOM-RIGHT DARK POLYGON */}
      {variant === "leaderboard" && (
        <div 
          className="pointer-events-none absolute right-0 bottom-0 z-0 h-[40vh] w-[35vw] max-w-[450px] bg-[#111111]" 
          style={{ clipPath: 'polygon(100% 100%, 0 100%, 100% 40%)' }} 
        />
      )}

      {/* 4. TELEGRAM PLANE 2 (Part of background, behind Waitlist text) */}
      {variant === "telegram" && (
        <div className="pointer-events-none absolute right-0 bottom-0 z-0 w-[180px] sm:w-[240px] md:w-[300px] lg:w-[360px] xl:w-[400px] max-w-[420px] translate-x-[6%] translate-y-[6%] select-none">
          <img
            src={telegramPlane2}
            alt=""
            className="w-full object-contain"
          />
        </div>
      )}

      {/* 5. XANE-SIDES AT THE EDGES OF THE SCREEN */}
      {/* Dashboard: Top-Left Edge & Bottom-Right Edge */}
      {variant === "dashboard" && (
        <>
          {/* Top-Left Edge Xane Side */}
          <div className="pointer-events-none absolute -left-6 sm:-left-10 md:-left-12 -top-4 sm:-top-6 md:-top-8 z-0 w-[160px] sm:w-[200px] md:w-[260px] lg:w-[300px] max-w-[320px] opacity-35 mix-blend-screen select-none">
            <img src={xaneSide} alt="" className="w-full object-contain" />
          </div>
          {/* Bottom-Right Edge Xane Side */}
          <div className="pointer-events-none absolute -right-6 sm:-right-10 md:-right-12 -bottom-4 sm:-bottom-6 md:-bottom-8 z-0 w-[180px] sm:w-[240px] md:w-[300px] lg:w-[360px] max-w-[380px] opacity-35 mix-blend-screen select-none">
            <img src={xaneSide} alt="" className="w-full object-contain" />
          </div>
        </>
      )}

      {/* Leaderboard: Bottom-Right Edge Xane Side */}
      {variant === "leaderboard" && (
        <div className="pointer-events-none absolute -right-6 sm:-right-10 md:-right-12 -bottom-4 sm:-bottom-6 md:-bottom-8 z-0 w-[180px] sm:w-[240px] md:w-[300px] lg:w-[360px] max-w-[380px] opacity-35 mix-blend-screen select-none">
          <img src={xaneSide} alt="" className="w-full object-contain" />
        </div>
      )}

      {/* 6. FLOATING BLACK CIRCLES */}
      <div className="pointer-events-none absolute left-[3%] top-[55%] z-[1] h-10 w-10 sm:h-14 sm:w-14 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute left-[12%] top-[68%] z-[1] h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute left-[36%] top-[14%] z-[1] h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute left-[40%] top-[15%] z-[1] h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute left-[31%] top-[29%] z-[1] h-2.5 w-2.5 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute right-[34%] top-[22%] z-[1] h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute right-[28%] top-[50%] z-[1] h-3 w-3 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute right-[15%] top-[70%] z-[1] h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute right-[3%] top-[58%] z-[1] h-8 w-8 sm:h-11 sm:w-11 rounded-full bg-[#111111]" />

      {/* 7. MASSIVE BACKGROUND STROKED TEXT 'Waitlist' (Layered ON TOP of planes and xane-sides) */}
      {showWatermark && (
        <div className="pointer-events-none absolute bottom-0 left-0 z-[2] flex w-full justify-center select-none overflow-hidden opacity-35">
          <span 
            className="font-sans text-[clamp(110px,21vw,360px)] font-black tracking-tight text-transparent whitespace-nowrap"
            style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.4)' }}
          >
            Waitlist
          </span>
        </div>
      )}

      {/* 8. MAIN CONTENT */}
      <div className="relative z-10 flex min-h-screen w-full flex-col justify-between">
        {children}
      </div>

    </div>
  );
};

export default WaitlistBackground;
