import { motion } from "framer-motion";
import xanePhone from "@/assets/hero-phone.png";
import heroCoin from "@/assets/hero-coin.png";
import appStore from "@/assets/app-store.png";
import googlePlay from "@/assets/google-play.png";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0047FF] pb-16 pt-32 lg:pb-24 lg:pt-40 xl:pt-48">
      
      {/* 1. FLUID BACKGROUND GEOMETRIES */}
      <div 
        className="absolute left-0 top-0 z-0 h-[60vh] w-[80vw] max-h-[600px] max-w-[600px] bg-[#111111]" 
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} 
      />
      <div className="absolute right-0 top-[45%] z-0 h-[150px] w-[50%] origin-right -skew-y-[15deg] bg-[#111111] lg:h-[180px] xl:h-[220px]" />

      {/* Floating Black Dots */}
      <div className="absolute left-[8%] top-[65%] z-0 h-12 w-12 rounded-full bg-[#111111] xl:h-16 xl:w-16" />
      <div className="absolute left-[28%] top-[58%] z-0 h-3 w-3 rounded-full bg-[#111111] xl:h-4 xl:w-4" />
      <div className="absolute left-[43%] top-[18%] z-0 h-4 w-4 rounded-full bg-[#111111] xl:h-5 xl:w-5" />
      <div className="absolute left-[52%] top-[30%] z-0 h-2 w-2 rounded-full bg-[#111111] xl:h-3 xl:w-3" />
      <div className="absolute right-[42%] top-[24%] z-0 h-3 w-3 rounded-full bg-[#111111] xl:h-4 xl:w-4" />
      <div className="absolute right-[35%] top-[55%] z-0 h-5 w-5 rounded-full bg-[#111111] xl:h-6 xl:w-6" />
      <div className="absolute bottom-[15%] left-[12%] z-0 h-5 w-5 rounded-full bg-[#111111] xl:h-6 xl:w-6" />

      {/* 2. STRICTLY PROPORTIONAL CONTAINER */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between px-6 md:px-10 lg:flex-row lg:items-center lg:px-16">

        {/* LEFT: TEXT */}
        <div className="relative z-20 w-full pt-8 lg:w-[50%] lg:pt-0">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-[42px] font-bold leading-[1.05] tracking-tight text-white md:text-[50px] lg:text-[52px] xl:text-[74px] pr-4"
          >
            Your crypto now{' '}
            <br className="block xl:hidden" />
            works <br />
            like money.
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 space-y-3 lg:mt-6 lg:space-y-3 xl:mt-8 xl:space-y-4"
          >
            <p className="font-sans text-[18px] font-normal leading-tight text-white pr-4 lg:text-[20px] xl:text-[30px]">
              Use crypto without understanding blockchain.
            </p>
            <p className="max-w-[480px] font-sans text-[14px] font-light italic leading-relaxed text-white/80 lg:text-[15px] xl:text-[18px]">
              A self-custody wallet and instant cash payment app <br className="hidden md:block" />
              in one simple platform.
            </p>
          </motion.div>

          {/* STORE BUTTONS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 flex flex-wrap items-center gap-4 lg:mt-8 lg:gap-4 xl:mt-10 xl:gap-5"
          >
            <div className="relative group">
              <img src={appStore} alt="App Store" className="h-[40px] w-auto cursor-pointer transition hover:opacity-80 lg:h-[42px] xl:h-[50px]" />
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1.5 whitespace-nowrap text-[10px] font-medium text-white/70 opacity-0 transition-opacity group-hover:opacity-100 xl:text-xs">
                disabled
              </span>
            </div>
            <div className="relative group">
              <img src={googlePlay} alt="Google Play" className="h-[40px] w-auto cursor-pointer transition hover:opacity-80 lg:h-[42px] xl:h-[50px]" />
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1.5 whitespace-nowrap text-[10px] font-medium text-white/70 opacity-0 transition-opacity group-hover:opacity-100 xl:text-xs">
                disabled
              </span>
            </div>
          </motion.div>

          {/* RATING */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 flex items-center gap-3 xl:mt-8"
          >
            <span className="font-sans text-[13px] font-medium text-white lg:text-[14px] xl:text-[17px]">Excellent 4.9 out of 5</span>
            <div className="flex gap-1 text-[#D9FF3F]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-4 w-4 fill-current lg:h-4 lg:w-4 xl:h-5 xl:w-5" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CENTER: COIN (Now completely nuked on 125% and 150% zoom via 2xl:block) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1.5, delay: 0.4 }}
          className="hidden 2xl:block absolute z-20 bottom-[5%] left-[52%] -ml-[20px] w-[15vw] max-w-[240px]"
        >
          <img src={heroCoin} alt="Xane Coin" className="w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]" />
        </motion.div>

        {/* RIGHT: THE PHONE */}
        <div className="relative z-30 mt-12 flex w-full justify-center lg:mt-0 lg:w-[50%] lg:justify-end xl:mt-16">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-[60vw] max-w-[220px] rounded-[24px] bg-white p-2 drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] md:max-w-[260px] lg:max-w-[240px] xl:max-w-[310px] xl:rounded-[32px] xl:p-2.5 xl:drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
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