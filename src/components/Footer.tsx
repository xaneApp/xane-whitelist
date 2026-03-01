import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground px-4 py-12 md:px-8">
      <div className="container-narrow">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="font-display text-sm font-bold text-primary-foreground">X</span>
              </div>
              <span className="font-display text-lg font-bold text-background">xane</span>
            </div>
            <div className="mt-4 flex gap-3">
              <a href="#" className="text-background/50 transition hover:text-background"><Instagram size={18} /></a>
              <a href="#" className="text-background/50 transition hover:text-background"><Twitter size={18} /></a>
              <a href="#" className="text-background/50 transition hover:text-background"><Facebook size={18} /></a>
              <a href="#" className="text-background/50 transition hover:text-background"><Youtube size={18} /></a>
            </div>
          </div>

          {[
            {
              title: "Company",
              links: ["About us", "Blog", "Careers"],
            },
            {
              title: "Support",
              links: ["FAQ", "Contact", "Help Center"],
            },
            {
              title: "Legal",
              links: ["Privacy Policy", "Terms of Service"],
            },
          ].map((col, i) => (
            <div key={i}>
              <h4 className="mb-3 font-semibold text-background">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-sm text-background/50 transition hover:text-background">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-background/10 pt-6 text-center text-sm text-background/40">
          © 2025 Xane. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
