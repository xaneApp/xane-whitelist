import { motion } from "framer-motion";
import swapUi from "@/assets/swap-ui.png"; 

const CrossChainSwap = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F0F7FA] py-24 lg:py-32" style={{ zoom: 0.666667 }}>
      <div className="mx-auto flex w-full max-w-[1500px] flex-col items-center justify-between px-6 md:px-16 lg:flex-row lg:gap-10">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-[650px] z-10"
        >
          <h2 className="font-sans text-[55px] font-black leading-[1.05] tracking-tight text-[#0047FF] md:text-[75px] lg:text-[85px]">
            CrossChain Swap <br />
            made easy
          </h2>
          
          <div className="mt-8 space-y-6">
            <p className="font-sans text-[20px] font-medium leading-relaxed text-[#333333] md:text-[24px]">
              Xane turns Swap tokens from one network to <br className="hidden lg:block" />
              another without third parties.
            </p>
            <p className="font-sans text-[20px] font-medium leading-relaxed text-[#333333] md:text-[24px]">
              No risky bridges. No external exchanges.complex <br className="hidden lg:block" />
              finance into simple actions
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#0047FF", color: "#FFFFFF" }}
            whileTap={{ scale: 0.98 }}
            className="mt-12 rounded-[16px] border-2 border-[#0047FF] bg-transparent px-10 py-4 font-sans text-[20px] font-bold text-[#0A0A0A] transition-colors"
          >
            Try Cross-Chain Swap
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            type: "spring", 
            bounce: 0.2,
            duration: 1.2, 
            delay: 0.2 
          }}
          className="relative mt-20 flex w-full max-w-[500px] justify-center lg:mt-0 lg:w-1/2 lg:max-w-[700px] lg:justify-end"
        >
          <img
            src={swapUi}
            alt="CrossChain Swap Interface"
            className="relative z-10 w-full min-w-[750px] max-w-[900px] drop-shadow-[0_40px_60px_rgba(0,0,0,0.15)] -rotate-[18deg] translate-x-[20%]"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default CrossChainSwap;