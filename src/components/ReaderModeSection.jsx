import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Container, Switch } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BeforeAfter from "./BeforeAfter";

const useStyles = makeStyles(() => ({
  section: {
    width: "100%",
    overflowX: "hidden",
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
  const [sectionLoaded, setSectionLoaded] = useState(false);

  useEffect(() => {
    setChecked(readerModeDemo);
    setSectionLoaded(true);
  }, [readerModeDemo]);

  return (
    <Box
      className={styles.section}
      component="section"
      id="reader-mode"
      py={10}
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
            {sectionLoaded && <BeforeAfter />}
          </Grid>

          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Typography component="h2" variant="h2">
              Reader mode
            </Typography>
            <Typography variant="h6">
              Use the reader mode plugin to view a web page article in one page,
              formatted for easy reading, and presented without ads, navigation
              or other distracting items. The plugin comes with inbuilt keyboard
              shortcuts to help you toggle it based on your preferences.
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
