import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            Start using Crypto like
            <br />
            <span className="text-gradient">real money</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg text-primary-foreground/70">
            Download Xane and experience crypto that actually works for everyday life.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#" className="inline-flex items-center gap-3 rounded-xl bg-foreground px-6 py-3 text-background transition hover:opacity-90">
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <div className="text-left">
                <p className="text-xs text-background/70">Download on the</p>
                <p className="text-sm font-semibold">App Store</p>
              </div>
            </a>
            <a href="#" className="inline-flex items-center gap-3 rounded-xl bg-foreground px-6 py-3 text-background transition hover:opacity-90">
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 9l-2.302 2.302L5.864 2.658z" />
              </svg>
              <div className="text-left">
                <p className="text-xs text-background/70">Get it on</p>
                <p className="text-sm font-semibold">Google Play</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;