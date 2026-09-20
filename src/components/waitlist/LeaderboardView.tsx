import { useState } from "react";
import { motion } from "framer-motion";
import crownIcon from "@/assets/crown.png";
import mascot1 from "@/assets/mascot1.png";
import mascot2 from "@/assets/mascot2.png";
import mascot3 from "@/assets/mascot3.png";
import mascot4 from "@/assets/mascot4.png";
import mascot5 from "@/assets/mascot5.png";
import mascot6 from "@/assets/mascot6.png";
import lockIcon from "@/assets/lock.png";

interface LeaderboardViewProps {
  currentUserTag?: string;
}

const mockLeaderboardData7Days = [
  { rank: "#1", user: "@erva.xane", badgeName: "XaneScout", badgeImg: mascot2, refs: 700 },
  { rank: "#2", user: "@crypto_king", badgeName: "XaneScout", badgeImg: mascot2, refs: 700 },
  { rank: "#3", user: "@satoshi_sol", badgeName: "XaneScout", badgeImg: mascot2, refs: 700 },
  { rank: "#4", user: "@alex_defi", badgeName: "XaneScout", badgeImg: mascot2, refs: 700 },
  { rank: "#5", user: "@nigeria_tech", badgeName: "XaneScout", badgeImg: mascot2, refs: 650 },
  { rank: "#6", user: "@lagos_fin", badgeName: "XaneScout", badgeImg: mascot2, refs: 500 },
  { rank: "#7", user: "@kofi_pay", badgeName: "XaneScout", badgeImg: mascot2, refs: 40 },
  { rank: "#8", user: "@david_web3", badgeName: "XaneScout", badgeImg: mascot2, refs: 86 },
  { rank: "#9", user: "@zainab_c", badgeName: "XaneScout", badgeImg: mascot2, refs: 60 },
];

const mockLeaderboardDataAllTime = [
  { rank: "#1", user: "@erva.xane", badgeName: "XaneRegionalLead", badgeImg: mascot6, refs: 1420 },
  { rank: "#2", user: "@crypto_king", badgeName: "XaneStateLead", badgeImg: mascot5, refs: 980 },
  { rank: "#3", user: "@satoshi_sol", badgeName: "XaneAmbassador", badgeImg: mascot4, refs: 850 },
  { rank: "#4", user: "@alex_defi", badgeName: "XaneAdvocate", badgeImg: mascot3, refs: 740 },
  { rank: "#5", user: "@nigeria_tech", badgeName: "XaneScout", badgeImg: mascot2, refs: 650 },
  { rank: "#6", user: "@lagos_fin", badgeName: "XaneScout", badgeImg: mascot2, refs: 500 },
  { rank: "#7", user: "@kofi_pay", badgeName: "XaneScout", badgeImg: mascot2, refs: 410 },
  { rank: "#8", user: "@david_web3", badgeName: "XaneScout", badgeImg: mascot2, refs: 320 },
  { rank: "#9", user: "@zainab_c", badgeName: "XaneScout", badgeImg: mascot2, refs: 290 },
];

const LeaderboardView = ({
  currentUserTag = "@erva.xane",
}: LeaderboardViewProps) => {
  const [activeTab, setActiveTab] = useState<"leaderboard" | "levels">("leaderboard");
  const [timeFilter, setTimeFilter] = useState<"7days" | "alltime">("7days");
  const [currentPage, setCurrentPage] = useState(1);

  const leaderboardRows =
    timeFilter === "7days" ? mockLeaderboardData7Days : mockLeaderboardDataAllTime;

  return (
    <div className="mx-auto flex w-full max-w-[1050px] flex-col items-center px-4 py-8 sm:py-12">
      
      {/* 1. Main Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-[700px] text-center"
      >
        <h1 className="font-sans text-[28px] sm:text-[38px] md:text-[46px] font-black leading-tight tracking-tight text-white">
          Refer Friends to Climb The Ranks and Unlock Rewards at Launch
        </h1>
      </motion.div>

      {/* 2. Leaderboard / Levels Segmented Toggle */}
      <div className="mt-8 flex items-center rounded-full border border-white/20 bg-[#0036CC]/80 p-1 backdrop-blur-md shadow-inner">
        <button
          type="button"
          onClick={() => setActiveTab("leaderboard")}
          className={`rounded-full px-6 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeTab === "leaderboard"
              ? "bg-white text-[#0047FF] shadow-md"
              : "text-white hover:text-white/80"
          }`}
        >
          Leaderboard
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("levels")}
          className={`rounded-full px-6 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeTab === "levels"
              ? "bg-white text-[#0047FF] shadow-md"
              : "text-white hover:text-white/80"
          }`}
        >
          Levels
        </button>
      </div>

      {/* TAB 1: LEADERBOARD CONTENT */}
      {activeTab === "leaderboard" && (
        <motion.div
          key="leaderboard"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-8 w-full max-w-[850px] flex flex-col items-center"
        >
          {/* Time Filter Pill (7 days / All time) */}
          <div className="flex items-center rounded-full bg-[#0036CC] p-1 shadow-inner border border-white/10">
            <button
              type="button"
              onClick={() => setTimeFilter("7days")}
              className={`rounded-full px-5 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                timeFilter === "7days"
                  ? "bg-white text-[#0047FF] shadow-sm"
                  : "text-white/80 hover:text-white"
              }`}
            >
              7 days
            </button>
            <button
              type="button"
              onClick={() => setTimeFilter("alltime")}
              className={`rounded-full px-5 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                timeFilter === "alltime"
                  ? "bg-white text-[#0047FF] shadow-sm"
                  : "text-white/80 hover:text-white"
              }`}
            >
              All time
            </button>
          </div>

          {/* Crown Leader Highlight */}
          <div className="mt-6 flex flex-col items-center text-center">
            <div className="w-10 sm:w-12 drop-shadow-lg">
              <img src={crownIcon} alt="Crown" className="w-full object-contain" />
            </div>
            <p className="mt-1 font-sans text-xl sm:text-2xl font-black text-white">
              <span className="text-[#D9FF3F]">@erva.xane</span> is leading
            </p>
            <p className="text-xs sm:text-sm text-white/80">
              {timeFilter === "7days" ? "52 referrals this week" : "1,420 referrals all time"}
            </p>
          </div>

          {/* Table Container */}
          <div className="mt-6 w-full overflow-hidden rounded-[24px] border border-white/15 bg-[#0036CC]/80 backdrop-blur-xl shadow-2xl">
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-[#0047FF] px-6 py-3.5 text-xs font-bold text-white border-b border-white/10">
              <div className="col-span-3 text-left">Rank</div>
              <div className="col-span-6 text-center">Badge</div>
              <div className="col-span-3 text-right">Verified Referrals</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-white/10 text-xs sm:text-sm font-medium text-white">
              {leaderboardRows.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 items-center px-6 py-3.5 transition-colors hover:bg-white/5"
                >
                  <div className="col-span-3 text-left font-bold text-white/90">
                    {row.rank}
                  </div>
                  <div className="col-span-6 flex items-center justify-center gap-2">
                    <span>{row.badgeName}</span>
                    <img
                      src={row.badgeImg}
                      alt={row.badgeName}
                      className="h-6 w-6 object-contain drop-shadow-sm"
                    />
                  </div>
                  <div className="col-span-3 text-right font-bold text-white">
                    {row.refs}
                  </div>
                </div>
              ))}

              {/* User Pinned Row */}
              <div className="grid grid-cols-12 items-center bg-[#0047FF] px-6 py-4 border-t-2 border-white/20 font-bold text-white">
                <div className="col-span-3 text-left">#1282 (you)</div>
                <div className="col-span-6 flex items-center justify-center gap-2">
                  <span>WaitlistMember</span>
                  <img
                    src={mascot1}
                    alt="Waitlist Member"
                    className="h-6 w-6 object-contain"
                  />
                </div>
                <div className="col-span-3 text-right text-[#D9FF3F]">0</div>
              </div>
            </div>

            {/* Pagination Footer */}
            <div className="flex items-center justify-between border-t border-white/10 bg-[#002B99]/60 px-6 py-3 text-xs text-white/80">
              <span>Page {currentPage}/20</span>
              <div className="flex items-center gap-2 font-bold">
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="rounded px-2.5 py-1 transition hover:bg-white/10 disabled:opacity-40 cursor-pointer"
                >
                  ‹ Prev
                </button>
                <button
                  type="button"
                  disabled={currentPage === 20}
                  onClick={() => setCurrentPage((p) => Math.min(20, p + 1))}
                  className="rounded px-2.5 py-1 transition hover:bg-white/10 disabled:opacity-40 cursor-pointer"
                >
                  Next ›
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* TAB 2: LEVELS & BADGES GRID */}
      {activeTab === "levels" && (
        <motion.div
          key="levels"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-8 w-full max-w-[960px]"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            
            {/* Level 1: Waitlist Member (You) */}
            <div className="relative flex flex-col items-center justify-between rounded-[24px] border-2 border-white/80 bg-[#0036CC] p-6 text-center shadow-xl">
              <div className="absolute -top-3.5 right-6 rounded-full bg-white px-3 py-0.5 text-xs font-black text-[#0047FF] shadow-md">
                You
              </div>
              <div className="h-28 w-28 flex items-center justify-center">
                <img src={mascot1} alt="Waitlist Member" className="h-full w-full object-contain" />
              </div>
              <div className="mt-3 space-y-1">
                <h3 className="font-sans text-xl font-black text-white">Waitlist Member</h3>
                <p className="text-xs text-white/80">Free XaneTag, a place on the list</p>
              </div>
              <div className="mt-4 text-xs font-bold text-[#D9FF3F]">Current Level</div>
            </div>

            {/* Level 2: Xane Scout */}
            <div className="flex flex-col items-center justify-between rounded-[24px] border border-white/15 bg-[#0036CC]/80 p-6 text-center shadow-xl">
              <div className="h-28 w-28 flex items-center justify-center">
                <img src={mascot2} alt="Xane Scout" className="h-full w-full object-contain" />
              </div>
              <div className="mt-3 space-y-1">
                <h3 className="font-sans text-xl font-black text-white">Xane Scout</h3>
                <p className="text-xs text-white/80">Level 1 + early Xane updates</p>
              </div>
              <div className="mt-4 font-sans text-sm font-black text-white">3 refs</div>
            </div>

            {/* Level 3: Xane Advocate */}
            <div className="flex flex-col items-center justify-between rounded-[24px] border border-white/15 bg-[#0036CC]/80 p-6 text-center shadow-xl">
              <div className="h-28 w-28 flex items-center justify-center">
                <img src={mascot3} alt="Xane Advocate" className="h-full w-full object-contain" />
              </div>
              <div className="mt-3 space-y-1">
                <h3 className="font-sans text-xl font-black text-white">Xane Advocate</h3>
                <p className="text-xs text-white/80">Level 2 + premium XaneTag, early opportunities</p>
              </div>
              <div className="mt-4 font-sans text-sm font-black text-white">10 refs</div>
            </div>

            {/* Level 4: Xane Ambassador */}
            <div className="flex flex-col items-center justify-between rounded-[24px] border border-white/15 bg-[#0036CC]/80 p-6 text-center shadow-xl">
              <div className="h-28 w-28 flex items-center justify-center">
                <img src={mascot4} alt="Xane Ambassador" className="h-full w-full object-contain" />
              </div>
              <div className="mt-3 space-y-1">
                <h3 className="font-sans text-xl font-black text-white">Xane Ambassador</h3>
                <p className="text-xs text-white/80">Level 3 + host campaigns, incentives</p>
              </div>
              <div className="mt-4 font-sans text-sm font-black text-white">30 refs</div>
            </div>

            {/* Level 5: Xane State Lead */}
            <div className="flex flex-col items-center justify-between rounded-[24px] border border-white/15 bg-[#0036CC]/80 p-6 text-center shadow-xl">
              <div className="h-28 w-28 flex items-center justify-center">
                <img src={mascot5} alt="Xane State Lead" className="h-full w-full object-contain" />
              </div>
              <div className="mt-3 space-y-1">
                <h3 className="font-sans text-xl font-black text-white">Xane State Lead</h3>
                <p className="text-xs text-white/80">Level 4 + represent Xane in your city, merch</p>
              </div>
              <div className="mt-4 font-sans text-sm font-black text-white">50 refs</div>
            </div>

            {/* Level 6: Xane Regional Lead */}
            <div className="flex flex-col items-center justify-between rounded-[24px] border border-white/15 bg-[#0036CC]/80 p-6 text-center shadow-xl">
              <div className="h-28 w-28 flex items-center justify-center">
                <img src={mascot6} alt="Xane Regional Lead" className="h-full w-full object-contain" />
              </div>
              <div className="mt-3 space-y-1">
                <h3 className="font-sans text-xl font-black text-white">Xane Regional Lead</h3>
                <p className="text-xs text-white/80">Level 5 + represent Xane in your region, merch</p>
              </div>
              <div className="mt-4 font-sans text-sm font-black text-white">70 refs</div>
            </div>

            {/* Level 7: Revealed at launch (Locked) */}
            <div className="flex flex-col items-center justify-between rounded-[24px] border border-[#F3E5AB]/40 bg-[#E8DAB2]/90 p-6 text-center shadow-xl text-[#3A2E00]">
              <div className="h-24 w-24 flex items-center justify-center">
                <img src={lockIcon} alt="Locked" className="h-16 w-16 object-contain" />
              </div>
              <div className="mt-3 space-y-1">
                <h3 className="font-sans text-lg font-black text-[#0047FF]">Revealed at launch</h3>
                <p className="text-xs font-semibold text-[#5A4E20]">Xane Captain</p>
              </div>
              <div className="mt-4 text-xs font-bold text-[#5A4E20]">🔒 Locked</div>
            </div>

            {/* Level 8: Revealed at launch (Locked) */}
            <div className="flex flex-col items-center justify-between rounded-[24px] border border-[#F3E5AB]/40 bg-[#E8DAB2]/90 p-6 text-center shadow-xl text-[#3A2E00]">
              <div className="h-24 w-24 flex items-center justify-center">
                <img src={lockIcon} alt="Locked" className="h-16 w-16 object-contain" />
              </div>
              <div className="mt-3 space-y-1">
                <h3 className="font-sans text-lg font-black text-[#0047FF]">Revealed at launch</h3>
                <p className="text-xs font-semibold text-[#5A4E20]">Founding Member</p>
              </div>
              <div className="mt-4 text-xs font-bold text-[#5A4E20]">🔒 Locked</div>
            </div>

          </div>
        </motion.div>
      )}

    </div>
  );
};

export default LeaderboardView;
