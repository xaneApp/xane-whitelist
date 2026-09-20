import { useNavigate } from "react-router-dom";
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

const Index = () => {
  const navigate = useNavigate();

  const handleOpenWaitlist = () => {
    navigate("/waitlist");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenWaitlist={handleOpenWaitlist} />
      <Hero onOpenWaitlist={handleOpenWaitlist} />
      <MoneyWorks />
      <CryptoSimple />
      <OwnershipUsability />
      <CrossChainSwap />
      <CryptoToBank />
      <YouStayInControl />
      <FAQ />
      <CTA onOpenWaitlist={handleOpenWaitlist} />
      <Footer />
    </div>
  );
};

export default Index;
