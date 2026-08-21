import { Twitter, Instagram } from "lucide-react";
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
              <a href="#" aria-label="Twitter" className="transition-colors hover:text-[#0047FF]">
                <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="#" aria-label="Instagram" className="transition-colors hover:text-[#0047FF]">
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="#" aria-label="Discord" className="transition-colors hover:text-[#0047FF]">
                <svg 
                  className="h-5 w-5 sm:h-6 sm:w-6 fill-current" 
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT: Address and Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12 md:gap-16 lg:gap-24 text-left">
            
            {/* Address Column */}
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-2 font-sans text-xs sm:text-sm leading-relaxed text-[#A0AABF]">
              <p className="font-semibold text-white">Location</p>
              <p>Technology Park 8-14</p>
              <p>Marie Curie Street</p>
              <p>08042 Barcelona</p>
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