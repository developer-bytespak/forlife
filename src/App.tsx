import Header from "./components/Header";
import Hero from "./components/Hero";
import PrincipleStrip from "./components/PrincipleStrip";
import BrandIntro from "./components/BrandIntro";
import GrowthPath from "./components/GrowthPath";
import WhatsInside from "./components/WhatsInside";
import Archetypes from "./components/Archetypes";
import CommunityProof from "./components/CommunityProof";
import HowItWorks from "./components/HowItWorks";
import TrustStrip from "./components/TrustStrip";
import ImpactSection from "./components/ImpactSection";
import Resources from "./components/Resources";
import CommunityCTA from "./components/CommunityCTA";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <PrincipleStrip />
        <BrandIntro />
        <GrowthPath />
        <WhatsInside />
        <Archetypes />
        <CommunityProof />
        <HowItWorks />
        <TrustStrip />
        <ImpactSection />
        <Resources />
        <CommunityCTA />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
