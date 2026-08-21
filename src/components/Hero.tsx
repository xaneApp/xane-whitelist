import { motion } from "framer-motion";
import xanePhone from "@/assets/hero-phone.png";
import heroCoin from "@/assets/hero-coin.png";
import appStore from "@/assets/app-store.png";
import googlePlay from "@/assets/google-play.png";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0047FF] pb-16 pt-28 sm:pb-20 sm:pt-32 md:pt-36 lg:pb-28 lg:pt-40">
      
      {/* 1. FLUID BACKGROUND GEOMETRIES */}
      <div 
        className="pointer-events-none absolute left-0 top-0 z-0 h-[50vh] w-[70vw] max-h-[500px] max-w-[500px] bg-[#111111]" 
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} 
      />
      <div className="pointer-events-none absolute right-0 top-[40%] z-0 h-[100px] sm:h-[140px] lg:h-[180px] w-[45%] origin-right -skew-y-[15deg] bg-[#111111]" />

      {/* Floating Black Dots */}
      <div className="pointer-events-none absolute left-[6%] top-[65%] z-0 h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute left-[25%] top-[58%] z-0 h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute left-[40%] top-[18%] z-0 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute left-[50%] top-[30%] z-0 h-2 w-2 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute right-[40%] top-[24%] z-0 h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute right-[30%] top-[55%] z-0 h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-[#111111]" />
      <div className="pointer-events-none absolute bottom-[12%] left-[10%] z-0 h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-[#111111]" />

      {/* 2. MAIN CONTAINER */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between px-4 sm:px-6 md:px-10 lg:flex-row lg:items-center lg:px-16">

        {/* LEFT: TEXT */}
        <div className="relative z-20 w-full pt-4 text-left sm:pt-6 lg:w-[55%] lg:pr-8 lg:pt-0">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sans text-[32px] sm:text-[42px] md:text-[48px] lg:text-[54px] xl:text-[62px] font-black leading-[1.08] tracking-tight text-white"
          >
            Your crypto now works <br />
            like money.
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 space-y-2 sm:mt-5 sm:space-y-3 lg:mt-6"
          >
            <p className="font-sans text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-snug text-white">
              Use crypto without understanding blockchain.
            </p>
            <p className="max-w-[480px] font-sans text-xs sm:text-sm md:text-base font-light italic leading-relaxed text-white/80">
              A self-custody wallet and instant cash payment app <br className="hidden sm:inline" />
              in one simple platform.
            </p>
          </motion.div>

          {/* STORE BUTTONS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4 lg:mt-8"
          >
            <div className="relative group">
              <img 
                src={appStore} 
                alt="App Store" 
                className="h-[36px] sm:h-[42px] md:h-[46px] w-auto cursor-pointer transition-transform hover:scale-105 active:scale-95 hover:opacity-90" 
              />
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 whitespace-nowrap text-[10px] font-medium text-white/70 opacity-0 transition-opacity group-hover:opacity-100">
                Coming soon
              </span>
            </div>
            <div className="relative group">
              <img 
                src={googlePlay} 
                alt="Google Play" 
                className="h-[36px] sm:h-[42px] md:h-[46px] w-auto cursor-pointer transition-transform hover:scale-105 active:scale-95 hover:opacity-90" 
              />
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 whitespace-nowrap text-[10px] font-medium text-white/70 opacity-0 transition-opacity group-hover:opacity-100">
                Coming soon
              </span>
            </div>
          </motion.div>

          {/* RATING */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 flex items-center gap-2.5 sm:gap-3 lg:mt-8"
          >
            <span className="font-sans text-xs sm:text-sm md:text-base font-medium text-white">
              Excellent 4.9 out of 5
            </span>
            <div className="flex gap-1 text-[#D9FF3F]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CENTER: COIN (Desktop only) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1.5, delay: 0.4 }}
          className="pointer-events-none hidden lg:block absolute z-20 bottom-[8%] left-[48%] -ml-[30px] w-[140px] xl:w-[180px]"
        >
          <img src={heroCoin} alt="Xane Coin" className="w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]" />
        </motion.div>

        {/* RIGHT: THE PHONE */}
        <div className="relative z-30 mt-10 flex w-full justify-center sm:mt-12 lg:mt-0 lg:w-[45%] lg:justify-end">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-[65vw] max-w-[230px] sm:max-w-[270px] md:max-w-[310px] lg:max-w-[340px] xl:max-w-[380px] rounded-[24px] sm:rounded-[28px] md:rounded-[32px] bg-white p-2 sm:p-2.5 drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
          >
            <img
              src={xanePhone}
              alt="Xane App Interface"
              className="h-full w-full object-contain"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;