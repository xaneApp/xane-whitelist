import { motion } from "framer-motion";
import appWallet from "@/assets/app-wallet.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-primary pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary-foreground/5" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary-foreground/5" />

      <div className="container-narrow relative z-10 px-4 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Your crypto now works{" "}
              <span className="text-gradient">like money.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-primary-foreground/80">
              Spend crypto without understanding blockchain.
              Send to phone numbers. Withdraw to your bank. It just works.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-8 py-3.5 font-semibold text-primary transition hover:opacity-90"
              >
                Download App
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/30 px-8 py-3.5 font-semibold text-primary-foreground transition hover:border-primary-foreground/60"
              >
                Learn More
              </a>
            </div>

            {/* Trust row */}
            <div className="mt-10 flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-sm text-primary-foreground/70">Trusted by 10,000+ users</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-72 md:w-80">
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-primary-foreground/10" />
              <img
                src={appWallet}
                alt="Xane Wallet App showing account balance"
                className="relative z-10 w-full rounded-3xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
