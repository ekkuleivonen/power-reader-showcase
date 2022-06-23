import React from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "../Styles";

export default function HeroSection() {
  const styles = useStyles();
  return (
    <Box className={styles.heroSection} component="section">
      <div>Text content</div>
      <div>Img content</div>
    </Box>
  );
}
