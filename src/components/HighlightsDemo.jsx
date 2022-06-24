import React, { useEffect } from "react";
import DefaultPage from "./DefaultPage";
import replaceChildNode from "../wordHighlighting";

export default function HighlightsDemo({
  props: {
    toggleHighlightsDemo,
    toggleReaderModeDemo,
    highlightsDemo,
    readerModeDemo,
  },
}) {
  //const [state, setstate] = useState(initialState);

  useEffect(() => {
    const paragraphs = [...document.querySelectorAll("h5,h6")];
    paragraphs.forEach((paragraph) => {
      paragraph.childNodes.forEach((node, idx) => {
        const newChildNode = replaceChildNode(node);
        return paragraph.replaceChild(newChildNode, paragraph.childNodes[idx]);
      });
    });
  }, []);

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
