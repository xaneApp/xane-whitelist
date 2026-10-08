import { Link } from "react-router-dom";
import xaneLogo from "@/assets/xane-logo.png";

interface NavbarProps {
  onOpenWaitlist?: () => void;
}

const Navbar = ({ onOpenWaitlist }: NavbarProps) => {
  return (
    <nav className="absolute left-0 top-0 z-40 w-full bg-transparent px-4 py-5 sm:px-6 sm:py-6 md:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <img src={xaneLogo} alt="Xane" className="h-7 w-auto sm:h-8 md:h-9" />
        </Link>

        {/* Right CTA */}

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/waitlist?view=leaderboard"
            className="rounded-full bg-[#0036CC] px-3.5 py-1.5 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:bg-[#002B99] hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            <span className="hidden sm:inline">View </span>Leaderboard
          </Link>
          {onOpenWaitlist ? (
            <button
              type="button"
              onClick={onOpenWaitlist}
              className="rounded-full bg-[#D9FF3F] px-3.5 py-1.5 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-bold text-[#111111] shadow-md transition-all hover:bg-[#cbf530] hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              Join Waitlist
            </button>
          ) : (
            <Link
              to="/waitlist"
              className="rounded-full bg-[#D9FF3F] px-3.5 py-1.5 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-bold text-[#111111] shadow-md transition-all hover:bg-[#cbf530] hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Join Waitlist
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
