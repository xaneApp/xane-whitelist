import { motion } from "framer-motion";
import { Shield, Key, Eye, Lock } from "lucide-react";

const features = [
  { icon: Key, title: "Account Security", desc: "Your private keys, your control" },
  { icon: Shield, title: "Movable to Hardware", desc: "Export keys to cold wallets anytime" },
  { icon: Eye, title: "Full Transparency", desc: "Verify every transaction on-chain" },
  { icon: Lock, title: "2FA protection", desc: "Extra layer of security" },
];

const YouStayInControl = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
            You Stay in Control
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/70">
            Your keys. Your crypto. Your rules.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 rounded-2xl bg-primary-foreground/10 p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent">
                <feat.icon className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-foreground">{feat.title}</h3>
                <p className="mt-1 text-sm text-primary-foreground/70">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouStayInControl;
