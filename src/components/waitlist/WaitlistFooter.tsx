import { Twitter, Instagram, Linkedin } from "lucide-react";

const WaitlistFooter = () => {
  return (
    <footer className="relative z-10 w-full py-8 text-center">
      <div className="mx-auto flex flex-col items-center justify-center gap-4 px-4">
        
        {/* Social Icons */}
        <div className="flex items-center gap-5 text-white/90">
          <a
            href="https://x.com/XaneApp_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="transition-transform hover:scale-110 hover:text-[#D9FF3F]"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/xaneapp_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-transform hover:scale-110 hover:text-[#D9FF3F]"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/company/xaneapp/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-transform hover:scale-110 hover:text-[#D9FF3F]"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="font-sans text-xs font-normal text-white/80">
          © All Rights Reserved. Xane, LLC
        </p>

      </div>
    </footer>
  );
};

export default WaitlistFooter;
