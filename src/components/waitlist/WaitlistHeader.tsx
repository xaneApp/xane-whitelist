import { Link } from "react-router-dom";
import xaneLogo from "@/assets/xane-logo.png";

interface WaitlistHeaderProps {
  rightAction?: "homepage" | "leaderboard-nav";
  onJoinWaitlistClick?: () => void;
  onViewLeaderboardClick?: () => void;
}

const WaitlistHeader = ({
  rightAction = "homepage",
  onJoinWaitlistClick,
  onViewLeaderboardClick,
}: WaitlistHeaderProps) => {
  return (
    <header className="w-full px-4 py-5 sm:px-6 sm:py-6 md:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-[1300px] items-center justify-between">
        
        {/* Xane Logo */}
        <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
          <img src={xaneLogo} alt="Xane" className="h-7 w-auto sm:h-8 md:h-9" />
        </Link>

        {/* Right Action */}
        <div className="flex items-center gap-3">
          {rightAction === "homepage" && (
            <Link
              to="/"
              className="rounded-full bg-[#D9FF3F] px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-bold text-[#111111] shadow-md transition-all hover:bg-[#cbf530] hover:scale-105 active:scale-95"
            >
              Homepage
            </Link>
          )}

          {rightAction === "leaderboard-nav" && (
            <div className="flex items-center gap-2.5 sm:gap-3">
              {onViewLeaderboardClick && (
                <button
                  type="button"
                  onClick={onViewLeaderboardClick}
                  className="rounded-full bg-[#0036CC] px-4 py-2 sm:px-5 sm:py-2 text-xs sm:text-sm font-semibold text-white shadow-sm transition hover:bg-[#002B99] active:scale-95 cursor-pointer"
                >
                  View Leaderboard
                </button>
              )}
              {onJoinWaitlistClick ? (
                <button
                  type="button"
                  onClick={onJoinWaitlistClick}
                  className="rounded-full bg-[#D9FF3F] px-4 py-2 sm:px-5 sm:py-2 text-xs sm:text-sm font-bold text-[#111111] shadow-md transition-all hover:bg-[#cbf530] hover:scale-105 active:scale-95 cursor-pointer"
                >
                  Join Waitlist
                </button>
              ) : (
                <Link
                  to="/waitlist"
                  className="rounded-full bg-[#D9FF3F] px-4 py-2 sm:px-5 sm:py-2 text-xs sm:text-sm font-bold text-[#111111] shadow-md transition-all hover:bg-[#cbf530] hover:scale-105 active:scale-95"
                >
                  Join Waitlist
                </Link>
              )}
            </div>
          )}
        </div>

      </div>
    </header>
  );
};

export default WaitlistHeader;
