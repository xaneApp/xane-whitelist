import { motion } from "framer-motion";
import appStore from "@/assets/app-store.png";
import googlePlay from "@/assets/google-play.png";

const CTA = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0047FF] py-16 sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center px-4 sm:px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h2 className="font-sans text-[30px] sm:text-[42px] md:text-[50px] lg:text-[58px] font-black leading-[1.12] tracking-tight text-white">
            Start using crypto like <br />
            real money
          </h2>

          <p className="mt-4 sm:mt-6 font-sans text-base sm:text-lg md:text-xl font-medium text-white/90">
            Join Xane today
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5 md:gap-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
            >
              <img 
                src={appStore} 
                alt="Download on the App Store" 
                className="h-[40px] sm:h-[48px] md:h-[52px] w-auto drop-shadow-md transition-opacity hover:opacity-90" 
              />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
            >
              <img 
                src={googlePlay} 
                alt="Get it on Google Play" 
                className="h-[40px] sm:h-[48px] md:h-[52px] w-auto drop-shadow-md transition-opacity hover:opacity-90" 
              />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CTA;