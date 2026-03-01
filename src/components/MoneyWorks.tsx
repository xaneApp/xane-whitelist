import { motion } from "framer-motion";
import familySupport from "@/assets/family-support.png";
import alwaysProtected from "@/assets/always-protected.png";
import sendMessage from "@/assets/send-message.png";

const cards = [
  {
    image: familySupport,
    alt: "Family support - elderly couple using phone",
  },
  {
    image: alwaysProtected,
    alt: "Always protected - student using phone securely",
  },
  {
    image: sendMessage,
    alt: "Send like a message - friends high-fiving",
  },
];

const MoneyWorks = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Money Should Just Work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Money should just work.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={card.image}
                alt={card.alt}
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-lg text-muted-foreground"
        >
          Easy to build for those everyday moments — not just trading charts.
        </motion.p>
      </div>
    </section>
  );
};

export default MoneyWorks;
