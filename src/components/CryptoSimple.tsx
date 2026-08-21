import { motion } from "framer-motion";
import receiveCrypto from "@/assets/receive-crypto.png";

const CryptoSimple = () => {
  return (
    <section className="relative flex w-full items-center overflow-hidden bg-white py-16 sm:py-20 md:py-28 lg:py-32">
      
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)`,
          backgroundSize: '3rem 3rem',
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col items-center justify-between px-4 sm:px-6 md:px-16 lg:flex-row lg:gap-12">
        
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-[750px] pt-4 text-left lg:pt-0"
        >
          <h2 className="font-sans text-[36px] sm:text-[54px] md:text-[68px] lg:text-[84px] xl:text-[104px] font-black leading-[0.92] tracking-[-0.04em] text-[#0A0A0A]">
            Crypto <br />
            shouldn't <br />
            feel <span className="text-[#0047FF]">technical</span>
          </h2>
          
          <p className="mt-6 sm:mt-8 max-w-[520px] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-snug text-[#0047FF]">
            Xane turns complex finance into simple actions
          </p>

          <motion.div 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 sm:mt-10 inline-block rounded-2xl bg-[#D9FF3F] px-8 py-3.5 sm:px-10 sm:py-4 text-base sm:text-lg font-bold text-[#0A0A0A] shadow-md transition-colors hover:bg-[#cbf530]"
          >
            Simple. Secure. Instant.
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative mt-12 flex w-full max-w-[480px] items-center justify-center sm:mt-16 lg:mt-0 lg:w-1/2 lg:max-w-[550px] lg:justify-end"
        >
          <div className="absolute right-0 top-1/2 h-[95%] w-[95%] -translate-y-1/2 rounded-[40px] sm:rounded-[60px] md:rounded-[80px] bg-[#F4F9FF] z-0" />
          
          <img 
            src={receiveCrypto} 
            alt="Receive Crypto on Xane" 
            className="relative z-10 w-full max-w-[280px] sm:max-w-[360px] md:max-w-[440px] lg:max-w-[500px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)]" 
          />
        </motion.div>

      </div>
    </section>
  );
};

export default CryptoSimple;