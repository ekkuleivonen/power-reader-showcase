import React, { useState } from "react";
import {
  Link,
  AppBar,
  Toolbar,
  Container,
  Avatar,
  Hidden,
  IconButton,
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  navLogo: {
    marginRight: "auto",
    color: "orange",
    backgroundColor: "black",
  },
  navigationLink: {
    marginRight: "1.75em",
    fontSize: "1em",
    fontWeight: "500",
  },
  navigationLinkMobile: {
    marginRight: "1.75em",
    fontSize: "1.5em",
    marginBottom: "0.5em",
    fontWeight: "500",
  },
}));

const navigationLinks = [
  { name: "Reader mode", href: "www.google.com/1" },
  { name: "Highlights", href: "www.google.com/2" },
  { name: "What's new", href: "www.google.com/3" },
  { name: "Contribute", href: "www.google.com/4" },
];

export default function NavBar() {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky" color="default" component="header">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Avatar className={styles.navLogo}>P</Avatar>
          <Hidden xsDown>
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                className={styles.navigationLink}
                href={link.href}
                color="textPrimary"
                variant="button"
                underline="none"
              >
                {link.name}
              </Link>
            ))}
          </Hidden>
          <Hidden smUp>
            <IconButton>
              <MenuIcon onClick={() => setOpen(true)} />
            </IconButton>
          </Hidden>
        </Toolbar>
      </Container>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div>
          <IconButton>
            <ChevronRightIcon onClick={() => setOpen(false)} />
          </IconButton>
        </div>
        <Divider />
        <List>
          {navigationLinks.map((link) => (
            <ListItem key={link.href}>
              <Link
                className={styles.navigationLinkMobile}
                href={link.href}
                color="textPrimary"
                variant="button"
                underline="none"
              >
                {link.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
}
