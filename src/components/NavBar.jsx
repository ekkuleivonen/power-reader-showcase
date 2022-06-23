import React from "react";
import { Container, Paper } from "@material-ui/core";
import { useStyles } from "../Styles";

export default function NavBar() {
  const styles = useStyles();
  return (
    <Paper component="header" className={styles.header}>
      <Container>
        <h3>Logo</h3>
      </Container>
    </Paper>
  );
}
