import { motion } from "framer-motion";
import walletKeys from "@/assets/wallet-keys.png";
import phoneNumbers from "@/assets/phone-numbers.png";
import convertCrypto from "@/assets/convert-crypto.png";
import withdrawBank from "@/assets/withdraw-bank.png";

const cards = [
  { image: walletKeys, alt: "You control your wallet keys" },
  { image: phoneNumbers, alt: "Send to phone numbers or addresses" },
  { image: convertCrypto, alt: "Convert crypto to local currency" },
  { image: withdrawBank, alt: "Withdraw directly to bank" },
];

const OwnershipUsability = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Ownership & Usability
          </p>
          <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
            Ownership & Usability
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -3 : 3 }}
              animate={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -3 : 3 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="overflow-hidden rounded-2xl shadow-lg transition-shadow hover:shadow-xl"
            >
              <img src={card.image} alt={card.alt} className="h-full w-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OwnershipUsability;