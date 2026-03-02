import { motion } from "framer-motion";
import appStore from "@/assets/app-store.png";
import googlePlay from "@/assets/google-play.png";

const CTA = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0047FF] py-32 lg:py-48" style={{ zoom: 0.666667 }}>
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h2 className="font-sans text-[40px] font-bold leading-[1.2] tracking-tight text-white md:text-[50px] lg:text-[60px]">
            Start using Crypto like <br />
            real money
          </h2>

          <p className="mt-8 font-sans text-[20px] font-medium text-white md:text-[24px]">
            Join Xane
          </p>

          <div className="mt-12 flex items-center justify-center gap-5 md:gap-6">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#" 
              className="cursor-pointer"
            >
              <img 
                src={appStore} 
                alt="Download on the App Store" 
                className="h-[50px] w-auto drop-shadow-lg md:h-[60px]" 
              />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#" 
              className="cursor-pointer"
            >
              <img 
                src={googlePlay} 
                alt="Get it on Google Play" 
                className="h-[50px] w-auto drop-shadow-lg md:h-[60px]" 
              />
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CTA;