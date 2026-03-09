import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail } from "lucide-react";
import xaneLogo from "@/assets/xane-logo.png"; 

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="absolute left-0 top-0 z-40 w-full bg-transparent px-6 py-6 md:px-10 lg:px-16">
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src={xaneLogo} alt="Xane" className="h-7 w-auto md:h-8" />
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-4 md:flex">
            <a 
              href="#features" 
              className="rounded-xl bg-[#002B99] px-5 py-2 text-[14px] font-bold text-white transition hover:bg-[#001D66]"
            >
              Features
            </a>
            <button 
              onClick={() => setWaitlistOpen(true)}
              className="rounded-xl bg-[#D9FF3F] px-5 py-2 text-[14px] font-bold text-[#111111] transition hover:scale-105 active:scale-95"
            >
              Get started
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button onClick={() => setOpen(!open)} className="text-white md:hidden">
            <div className="space-y-1.5">
              <div className={`h-0.5 w-6 bg-white transition-all ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <div className={`h-0.5 w-6 bg-white ${open ? 'opacity-0' : ''}`} />
              <div className={`h-0.5 w-6 bg-white transition-all ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* WAITLIST MODAL OVERLAY */}
      <AnimatePresence>
        {waitlistOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden px-4">
            
            {/* Darkened/Blurred Background */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setWaitlistOpen(false)}
              className="absolute inset-0 bg-[#061540]/80 backdrop-blur-sm"
            />

            {/* MASSIVE BACKGROUND TEXT - DROPPED LOWER */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              /* Dropped this from -10% down to -15% / -22% to sink it into the floor */
              className="pointer-events-none absolute bottom-[-15%] left-0 flex w-full justify-center select-none lg:bottom-[-22%]"
            >
              <span 
                className="font-sans text-[120px] font-black tracking-tight text-transparent md:text-[220px] lg:text-[350px]"
                style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.25)' }}
              >
                Waitlist
              </span>
            </motion.div>

            {/* Modal Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative z-10 w-full max-w-[480px] rounded-[24px] bg-white p-8 shadow-2xl md:p-10"
            >
              {/* Close Button */}
              <button 
                onClick={() => setWaitlistOpen(false)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-800"
              >
                <X size={18} strokeWidth={2.5} />
              </button>

              {/* Header */}
              <div className="text-center">
                <h2 className="font-sans text-[26px] font-black tracking-tight text-[#111111]">Join the Waitlist</h2>
                <p className="mt-1.5 text-[14px] text-gray-500">Get early access before we launch publicly.</p>
              </div>

              {/* Form */}
              <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
                
                {/* Full Name Input */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold tracking-widest text-[#111111] uppercase">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-300">
                      <User size={18} />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Your full name" 
                      className="w-full rounded-[14px] border border-gray-200 bg-transparent py-3.5 pl-11 pr-4 text-[14px] outline-none transition-all placeholder:text-gray-300 focus:border-[#0047FF] focus:ring-4 focus:ring-[#0047FF]/10"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold tracking-widest text-[#111111] uppercase">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#0047FF]">
                      <Mail size={18} />
                    </div>
                    <input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="w-full rounded-[14px] border border-[#0047FF] bg-[#F0F5FF] py-3.5 pl-11 pr-4 text-[14px] outline-none transition-all placeholder:text-[#0047FF]/70 focus:border-[#0047FF] focus:ring-4 focus:ring-[#0047FF]/10"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="mt-6 w-full rounded-full bg-[#0047FF] py-4 text-[15px] font-bold text-white transition-all hover:bg-[#0036CC] active:scale-[0.98]"
                >
                  Get Early Access
                </button>
              </form>

              {/* Footer Avatars */}
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="flex -space-x-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#0047FF] text-[10px] font-bold text-white">D</div>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#00C853] text-[10px] font-bold text-white">S</div>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#FFB300] text-[10px] font-bold text-white">K</div>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-bold leading-tight text-[#111111]">Early users already in.</span>
                  <span className="text-[11px] leading-tight text-gray-500">Join before public launch.</span>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;