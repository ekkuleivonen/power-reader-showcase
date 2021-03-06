import React from "react";
import { CodeBlock, codepen } from "react-code-blocks";
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  section: {
    width: "100%",
  },
  paper: {
    padding: "4em 2em 4em 2em",
  },
  textdiv: {
    textAlign: "center",
  },
}));

const code = `//LISTEN FOR CHANGES IN PLUGIN OPTIONS
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "sync" && changes.plugin_options?.newValue) {
    Object.assign(pluginOptions, changes.plugin_options.newValue);
    //Toggle plugins based on user's plugin options
    togglePlugins(pluginOptions);
  }
});`;

export default function ContributeSection() {
  const styles = useStyles();
  return (
    <Box className={styles.section} component="section" py={10} id="contribute">
      <Container maxWidth="md">
        <Paper elevation={8} className={styles.paper}>
          <Grid
            className={styles.content}
            container
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
            direction="column"
          >
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <CodeBlock
                text={code}
                language={"javascript"}
                showLineNumbers={true}
                theme={codepen}
                wrapLines
                customStyle={{
                  fontFamily: "monospace",
                  maxWidth: "100%",
                  boxShadow: "0px 4px 15px 0px rgba(0,0,0,0.1)",
                  marginBottom: "1em",
                }}
              />
            </Grid>
            <Grid
              item
              className={styles.textdiv}
              xs={12}
              sm={12}
              md={12}
              lg={12}
            >
              <Typography component="h2" variant="h2">
                Contribute
              </Typography>
              <Typography variant="h6">
                Aloha fellow developers! I'm looking for new contributors to
                help optimize the extension for a wider variety of websites, as
                well as develop the word highlights algorithm further. I believe
                the reader mode could do much more than convert articles. Future
                targets include mail clients, framework documentations, etc. All
                contributions are welcome!
              </Typography>
              <Box mt={3}>
                <Button
                  variant="text"
                  color="secondary"
                  size="large"
                  href="https://github.com/ekkuleivonen/power-reader"
                  target="_blank"
                >
                  View on Github
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
