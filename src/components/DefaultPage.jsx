import React from "react";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import ReaderModeSection from "../components/ReaderModeSection";
import HighlightsSection from "../components/HighlightsSection";

export default function DefaultPage({
  props: { toggleHighlightsDemo, toggleReaderModeDemo },
}) {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ReaderModeSection props={{ toggleReaderModeDemo }} />
      <HighlightsSection props={{ toggleHighlightsDemo }} />
    </>
  );
}