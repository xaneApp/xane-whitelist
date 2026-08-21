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
    <section className="relative w-full overflow-hidden bg-[#FAFAFA] py-16 sm:py-20 md:py-28 lg:py-32">
      
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)`,
          backgroundSize: '3rem 3rem',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-10">
        
        {/* APP INTERFACE TOP VISUAL */}
        <div className="relative mx-auto flex w-full max-w-[800px] justify-center pt-6 sm:pt-10">
          <motion.img 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={appXanepay} 
            alt="Xane App Interface" 
            className="w-[220px] sm:w-[280px] md:w-[340px]"
            style={{ 
              maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)'
            }}
          />
          
          <div className="absolute right-[-5%] top-[35%] hidden w-[220px] lg:block">
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-sans text-lg font-bold leading-relaxed text-[#0A0A0A]"
            >
              XaneWallet to XanePay
            </motion.p>
          </div>
        </div>

        {/* SECTION TITLE */}
        <div className="relative z-20 mx-auto mt-[-30px] text-center sm:mt-[-45px] md:mt-[-60px]">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-sans text-[30px] sm:text-[42px] md:text-[54px] lg:text-[64px] font-black tracking-[-0.03em] text-[#0A0A0A]"
          >
            Ownership & Usability
          </motion.h2>
        </div>

        {/* MOBILE CARDS: 2x2 Clean Grid (< md) */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:hidden max-w-[440px] mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <img 
                src={card.image} 
                alt={card.alt} 
                className="h-auto w-full object-cover rounded-2xl" 
              />
            </motion.div>
          ))}
        </div>

        {/* DESKTOP CARDS: Fanned Deck (>= md) */}
        <div className="hidden md:flex mt-20 lg:mt-28 w-full justify-center md:space-x-[-4%] lg:space-x-[-2%]">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80, rotate: 0 }}
              whileInView={{ 
                opacity: 1, 
                y: card.y, 
                rotate: card.rotate 
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                type: "spring", 
                bounce: 0.3, 
                duration: 1, 
                delay: i * 0.1 
              }}
              whileHover={{ 
                rotate: 0, 
                y: card.y - 25, 
                scale: 1.06, 
                zIndex: 50 
              }}
              className="relative z-10 w-[240px] lg:w-[290px] xl:w-[320px] cursor-pointer drop-shadow-xl"
            >
              <img 
                src={card.image} 
                alt={card.alt} 
                className="h-auto w-full rounded-[24px] lg:rounded-[30px]" 
              />
            </motion.div>
          ))}
        </div>

        {/* TRANSITION HEADING */}
        <div className="mt-20 sm:mt-24 md:mt-32 text-center pb-8 sm:pb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-[26px] sm:text-[36px] md:text-[45px] lg:text-[54px] font-black tracking-[-0.03em] text-[#0A0A0A]"
          >
            From Crypto to Bank <br className="sm:hidden" /> in seconds
          </motion.h2>
        </div>

      </div>
    </section>
  );
};

export default OwnershipUsability;