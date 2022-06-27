import React, { useState, useEffect } from "react";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import DefaultPage from "../components/DefaultPage";
import HighlightsDemo from "../components/HighlightsDemo";
import ReaderModeDemo from "../components/ReaderModeDemo";
import findTextContent from "../utils/readerModePoppin";
import { Helmet } from "react-helmet";
// import SEO from "../components/seo";

let darkTheme = createTheme({
  palette: {
    type: "dark",
    secondary: {
      main: "#FFA500",
    },
  },
});

darkTheme = responsiveFontSizes(darkTheme);

export default function IndexPage() {
  const [highlightsDemo, setHighlightsDemo] = useState(false);
  const [readerModeDemo, setReaderModeDemo] = useState(false);
  const [defaultPage, setDefaultPage] = useState(true);
  const [textContent, setTextContent] = useState(false);
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    setPageReady(true);
  }, []);

  useEffect(() => {
    const foundTextContent = findTextContent();
    setTextContent(foundTextContent);
  }, [pageReady]);

  const toggleHighlightsDemo = () => {
    setDefaultPage(!defaultPage);
    setHighlightsDemo(!highlightsDemo);
  };

  const toggleReaderModeDemo = () => {
    setReaderModeDemo(!readerModeDemo);
  };
  if (!pageReady) return <div />;
  return (
    <>
      <Helmet>
        <title>Power reader</title>
        <meta
          name="description"
          content="Consume web without distractions. Power reader extension removes irrelevant content from your browser and highlights words to help you read faster."
        />
      </Helmet>
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
        {readerModeDemo && textContent && (
          <ReaderModeDemo
            props={{ textContent, toggleReaderModeDemo, setReaderModeDemo }}
          />
        )}
      </ThemeProvider>
    </>
  );
}
