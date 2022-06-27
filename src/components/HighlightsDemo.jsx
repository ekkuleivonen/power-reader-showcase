import React, { useEffect } from "react";
import DefaultPage from "./DefaultPage";
import replaceChildNode from "../utils/wordHighlighting";

export default function HighlightsDemo({
  props: {
    toggleHighlightsDemo,
    toggleReaderModeDemo,
    highlightsDemo,
    readerModeDemo,
  },
}) {
  useEffect(() => {
    let paragraphs;
    if (readerModeDemo) {
      const readerPaper = document.getElementById("paper");
      paragraphs = readerPaper.querySelectorAll("h5,h6");
    } else paragraphs = [...document.querySelectorAll("h5,h6")];
    paragraphs.forEach((paragraph) => {
      paragraph.childNodes.forEach((node, idx) => {
        const newChildNode = replaceChildNode(node);
        return paragraph.replaceChild(newChildNode, paragraph.childNodes[idx]);
      });
    });
  }, [readerModeDemo]);

  return (
    <DefaultPage
      props={{
        toggleHighlightsDemo,
        toggleReaderModeDemo,
        highlightsDemo,
        readerModeDemo,
      }}
    />
  );
}
