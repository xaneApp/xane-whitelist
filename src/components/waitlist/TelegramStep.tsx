import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import telegramPlane from "@/assets/telegramplane.png";

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
    // Automatically transition to connected state after brief delay
    setTimeout(() => {
      setIsConnected(true);
    }, 1200);
  };

  return (
    <div className="relative mx-auto flex w-full max-w-[800px] flex-col items-center justify-center px-4 py-16 sm:py-24 text-center">
      
      {/* Big Telegram Paper Plane Graphic on Left / Top */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -30, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
        transition={{ type: "spring", duration: 0.8 }}
        className="pointer-events-none absolute -left-6 top-8 sm:-left-16 sm:top-10 w-[120px] sm:w-[180px] md:w-[220px] opacity-90"
      >
        <img src={telegramPlane} alt="Telegram" className="w-full object-contain drop-shadow-2xl" />
      </motion.div>

      {/* Light beam / background spotlight effect */}
      <div 
        className="pointer-events-none absolute right-[10%] bottom-[0%] h-[350px] w-[250px] sm:w-[350px] opacity-30 bg-gradient-to-t from-cyan-400 to-transparent" 
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      />

      {/* Headings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-[550px]"
      >
        <h1 className="font-sans text-[36px] sm:text-[50px] md:text-[56px] font-black leading-tight tracking-tight text-white">
          Become a part of Xane.
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl font-medium text-white/90">
          Join the community to complete your waitlist sign-up.
        </p>
      </motion.div>

      {/* Action Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative z-10 mt-10 sm:mt-14 flex flex-col items-center gap-4 w-full max-w-[360px]"
      >
        {isConnected && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-1.5 text-xs sm:text-sm font-bold text-white border border-emerald-400/40 backdrop-blur-sm"
          >
            <CheckCircle2 size={16} className="text-emerald-400 fill-emerald-400/20" />
            <span>Telegram Connected Successfully</span>
          </motion.div>
        )}

        {!isConnected ? (
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleJoinTelegram}
            className="flex w-full items-center justify-center gap-3 rounded-full bg-white py-4 px-8 text-base sm:text-lg font-black text-[#0047FF] shadow-2xl transition-all hover:bg-gray-50 active:scale-[0.98] cursor-pointer"
          >
            <span>{hasClicked ? "Connecting..." : "Join Telegram"}</span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0047FF] text-white">
              <ArrowRight size={15} strokeWidth={3} />
            </div>
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onContinue}
            className="flex w-full items-center justify-center gap-3 rounded-full bg-white py-4 px-8 text-base sm:text-lg font-black text-[#0047FF] shadow-2xl transition-all hover:bg-gray-50 active:scale-[0.98] cursor-pointer"
          >
            <span>Continue</span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0047FF] text-white">
              <ArrowRight size={15} strokeWidth={3} />
            </div>
          </motion.button>
        )}
      </motion.div>

    </div>
  );
};

export default TelegramStep;
