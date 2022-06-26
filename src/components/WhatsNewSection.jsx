import React from "react";
import { Box, Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Screenshot from "./Screenshot";

const useStyles = makeStyles(() => ({
  section: {
    width: "100%",
  },
}));

export default function WhatsNewSection() {
  const styles = useStyles();
  return (
    <Box className={styles.section} component="section" my={20} id="whats-new">
      <Container maxWidth="lg">
        <Grid
          className={styles.content}
          container
          alignItems="center"
          justifyContent="space-between"
          direction="row-reverse"
          spacing={10}
        >
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <Screenshot imgName="whats-next" />
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Typography component="h2" variant="h2">
              Power-reader beta in Chrome store
            </Typography>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
