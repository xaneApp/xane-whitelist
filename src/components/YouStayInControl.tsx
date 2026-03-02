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
    <section className="relative w-full overflow-hidden bg-white py-24 lg:py-32" style={{ zoom: 0.666667 }}>
      <div className="mx-auto flex w-full max-w-[1500px] flex-col items-center justify-between px-6 md:px-16 lg:flex-row lg:gap-16">
        
        {/* LEFT BLOCK: TYPOGRAPHY & LIST */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-[650px]"
        >
          <h2 className="font-sans text-[45px] font-black leading-[1.1] tracking-tight text-[#0A0A0A] md:text-[55px] lg:text-[65px]">
            You Stay in Control
          </h2>
          <p className="mt-4 font-sans text-[18px] font-medium text-[#6B7280] md:text-[20px]">
            Xane confirms that all these can be done in one app
          </p>

          <div className="mt-14 flex flex-col gap-10">
            {features.map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex items-start gap-6"
              >
                <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-[18px] bg-[#F3F4F6] text-[#4B5563]">
                  <feat.icon strokeWidth={2} className="h-7 w-7" />
                </div>
                
                <div className="flex flex-col pt-1">
                  <h3 className="font-sans text-[22px] font-bold text-[#0A0A0A]">
                    {feat.title}
                  </h3>
                  <p className="mt-2 font-sans text-[16px] font-medium leading-relaxed text-[#6B7280]">
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT BLOCK: PHONE ANCHOR */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative mt-20 flex w-full max-w-[500px] justify-center lg:mt-0 lg:w-1/2 lg:max-w-[650px] lg:justify-end"
        >
          <div className="absolute right-[5%] top-1/2 h-[90%] w-[100%] -translate-y-1/2 rounded-[40px] bg-[#F4F5F7] z-0 lg:right-0" />
          
          <img 
            src={phoneQr} 
            alt="Xane App QR Receive Screen" 
            className="relative z-10 w-full max-w-[400px] drop-shadow-[0_40px_60px_rgba(0,0,0,0.12)] lg:max-w-[450px]" 
          />
        </motion.div>

      </div>
    </section>
  );
};

export default YouStayInControl;