import { motion } from "framer-motion";
import appXanepay from "@/assets/app-xanepay.png"; 
import cardReceiveCrypto from "@/assets/card-receive-crypto.png";
import cardConvertCrypto from "@/assets/card-convert-crypto.png";
import cardWithdrawBank from "@/assets/card-withdraw-bank.png";
import cardInstantMoney from "@/assets/card-instant-money.png";

const cards = [
  {
    image: cardReceiveCrypto,
    alt: "Receive any crypto — USDC, USDT, BTC, ETH and more",
    y: 35,
    zIndex: 10,
  },
  {
    image: cardConvertCrypto,
    alt: "Convert crypto to local currency instantly",
    y: 15,
    zIndex: 20,
  },
  {
    image: cardWithdrawBank,
    alt: "Withdraw directly to bank or mobile money",
    y: 0,
    zIndex: 30,
  },
  {
    image: cardInstantMoney,
    alt: "Money in your bank in seconds — not days",
    y: 30,
    zIndex: 20,
  },
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
              className="group relative overflow-hidden rounded-2xl transition-transform hover:scale-105 drop-shadow-md"
            >
              <img 
                src={card.image} 
                alt={card.alt} 
                className="h-auto w-full object-contain" 
              />
            </motion.div>
          ))}
        </div>

        {/* DESKTOP CARDS: Fanned Deck (>= md) */}
        <div className="hidden md:flex mt-16 lg:mt-24 w-full justify-center md:space-x-[-4%] lg:space-x-[-2%]">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ 
                opacity: 1, 
                y: card.y,
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                type: "spring", 
                bounce: 0.3, 
                duration: 0.9, 
                delay: i * 0.1 
              }}
              whileHover={{ 
                y: card.y - 20, 
                scale: 1.05, 
                zIndex: 60 
              }}
              style={{ zIndex: card.zIndex }}
              className="relative w-[230px] lg:w-[280px] xl:w-[310px] cursor-pointer drop-shadow-xl"
            >
              <img 
                src={card.image} 
                alt={card.alt} 
                className="h-auto w-full" 
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