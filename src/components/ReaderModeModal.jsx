import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  modal: {
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: "0",
    zIndex: "1000000",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
}));

export default function ReaderModeModal({ props: { textContent } }) {
  const styles = useStyles();
  return (
    <div className={styles.modal}>
      <Container maxWidth="md">
        {textContent.map((text) => (
          <Typography variant={text.tagName.toLowerCase()}>
            {text.innerHTML}
          </Typography>
        ))}
      </Container>
    </div>
  );
}
