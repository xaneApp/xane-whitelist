import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MoneyWorks from "@/components/MoneyWorks";
import CryptoSimple from "@/components/CryptoSimple";
import OwnershipUsability from "@/components/OwnershipUsability";
import CryptoToBank from "@/components/CryptoToBank";
import CrossChainSwap from "@/components/CrossChainSwap";
import YouStayInControl from "@/components/YouStayInControl";
import UseCases from "@/components/UseCases";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <MoneyWorks />
      <CryptoSimple />
      <OwnershipUsability />
      <CrossChainSwap />
      <CryptoToBank />
      <YouStayInControl />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
