import { motion } from "framer-motion";
import swapUi from "@/assets/swap-ui.png"; 

const CrossChainSwap = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F0F7FA] py-16 sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col items-center justify-between px-4 sm:px-6 md:px-16 lg:flex-row lg:gap-10">
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-[650px] z-10 text-left"
        >
          <h2 className="font-sans text-[32px] sm:text-[46px] md:text-[58px] lg:text-[72px] font-black leading-[1.06] tracking-tight text-[#0047FF]">
            CrossChain Swap <br />
            made easy
          </h2>
          
          <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
            <p className="font-sans text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed text-[#333333]">
              Swap tokens from one network to another without third parties.
            </p>
            <p className="font-sans text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed text-[#555555]">
              No risky bridges. No external exchanges. Complex finance into simple actions.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 sm:mt-10 inline-block rounded-2xl border-2 border-[#0047FF] bg-transparent px-8 py-3.5 sm:px-10 sm:py-4 font-sans text-base sm:text-lg font-bold text-[#0047FF] transition-all hover:bg-[#0047FF] hover:text-white cursor-pointer"
          >
            Zero Bridges. Zero Hassle.
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            type: "spring", 
            bounce: 0.2,
            duration: 1, 
            delay: 0.2 
          }}
          className="relative mt-12 flex w-full max-w-[420px] justify-center sm:mt-16 sm:max-w-[500px] lg:mt-0 lg:w-1/2 lg:max-w-[620px] lg:justify-end overflow-visible"
        >
          <img
            src={swapUi}
            alt="CrossChain Swap Interface"
            className="relative z-10 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[560px] drop-shadow-[0_25px_50px_rgba(0,0,0,0.12)] -rotate-[6deg] sm:-rotate-[10deg] md:-rotate-[14deg]"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default CrossChainSwap;