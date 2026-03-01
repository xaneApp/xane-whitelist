import { motion } from "framer-motion";
import { useRef } from "react";
import smallBusiness from "@/assets/small-business.png";
import dailyTrading from "@/assets/daily-trading.png";
import globalWork from "@/assets/global-work.png";
import familySupport from "@/assets/family-support.png";
import alwaysProtected from "@/assets/always-protected.png";
import sendMessage from "@/assets/send-message.png";

const useCases = [
  { image: familySupport, alt: "Family Support" },
  { image: alwaysProtected, alt: "Always Protected" },
  { image: sendMessage, alt: "Send Like a Message" },
  { image: smallBusiness, alt: "Small Business Owner" },
  { image: dailyTrading, alt: "Daily Trading Made Easy" },
  { image: globalWork, alt: "Global Work, Local Living" },
];

const UseCases = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="usecases" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Your money should never feel stuck
          </h2>
          <p className="mt-4 text-muted-foreground">Built for reliability.</p>
        </motion.div>
      </div>

      {/* Horizontal scroll carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-4 pb-4 scrollbar-hide md:px-8"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {useCases.map((uc, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="w-72 flex-shrink-0 overflow-hidden rounded-2xl shadow-md"
            style={{ scrollSnapAlign: "start" }}
          >
            <img src={uc.image} alt={uc.alt} className="h-full w-full object-cover" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UseCases;