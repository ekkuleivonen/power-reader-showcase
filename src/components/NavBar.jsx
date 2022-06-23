import React from "react";
import { Container, Paper, Link } from "@material-ui/core";
import { useStyles } from "../Styles";

export default function NavBar() {
  const styles = useStyles();
  return (
    <Paper component="header" className={styles.header}>
      <Container className={styles.navBarContainer}>
        <h3>Logo</h3>
        <div>
          <Link>Hello</Link>
          <Link>Hello</Link>
          <Link>Hello</Link>
        </div>
      </Container>
    </Paper>
  );
}
