import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline, Container } from "@material-ui/core";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});

export default function IndexPage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="lg">
        <HeroSection />
      </Container>
    </ThemeProvider>
  );
}
