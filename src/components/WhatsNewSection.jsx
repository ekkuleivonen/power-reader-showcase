import React from "react";
import { Box, Grid, Typography, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Screenshot from "./Screenshot";

const useStyles = makeStyles(() => ({
  section: {
    width: "100%",
    overflowX: "hidden",
  },
}));

export default function WhatsNewSection() {
  const styles = useStyles();
  return (
    <Box className={styles.section} component="section" py={10} id="whats-new">
      <Container maxWidth="lg">
        <Grid
          className={styles.content}
          container
          alignItems="center"
          justifyContent="space-between"
          direction="row-reverse"
          spacing={5}
        >
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <Screenshot imgName="whats-next" />
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Typography component="h2" variant="h2">
              Power-reader beta in Chrome store
            </Typography>
            <Typography variant="h6">
              After a week of nervously biting my nails, a beta version of the
              extension finally passed Google's security checks and is now
              available for early testing in the Chrome store. Next iteration is
              already under the press, and will be released in the coming weeks.
            </Typography>
            <Box my={3}>
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                href="https://chrome.google.com/webstore/detail/power-reader/nbcahfbfaadblegckfjhhlhemhahnpbc"
                target="_blank"
              >
                Try out the beta version
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
