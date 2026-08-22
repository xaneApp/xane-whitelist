import xaneLogo from "@/assets/xane-logo.png";

interface NavbarProps {
  onOpenWaitlist?: () => void;
}

const Navbar = ({ onOpenWaitlist }: NavbarProps) => {
  return (
    <nav className="absolute left-0 top-0 z-40 w-full bg-transparent px-4 py-5 sm:px-6 sm:py-6 md:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 transition-opacity hover:opacity-90">
          <img src={xaneLogo} alt="Xane" className="h-7 w-auto sm:h-8 md:h-9" />
        </a>

        {/* Desktop Links - currently commented out */}
        {/* <div className="hidden items-center gap-4 md:flex">
          <a 
            href="#features" 
            className="rounded-xl bg-[#002B99] px-5 py-2 text-[14px] font-bold text-white transition hover:bg-[#001D66]"
          >
            Features
          </a>
          <button 
            onClick={onOpenWaitlist}
            className="rounded-xl bg-[#D9FF3F] px-5 py-2 text-[14px] font-bold text-[#111111] transition hover:scale-105 active:scale-95 cursor-pointer"
          >
            Get started
          </button>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;