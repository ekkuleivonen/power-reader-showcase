import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Container,
  Hidden,
  Fade,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BeforeAfter from "./BeforeAfter";

const useStyles = makeStyles(() => ({
  section: {
    width: "100%",
    height: "95vh",
    backgroundImage:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1491309055486-24ae511c15c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",
    backgroundSize: "cover",
    backgroundPosition: "center",
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
            <Grid item xs={12} sm={12} md={7} lg={7}>
              <Typography component="h1" variant="h1">
                Read past the noise.
              </Typography>
              <Typography variant="h5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur1.
              </Typography>
              <Box my={3}>
                <Button
                  variant="outlined"
                  color="secondary"
                  size="large"
                  href="www.google.com"
                >
                  Install extension
                </Button>
              </Box>
            </Grid>
          </Fade>
          <Hidden smDown>
            <Grid item>
              <BeforeAfter />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </Box>
  );
}
