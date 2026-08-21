import { motion } from "framer-motion";
import familySupport from "@/assets/family-support.png";
import alwaysProtected from "@/assets/always-protected.png";
import globalWork from "@/assets/global-work.png";
import smallBusiness from "@/assets/small-business.png";
import dailyTrading from "@/assets/daily-trading.png";
import sendMessage from "@/assets/send-message.png";

const useCases = [
  { img: familySupport, title: "Family Support made easy", desc: "Children abroad send money home in seconds, no agents" },
  { img: alwaysProtected, title: "Always Protected", desc: "Shopping with Xane is even more secure thanks to Buyer Protection." },
  { img: globalWork, title: "Global Work, Local Living", desc: "Freelancers get paid from abroad and spend locally the same day." },
  { img: smallBusiness, title: "Small Business Owner", desc: "Accept payments even when card networks are down." },
  { img: dailyTrading, title: "Daily Trading Made Easy", desc: "Convert between cash and crypto anytime you need." },
  { img: sendMessage, title: "Send Like a Message", desc: "Just a phone number — no wallet addresses required." },
];

const MoneyWorks = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F2F7FF] py-16 sm:py-20 md:py-28 lg:py-32">
      
      {/* ANIMATED BACKGROUND LINES */}
      <div className="pointer-events-none absolute left-0 top-0 z-0 h-full w-[200%] opacity-40 md:opacity-60">
        <svg viewBox="0 0 1440 800" fill="none" className="h-full w-full">
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            d="M-200 100 C 300 -50, 700 600, 1600 200" stroke="#0047FF" strokeWidth="0.8" 
          />
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
            d="M-100 200 C 400 50, 800 700, 1500 300" stroke="#0047FF" strokeWidth="0.5" 
          />
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.4 }}
            d="M0 300 C 500 150, 900 800, 1400 400" stroke="#0047FF" strokeWidth="0.5" 
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 text-left sm:mb-12"
        >
          <h2 className="font-sans text-[32px] sm:text-[42px] md:text-[50px] lg:text-[56px] font-black tracking-tight text-[#0047FF]">
            Money Should Just Work
          </h2>
          <p className="mt-2 font-sans text-sm sm:text-base md:text-lg font-medium text-[#0047FF]/60">
            Everyday crypto usability made effortless for everyone
          </p>
        </motion.div>
      </div>

      {/* HORIZONTAL SCROLL TRACK */}
      <div className="relative z-10 flex w-full flex-nowrap overflow-x-auto gap-5 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-16 pb-12 pt-4 md:pb-16 scrollbar-hide snap-x snap-mandatory">
        {useCases.map((uc, i) => (
          <div
            key={i}
            className={`flex-shrink-0 snap-center w-[270px] sm:w-[310px] md:w-[360px] lg:w-[390px] ${
              i % 2 !== 0 ? 'md:mt-12' : 'md:mb-12'
            }`}
          >
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2, once: true }} 
              transition={{ type: "spring", bounce: 0.3, duration: 0.8, delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }} 
              className="group flex h-full w-full flex-col items-center rounded-[24px] sm:rounded-[30px] bg-[#0047FF] p-6 text-center shadow-xl sm:p-8 md:p-9 cursor-grab active:cursor-grabbing"
            >
              <h3 className="mb-2 text-lg sm:text-xl md:text-2xl font-bold text-[#D9FF3F]">{uc.title}</h3>
              <p className="mb-8 text-xs sm:text-sm md:text-base font-medium leading-relaxed text-white/95">
                {uc.desc}
              </p>
              
              <div className="relative mt-auto w-full max-w-[220px] sm:max-w-[250px] md:max-w-[280px] aspect-square">
                <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-[#0047FF] border border-white/20 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3" />
                <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-[#0047FF] border border-white/10 transition-transform duration-300 group-hover:translate-x-6 group-hover:translate-y-6" />
                <img 
                  src={uc.img} 
                  alt={uc.title} 
                  className="relative z-10 h-full w-full rounded-2xl sm:rounded-3xl object-cover border-[4px] sm:border-[6px] border-white shadow-md" 
                />
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 mx-auto mt-8 max-w-[1600px] px-4 text-center sm:mt-12 sm:px-6 md:px-16"
      >
        <p className="font-sans text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#0047FF]">
          Xane is built for these everyday moments — not just trading charts.
        </p>
      </motion.div>
    </section>
  );
};

export default MoneyWorks;