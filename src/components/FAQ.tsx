import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do I need crypto knowledge to use Xane?",
    a: "No. Xane is designed so you don't need to understand blockchain, wallets, or gas fees. If you can use a banking app, you can use Xane. Behind the scenes, powerful crypto technology runs, but you only see simple actions like Send, Convert and Withdraw.",
  },
  {
    q: "What is the difference between XaneWallet and XanePay?",
    a: "XaneWallet is where you fully control your crypto. Your keys. Your ownership. XanePay lets you turn crypto into cash and send it to banks or phone numbers instantly. You can move between both anytime inside the app. Think of it as: Save in crypto. Spend like money.",
  },
  {
    q: "Is my money safe?",
    a: "Yes, and in two ways. In XaneWallet, you control your private keys. No one can freeze or access your funds. In XanePay, transactions use verified local payment rails and secure infrastructure. We built Xane for reliability, transparency and long-term trust.",
  },
  {
    q: "Can I withdraw to my bank account?",
    a: "Yes. You can convert your crypto to local currency and withdraw directly to your bank or mobile money account. No third-party apps needed.",
  },
  {
    q: "What makes Xane different from other crypto apps?",
    a: "Most apps are either wallets you can't easily cash out from, or payment apps that fully control your funds. Xane combines both. You own your crypto — and you can use it like real money. That's the difference.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-secondary">
      <div className="container-narrow">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Frequently Asked
              <br />
              Questions
            </h2>
            <p className="mt-4 text-muted-foreground">Got a question?</p>
            <a
              href="mailto:support@xane.app"
              className="mt-2 inline-block text-primary font-medium hover:underline"
            >
              support@xane.app
            </a>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl bg-card shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <span className="pr-4 font-medium text-foreground">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-muted-foreground">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
