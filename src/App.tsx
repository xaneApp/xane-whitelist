import { useState, type FormEvent } from "react";
import { Mail, CheckCircle, X } from "lucide-react";
import xaneLogo from "./assets/xane-logo.png"; 

export default function App() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // --- WIRED TO GOOGLE SHEETS ---
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("Name", "Early Access User");
    formData.append("Email", email);

    try {
      await fetch("https://script.google.com/macros/s/AKfycbzAUCnxTKKYzeSth2LiF0ROigPtV-XeliqmEs0YVFmvOYZEBL2NkzF4YPKblxvOCWE/exec", {
        method: "POST",
        body: formData,
        mode: "no-cors" 
      });

      setIsSuccess(true);
      setEmail(""); 

      setTimeout(() => {
        setIsSuccess(false);
      }, 4000);

    } catch (error) {
      console.error("Waitlist error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // min-h-screen ensures it takes the full height, overflow-hidden stops scrolling
    <div className="relative min-h-screen w-full bg-[#0052FF] overflow-hidden flex flex-col font-sans">
      
      {/* BACKGROUND SHAPES */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-[10%] -left-[5%] w-[45%] h-[50%] bg-[#121212] -rotate-[12deg]" />
        <div className="absolute top-[40%] -right-[5%] w-[80%] h-[200px] bg-[#121212] rotate-[15deg]" />
        <div className="absolute top-[15%] left-[42%] w-3 h-3 bg-[#121212] rounded-full" />
        <div className="absolute top-[65%] left-[10%] w-6 h-6 bg-[#121212] rounded-full" />
      </div>

      {/* HEADER */}
      {/* Reduced py (padding-y) so it doesn't eat up vertical space on scaled screens */}
      <nav className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-4 md:py-6 lg:px-16 flex justify-start">
        <div className="flex items-center gap-3">
          <img src={xaneLogo} alt="Xane" className="h-6 w-auto md:h-7 object-contain" />
          <span className="text-xl md:text-2xl font-[800] text-white tracking-tight">xane</span>
        </div>
      </nav>

      {/* HERO & CARD SECTION */}
      {/* flex-1 and justify-center naturally push everything to the middle based on available height */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 w-full z-20 pb-10">
        
        {/* Hero Text */}
        <div className="text-center mb-6 md:mb-8">
          {/* MAGIC FIX: clamp() checks Viewport Height (vh) to shrink text on 150% scaled laptops */}
          <h1 
            className="font-[900] text-white leading-[1.05] tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 8vh, 6rem)' }}
          >
            Your crypto now works <br /> like money.
          </h1>
          <p 
            className="mt-3 md:mt-5 text-white font-medium opacity-90"
            style={{ fontSize: 'clamp(1rem, 2.5vh, 1.25rem)' }}
          >
            Use crypto without understanding blockchain.
          </p>
        </div>

        {/* THE CARD */}
        {/* Reduced padding on smaller screens (p-6) so it fits better */}
        <div className="w-full max-w-[460px] rounded-[24px] bg-white p-6 md:p-8 shadow-2xl relative z-30">
          
          <div className="text-center mb-5">
            <p className="text-[12px] md:text-[13px] font-semibold text-gray-500">
              Get early access before we launch publicly.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-1 text-left">
              <label className="text-[10px] font-bold tracking-widest text-[#111111] uppercase ml-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#0047FF]">
                  <Mail size={16} />
                </div>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com" 
                  className="w-full rounded-[14px] border border-[#0047FF] bg-[#F0F5FF] py-3 pl-11 pr-4 text-[13px] md:text-[14px] font-medium outline-none transition-all placeholder:text-[#0047FF]/60 focus:border-[#0047FF] focus:ring-4 focus:ring-[#0047FF]/10 text-black"
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting || isSuccess}
              className="w-full rounded-full bg-[#0047FF] py-3.5 text-[14px] md:text-[15px] font-bold text-white transition-all hover:bg-[#0036CC] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 shadow-lg shadow-blue-500/20"
            >
              {isSubmitting ? "Submitting..." : isSuccess ? "You're in! 🎉" : "Get Early Access"}
            </button>
          </form>

          {/* SOCIAL PROOF */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#0047FF] text-[9px] font-bold text-white relative z-30">D</div>
              <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#00C853] text-[9px] font-bold text-white relative z-20">S</div>
              <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#FFB300] text-[9px] font-bold text-white relative z-10">K</div>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-bold leading-tight text-[#111111]">Early users already in.</span>
              <span className="text-[10px] leading-tight text-gray-500">Join before public launch.</span>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex justify-center gap-6 text-gray-400 font-bold text-[9px] md:text-[10px] uppercase tracking-widest mt-6">
            <a href="#" className="hover:text-[#0047FF] transition-colors">X</a>
            <a href="#" className="hover:text-[#0047FF] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#0047FF] transition-colors">Linkedin</a>
          </div>
        </div>
      </main>

      {/* BOTTOM WATERMARK */}
      {/* Sized using vh so it doesn't push the card up on squished screens */}
      <div className="absolute bottom-[-2vh] left-0 flex w-full justify-center pointer-events-none z-0">
        <span 
          className="font-sans font-[900] tracking-tighter text-transparent select-none uppercase leading-none opacity-40"
          style={{ 
            fontSize: 'clamp(80px, 20vh, 400px)',
            WebkitTextStroke: '2px rgba(255, 255, 255, 0.4)' 
          }}
        >
          Waitlist
        </span>
      </div>

      <footer className="absolute bottom-3 w-full text-center z-10">
        <p className="text-white/50 text-[9px] font-bold tracking-[0.2em] uppercase">
          © All Rights Reserved. Xane, LLC
        </p>
      </footer>

      {/* SUCCESS POPUP MODAL */}
      {isSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl relative">
            <button 
              onClick={() => setIsSuccess(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-800 transition-colors"
            >
              <X size={20} strokeWidth={2.5} />
            </button>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="text-green-500 w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">You're in! 🎉</h3>
            <p className="text-sm text-gray-500 font-medium mb-8">
              We've added you to the early access list. Keep an eye on your inbox!
            </p>
            <button 
              onClick={() => setIsSuccess(false)} 
              className="w-full bg-[#0047FF] text-white font-bold py-3.5 rounded-[14px] hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
            >
              Got it, thanks!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}