import { motion } from "framer-motion";
import { Landmark, Crosshair, Headphones } from "lucide-react"; 
import phoneQr from "@/assets/receive-crypto.png"; 

const features = [
  { 
    icon: Landmark, 
    title: "Account Simplicity", 
    desc: "Receive crypto onchain with just phone no or your XaneTag" 
  },
  { 
    icon: Crosshair, 
    title: "Move coins from one chain to another", 
    desc: "With xane you can easily convert coin without bothering about gas fee" 
  },
  { 
    icon: Headphones, 
    title: "All in one", 
    desc: "Done with defi or trading? you dont have to move your crypto to another app to convert to naira, you can still do all that on Xane" 
  },
];

const YouStayInControl = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col items-center justify-between px-4 sm:px-6 md:px-16 lg:flex-row lg:gap-16">
        
        {/* LEFT BLOCK: TYPOGRAPHY & LIST */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-[650px] text-left"
        >
          <h2 className="font-sans text-[32px] sm:text-[44px] md:text-[54px] lg:text-[62px] font-black leading-[1.08] tracking-tight text-[#0A0A0A]">
            You Stay in Control
          </h2>
          <p className="mt-3 sm:mt-4 font-sans text-base sm:text-lg md:text-xl font-medium text-[#6B7280]">
            Xane confirms that all these can be done in one app
          </p>

          <div className="mt-8 sm:mt-12 flex flex-col gap-6 sm:gap-8 md:gap-10">
            {features.map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex items-start gap-4 sm:gap-6"
              >
                <div className="flex h-[48px] w-[48px] sm:h-[58px] sm:w-[58px] shrink-0 items-center justify-center rounded-[14px] sm:rounded-[18px] bg-[#F3F4F6] text-[#4B5563]">
                  <feat.icon strokeWidth={2} className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                
                <div className="flex flex-col pt-0.5">
                  <h3 className="font-sans text-lg sm:text-xl md:text-2xl font-bold text-[#0A0A0A]">
                    {feat.title}
                  </h3>
                  <p className="mt-1.5 font-sans text-xs sm:text-sm md:text-base font-medium leading-relaxed text-[#6B7280]">
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT BLOCK: PHONE ANCHOR */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative mt-12 flex w-full max-w-[440px] justify-center sm:mt-16 lg:mt-0 lg:w-1/2 lg:max-w-[580px] lg:justify-end"
        >
          <div className="absolute right-0 top-1/2 h-[90%] w-[95%] -translate-y-1/2 rounded-[32px] sm:rounded-[40px] bg-[#F4F5F7] z-0" />
          
          <img 
            src={phoneQr} 
            alt="Xane App QR Receive Screen" 
            className="relative z-10 w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[440px] drop-shadow-[0_25px_50px_rgba(0,0,0,0.1)]" 
          />
        </motion.div>

      </div>
    </section>
  );
};

export default YouStayInControl;