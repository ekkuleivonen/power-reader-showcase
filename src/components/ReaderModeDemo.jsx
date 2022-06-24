import React, { useState, useEffect } from "react";
import DefaultPage from "./DefaultPage";
import ReaderModeModal from "./ReaderModeModal";
import findTextContent from "../readerModePoppin";

export default function ReaderModeDemo({
  props: {
    toggleHighlightsDemo,
    toggleReaderModeDemo,
    highlightsDemo,
    readerModeDemo,
  },
}) {
  const [readerMode, setReaderMode] = useState(false);
  const [textContent, setTextContent] = useState([]);

  useEffect(() => {
    const foundTextContent = findTextContent();
    setTextContent(foundTextContent);
    setReaderMode(readerModeDemo);
  }, [readerModeDemo]);

  return (
    <>
      <DefaultPage
        props={{
          toggleHighlightsDemo,
          toggleReaderModeDemo,
          highlightsDemo,
          readerModeDemo,
        }}
      />
      {readerMode && <ReaderModeModal props={{ textContent }} />}
    </>
  );
}
