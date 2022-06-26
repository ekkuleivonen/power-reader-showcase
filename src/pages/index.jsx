import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import DefaultPage from "../components/DefaultPage";
import HighlightsDemo from "../components/HighlightsDemo";
import ReaderModeDemo from "../components/ReaderModeDemo";
import findTextContent from "../utils/readerModePoppin";

const darkTheme = createTheme({
  palette: {
    type: "dark",
    secondary: {
      main: "#FFA500",
    },
  },
});

export default function IndexPage() {
  const [highlightsDemo, setHighlightsDemo] = useState(false);
  const [readerModeDemo, setReaderModeDemo] = useState(false);
  const [defaultPage, setDefaultPage] = useState(true);
  const [textContent, setTextContent] = useState([]);

  useEffect(() => {
    const foundTextContent = findTextContent();
    setTextContent(foundTextContent);
  }, []);

  const toggleHighlightsDemo = () => {
    setDefaultPage(!defaultPage);
    setHighlightsDemo(!highlightsDemo);
  };

  const toggleReaderModeDemo = () => {
    setReaderModeDemo(!readerModeDemo);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {defaultPage && (
        <DefaultPage
          props={{
            toggleHighlightsDemo,
            toggleReaderModeDemo,
            highlightsDemo,
            readerModeDemo,
          }}
        />
      )}
      {highlightsDemo && (
        <HighlightsDemo
          props={{
            toggleHighlightsDemo,
            toggleReaderModeDemo,
            highlightsDemo,
            readerModeDemo,
          }}
        />
      )}
      {readerModeDemo && (
        <ReaderModeDemo
          props={{ textContent, toggleReaderModeDemo, setReaderModeDemo }}
        />
      )}
    </ThemeProvider>
  );
}
