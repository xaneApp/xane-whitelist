import { motion } from "framer-motion";
import handshake from "@/assets/handshake.png";

const CryptoToBank = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              From Crypto to Bank
              <br />
              in seconds
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Convert your crypto to local currency and withdraw directly to your bank or mobile money.
              No third-party apps needed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src={handshake}
              alt="Crypto to bank handshake"
              className="w-full max-w-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CryptoToBank;