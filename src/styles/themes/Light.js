import { shade, setLightness } from "polished";
import { createTheme } from "@material-ui/core";

const primary = "#52B8BC";
const secundary = "#F5C174";

const text = "#333333";
const textMedium = "#7d7d7d";
const textLight = "#fff";

export default createTheme({
  type: "light",
  palette: {
    primary: {
      light: setLightness(0.9, `${primary}`),
      main: `${primary}`,
      dark: shade(0.15, `${primary}`),
      contrastText: { textLight },
    },
    secondary: {
      light: setLightness(0.9, `${secundary}`),
      main: `${secundary}`,
      dark: shade(0.15, `${secundary}`),
      contrastText: { text },
    },
  },
  text: {
    primary: { text },
    secondary: { textLight },
    disabled: { textMedium },
  },
});
