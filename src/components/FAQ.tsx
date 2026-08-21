import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Do I need crypto knowledge to use Xane?",
    a: "No.\n\nXane is designed so you don't need to understand blockchain, wallets, or gas fees.\n\nIf you can use a banking app, you can use Xane.\nBehind the scenes, powerful crypto technology runs, but you only see simple actions like Send, Convert and Withdraw.",
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
  const [openIndex, setOpenIndex] = useState<number | null>(0); 

  return (
    <section className="relative w-full bg-[#F0F7FA] py-16 sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col justify-between px-4 sm:px-6 md:px-16 lg:flex-row lg:gap-16 xl:gap-20">

        {/* LEFT: HEADING & CONTACT */}
        <div className="w-full max-w-[450px] shrink-0 text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-sans text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] font-bold leading-[1.15] tracking-tight text-[#0A0A0A]"
          >
            Frequently <br />
            Asked <br />
            Questions
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 sm:mt-12 lg:mt-24"
          >
            <p className="font-sans text-sm sm:text-base md:text-lg font-medium text-[#4B5563]">
              Still have questions?
            </p>
            <a
              href="mailto:Support@xane.app"
              className="mt-1 inline-block font-sans text-xl sm:text-2xl md:text-3xl font-bold text-[#4F3CFF] transition-opacity hover:opacity-80 break-all"
            >
              Support@xane.app
            </a>
          </motion.div>
        </div>

        {/* RIGHT: THE ACCORDION */}
        <div className="mt-10 sm:mt-12 w-full lg:mt-0 lg:max-w-[850px] text-left">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className={`border-[#D1D5DB] ${i === 0 ? 'border-t' : ''} border-b`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="group flex w-full items-center justify-between py-5 sm:py-6 md:py-8 text-left transition-colors cursor-pointer"
              >
                <span className="pr-4 font-sans text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#0A0A0A] group-hover:text-[#4F3CFF]">
                  {faq.q}
                </span>
                <span className="ml-2 shrink-0 text-[#0A0A0A]">
                  {openIndex === i ? (
                    <Minus className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" strokeWidth={2} />
                  ) : (
                    <Plus className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" strokeWidth={2} />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="whitespace-pre-wrap pb-6 sm:pb-8 pr-4 sm:pr-8 font-sans text-xs sm:text-sm md:text-base leading-relaxed text-[#6B7280]">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;