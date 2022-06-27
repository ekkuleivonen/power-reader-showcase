import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Container, Switch } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Screenshot from "./Screenshot";

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

export default function HighlightsSection({
  props: { toggleHighlightsDemo, highlightsDemo },
}) {
  const styles = useStyles();
  const [checked, setChecked] = useState(false);
  const [sectionLoaded, setSectionLoaded] = useState(false);

  useEffect(() => {
    setChecked(highlightsDemo);
    setSectionLoaded(true);
  }, [highlightsDemo]);

  return (
    <Box className={styles.section} component="section" id="highlights" py={10}>
      <Container maxWidth="lg">
        <Grid
          className={styles.content}
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={5}
        >
          <Grid item xs={12} sm={12} md={5} lg={5}>
            {sectionLoaded && <Screenshot imgName="highlights" />}
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Typography component="h2" variant="h2">
              Highlights
            </Typography>
            <Typography variant="h6">
              Turn on text highlights to increase your reading speed. The plugin
              bolds the first few letters of each word in the main content of
              the website. These bolded letters create “artificial fixation
              points,” which allow your eyes to “skip” over words while your
              brain center automatically fills in the rest and still absorbs the
              meaning.
            </Typography>
            <div className={styles.tryme}>
              <Switch
                onChange={toggleHighlightsDemo}
                id="highlights-toggle"
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
