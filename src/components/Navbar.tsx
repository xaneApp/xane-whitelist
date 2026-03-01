import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="container-narrow flex items-center justify-between px-4 py-4 md:px-8">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-foreground">
            <span className="font-display text-sm font-bold text-primary">X</span>
          </div>
          <span className="font-display text-lg font-bold text-primary-foreground">xane</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-primary-foreground/80 transition hover:text-primary-foreground">Features</a>
          <a href="#usecases" className="text-sm text-primary-foreground/80 transition hover:text-primary-foreground">Use Cases</a>
          <a href="#faq" className="text-sm text-primary-foreground/80 transition hover:text-primary-foreground">FAQ</a>
          <a href="#" className="rounded-full bg-primary-foreground px-6 py-2.5 text-sm font-semibold text-primary transition hover:opacity-90">
            Download app
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="text-primary-foreground md:hidden">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-primary md:hidden"
          >
            <div className="flex flex-col gap-4 px-4 pb-6">
              <a href="#features" onClick={() => setOpen(false)} className="text-primary-foreground/80">Features</a>
              <a href="#usecases" onClick={() => setOpen(false)} className="text-primary-foreground/80">Use Cases</a>
              <a href="#faq" onClick={() => setOpen(false)} className="text-primary-foreground/80">FAQ</a>
              <a href="#" className="mt-2 rounded-full bg-primary-foreground px-6 py-2.5 text-center text-sm font-semibold text-primary">
                Download app
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
