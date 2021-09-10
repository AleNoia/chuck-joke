import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    backgroundColor: theme.palette.primary.main,
    marginBottom: "16pt",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    margin: "12pt 0",
    padding: "2pt 4pt",
    width: "max-content",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.primary.dark,
  },
  pos: {
    marginTop: "16pt",
    padding: "4pt 8pt",
    width: "max-content",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.secondary.main,
  },
}));
