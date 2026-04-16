import { useState } from "react";
// @ts-ignore
import CustomCursor from "./components/CustomCursor";
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

export default function App() {
  return (
    <div
      className="mx-auto min-h-screen"
      style={{ background: "#f2f2f0", overflowX: "hidden" }}
    >
      <CustomCursor />
      <Header />

      {/* Hero: full-bleed video */}
      <HeroSection />

      {/* Content sections */}
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

