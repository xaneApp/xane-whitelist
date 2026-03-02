import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import xaneLogo from "@/assets/xane-logo.png"; 

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav 
  className="absolute left-0 top-0 z-50 w-full bg-transparent px-6 py-6" 
  style={{ zoom: 0.666667 }}
>
      <div className="flex items-center justify-between px-10 py-8">
        <a href="#" className="flex items-center gap-3">
          <img src={xaneLogo} alt="Xane" className="h-10 w-auto" />
          <span className="text-3xl font-black tracking-tighter text-white"></span>
        </a>

        <div className="hidden items-center gap-12 md:flex">
          <a href="#features" className="text-lg font-bold text-white hover:text-xane-lime transition-colors">Features</a>
          <button className="rounded-xl bg-xane-lime px-8 py-3 text-lg font-black text-xane-black transition hover:scale-105 active:scale-95">
            Get started
          </button>
        </div>

        <button onClick={() => setOpen(!open)} className="text-white md:hidden">
          <div className="space-y-1.5">
            <div className={`h-0.5 w-6 bg-white transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`h-0.5 w-6 bg-white ${open ? 'opacity-0' : ''}`} />
            <div className={`h-0.5 w-6 bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;