import { motion } from "framer-motion";
import xanePhone from "@/assets/hero-phone.png";
import appStore from "@/assets/app-store.png";
import googlePlay from "@/assets/google-play.png";

const Hero = () => {
  return (
    <section className="relative min-h-[900px] h-screen w-full overflow-hidden bg-[#0047FF]" style={{ zoom: 0.666667 }}>
      
      <div 
        className="absolute top-0 left-0 h-full w-full bg-[#0A0A0A] z-0" 
        style={{ clipPath: 'polygon(0 0, 37% 0, 18% 100%, 0 100%)' }} 
      />
      
      <div 
        className="absolute right-[-5%] top-[45%] h-[240px] w-[55%] bg-[#0A0A0A] -skew-x-[25deg] z-0" 
      />

      <div className="absolute bottom-[-15%] left-[35%] z-0 flex h-[500px] w-[500px] items-center justify-center opacity-20">
        <div className="absolute h-[250px] w-[250px] rounded-full border-[2px] border-white" />
        <div className="absolute h-[380px] w-[380px] rounded-full border-[2px] border-white" />
        <div className="absolute h-[500px] w-[500px] rounded-full border-[2px] border-white" />
      </div>

      <div className="absolute left-[38%] top-[18%] h-3 w-3 rounded-full bg-[#0A0A0A] z-0" />
      <div className="absolute left-[48%] top-[30%] h-4 w-4 rounded-full bg-[#0A0A0A] z-0" />
      <div className="absolute left-[20%] bottom-[30%] h-5 w-5 rounded-full bg-[#0A0A0A] z-0" />
      <div className="absolute left-[30%] bottom-[15%] h-6 w-6 rounded-full bg-[#0A0A0A] z-0" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1600px] items-center justify-between px-10 md:px-16 pt-20">

        <div className="w-full max-w-[850px] pt-12">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-sans text-[70px] lg:text-[110px] xl:text-[140px] font-black tracking-[-0.05em] leading-[0.85] text-white"
          >
            Your crypto <br />
            now works <br />
            like money.
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-12 space-y-4"
          >
            <p className="font-sans text-[26px] lg:text-[36px] font-bold tracking-tight text-white leading-tight">
              Use crypto without understanding <br className="hidden md:block" /> blockchain.
            </p>
            <p className="max-w-[480px] font-sans text-[18px] lg:text-[22px] font-normal italic text-white/50 leading-snug">
              A self-custody wallet and instant cash payment app in one simple platform.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 flex items-center gap-5"
          >
            <div className="relative group">
              <img 
                src={appStore} 
                alt="App Store" 
                className="h-[48px] lg:h-[56px] w-auto cursor-pointer transition hover:opacity-80" 
              />
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 text-white/70 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                disabled
              </span>
            </div>

            <div className="relative group">
              <img 
                src={googlePlay} 
                alt="Google Play" 
                className="h-[48px] lg:h-[56px] w-auto cursor-pointer transition hover:opacity-80" 
              />
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 text-white/70 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                disabled
              </span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex items-center gap-4"
          >
            <span className="font-sans text-[18px] lg:text-[22px] font-bold text-white">Excellent 4.9 out of 5</span>
            <div className="flex gap-1 text-[#D9FF3F]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-6 w-6 lg:h-7 lg:w-7 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="relative hidden w-[450px] lg:block xl:w-[550px] flex-shrink-0">
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            src={xanePhone}
            alt="Xane App"
            className="w-full drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;