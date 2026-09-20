import { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { ArrowRight } from "lucide-react";
import xaneLogo from "@/assets/xane-logo.png";

interface CelebrationStepProps {
  onContinue: () => void;
}

const CelebrationStep = ({ onContinue }: CelebrationStepProps) => {
  // Fire festive confetti bursts on load
  useEffect(() => {
    // 1. Initial big burst from the center popper
    confetti({
      particleCount: 70,
      spread: 90,
      origin: { y: 0.6, x: 0.5 },
      colors: ["#FFC72C", "#FF9500", "#FF3B30", "#FF7597", "#00BFFF", "#00E5FF"],
      ticks: 200,
      gravity: 0.8,
      scalar: 1.1,
    });

    // 2. Side bursts for rich celebration feel
    const timer1 = setTimeout(() => {
      confetti({
        particleCount: 45,
        angle: 60,
        spread: 55,
        origin: { x: 0.1, y: 0.65 },
        colors: ["#00E5FF", "#FF3B30", "#FFC72C", "#FF7597"],
      });
      confetti({
        particleCount: 45,
        angle: 120,
        spread: 55,
        origin: { x: 0.9, y: 0.65 },
        colors: ["#00E5FF", "#FF3B30", "#FFC72C", "#FF7597"],
      });
    }, 400);

    // 3. Auto-redirect to Dashboard after 4.5 seconds
    const autoAdvance = setTimeout(() => {
      onContinue();
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(autoAdvance);
    };
  }, [onContinue]);

  return (
    <div 
      onClick={onContinue}
      className="relative flex min-h-[88vh] w-full flex-col items-center justify-between px-4 py-2 sm:py-4 select-none cursor-pointer"
      title="Click anywhere to continue to dashboard"
    >
      
      {/* 1. BUNTING GARLAND ACROSS THE VERY TOP (MATCHING FIGMA 1:1) */}
      <div className="absolute left-0 top-0 z-20 w-full overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1200 135"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto max-h-[85px] sm:max-h-[115px] md:max-h-[135px] object-cover"
          preserveAspectRatio="none"
        >
          {/* Garland String Arc */}
          <path
            d="M -10 15 Q 600 55 1210 15"
            stroke="#151515"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Pennant Flags across the arc */}
          {/* Flag 1 - Salmon Pink */}
          <polygon points="0,15 70,18 35,95" fill="#FF8585" />
          {/* Flag 2 - Pastel Cyan */}
          <polygon points="80,19 170,24 125,108" fill="#9CE7FF" />
          {/* Flag 3 - Mint Green */}
          <polygon points="180,25 270,30 225,116" fill="#95E89B" />
          {/* Flag 4 - Coral Peach */}
          <polygon points="280,31 370,36 325,120" fill="#FFAAA6" />
          {/* Flag 5 - Soft Sky Blue */}
          <polygon points="380,37 470,41 425,122" fill="#B3EEFF" />
          {/* Flag 6 - Light Yellow */}
          <polygon points="480,42 570,43 525,123" fill="#FFF285" />
          {/* Flag 7 - Coral Pink */}
          <polygon points="580,43 670,42 625,123" fill="#FFAAA6" />
          {/* Flag 8 - Light Cyan */}
          <polygon points="680,41 770,37 725,122" fill="#9CE7FF" />
          {/* Flag 9 - Mint Green */}
          <polygon points="780,36 870,31 825,120" fill="#95E89B" />
          {/* Flag 10 - Soft Pink */}
          <polygon points="880,30 970,25 925,116" fill="#FF9B9B" />
          {/* Flag 11 - Sky Blue */}
          <polygon points="980,24 1070,19 1025,108" fill="#9CE7FF" />
          {/* Flag 12 - Yellow */}
          <polygon points="1080,18 1160,15 1120,95" fill="#FFF285" />
          {/* Flag 13 - Coral edge */}
          <polygon points="1170,15 1205,13 1190,85" fill="#FFAAA6" />
        </svg>
      </div>

      {/* 2. CENTERED XANE LOGO */}
      <div className="relative z-20 mt-14 sm:mt-18 md:mt-20 flex w-full items-center justify-center">
        <img src={xaneLogo} alt="Xane" className="h-7 sm:h-9 md:h-11 w-auto drop-shadow-md" />
      </div>

      {/* 3. HERO HEADLINE: "You're on the list" */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-20 mt-4 sm:mt-6 text-center px-4"
      >
        <h1 className="font-sans text-[40px] sm:text-[58px] md:text-[72px] lg:text-[80px] font-black tracking-tight text-white leading-tight">
          You’re on the list
        </h1>
      </motion.div>

      {/* 4. PARTY POPPER CONE & CONFETTI EXPLOSION (ACCURATE 1:1 TO IMAGE) */}
      <div className="relative z-20 my-auto flex w-full max-w-[550px] items-center justify-center py-2 sm:py-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
          className="relative h-[280px] w-[300px] sm:h-[350px] sm:w-[380px] md:h-[400px] md:w-[440px] flex items-center justify-center"
        >
          <svg viewBox="0 0 400 380" fill="none" className="w-full h-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
            
            {/* --- CONFETTI SQUARES / RECTANGLES --- */}
            {/* Top Yellow Confetti */}
            <motion.rect
              initial={{ y: 30, opacity: 0, scale: 0 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              x="175" y="45" width="22" height="24" rx="4" fill="#FFC72C" transform="rotate(-15 175 45)"
            />
            {/* Orange Confetti Left */}
            <motion.rect
              initial={{ y: 30, opacity: 0, scale: 0 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              x="168" y="90" width="20" height="20" rx="3" fill="#FF9500" transform="rotate(25 168 90)"
            />
            {/* Cyan Confetti Far Left */}
            <motion.rect
              initial={{ x: 20, opacity: 0, scale: 0 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              x="105" y="185" width="20" height="22" rx="4" fill="#00E5FF" transform="rotate(-30 105 185)"
            />
            {/* Yellow Confetti Bottom Left */}
            <motion.rect
              initial={{ y: 20, opacity: 0, scale: 0 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              x="115" y="240" width="22" height="18" rx="3" fill="#FFC72C" transform="rotate(18 115 240)"
            />
            {/* Orange Confetti Bottom Left 2 */}
            <motion.rect
              initial={{ y: 20, opacity: 0, scale: 0 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              x="142" y="270" width="24" height="20" rx="4" fill="#FF9500" transform="rotate(-12 142 270)"
            />
            {/* Yellow Confetti Center Mid */}
            <motion.rect
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.32, duration: 0.4 }}
              x="215" y="115" width="18" height="18" rx="3" fill="#FFC72C" transform="rotate(-20 215 115)"
            />
            {/* Red Confetti Mid Right */}
            <motion.rect
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.36, duration: 0.4 }}
              x="225" y="165" width="20" height="20" rx="4" fill="#FF3B30" transform="rotate(15 225 165)"
            />
            {/* Orange Confetti Mid Right 2 */}
            <motion.rect
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.42, duration: 0.4 }}
              x="270" y="180" width="22" height="22" rx="4" fill="#FF9500" transform="rotate(35 270 180)"
            />
            {/* Red Confetti Far Right */}
            <motion.rect
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              x="256" y="245" width="24" height="20" rx="4" fill="#FF3B30" transform="rotate(-25 256 245)"
            />
            {/* Salmon Pink Confetti Bottom Right */}
            <motion.rect
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.48, duration: 0.4 }}
              x="285" y="225" width="22" height="18" rx="3" fill="#FF8A80" transform="rotate(12 285 225)"
            />

            {/* --- EXPLODING THICK CURLY RIBBONS --- */}

            {/* 1. LEFT RED SPIRAL RIBBON (CURLS LIKE A '6') */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
              d="M 172 265 C 160 230, 140 185, 145 150 C 150 115, 185 115, 188 150 C 190 185, 155 205, 145 170 C 140 150, 150 135, 168 135"
              stroke="#FF3B30"
              strokeWidth="20"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* 2. CENTER PINK WAVY RIBBON */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.0, delay: 0.22, ease: "easeOut" }}
              d="M 198 255 C 195 210, 215 180, 205 140 C 195 100, 215 75, 230 65 C 242 58, 240 45, 225 35 C 210 25, 200 45, 195 65"
              stroke="#FF7597"
              strokeWidth="20"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* 3. RIGHT CYAN WAVY RIBBON */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.95, delay: 0.28, ease: "easeOut" }}
              d="M 215 260 C 235 225, 260 200, 252 165 C 245 130, 260 95, 275 85 C 285 78, 280 65, 265 60 C 250 55, 245 75, 240 95"
              stroke="#00BFFF"
              strokeWidth="19"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* --- GOLD PARTY POPPER CONE --- */}
            {/* Outer Cone Body */}
            <path
              d="M 158 260 C 155 240, 240 240, 238 260 C 235 285, 205 345, 185 345 C 165 345, 158 285, 158 260 Z"
              fill="#FFC72C"
            />
            {/* Golden Cone Shadow/Highlight */}
            <path
              d="M 185 345 C 205 345, 235 285, 238 260 C 238 250, 220 250, 210 260 C 195 295, 188 335, 185 345 Z"
              fill="#FFA000"
              opacity="0.8"
            />
            {/* Cone Rim Golden Ring */}
            <ellipse cx="198" cy="260" rx="40" ry="16" fill="#FFD54F" />
            {/* Dark Hollow Interior Hole */}
            <ellipse cx="198" cy="260" rx="34" ry="12" fill="#4E2E18" />

          </svg>
        </motion.div>
      </div>

      {/* 5. INTERACTIVE VIEW DASHBOARD BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="relative z-20 mb-4 sm:mb-6 flex flex-col items-center gap-2"
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onContinue();
          }}
          className="flex items-center gap-3 rounded-full bg-white py-3.5 sm:py-4 px-8 sm:px-10 text-base sm:text-lg font-black text-[#0047FF] shadow-2xl transition-all hover:bg-gray-50 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span>Continue to Dashboard</span>
          <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-[#0047FF] text-white">
            <ArrowRight size={14} strokeWidth={3} />
          </div>
        </button>
        <span className="text-xs font-semibold text-white/80">
          Click anywhere or wait to proceed automatically
        </span>
      </motion.div>

    </div>
  );
};

export default CelebrationStep;
