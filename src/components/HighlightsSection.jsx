import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Container, Switch } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Screenshot from "./Screenshot";

const useStyles = makeStyles(() => ({
  section: {
    width: "100%",
  },
}));

export default function HighlightsSection({
  props: { toggleHighlightsDemo, highlightsDemo },
}) {
  const styles = useStyles();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(highlightsDemo);
  }, [highlightsDemo]);

  return (
    <Box className={styles.section} component="section" my={20}>
      <Container maxWidth="lg">
        <Grid
          className={styles.content}
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <Screenshot />
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Typography component="h2" variant="h2">
              Highlights.
            </Typography>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Typography>
            <Switch
              onChange={toggleHighlightsDemo}
              id="highlights-toggle"
              checked={checked}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
