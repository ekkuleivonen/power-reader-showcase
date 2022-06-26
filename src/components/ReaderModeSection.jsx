import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Container, Switch } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BeforeAfter from "./BeforeAfter";

const useStyles = makeStyles(() => ({
  section: {
    width: "100%",
  },
  tryme: {
    color: "orange",
    display: "flex",
    alignItems: "center",
    marginTop: "5px",
  },
}));

export default function ReaderModeSection({
  props: { toggleReaderModeDemo, readerModeDemo },
}) {
  const styles = useStyles();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(readerModeDemo);
  }, [readerModeDemo]);

  return (
    <Box
      className={styles.section}
      component="section"
      id="reader-mode"
      my={20}
    >
      <Container maxWidth="lg">
        <Grid
          className={styles.content}
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={5}
        >
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <BeforeAfter />
          </Grid>

          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Typography component="h2" variant="h2">
              Reader Mode
            </Typography>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Typography>
            <div className={styles.tryme}>
              <Switch
                onChange={toggleReaderModeDemo}
                id="reader-mode-toggle"
                checked={checked}
              />
              <Typography variant="body1">Try me!</Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
