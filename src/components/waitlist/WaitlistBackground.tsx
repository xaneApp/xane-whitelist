import React from "react";

interface WaitlistBackgroundProps {
  children: React.ReactNode;
  showWatermark?: boolean;
}

const WaitlistBackground = ({ children, showWatermark = true }: WaitlistBackgroundProps) => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#0047FF] text-white selection:bg-[#D9FF3F] selection:text-[#111111] flex flex-col justify-between">
      
      {/* 1. Geometric Background Shapes */}
      <div 
        className="pointer-events-none absolute left-0 top-0 z-0 h-[45vh] w-[65vw] max-h-[500px] max-w-[500px] bg-[#111111]" 
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} 
      />
      <div className="pointer-events-none absolute right-0 top-[35%] z-0 h-[120px] sm:h-[160px] lg:h-[220px] w-[45%] origin-right -skew-y-[15deg] bg-[#111111]" />

      {/* Floating Black Dots */}
      <div className="pointer-events-none absolute left-[4%] top-[60%] z-0 h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute left-[15%] top-[72%] z-0 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute left-[38%] top-[14%] z-0 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute left-[42%] top-[15%] z-0 h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute left-[32%] top-[29%] z-0 h-2.5 w-2.5 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute right-[35%] top-[22%] z-0 h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute right-[5%] top-[62%] z-0 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute right-[18%] top-[76%] z-0 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-[#111111]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen w-full flex-col justify-between">
        {children}
      </div>

      {/* Massive Background Stroked Text "Waitlist" */}
      {showWatermark && (
        <div className="pointer-events-none absolute bottom-0 left-0 z-0 flex w-full justify-center select-none overflow-hidden opacity-30">
          <span 
            className="font-sans text-[clamp(90px,18vw,300px)] font-black tracking-tight text-transparent whitespace-nowrap"
            style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.3)' }}
          >
            Waitlist
          </span>
        </div>
      )}
    </div>
  );
};

export default WaitlistBackground;
