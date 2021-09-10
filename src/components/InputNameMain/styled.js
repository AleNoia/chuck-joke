import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  input: {
    color: theme.palette.text.primary,
    fontSize: "18pt",
    borderColor: "#fff",
    padding: "16pt 8pt",
    borderRadius: theme.shape.borderRadius,
    border: "none",
    "&:focus": {
      boxShadow: " 0 0 0 0",
      outline: "0",
    },
  },
  button: {
    display: "none",
  },
}));
