import { motion } from "framer-motion";
import swapUi from "@/assets/swap-ui.png";

const CrossChainSwap = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              CrossChain Swap
              <br />
              made easy
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Swap & hold Crypto: move from one network to
              another without multiple tools.
            </p>
            <p className="mt-4 text-muted-foreground">
              No bridge. No protocol. No technical crypto.
              15 coins in multiple wallets.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-foreground px-8 py-3.5 font-semibold text-foreground transition hover:bg-foreground hover:text-background"
            >
              Try Cross Chain Swap
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={swapUi}
              alt="CrossChain swap interface showing SOL to ETH swap"
              className="w-full max-w-lg rounded-3xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CrossChainSwap;
