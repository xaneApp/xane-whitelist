import { motion } from "framer-motion";
import handshake from "@/assets/handshake.png";

const floatingTags = [
  { text: "Fast settlement", top: "5%", left: "15%", delay: 0.1 },
  { text: "Reliable conversion rates", top: "-5%", right: "-10%", delay: 0.3 },
  { text: "Built for unstable banking systems", top: "45%", left: "-25%", delay: 0.2 },
  { text: "Transparent fees", bottom: "5%", right: "15%", delay: 0.4 },
  { text: "Reliable conversion rates", top: "55%", right: "-20%", delay: 0.5 },
];

const blueBars = [
  { width: "w-[110%]", delay: 0.1 },
  { width: "w-[100%]", delay: 0.2 },
  { width: "w-[105%]", delay: 0.3 },
  { width: "w-[95%]", delay: 0.4 },
  { width: "w-[100%]", delay: 0.5 },
  { width: "w-[90%]", delay: 0.6 },
  { width: "w-[85%]", delay: 0.7 },
  { width: "w-[80%]", delay: 0.8 },
];

const CryptoToBank = () => {
  return (
    <section className="relative flex min-h-[900px] w-full items-center overflow-hidden bg-[#F9FAFB] py-24 lg:py-32" style={{ zoom: 0.666667 }}>
      
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="absolute h-[800px] w-[800px] rounded-full border-[2px] border-[#0A0A0A]" />
        <div className="absolute h-[1200px] w-[1200px] rounded-full border-[2px] border-[#0A0A0A]" />
        <div className="absolute h-[1600px] w-[1600px] rounded-full border-[2px] border-[#0A0A0A]" />
        <div className="absolute h-[2000px] w-[2000px] rounded-full border-[2px] border-[#0A0A0A]" />
        <div className="absolute h-[2400px] w-[2400px] rounded-full border-[2px] border-[#0A0A0A]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col items-start px-6 md:px-16 lg:flex-row lg:justify-between">
        
        <div className="relative w-full max-w-[600px]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-sans text-[45px] font-black leading-[1.1] tracking-[-0.03em] text-[#0047FF] md:text-[55px] lg:text-[60px]">
              Your money should never feel stuck
            </h2>
            <p className="mt-4 font-sans text-[28px] font-bold text-[#A0AABF] lg:text-[34px]">
              Built for reliability
            </p>
          </motion.div>

          <div className="absolute left-[-50vw] top-[220px] flex w-[50vw] min-w-[500px] flex-col gap-3 lg:gap-4 xl:min-w-[700px]">
            {blueBars.map((bar, i) => (
              <motion.div
                key={i}
                initial={{ x: "-100%" }}
                whileInView={{ x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ type: "spring", bounce: 0.2, duration: 1, delay: bar.delay }}
                className={`h-[40px] rounded-r-full bg-[#2962FF] shadow-sm lg:h-[50px] ${bar.width}`}
              />
            ))}
          </div>
        </div>

        <div className="relative mt-40 flex w-full max-w-[600px] justify-center lg:mt-20 lg:w-1/2 lg:justify-end">
          
          <div className="relative flex h-[400px] w-[400px] items-center justify-center lg:h-[500px] lg:w-[500px]">
            
            <div className="absolute inset-0 scale-[1.3] rounded-full border-[2px] border-dashed border-[#0047FF]/20 z-0" />

            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src={handshake}
              alt="Reliable Crypto Settlements"
              className="relative z-10 w-full max-w-[450px] object-contain drop-shadow-2xl"
            />

            {floatingTags.map((tag, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "spring", bounce: 0.4, delay: tag.delay, duration: 0.8 }}
                style={{ top: tag.top, left: tag.left, right: tag.right, bottom: tag.bottom }}
                className="absolute z-20 flex items-center justify-center whitespace-nowrap rounded-[20px] bg-white px-6 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
              >
                <span className="font-sans text-[15px] font-bold text-[#0047FF] lg:text-[17px]">
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