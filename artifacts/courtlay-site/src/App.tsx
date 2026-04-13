import { useState } from "react";
// @ts-ignore
import Header from "./components/Header";
// @ts-ignore
import HeroSection from "./components/HeroSection";
// @ts-ignore
import AdPlacementSection from "./components/AdPlacementSection";
// @ts-ignore
import SportsCoverageSection from "./components/SportsCoverageSection";
// @ts-ignore
import VirtualAdsSection from "./components/VirtualAdsSection";
// @ts-ignore
import FaqSection from "./components/FaqSection";
// @ts-ignore
import CtaSection from "./components/CtaSection";
// @ts-ignore
import MemberFormSection from "./components/MemberFormSection";
// @ts-ignore
import Footer from "./components/Footer";
// @ts-ignore
import GridBackground from "./components/GridBackground";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="mx-auto min-h-screen">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <div id="home" className="bg-black overflow-hidden relative">
        <GridBackground />
        <div className="relative z-10 px-6 pb-6 sm:px-10 sm:pb-8 lg:px-16 lg:pb-12">
          <HeroSection />
        </div>
      </div>

      <AdPlacementSection />
      <SportsCoverageSection />
      <VirtualAdsSection />
      <FaqSection />
      <CtaSection />
      <MemberFormSection />
      <Footer />
    </div>
  );
}
