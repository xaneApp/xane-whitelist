import { motion } from "framer-motion";
import familySupport from "@/assets/family-support.png";
import alwaysProtected from "@/assets/always-protected.png";
import globalWork from "@/assets/global-work.png";
import smallBusiness from "@/assets/small-business.png";
import dailyTrading from "@/assets/daily-trading.png";
import sendMessage from "@/assets/send-message.png";

const useCases = [
  { img: familySupport, title: "Family Support made easy", desc: "Children abroad send money home in seconds, no agents" },
  { img: alwaysProtected, title: "Always Protected", desc: "Shopping with UNINE is even more secure thanks to Buyer Protection." },
  { img: globalWork, title: "Global Work, Local Living", desc: "Freelancers get paid from abroad and spend locally the same day." },
  { img: smallBusiness, title: "Small Business Owner", desc: "Accept payments even when card networks are down." },
  { img: dailyTrading, title: "Daily Trading Made Easy", desc: "Convert between cash and crypto anytime you need." },
  { img: sendMessage, title: "Send Like a Message", desc: "Just a phone number — no wallet addresses required." },
];

const MoneyWorks = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F2F7FF] py-24 md:py-32" style={{ zoom: 0.666667 }}>
      
      {/* ANIMATED BACKGROUND LINES */}
      <div className="absolute left-0 top-0 h-full w-[200%] opacity-60 pointer-events-none z-0">
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

      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 text-left"
        >
          <h2 className="font-sans text-[40px] font-black tracking-tight text-[#0047FF] md:text-[55px]">
            Money Should Just Work
          </h2>
          <p className="mt-1 text-2xl font-bold text-[#0047FF]/30">
            Money Should Just Work
          </p>
        </motion.div>
      </div>

      {/* HORIZONTAL SCROLL TRACK */}
      <div className="relative z-10 flex w-full flex-nowrap overflow-x-auto gap-8 px-6 md:px-16 pb-20 pt-10 scrollbar-hide snap-x snap-mandatory perspective-1000">
        {useCases.map((uc, i) => (
          <div
            key={i}
            className={`flex-shrink-0 snap-center w-[320px] md:w-[380px] lg:w-[420px] ${i % 2 !== 0 ? 'mt-28' : 'mb-28'}`}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.85, x: 80, rotateY: 10 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, rotateY: 0 }}
              viewport={{ amount: 0.4, once: true }} 
              transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
              whileHover={{ y: -12, scale: 1.02 }} 
              className="group flex h-full w-full flex-col items-center rounded-[32px] bg-[#0047FF] p-8 text-center shadow-xl md:p-10 cursor-grab active:cursor-grabbing"
            >
              <h3 className="mb-4 text-xl font-bold text-[#D9FF3F] md:text-2xl">{uc.title}</h3>
              <p className="mb-12 text-base font-medium leading-relaxed text-white opacity-95 md:text-lg">
                {uc.desc}
              </p>
              
              <div className="relative mt-auto w-full max-w-[280px] aspect-square">
                <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-[#0047FF] border border-white/20 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4" />
                <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-3xl bg-[#0047FF] border border-white/10 transition-transform duration-300 group-hover:translate-x-8 group-hover:translate-y-8" />
                <img 
                  src={uc.img} 
                  alt={uc.title} 
                  className="relative z-10 h-full w-full rounded-3xl object-cover border-[6px] border-white" 
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
        transition={{ duration: 1, delay: 0.5 }}
        className="mx-auto mt-16 max-w-[1600px] px-6 md:px-16 text-center relative z-10"
      >
        <p className="font-sans text-xl font-bold text-[#0047FF] md:text-2xl">
          Xane is built for these everyday moments — not just trading charts.
        </p>
      </motion.div>
    </section>
  );
};

export default MoneyWorks;