import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import telegramPlane from "@/assets/telegramplane.png";
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
    <div className="relative mx-auto flex w-full max-w-[1100px] flex-1 flex-col items-center justify-center px-4 py-12 sm:py-16 text-center">
      
      {/* Top Xane Logo for Telegram view */}
      <div className="mb-12 sm:mb-16 flex items-center justify-center">
        <img src={xaneLogo} alt="Xane" className="h-8 sm:h-10 md:h-11 w-auto" />
      </div>

      {/* Main Container with Graphic & Content */}
      <div className="relative flex w-full max-w-[800px] flex-col items-center justify-center">
        
        {/* Large Telegram Paper Plane Icon on the Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -40, rotate: -12 }}
          animate={{ opacity: 1, scale: 1, x: 0, rotate: -6 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="pointer-events-none absolute -left-4 sm:-left-20 md:-left-28 -top-8 sm:-top-12 w-[110px] sm:w-[170px] md:w-[220px] lg:w-[250px] opacity-95"
        >
          <img
            src={telegramPlane}
            alt="Telegram Plane"
            className="w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          />
        </motion.div>

        {/* Headings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-[620px] px-2"
        >
          <h1 className="font-sans text-[38px] sm:text-[54px] md:text-[64px] lg:text-[72px] font-black leading-[1.05] tracking-tight text-white">
            Become a part of <br className="hidden sm:inline" />
            Xane.
          </h1>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-2xl font-medium text-white/90">
            Join the community to complete your waitlist sign-up.
          </p>
        </motion.div>

        {/* Action Button Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative z-10 mt-10 sm:mt-14 flex flex-col items-center gap-4 w-full max-w-[420px]"
        >
          {isConnected && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 rounded-full bg-emerald-500/20 px-5 py-2 text-xs sm:text-sm font-bold text-white border border-emerald-400/40 backdrop-blur-sm"
            >
              <CheckCircle2 size={18} className="text-emerald-400 fill-emerald-400/20" />
              <span>Telegram Connected Successfully</span>
            </motion.div>
          )}

          {!isConnected ? (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleJoinTelegram}
              className="flex w-full items-center justify-center gap-3 rounded-full bg-white py-4 sm:py-5 px-8 sm:px-10 text-lg sm:text-xl font-black text-[#0047FF] shadow-[0_15px_40px_rgba(0,0,0,0.3)] transition-all hover:bg-gray-50 active:scale-[0.98] cursor-pointer"
            >
              <span>{hasClicked ? "Connecting..." : "Join Telegram"}</span>
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#0047FF] text-white">
                <ArrowRight size={16} strokeWidth={3} />
              </div>
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onContinue}
              className="flex w-full items-center justify-center gap-3 rounded-full bg-white py-4 sm:py-5 px-8 sm:px-10 text-lg sm:text-xl font-black text-[#0047FF] shadow-[0_15px_40px_rgba(0,0,0,0.3)] transition-all hover:bg-gray-50 active:scale-[0.98] cursor-pointer"
            >
              <span>Continue</span>
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#0047FF] text-white">
                <ArrowRight size={16} strokeWidth={3} />
              </div>
            </motion.button>
          )}
        </motion.div>

      </div>
    </div>
  );
};

export default TelegramStep;
