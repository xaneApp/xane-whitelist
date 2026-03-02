import { motion } from "framer-motion";
import receiveCrypto from "@/assets/receive-crypto.png";

const CryptoSimple = () => {
  return (
    <section className="relative flex min-h-[900px] w-full items-center overflow-hidden bg-white py-24 lg:py-32" style={{ zoom: 0.666667 }}>
      
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col items-center justify-between px-6 md:px-16 lg:flex-row lg:gap-12">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-[750px] pt-10 lg:pt-0"
        >
          <h2 className="font-sans text-[70px] font-black leading-[0.85] tracking-[-0.05em] text-[#0A0A0A] md:text-[90px] lg:text-[130px]">
            Crypto <br />
            shouldn't <br />
            feel <span className="text-[#0047FF]">technical</span>
          </h2>
          
          <p className="mt-10 max-w-[500px] text-2xl font-bold leading-tight text-[#0047FF] md:text-3xl">
            Xane turns complex finance into simple actions
          </p>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-14 rounded-2xl bg-[#D9FF3F] px-12 py-5 text-xl font-bold text-[#0A0A0A] shadow-md transition-colors hover:bg-[#cbf530]"
          >
            Get started
          </motion.button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50, y: 30 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative mt-20 flex w-full max-w-[550px] items-center justify-center lg:mt-0 lg:w-1/2 lg:justify-end"
        >
          <div className="absolute right-[5%] top-1/2 h-[105%] w-[110%] -translate-y-1/2 rounded-[80px] bg-[#F4F9FF] z-0 lg:right-[-5%]" />
          
          <img 
            src={receiveCrypto} 
            alt="Receive Crypto on Xane" 
            className="relative z-10 w-full max-w-[450px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.12)] lg:max-w-[550px]" 
          />
        </motion.div>

      </div>
    </section>
  );
};

export default CryptoSimple;