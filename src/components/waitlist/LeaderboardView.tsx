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

import { getClimb, getLeaderboard } from "@/lib/waitlistApi";

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

  const [levelsLoading, setLevelsLoading] = useState(false);
  const [levelsError, setLevelsError] = useState("");

  /*
   * LOAD LEADERBOARD
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
   * LOAD USER CLIMB / LEVELS
   */
  useEffect(() => {
    if (!userId) {
      setClimb(null);
      return;
    }

    let cancelled = false;

    setLevelsLoading(true);
    setLevelsError("");

    getClimb(userId)
      .then((result) => {
        if (!cancelled) {
          setClimb(result);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setLevelsError(
            err instanceof Error
              ? err.message
              : "Could not load your levels."
          );
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLevelsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [userId]);

  const leader = rows[0];

  const currentIndex = rows.findIndex(
    (row) =>
      row.username.toLowerCase() ===
      currentUserTag.toLowerCase()
  );

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
          className={`rounded-full px-6 py-2 text-xs font-bold sm:text-sm ${
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
          className={`rounded-full px-6 py-2 text-xs font-bold sm:text-sm ${
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
          {/* LEADER */}
          <div className="mt-2 flex flex-col items-center text-center">
            <div className="w-10 drop-shadow-lg sm:w-12">
              <img
                src={crownIcon}
                alt="Crown"
                className="w-full object-contain"
              />
            </div>

            <p className="mt-1 font-sans text-xl font-black text-white sm:text-2xl">
              {leader ? (
                <>
                  <span className="text-[#D9FF3F]">
                    {leader.username}
                  </span>{" "}
                  is leading
                </>
              ) : (
                "Leaderboard"
              )}
            </p>

            <p className="text-xs text-white/80 sm:text-sm">
              {leader
                ? `${leader.friends} verified referrals`
                : "Real-time active waitlist members"}
            </p>
          </div>

          {/* ERROR */}
          {error && (
            <div className="mt-5 w-full rounded-[14px] bg-red-500/20 px-4 py-3 text-xs font-semibold text-white">
              {error}
            </div>
          )}

          {/* TABLE */}
          <div className="mt-6 w-full overflow-hidden rounded-[24px] border border-white/15 bg-[#0036CC]/80 shadow-2xl backdrop-blur-xl">
            <div className="grid grid-cols-12 bg-[#0047FF] px-6 py-3.5 text-xs font-bold text-white">
              <div className="col-span-2">Rank</div>

              <div className="col-span-7 text-center">
                XaneTag / Badge
              </div>

              <div className="col-span-3 text-right">
                Verified Referrals
              </div>
            </div>

            <div className="divide-y divide-white/10 text-xs font-medium text-white sm:text-sm">
              {loading ? (
                <div className="px-6 py-8 text-center text-white/70">
                  Loading leaderboard...
                </div>
              ) : rows.length === 0 ? (
                <div className="px-6 py-8 text-center text-white/70">
                  No active members yet.
                </div>
              ) : (
                rows.map((row) => (
                  <div
                    key={row.rank}
                    className={`grid grid-cols-12 items-center px-6 py-3.5 transition-colors ${
                      row.username.toLowerCase() ===
                      currentUserTag.toLowerCase()
                        ? "bg-[#0047FF]"
                        : "hover:bg-white/5"
                    }`}
                  >
                    <div className="col-span-2 text-left font-bold">
                      #{row.rank}
                    </div>

                    <div className="col-span-7 flex items-center justify-center gap-2">
                      <span>{row.username}</span>

                      <span className="text-white/60">
                        ·
                      </span>

                      <span>{row.badge}</span>

                      <img
                        src={
                          badgeImage[row.badge] || mascot1
                        }
                        alt={row.badge}
                        className="h-6 w-6 object-contain"
                      />
                    </div>

                    <div className="col-span-3 text-right font-bold">
                      {row.friends}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* CURRENT USER NOT IN RESULTS */}
          {currentIndex < 0 && currentUserTag && (
            <p className="mt-3 text-[11px] text-white/70">
              Your tag will appear in the public leaderboard once
              your account is active and within the returned
              leaderboard results.
            </p>
          )}
        </motion.div>
      ) : (
        /* =========================
           LEVELS
        ========================= */
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 w-full max-w-[960px]"
        >
          {/* LOADING */}
          {levelsLoading && (
            <div className="rounded-[24px] border border-white/15 bg-[#0036CC]/80 px-6 py-10 text-center text-sm font-semibold text-white/80 shadow-xl backdrop-blur-xl">
              Loading your levels...
            </div>
          )}

          {/* ERROR */}
          {!levelsLoading && levelsError && (
            <div className="rounded-[24px] border border-red-400/30 bg-red-500/20 px-6 py-10 text-center text-sm font-semibold text-white">
              {levelsError}
            </div>
          )}

          {/* NO USER ID */}
          {!levelsLoading && !levelsError && !userId && (
            <div className="rounded-[24px] border border-white/15 bg-[#0036CC]/80 px-6 py-10 text-center text-sm font-semibold text-white/80 shadow-xl backdrop-blur-xl">
              Your level information will appear here once your
              account is available.
            </div>
          )}

          {/* LEVEL DATA */}
          {!levelsLoading &&
            !levelsError &&
            userId &&
            climb && (
              <>
                {/* CURRENT PROGRESS */}
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
                          } to reach ${climb.nextLevel.label}`
                        : `Next level: ${climb.nextLevel.label}`}
                    </p>
                  )}
                </div>

                {/* LEVEL LADDER */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {climb.ladder.map((level) => {
                    const isUnlocked =
                      level.threshold <=
                      climb.referralCount;

                    const image =
                      badgeImage[level.label];

                    return (
                      <div
                        key={level.key}
                        className={`flex flex-col items-center justify-between rounded-[24px] p-6 text-center shadow-xl ${
                          isUnlocked
                            ? "border border-white/15 bg-[#0036CC]/80"
                            : "border border-[#F3E5AB]/40 bg-[#E8DAB2]/90"
                        }`}
                      >
                        <div className="flex h-28 w-28 items-center justify-center">
                          {isUnlocked && image ? (
                            <img
                              src={image}
                              alt={level.label}
                              className="h-full w-full object-contain"
                            />
                          ) : (
                            <img
                              src={lockIcon}
                              alt="Locked"
                              className="h-16 w-16 object-contain"
                            />
                          )}
                        </div>

                        <div className="mt-3 space-y-1">
                          <h3
                            className={`font-sans text-xl font-black ${
                              isUnlocked
                                ? "text-white"
                                : "text-[#0047FF]"
                            }`}
                          >
                            {level.label}
                          </h3>

                          <p
                            className={`text-xs ${
                              isUnlocked
                                ? "text-white/80"
                                : "font-semibold text-[#5A4E20]"
                            }`}
                          >
                            {isUnlocked
                              ? "Unlocked"
                              : "Locked until launch"}
                          </p>
                        </div>

                        <div
                          className={`mt-4 text-sm font-black ${
                            isUnlocked
                              ? "text-white"
                              : "text-[#5A4E20]"
                          }`}
                        >
                          {level.threshold === 0
                            ? "Current"
                            : `${level.threshold} ${
                                level.threshold === 1
                                  ? "referral"
                                  : "referrals"
                              }`}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
        </motion.div>
      )}
    </div>
  );
};

export default LeaderboardView;