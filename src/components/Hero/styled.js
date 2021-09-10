import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  sectionHero: {
    minHeight: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage:
      "linear-gradient(to right bottom, #0062a8, #106fb6, #1c7bc4, #2689d3, #2f96e1);",
  },
  containerHero: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    justifyContent: "center",
  },
  containerInput: {
    marginTop: "24pt",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardHeroFirst: {
    padding: "16pt",
    backgroundColor: theme.palette.secondary.dark,
  },
  cardHeroSecondary: {
    padding: "16pt",
    backgroundColor: theme.palette.primary.dark,
  },
}));
