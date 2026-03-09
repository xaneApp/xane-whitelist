import { motion } from "framer-motion";
import appXanepay from "@/assets/app-xanepay.png"; 
import walletKeys from "@/assets/wallet-keys.png";
import phoneNumbers from "@/assets/phone-numbers.png";
import convertCrypto from "@/assets/convert-crypto.png";
import withdrawBank from "@/assets/withdraw-bank.png";

const cards = [
  { image: walletKeys, alt: "You control your wallet keys", rotate: -18, y: 60 },
  { image: phoneNumbers, alt: "Send to phone numbers or addresses", rotate: -5, y: 10 },
  { image: convertCrypto, alt: "Convert crypto to local currency", rotate: 5, y: 10 },
  { image: withdrawBank, alt: "Withdraw directly to bank", rotate: 18, y: 60 },
];

const OwnershipUsability = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAFA] py-20 lg:py-32" style={{ zoom: 0.666667 }}>
      
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 md:px-10">
        
        <div className="relative mx-auto flex w-full max-w-[800px] justify-center pt-10">
          <motion.img 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={appXanepay} 
            alt="Xane App Interface" 
            className="w-[280px] md:w-[350px]"
            style={{ 
              maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
            }}
          />
          
          <div className="absolute right-[-10%] top-[40%] hidden w-[250px] lg:block">
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-sans text-xl font-bold leading-relaxed text-[#0A0A0A]"
            >
              <br /><br /> Xanewallet to xanepay
            </motion.p>
          </div>
        </div>

        <div className="relative z-20 mx-auto mt-[-40px] text-center md:mt-[-60px]">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-sans text-[45px] font-black tracking-[-0.04em] text-[#0A0A0A] md:text-[65px]"
          >
            Ownership & Usability
          </motion.h2>
        </div>

        <div className="mt-20 flex w-full justify-center space-x-[-12%] md:mt-32 md:space-x-[-4%] lg:space-x-[-2%]">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100, rotate: 0 }}
              whileInView={{ 
                opacity: 1, 
                y: card.y, 
                rotate: card.rotate 
              }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ 
                type: "spring", 
                bounce: 0.4, 
                duration: 1, 
                delay: i * 0.1 
              }}
              whileHover={{ 
                rotate: 0, 
                y: card.y - 30, 
                scale: 1.08, 
                zIndex: 50 
              }}
              className="relative z-10 w-[220px] cursor-pointer drop-shadow-2xl md:w-[300px] lg:w-[340px]"
            >
              <img 
                src={card.image} 
                alt={card.alt} 
                className="h-auto w-full rounded-[30px]" 
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center pb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-[40px] font-black tracking-[-0.03em] text-[#0A0A0A] md:text-[55px]"
          >
            From Crypto to Bank <br className="md:hidden" /> in seconds
          </motion.h2>
        </div>

      </div>
    </section>
  );
};

export default OwnershipUsability;