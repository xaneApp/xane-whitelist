import { useState, type FormEvent } from "react";
import { Mail, CheckCircle, X } from "lucide-react";
import xaneLogo from "./assets/xane-logo.png"; 
import xLogo from "./assets/x.png";
import instagramLogo from "./assets/instagram.png";

export default function App() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // --- WIRED TO GOOGLE SHEETS ---
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    const urlEncodedData = new URLSearchParams();
    urlEncodedData.append("Name", "Early Access User");
    urlEncodedData.append("Email", email);

    try {
      await fetch("https://script.google.com/macros/s/AKfycbyCRIpq1i5j6nyL2kQYtXDA3Mztno3YmCBs7VCmeLA9EQ6jtBG5j7PSsoTAjiFq3CQ/exec", {
        method: "POST",
        body: urlEncodedData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        mode: "no-cors" 
      });

      setIsSuccess(true);
      setEmail(""); 

    } catch (error) {
      console.error("Waitlist error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#0052FF] overflow-hidden flex flex-col font-sans">
      
      {/* BACKGROUND SHAPES */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-[10%] -left-[5%] w-[45%] h-[50%] bg-[#121212] -rotate-[12deg]" />
        <div className="absolute top-[40%] -right-[5%] w-[80%] h-[200px] bg-[#121212] rotate-[15deg]" />
        <div className="absolute top-[15%] left-[42%] w-3 h-3 bg-[#121212] rounded-full" />
        <div className="absolute top-[65%] left-[10%] w-6 h-6 bg-[#121212] rounded-full" />
      </div>

      {/* HEADER */}
      <nav className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-4 md:py-6 lg:px-16 flex justify-start">
        <div className="flex items-center gap-3">
          <img src={xaneLogo} alt="Xane" className="h-6 w-auto md:h-7 object-contain" />
          <span className="text-xl md:text-2xl font-[800] text-white tracking-tight">xane</span>
        </div>
      </nav>

      {/* HERO & CARD SECTION */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 w-full z-20 pb-10">
        
        {/* Hero Text */}
        <div className="text-center mb-6 md:mb-8">
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
          <div className="flex justify-center items-center gap-6 mt-6">
            <a href="https://x.com/XaneApp_" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 hover:scale-105 transition-all">
              <img src={xLogo} alt="X (formerly Twitter)" className="h-5 w-auto object-contain" />
            </a>
            <a href="https://www.instagram.com/xaneapp_?igsh=eGQ1aTJvYnAxMG43&utm_source=ig_contact_invite" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 hover:scale-105 transition-all">
              <img src={instagramLogo} alt="Instagram" className="h-5 w-auto object-contain" />
            </a>
          </div>
        </div>
      </main>

      {/* BOTTOM WATERMARK */}
      <div className="absolute bottom-[-4vh] md:bottom-[-6vh] left-0 flex w-full justify-center pointer-events-none z-0">
        <span 
          className="font-sans font-[900] tracking-tighter text-transparent select-none uppercase leading-none opacity-30 whitespace-nowrap"
          style={{ 
            fontSize: 'clamp(120px, 25vw, 500px)', 
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
          <div className="bg-white rounded-[24px] p-8 max-w-sm w-full text-center shadow-2xl relative">
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
            <p className="text-sm text-gray-500 font-medium mb-6">
              We've added you to the early access list. Keep an eye on your inbox!
            </p>

            {/* CALL TO ACTION FOR SOCIALS */}
            <div className="bg-[#F0F5FF] rounded-[16px] p-5 mb-6 border border-[#0047FF]/10">
              <p className="text-[12px] font-bold text-[#0047FF] mb-3 uppercase tracking-widest">
                While you wait
              </p>
              <p className="text-[13px] text-gray-700 font-medium mb-4">
                Make sure to follow us for the latest updates and sneak peeks!
              </p>
              
              <div className="flex justify-center items-center gap-3">
                <a 
                  href="https://x.com/XaneApp_" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 flex-1 py-2.5 bg-white rounded-xl border border-[#0047FF]/20 hover:border-[#0047FF] hover:shadow-md transition-all group"
                >
                  <img src={xLogo} alt="X" className="h-4 w-auto object-contain group-hover:scale-110 transition-transform" />
                  <span className="text-[13px] font-bold text-gray-800">Follow</span>
                </a>
                
                <a 
                  href="https://www.instagram.com/xaneapp_?igsh=eGQ1aTJvYnAxMG43&utm_source=ig_contact_invite" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 flex-1 py-2.5 bg-white rounded-xl border border-[#0047FF]/20 hover:border-[#0047FF] hover:shadow-md transition-all group"
                >
                  <img src={instagramLogo} alt="Instagram" className="h-4 w-auto object-contain group-hover:scale-110 transition-transform" />
                  <span className="text-[13px] font-bold text-gray-800">Follow</span>
                </a>
              </div>
            </div>

            <button 
              onClick={() => setIsSuccess(false)} 
              className="w-full bg-[#111111] text-white font-bold py-3.5 rounded-[14px] hover:bg-black transition-colors shadow-lg"
            >
              Got it, thanks!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}