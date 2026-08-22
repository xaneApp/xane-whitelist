import { Twitter, Instagram, Linkedin } from "lucide-react";
import xaneLogo from "@/assets/xane-logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#111111] px-4 py-12 sm:px-6 sm:py-16 md:px-16 lg:pb-12 lg:pt-20">
      <div className="mx-auto w-full max-w-[1400px]">
        
        {/* TOP ROW: Logo/Socials & Links */}
        <div className="flex flex-col justify-between gap-10 sm:gap-12 md:flex-row md:gap-8">
          
          {/* LEFT: Logo and Socials */}
          <div className="flex flex-col items-start gap-6 sm:gap-8">
            <div className="flex items-center text-white">
              <img 
                src={xaneLogo} 
                alt="Xane Logo" 
                className="h-7 sm:h-8 md:h-9 w-auto" 
              />
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-5 text-white">
              <a 
                href="https://x.com/XaneApp_" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="X (Twitter)" 
                className="transition-colors hover:text-[#0047FF]"
              >
                <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a 
                href="https://www.instagram.com/xaneapp_" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram" 
                className="transition-colors hover:text-[#0047FF]"
              >
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/company/xaneapp/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn" 
                className="transition-colors hover:text-[#0047FF]"
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>

          {/* RIGHT: Address and Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12 md:gap-16 lg:gap-24 text-left">
            
            {/* Address Column */}
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-2 font-sans text-xs sm:text-sm leading-relaxed text-[#A0AABF]">
              <p className="font-semibold text-white">Location</p>
              <p>Lagos, Nigeria</p>
            </div>

            {/* Links Column 1 */}
            <div className="flex flex-col gap-3.5 font-sans text-xs sm:text-sm font-medium text-[#D1D5DB]">
              <p className="font-semibold text-white">Product</p>
              <a href="#" className="transition-colors hover:text-white">Learn</a>
              <a href="#" className="transition-colors hover:text-white">Apps</a>
              <a href="#" className="transition-colors hover:text-white">Community</a>
            </div>

            {/* Links Column 2 */}
            <div className="flex flex-col gap-3.5 font-sans text-xs sm:text-sm font-medium text-[#D1D5DB]">
              <p className="font-semibold text-white">Legal</p>
              <a href="#" className="transition-colors hover:text-white">Legal Mentions</a>
              <a href="#" className="transition-colors hover:text-white">Terms of Service</a>
              <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
            </div>

          </div>
        </div>

        {/* BOTTOM ROW: Divider & Copyright */}
        <div className="mt-12 sm:mt-16 border-t border-[#262626] pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="font-sans text-xs text-[#737373]">
            © {new Date().getFullYear()} Xane. All rights reserved.
          </p>
          <p className="font-sans text-xs text-[#737373]">
            Self-custody crypto wallet & cash payment rails.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;