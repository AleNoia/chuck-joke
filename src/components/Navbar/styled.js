import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& a": {
      textDecoration: "none",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  groupStart: {
    flexGrow: 1,
    marginLeft: "16pt",
  },
  icon: {
    marginRight: "6pt",
    color: "#fff",
  },
}));
