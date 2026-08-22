import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MoneyWorks from "@/components/MoneyWorks";
import CryptoSimple from "@/components/CryptoSimple";
import OwnershipUsability from "@/components/OwnershipUsability";
import CryptoToBank from "@/components/CryptoToBank";
import CrossChainSwap from "@/components/CrossChainSwap";
import YouStayInControl from "@/components/YouStayInControl";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";

const Index = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenWaitlist={() => setIsWaitlistOpen(true)} />
      <Hero onOpenWaitlist={() => setIsWaitlistOpen(true)} />
      <MoneyWorks />
      <CryptoSimple />
      <OwnershipUsability />
      <CrossChainSwap />
      <CryptoToBank />
      <YouStayInControl />
      <FAQ />
      <CTA />
      <Footer />
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </div>
  );
};

export default Index;
