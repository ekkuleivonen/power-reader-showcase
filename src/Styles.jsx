import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((style) => ({
  heroSection: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr, 1fr",
  },
  header: {
    position: "sticky",
    top: "0",
    padding: "0.25em",
  },
  navBarContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export { useStyles };
