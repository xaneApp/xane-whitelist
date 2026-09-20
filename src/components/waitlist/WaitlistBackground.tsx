import React from "react";

interface WaitlistBackgroundProps {
  children: React.ReactNode;
  showWatermark?: boolean;
}

const WaitlistBackground = ({ children, showWatermark = true }: WaitlistBackgroundProps) => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#0047FF] text-white selection:bg-[#D9FF3F] selection:text-[#111111] flex flex-col justify-between">
      
      {/* 1. TOP-LEFT DARK POLYGON */}
      <div 
        className="pointer-events-none absolute left-0 top-0 z-0 h-[60vh] w-[45vw] max-w-[650px] bg-[#111111]" 
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} 
      />

      {/* 2. TOP-RIGHT DARK POLYGON & DIAGONAL SLICE */}
      <div 
        className="pointer-events-none absolute right-0 top-0 z-0 h-[70vh] w-[55vw] max-w-[800px] bg-[#111111]" 
        style={{ clipPath: 'polygon(100% 0, 0 0, 100% 70%)' }} 
      />
      <div 
        className="pointer-events-none absolute right-0 top-[30%] z-0 h-[32vh] w-[65vw] max-w-[900px] bg-[#111111]" 
        style={{ clipPath: 'polygon(100% 30%, 0 75%, 0 100%, 100% 65%)' }} 
      />

      {/* 3. LIGHT BLUE BEAM FROM BOTTOM RIGHT */}
      <div 
        className="pointer-events-none absolute right-[-5%] bottom-0 z-0 h-[70vh] w-[45vw] max-w-[600px] opacity-70"
        style={{
          background: 'linear-gradient(220deg, rgba(0, 195, 255, 0.45) 0%, rgba(0, 150, 255, 0.15) 60%, transparent 100%)',
          clipPath: 'polygon(100% 100%, 20% 100%, 100% 25%)'
        }}
      />

      {/* 4. FLOATING BLACK CIRCLES */}
      <div className="pointer-events-none absolute left-[3%] top-[58%] z-0 h-14 w-14 sm:h-18 sm:w-18 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute left-[14%] top-[72%] z-0 h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute left-[36%] top-[14%] z-0 h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute left-[40%] top-[15%] z-0 h-4.5 w-4.5 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute left-[40%] top-[50%] z-0 h-3.5 w-3.5 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute left-[31%] top-[29%] z-0 h-3 w-3 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute right-[34%] top-[22%] z-0 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute right-[28%] top-[52%] z-0 h-3.5 w-3.5 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute right-[15%] top-[72%] z-0 h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute right-[3%] top-[58%] z-0 h-10 w-10 sm:h-14 sm:w-14 rounded-full bg-[#111111]" />

      {/* 5. MAIN CONTENT WRAPPER */}
      <div className="relative z-10 flex min-h-screen w-full flex-col justify-between">
        {children}
      </div>

      {/* 6. GIANT OUTLINED 'WAITLIST' WATERMARK */}
      {showWatermark && (
        <div className="pointer-events-none absolute bottom-[-2vw] left-0 z-0 flex w-full justify-center select-none overflow-hidden opacity-30">
          <span 
            className="font-sans text-[clamp(120px,22vw,400px)] font-black tracking-tight text-transparent whitespace-nowrap"
            style={{ WebkitTextStroke: '2.5px rgba(255, 255, 255, 0.4)' }}
          >
            Waitlist
          </span>
        </div>
      )}
    </div>
  );
};

export default WaitlistBackground;
