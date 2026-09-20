import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Link as LinkIcon, ArrowRight } from "lucide-react";
import crownIcon from "@/assets/crown.png";
import mascot1 from "@/assets/mascot1.png";
import { WaitlistFormData } from "./WaitlistForm";

interface WaitlistDashboardProps {
  userData: WaitlistFormData;
  onViewLeaderboard: () => void;
}

const WaitlistDashboard = ({
  userData,
  onViewLeaderboard,
}: WaitlistDashboardProps) => {
  const [copiedTag, setCopiedTag] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const displayTag = userData.premiumTag || userData.freeTag || "@erva.xane";
  const userRank = 1284;
  const referralLink = `${window.location.origin}/waitlist?ref=${encodeURIComponent(
    displayTag.replace("@", "")
  )}`;

  const handleCopyTag = () => {
    navigator.clipboard.writeText(displayTag);
    setCopiedTag(true);
    setTimeout(() => setCopiedTag(false), 2000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="mx-auto flex w-full max-w-[760px] flex-col items-center px-4 py-8 sm:py-12 gap-5">
      
      {/* 1. TOP CARD: XaneTag & Waitlist Position */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full overflow-hidden rounded-[24px] bg-white p-6 sm:p-8 shadow-xl text-[#111111]"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          
          {/* Left Column: Your XaneTag */}
          <div className="flex flex-col justify-between space-y-2 text-left pr-0 sm:pr-4">
            <span className="text-xs font-semibold text-gray-500">Your XaneTag</span>
            <div className="flex items-center gap-2">
              <span className="font-sans text-2xl sm:text-3xl md:text-4xl font-black text-[#0047FF] tracking-tight break-all">
                {displayTag}
              </span>
              <button
                type="button"
                onClick={handleCopyTag}
                title="Copy XaneTag"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition hover:bg-gray-200 active:scale-95 cursor-pointer"
              >
                {copiedTag ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
              </button>
            </div>
            <p className="text-xs font-medium text-gray-500">
              Your XaneTag is reserved for you!
            </p>
          </div>

          {/* Right Column: Waitlist Position */}
          <div className="flex items-center justify-between pt-4 sm:pt-0 sm:pl-8 text-left">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-gray-500">Waitlist Position</span>
              <p className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-[#0047FF] tracking-tight">
                #{userRank.toLocaleString()}
              </p>
              <p className="text-xs font-medium text-gray-500">
                Top 100 get rewards at launch
              </p>
            </div>
            <div className="w-16 sm:w-20 shrink-0">
              <img src={crownIcon} alt="Crown" className="w-full object-contain drop-shadow-md" />
            </div>
          </div>

        </div>
      </motion.div>

      {/* 2. MIDDLE CARD: Move Up The Waitlist */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="w-full rounded-[24px] bg-white p-6 sm:p-8 shadow-xl text-[#111111] text-center space-y-4"
      >
        <div className="text-left">
          <h2 className="font-sans text-lg sm:text-xl font-bold text-[#111111]">
            Move up the waitlist
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-gray-600 flex items-center gap-1.5 mt-0.5">
            <span>Refer one person</span>
            <ArrowRight size={14} className="text-gray-400" />
            <span className="text-[#0047FF]">Move up 3 places</span>
          </p>
        </div>

        {/* Progress Tracker Bar */}
        <div className="flex items-center gap-3 py-1">
          <span className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs sm:text-sm font-bold text-[#111111]">
            #{userRank}
          </span>
          <div className="relative h-3.5 flex-1 overflow-hidden rounded-full bg-blue-100">
            <div className="h-full w-[45%] rounded-full bg-[#0047FF] transition-all duration-700" />
          </div>
          <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-xs sm:text-sm font-bold text-[#0047FF]">
            +3
          </span>
        </div>

        {/* Copy Referral Link Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleCopyLink}
          className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[#0047FF] py-3.5 sm:py-4 px-6 text-sm sm:text-base font-bold text-white shadow-lg transition-all hover:bg-[#0036CC] active:scale-[0.98] cursor-pointer"
        >
          <span>{copiedLink ? "Referral link copied! 🎉" : "Copy referral link"}</span>
          <LinkIcon size={18} />
        </motion.button>

        <p className="text-[11px] font-medium text-gray-500">
          Every referral move you up and count towards your next level
        </p>
      </motion.div>

      {/* 3. BOTTOM CARD: Current Level & Leaderboard Callout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="w-full rounded-[24px] bg-gradient-to-r from-[#0036CC] to-[#0047FF] p-5 sm:p-6 shadow-xl text-white flex flex-col sm:flex-row items-center justify-between gap-5 border border-white/10"
      >
        <div className="flex items-center gap-4 text-left w-full sm:w-auto">
          <div className="h-16 w-16 sm:h-20 sm:w-20 shrink-0 rounded-2xl bg-white/10 p-1 backdrop-blur-sm flex items-center justify-center">
            <img src={mascot1} alt="Level 1" className="h-full w-full object-contain" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-white/80 uppercase tracking-wider">
              Current level
            </span>
            <h3 className="font-sans text-xl sm:text-2xl font-black text-white">
              Waitlist Member
            </h3>
            <p className="text-xs font-medium text-white/80 flex items-center gap-1 mt-0.5">
              <span>Refer 3 people</span>
              <ArrowRight size={12} />
              <span className="text-[#D9FF3F] font-bold">Become a XaneScout</span>
            </p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onViewLeaderboard}
          className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-xs sm:text-sm font-bold text-[#0047FF] shadow-md transition-all hover:bg-gray-50 cursor-pointer"
        >
          <span>Click to see the Leaderboard</span>
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0047FF] text-white">
            <ArrowRight size={12} strokeWidth={3} />
          </div>
        </motion.button>
      </motion.div>

    </div>
  );
};

export default WaitlistDashboard;
