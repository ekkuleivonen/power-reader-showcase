import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Paper } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  backdrop: {
    width: "100vw",
    paddingBottom: "50px",
    position: "absolute",
    top: "0",
    zIndex: "1000000",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  paper: {
    padding: "4em",
    marginTop: "2em",
    overflow: "scroll",
  },
}));

export default function ReaderModeDemo({
  props: { textContent, toggleReaderModeDemo },
}) {
  const styles = useStyles();

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    window.addEventListener("scroll", stopScrollOnEnd);
    window.addEventListener("keydown", () => toggleReaderModeDemo());
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("scroll", stopScrollOnEnd);
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("click", handleClick);
    };
  });

  const handleKeydown = () => {
    const readerModeToggle = document.getElementById("reader-mode-toggle");
    readerModeToggle.checked = false;
    toggleReaderModeDemo();
  };

  const handleClick = (e) => {
    const backdrop = document.getElementById("backdrop");
    if (e.target !== backdrop) return;
    const readerModeToggle = document.getElementById("reader-mode-toggle");
    console.log(readerModeToggle);
    toggleReaderModeDemo();
  };

  const stopScrollOnEnd = (e) => {
    const paper = document.getElementById("paper");
    const paperEnd =
      paper.offsetHeight + paper.offsetTop - window.innerHeight + 50;
    if (window.scrollY < paperEnd) return;
    return window.scroll(0, paperEnd);
  };

  return (
    <div className={styles.backdrop} id="backdrop">
      <Container maxWidth="md">
        <Paper className={styles.paper} elevation={16} id="paper">
          {textContent.map((text) => (
            <Typography variant={text.tagName.toLowerCase()}>
              {text.innerHTML}
            </Typography>
          ))}
        </Paper>
      </Container>
    </div>
  );
}
