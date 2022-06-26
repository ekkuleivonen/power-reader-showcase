import React from "react";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import ReaderModeSection from "../components/ReaderModeSection";
import HighlightsSection from "../components/HighlightsSection";
import WhatsNewSection from "./WhatsNewSection";
import ContributeSection from "./ContributeSection";

export default function DefaultPage({
  props: {
    toggleHighlightsDemo,
    toggleReaderModeDemo,
    highlightsDemo,
    readerModeDemo,
  },
}) {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ReaderModeSection props={{ toggleReaderModeDemo, readerModeDemo }} />
      <HighlightsSection props={{ toggleHighlightsDemo, highlightsDemo }} />
      <WhatsNewSection />
      <ContributeSection />
    </>
  );
}
