import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Container,
  Fade,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  section: {
    width: "100%",
    minHeight: "95vh",
    backgroundImage:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1491309055486-24ae511c15c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
  },
  container: {
    height: "100%",
  },
  content: {
    height: "100%",
    position: "relative",
    zIndex: "10",
  },
}));

export default function HeroSection() {
  const styles = useStyles();
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    setShouldShow(true);
  }, []);

  return (
    <Box className={styles.section} component="section">
      <Container className={styles.container} maxWidth="lg">
        <Grid
          className={styles.content}
          container
          alignItems="center"
          justifyContent="space-between"
        >
          <Fade in={shouldShow}>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Typography component="h1" variant="h1">
                Read through the noise.
              </Typography>
              <Typography variant="h5">
                Filter out the irrelevant from websites and consume written
                content at twice the speed. Power reader is a chrome extension
                that introduces a safari-like reader mode to your browser, and
                highlights each paragraph for a better reading experience.
              </Typography>
              <Box my={3}>
                <Button
                  variant="outlined"
                  color="secondary"
                  size="large"
                  href="https://chrome.google.com/webstore/detail/power-reader/nbcahfbfaadblegckfjhhlhemhahnpbc"
                  target="_blank"
                >
                  Install extension
                </Button>
              </Box>
            </Grid>
          </Fade>
        </Grid>
      </Container>
    </Box>
  );
}
