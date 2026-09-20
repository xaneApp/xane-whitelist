import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import telegramPlane from "@/assets/telegramplane.png";
import telegramPlane2 from "@/assets/telegramplane2.png";
import xaneLogo from "@/assets/xane-logo.png";

interface TelegramStepProps {
  onContinue: () => void;
  telegramUrl?: string;
}

const TelegramStep = ({
  onContinue,
  telegramUrl = "https://t.me/xaneapp",
}: TelegramStepProps) => {
  const [isConnected, setIsConnected] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  const handleJoinTelegram = () => {
    window.open(telegramUrl, "_blank", "noopener,noreferrer");
    setHasClicked(true);
    setTimeout(() => {
      setIsConnected(true);
    }, 1200);
  };

  return (
    <div className="relative flex min-h-[85vh] w-full flex-col items-center justify-between px-4 py-8 sm:py-12 overflow-hidden">
      
      {/* 1. AEROPLANE PINNED TO THE VERY LEFT EDGE OF THE SCREEN */}
      <div className="pointer-events-none absolute left-0 top-[6%] sm:top-[8%] z-10 w-[200px] sm:w-[320px] md:w-[420px] lg:w-[500px] xl:w-[560px] -translate-x-[20%] sm:-translate-x-[15%] lg:-translate-x-[12%] select-none">
        <motion.img
          initial={{ opacity: 0, x: -60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src={telegramPlane}
          alt="Telegram Plane"
          className="w-full object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
        />
      </div>

      {/* 2. TELEGRAM PLANE 2 PINNED TO THE BOTTOM RIGHT EDGE OF THE SCREEN */}
      <div className="pointer-events-none absolute right-0 bottom-0 z-10 w-[240px] sm:w-[360px] md:w-[460px] lg:w-[560px] xl:w-[640px] translate-x-[5%] translate-y-[5%] select-none">
        <motion.img
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          src={telegramPlane2}
          alt="Telegram Plane 2"
          className="w-full object-contain"
        />
      </div>

      {/* 2. TOP CENTERED XANE LOGO */}
      <div className="relative z-20 flex w-full items-center justify-center pt-2 sm:pt-4">
        <img src={xaneLogo} alt="Xane" className="h-8 sm:h-10 md:h-12 w-auto drop-shadow-md" />
      </div>

      {/* 3. HERO CENTER CONTENT */}
      <div className="relative z-20 mx-auto my-auto flex w-full max-w-[850px] flex-col items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-sans text-[44px] sm:text-[62px] md:text-[76px] lg:text-[84px] font-black leading-[1.04] tracking-tight text-white"
        >
          Become a part of <br />
          Xane.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 sm:mt-6 max-w-[580px] text-base sm:text-xl md:text-2xl font-medium text-white/95"
        >
          Join the community to complete your waitlist sign-up.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-10 sm:mt-14 flex w-full max-w-[420px] flex-col items-center gap-4"
        >
          {isConnected && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 rounded-full bg-emerald-500/25 px-5 py-2 text-xs sm:text-sm font-bold text-white border border-emerald-400/50 backdrop-blur-md shadow-lg"
            >
              <CheckCircle2 size={18} className="text-emerald-400 fill-emerald-400/20" />
              <span>Telegram Connected Successfully</span>
            </motion.div>
          )}

          {!isConnected ? (
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleJoinTelegram}
              className="flex w-full items-center justify-center gap-4 rounded-full bg-white py-4 sm:py-5 px-8 sm:px-12 text-lg sm:text-2xl font-black text-[#0047FF] shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition-all hover:bg-gray-50 active:scale-[0.98] cursor-pointer"
            >
              <span>{hasClicked ? "Connecting..." : "Join Telegram"}</span>
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#0047FF] text-white shrink-0">
                <ArrowRight size={18} strokeWidth={3} />
              </div>
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onContinue}
              className="flex w-full items-center justify-center gap-4 rounded-full bg-white py-4 sm:py-5 px-8 sm:px-12 text-lg sm:text-2xl font-black text-[#0047FF] shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition-all hover:bg-gray-50 active:scale-[0.98] cursor-pointer"
            >
              <span>Continue</span>
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#0047FF] text-white shrink-0">
                <ArrowRight size={18} strokeWidth={3} />
              </div>
            </motion.button>
          )}
        </motion.div>
      </div>

      {/* Spacer to balance bottom */}
      <div className="h-6 sm:h-10" />

    </div>
  );
};

export default TelegramStep;
