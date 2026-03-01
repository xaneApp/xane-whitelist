import { motion } from "framer-motion";
import appXanepay from "@/assets/app-xanepay.png";
import receiveCrypto from "@/assets/receive-crypto.png";

const CryptoSimple = () => {
  return (
    <section id="features" className="section-padding bg-secondary">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <h2 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Crypto shouldn't feel{" "}
            <span className="text-primary">technical</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Xane turns complex finance into simple actions.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Get started
          </a>
        </motion.div>

        {/* Feature cards grid */}
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center rounded-3xl bg-card p-8 shadow-sm"
          >
            <h3 className="mb-2 text-lg font-semibold text-foreground">XanePay</h3>
            <p className="mb-6 text-center text-sm text-muted-foreground">
              Convert and send money instantly
            </p>
            <div className="relative w-56">
              <img src={appXanepay} alt="XanePay interface" className="w-full rounded-2xl shadow-lg" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center rounded-3xl bg-card p-8 shadow-sm"
          >
            <h3 className="mb-2 text-lg font-semibold text-foreground">Receive via QR or phone</h3>
            <p className="mb-6 text-center text-sm text-muted-foreground">
              No wallet address copying. Ever.
            </p>
            <div className="relative w-56">
              <img src={receiveCrypto} alt="Receive crypto via QR" className="w-full rounded-2xl shadow-lg" />
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { label: "Transactions", value: "50K+" },
            { label: "Users", value: "10K+" },
            { label: "Countries", value: "15+" },
            { label: "Uptime", value: "99.9%" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CryptoSimple;
