import { motion } from "framer-motion";
import handshake from "@/assets/handshake.png";

const floatingTags = [
  { text: "Fast settlement", delay: 0.1, pos: "top-[2%] left-[5%] md:top-[5%] md:left-[10%]" },
  { text: "Reliable conversion rates", delay: 0.2, pos: "top-[-5%] right-[0%] md:top-[-2%] md:right-[-5%]" },
  { text: "Built for unstable banking systems", delay: 0.3, pos: "bottom-[20%] left-[-2%] md:bottom-[25%] md:left-[-10%]" },
  { text: "Transparent fees", delay: 0.4, pos: "bottom-[5%] right-[10%] md:bottom-[8%] md:right-[5%]" },
];

const blueBars = [
  { width: "w-[85%] sm:w-[95%]", delay: 0.1 },
  { width: "w-[75%] sm:w-[85%]", delay: 0.2 },
  { width: "w-[80%] sm:w-[90%]", delay: 0.3 },
  { width: "w-[70%] sm:w-[80%]", delay: 0.4 },
  { width: "w-[75%] sm:w-[85%]", delay: 0.5 },
];

const CryptoToBank = () => {
  return (
    <section className="relative flex w-full items-center overflow-hidden bg-[#F9FAFB] py-16 sm:py-20 md:py-28 lg:py-32">
      
      {/* BACKGROUND CIRCLES */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-10 flex items-center justify-center overflow-hidden">
        <div className="absolute h-[500px] w-[500px] sm:h-[800px] sm:w-[800px] rounded-full border-[2px] border-[#0A0A0A]" />
        <div className="absolute h-[800px] w-[800px] sm:h-[1200px] sm:w-[1200px] rounded-full border-[2px] border-[#0A0A0A]" />
        <div className="absolute h-[1100px] w-[1100px] sm:h-[1600px] sm:w-[1600px] rounded-full border-[2px] border-[#0A0A0A]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col items-start px-4 sm:px-6 md:px-16 lg:flex-row lg:items-center lg:justify-between">
        
        {/* LEFT COLUMN: TITLE & GRAPHIC BARS */}
        <div className="relative w-full max-w-[650px] text-left">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-sans text-[32px] sm:text-[44px] md:text-[54px] lg:text-[62px] font-black leading-[1.08] tracking-[-0.03em] text-[#0047FF]">
              Your money should never feel stuck
            </h2>
            <p className="mt-3 sm:mt-4 font-sans text-xl sm:text-2xl md:text-3xl font-bold text-[#A0AABF]">
              Built for reliability
            </p>
          </motion.div>

          {/* DECORATIVE BARS */}
          <div className="mt-8 flex w-full max-w-[450px] flex-col gap-2.5 sm:gap-3 lg:mt-12">
            {blueBars.map((bar, i) => (
              <motion.div
                key={i}
                initial={{ x: "-100%" }}
                whileInView={{ x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ type: "spring", bounce: 0.2, duration: 1, delay: bar.delay }}
                className={`h-[28px] sm:h-[36px] md:h-[44px] rounded-r-full bg-[#2962FF] shadow-sm ${bar.width}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: HANDSHAKE & FLOATING BADGES */}
        <div className="relative mt-14 flex w-full max-w-[550px] justify-center sm:mt-16 lg:mt-0 lg:w-1/2 lg:justify-end">
          
          <div className="relative flex h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] md:h-[480px] md:w-[480px] items-center justify-center">
            
            <div className="absolute inset-0 scale-[1.1] sm:scale-[1.2] rounded-full border-[2px] border-dashed border-[#0047FF]/20 z-0" />

            <motion.img
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src={handshake}
              alt="Reliable Crypto Settlements"
              className="relative z-10 w-full max-w-[260px] sm:max-w-[360px] md:max-w-[420px] object-contain drop-shadow-xl"
            />

            {/* FLOATING PILLS */}
            {floatingTags.map((tag, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.6, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "spring", bounce: 0.3, delay: tag.delay, duration: 0.8 }}
                className={`absolute z-20 flex items-center justify-center whitespace-nowrap rounded-[16px] sm:rounded-[20px] bg-white px-3.5 py-2 sm:px-5 sm:py-3 shadow-[0_8px_25px_rgba(0,0,0,0.08)] border border-gray-100 ${tag.pos}`}
              >
                <span className="font-sans text-xs sm:text-sm md:text-[15px] font-bold text-[#0047FF]">
                  {tag.text}
                </span>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default CryptoToBank;