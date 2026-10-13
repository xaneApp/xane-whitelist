import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import crownIcon from "@/assets/crown.png";
import mascot1 from "@/assets/mascot1.png";
import mascot2 from "@/assets/mascot2.png";
import mascot3 from "@/assets/mascot3.png";
import mascot4 from "@/assets/mascot4.png";
import mascot5 from "@/assets/mascot5.png";
import mascot6 from "@/assets/mascot6.png";
import lockIcon from "@/assets/lock.png";

import { getClimb, getLeaderboard, getMe, normalizeTag } from "@/lib/waitlistApi";

interface Props {
  currentUserTag?: string;
  userId?: string;
}

const badgeImage: Record<string, string> = {
  "Waitlist Member": mascot1,
  "Xane Scout": mascot2,
  "Xane Advocate": mascot3,
  "Xane Ambassador": mascot4,
  "Xane Lead": mascot5,
  "Xane Captain": mascot6,
  "Xane Founding Council": mascot6,
};

const PAGE_SIZE = 10;

const LeaderboardView = ({
  currentUserTag = "",
  userId = "",
}: Props) => {
  const [activeTab, setActiveTab] = useState<
    "leaderboard" | "levels"
  >("leaderboard");

  const [rows, setRows] = useState<
    {
      rank: number;
      username: string;
      badge: string;
      friends: number;
    }[]
  >([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [climb, setClimb] = useState<
    Awaited<ReturnType<typeof getClimb>> | null
  >(null);
  const [userMe, setUserMe] = useState<
    Awaited<ReturnType<typeof getMe>> | null
  >(null);

  const [levelsLoading, setLevelsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [timeframe, setTimeframe] = useState<"7days" | "allTime">("7days");

  /*
   * LOAD PUBLIC LEADERBOARD
   */
  useEffect(() => {
    let cancelled = false;

    setLoading(true);
    setError("");

    getLeaderboard()
      .then((result) => {
        if (!cancelled) {
          setRows(result.leaderboard);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(
            err instanceof Error
              ? err.message
              : "Could not load leaderboard."
          );
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  /*
   * LOAD PERSONAL PROGRESS ONLY IF USER EXISTS
   */
  useEffect(() => {
    if (!userId) {
      setClimb(null);
      setUserMe(null);
      setLevelsLoading(false);
      return;
    }

    let cancelled = false;
    setLevelsLoading(true);

    Promise.allSettled([getClimb(userId), getMe(userId)]).then(
      ([climbRes, meRes]) => {
        if (!cancelled) {
          if (climbRes.status === "fulfilled") setClimb(climbRes.value);
          if (meRes.status === "fulfilled") setUserMe(meRes.value);
          setLevelsLoading(false);
        }
      }
    );

    return () => {
      cancelled = true;
    };
  }, [userId]);

  const leader = rows[0];
  const leaderInitial = leader
    ? normalizeTag(leader.username).charAt(0).toUpperCase() || "R"
    : "R";

  const normalizedCurrentTag = normalizeTag(
    currentUserTag || userMe?.xaneTag || ""
  ).toLowerCase();

  const currentIndex = rows.findIndex(
    (row) => normalizeTag(row.username).toLowerCase() === normalizedCurrentTag
  );

  const userRank =
    (currentIndex >= 0 ? rows[currentIndex].rank : null) ??
    climb?.position ??
    userMe?.position ??
    null;

  const userFriends =
    (currentIndex >= 0 ? rows[currentIndex].friends : null) ??
    climb?.referralCount ??
    userMe?.referralCount ??
    0;

  const userBadge =
    (currentIndex >= 0 ? rows[currentIndex].badge : null) ??
    climb?.currentLevel?.label ??
    userMe?.level ??
    "Waitlist Member";

  const effectiveUserTag =
    currentUserTag ||
    (userMe?.xaneTag ? `@${normalizeTag(userMe.xaneTag)}.xane` : "") ||
    "you";

  // Total pages (each page shows 10 items)
  const totalPages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE));

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  /*
   * FIRST PAGE USER POSITION PINNING:
   * Radiyat: "🖼 The bottom nav bar, the number of page and the position of the person on the first page. So each page shows 10"
   * If the current user has a known position outside the top 10 (or is not in top 10 rows),
   * Page 1 shows ranks #1 through #9, and row 10 shows the user's position '#<userRank> (you)'.
   */
  const hasPinnedUserOnPageOne =
    currentPage === 1 &&
    userRank !== null &&
    userRank > 10 &&
    (currentIndex === -1 || currentIndex >= 10);

  let displayedRows: {
    rank: number;
    username: string;
    badge: string;
    friends: number;
    isCurrentUser: boolean;
  }[] = [];

  if (loading) {
    displayedRows = [];
  } else if (hasPinnedUserOnPageOne) {
    const topNine = rows.slice(0, 9).map((r) => ({
      ...r,
      isCurrentUser: false,
    }));
    const pinnedUser = {
      rank: userRank,
      username: effectiveUserTag,
      badge: userBadge,
      friends: userFriends,
      isCurrentUser: true,
    };
    displayedRows = [...topNine, pinnedUser];
  } else {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    displayedRows = rows.slice(startIndex, startIndex + PAGE_SIZE).map((r) => ({
      ...r,
      isCurrentUser:
        Boolean(normalizedCurrentTag) &&
        normalizeTag(r.username).toLowerCase() === normalizedCurrentTag,
    }));
  }

  /*
   * PUBLIC LEVEL LADDER
   *
   * These are the public level thresholds.
   * Personal progress, when available, comes from the backend.
   */
  const publicLevels = [
    {
      key: "waitlist_member",
      label: "Waitlist Member",
      threshold: 0,
    },
    {
      key: "scout",
      label: "Xane Scout",
      threshold: 3,
    },
    {
      key: "advocate",
      label: "Xane Advocate",
      threshold: 10,
    },
    {
      key: "ambassador",
      label: "Xane Ambassador",
      threshold: 30,
    },
    {
      key: "lead",
      label: "Xane Lead",
      threshold: 50,
    },
    {
      key: "captain",
      label: "Xane Captain",
      threshold: 100,
    },
    {
      key: "founding_council",
      label: "Xane Founding Council",
      threshold: 250,
    },
  ];

  /*
   * Use backend ladder when available.
   * Otherwise use the public ladder so visitors can still
   * see the Levels page without an account.
   */
  const levels = climb?.ladder?.length
    ? climb.ladder
    : publicLevels;

  return (
    <div className="mx-auto flex w-full max-w-[1050px] flex-col items-center px-4 py-8 sm:py-12">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-[700px] text-center"
      >
        <h1 className="font-sans text-[28px] font-black leading-tight tracking-tight text-white sm:text-[38px] md:text-[46px]">
          Refer Friends to Climb The Ranks and Unlock Rewards at Launch
        </h1>
      </motion.div>

      {/* TABS */}
      <div className="mt-8 flex items-center rounded-full border border-white/20 bg-[#0036CC]/80 p-1 shadow-inner backdrop-blur-md">
        <button
          type="button"
          onClick={() => setActiveTab("leaderboard")}
          className={`rounded-full px-6 py-2 text-xs font-bold sm:text-sm cursor-pointer transition-all ${
            activeTab === "leaderboard"
              ? "bg-white text-[#0047FF] shadow-md"
              : "text-white"
          }`}
        >
          Leaderboard
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("levels")}
          className={`rounded-full px-6 py-2 text-xs font-bold sm:text-sm cursor-pointer transition-all ${
            activeTab === "levels"
              ? "bg-white text-[#0047FF] shadow-md"
              : "text-white"
          }`}
        >
          Levels
        </button>
      </div>

      {/* =========================
          LEADERBOARD
      ========================= */}
      {activeTab === "leaderboard" ? (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 flex w-full max-w-[850px] flex-col items-center"
        >
          {/* TIMEFRAME TOGGLE (from Figma Image 1) */}
          <div className="flex items-center rounded-full border border-white/20 bg-[#002699]/80 p-0.5 shadow-inner">
            <button
              type="button"
              onClick={() => setTimeframe("7days")}
              className={`rounded-full px-4 py-1 text-xs font-bold transition-all cursor-pointer ${
                timeframe === "7days"
                  ? "bg-white text-[#0047FF] shadow-xs"
                  : "text-white/80 hover:text-white"
              }`}
            >
              7 days
            </button>
            <button
              type="button"
              onClick={() => setTimeframe("allTime")}
              className={`rounded-full px-4 py-1 text-xs font-bold transition-all cursor-pointer ${
                timeframe === "allTime"
                  ? "bg-white text-[#0047FF] shadow-xs"
                  : "text-white/80 hover:text-white"
              }`}
            >
              All time
            </button>
          </div>

          {/* LEADER HEADER */}
          <div className="mt-4 flex flex-col items-center text-center">
            <div className="relative flex flex-col items-center">
              <div className="w-10 drop-shadow-lg sm:w-12">
                <img
                  src={crownIcon}
                  alt="Crown"
                  className="w-full object-contain"
                />
              </div>
              <div className="-mt-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#0047FF] text-xs font-black text-white shadow-md">
                {leaderInitial}
              </div>
            </div>

            <p className="mt-2 font-sans text-xl font-black text-white sm:text-2xl">
              {leader ? (
                <>
                  <span className="text-[#D9FF3F]">
                    @{normalizeTag(leader.username)}.xane
                  </span>{" "}
                  is leading
                </>
              ) : (
                "Leaderboard"
              )}
            </p>

            <p className="text-xs text-white/80 sm:text-sm font-medium">
              {leader
                ? timeframe === "7days"
                  ? `${leader.friends} referrals this week`
                  : `${leader.friends} verified referrals`
                : "Real-time active waitlist members"}
            </p>
          </div>

          {error && (
            <div className="mt-5 w-full rounded-[14px] bg-red-500/20 px-4 py-3 text-xs font-semibold text-white">
              {error}
            </div>
          )}

          {/* LEADERBOARD TABLE CONTAINER */}
          <div className="mt-6 w-full overflow-hidden rounded-[24px] border border-white/15 bg-[#0036CC]/80 shadow-2xl backdrop-blur-xl">
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-[#0047FF] px-4 sm:px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white">
              <div className="col-span-3 sm:col-span-2 text-left">Rank</div>
              <div className="col-span-6 sm:col-span-7 px-2">Badge / XaneTag</div>
              <div className="col-span-3 text-right">Verified Referrals</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-white/10 text-xs font-medium text-white sm:text-sm">
              {loading ? (
                <div className="px-6 py-12 text-center text-white/70 font-semibold">
                  Loading leaderboard...
                </div>
              ) : displayedRows.length === 0 ? (
                <div className="px-6 py-12 text-center text-white/70 font-semibold">
                  No active members yet.
                </div>
              ) : (
                displayedRows.map((row) => {
                  const isYou = row.isCurrentUser;
                  const cleanTag = normalizeTag(row.username);

                  return (
                    <div
                      key={`${row.rank}-${row.username}`}
                      className={`grid grid-cols-12 items-center px-4 sm:px-6 py-3.5 sm:py-4 transition-colors ${
                        isYou
                          ? "bg-[#0047FF] border-y border-[#D9FF3F]/30 shadow-inner"
                          : "hover:bg-white/5"
                      }`}
                    >
                      {/* 1. Rank */}
                      <div className="col-span-3 sm:col-span-2 text-left flex items-center gap-1.5">
                        <span
                          className={`font-black text-xs sm:text-sm ${
                            row.rank === 1
                              ? "text-[#FFD700]"
                              : row.rank === 2
                              ? "text-[#E0E0E0]"
                              : row.rank === 3
                              ? "text-[#CD7F32]"
                              : "text-white"
                          }`}
                        >
                          #{row.rank}
                        </span>
                        {isYou && (
                          <span className="rounded-full bg-[#D9FF3F] px-1.5 py-0.5 text-[9px] sm:text-[10px] font-black text-[#0036CC] uppercase leading-none shadow-xs">
                            you
                          </span>
                        )}
                      </div>

                      {/* 2. Middle Column: XaneTag & Badge (Balanced) */}
                      <div className="col-span-6 sm:col-span-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 px-2">
                        {/* XaneTag */}
                        <div className="flex items-center gap-1.5 truncate">
                          <span className="font-bold text-white text-xs sm:text-sm truncate">
                            @{cleanTag}
                            <span className="text-white/60 font-normal">.xane</span>
                          </span>
                        </div>

                        {/* Badge with Mascot */}
                        <div className="flex items-center gap-1.5 text-white/90 text-[11px] sm:text-xs font-semibold shrink-0">
                          <span className="hidden sm:inline text-white/30">·</span>
                          <span className="truncate">{row.badge}</span>
                          <img
                            src={badgeImage[row.badge] || mascot1}
                            alt={row.badge}
                            className="h-5 w-5 sm:h-6 sm:w-6 object-contain shrink-0 drop-shadow-xs"
                          />
                        </div>
                      </div>

                      {/* 3. Verified Referrals */}
                      <div className="col-span-3 text-right font-black text-white text-xs sm:text-base pr-1 sm:pr-2">
                        {row.friends}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Bottom Navigation Bar (from Figma Image 1) */}
            {!loading && displayedRows.length > 0 && (
              <div className="flex items-center justify-between border-t border-white/10 bg-[#002699]/60 px-4 sm:px-6 py-3.5 backdrop-blur-sm">
                {/* Page Indicator */}
                <span className="text-xs sm:text-sm font-semibold text-white/70">
                  Page {currentPage}/{totalPages}
                </span>

                {/* Prev / Next Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    disabled={currentPage <= 1}
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-bold text-white transition-all hover:bg-white/20 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer shadow-xs"
                  >
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white text-[#0036CC] text-[10px] font-black">
                      ‹
                    </span>
                    <span>Prev</span>
                  </button>

                  <button
                    type="button"
                    disabled={currentPage >= totalPages}
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    className="flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold text-[#0036CC] transition-all hover:bg-white/90 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer shadow-sm"
                  >
                    <span>Next</span>
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#0036CC] text-white text-[10px] font-black">
                      ›
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {currentIndex < 0 && !climb?.position && !userMe?.position && currentUserTag && (
            <p className="mt-3 text-[11px] text-white/70 text-center">
              Your tag will appear in the public leaderboard once your account is active and within the returned leaderboard results.
            </p>
          )}
        </motion.div>
      ) : (
        /* =========================
           PUBLIC LEVELS
        ========================= */
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 w-full max-w-[960px]"
        >
          {/* PERSONAL PROGRESS
              Only appears for a waitlist user.
          */}
          {userId && climb && !levelsLoading && (
            <div className="mb-6 rounded-[24px] border border-white/15 bg-[#0036CC]/80 p-6 text-center shadow-xl backdrop-blur-xl">
              <p className="text-xs font-bold uppercase tracking-wider text-white/60">
                Your Current Level
              </p>

              <div className="mt-3 flex items-center justify-center gap-3">
                <img
                  src={
                    badgeImage[
                      climb.currentLevel.label
                    ] || mascot1
                  }
                  alt={climb.currentLevel.label}
                  className="h-16 w-16 object-contain"
                />

                <div className="text-left">
                  <h2 className="text-xl font-black text-white sm:text-2xl">
                    {climb.currentLevel.label}
                  </h2>

                  <p className="text-xs text-white/70">
                    {climb.referralCount} verified{" "}
                    {climb.referralCount === 1
                      ? "referral"
                      : "referrals"}
                  </p>
                </div>
              </div>

              {climb.nextLevel && (
                <p className="mt-4 text-xs font-semibold text-white/70">
                  {climb.nextLevel.referralsNeeded > 0
                    ? `${climb.nextLevel.referralsNeeded} more ${
                        climb.nextLevel.referralsNeeded === 1
                          ? "referral"
                          : "referrals"
                      } to reach ${
                        climb.nextLevel.label
                      }`
                    : `Next level: ${climb.nextLevel.label}`}
                </p>
              )}
            </div>
          )}

          {/* LEVEL CARDS */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {levels.map((level) => {
              /*
               * If we have personal data, use the real referral count.
               * Otherwise the visitor simply sees the public ladder.
               */
              const isUnlocked = climb
                ? level.threshold <=
                  climb.referralCount
                : level.threshold === 0;

              const image =
                badgeImage[level.label];

              const isLaunchLocked =
                level.key === "captain" ||
                level.key === "founding_council";

              return (
                <div
                  key={level.key}
                  className={`flex flex-col items-center justify-between rounded-[24px] p-6 text-center shadow-xl ${
                    isUnlocked && !isLaunchLocked
                      ? "border border-white/15 bg-[#0036CC]/80"
                      : "border border-[#F3E5AB]/40 bg-[#E8DAB2]/90"
                  }`}
                >
                  {/* MASCOT / LOCK */}
                  <div className="flex h-28 w-28 items-center justify-center">
                    {isLaunchLocked ? (
                      <img
                        src={lockIcon}
                        alt="Locked"
                        className="h-16 w-16 object-contain"
                      />
                    ) : image ? (
                      <img
                        src={image}
                        alt={level.label}
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <img
                        src={mascot1}
                        alt={level.label}
                        className="h-full w-full object-contain"
                      />
                    )}
                  </div>

                  {/* LEVEL INFO */}
                  <div className="mt-3 space-y-1">
                    <h3
                      className={`font-sans text-xl font-black ${
                        isLaunchLocked
                          ? "text-[#0047FF]"
                          : "text-white"
                      }`}
                    >
                      {level.label}
                    </h3>

                    <p
                      className={`text-xs ${
                        isLaunchLocked
                          ? "font-semibold text-[#5A4E20]"
                          : "text-white/80"
                      }`}
                    >
                      {isLaunchLocked
                        ? "Revealed at launch"
                        : level.threshold === 0
                        ? "Starting level"
                        : `${level.threshold} ${
                            level.threshold === 1
                              ? "verified referral"
                              : "verified referrals"
                          }`}
                    </p>
                  </div>

                  {/* STATUS */}
                  <div
                    className={`mt-4 text-xs font-black ${
                      isLaunchLocked
                        ? "text-[#5A4E20]"
                        : isUnlocked
                        ? "text-[#D9FF3F]"
                        : "text-white/60"
                    }`}
                  >
                    {isLaunchLocked
                      ? "🔒 Locked"
                      : climb
                      ? isUnlocked
                        ? "Unlocked"
                        : `${Math.max(
                            0,
                            level.threshold -
                              climb.referralCount
                          )} more ${
                            level.threshold -
                              climb.referralCount ===
                            1
                              ? "referral"
                              : "referrals"
                          }`
                      : "Available"}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default LeaderboardView;