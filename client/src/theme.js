import { createMuiTheme } from "@material-ui/core/styles";
import { red, orange, blue } from "@material-ui/core/colors";

let shadows = new Array(25).fill("0px 10px 40px -12px rgba(0,0,0,0.2)");

shadows[0] = "none";
shadows[24] = "0px 10px 40px -12px rgba(0,0,0,0.4)";

let primaryBlue = blue;

primaryBlue.main = "#222a57";
primaryBlue.dark = "#222a40";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: blue,
    secondary: orange,
  },
  shape: {
    borderRadius: 10,
  },
  spacing: 8,
  shadows: shadows,
  typography: {
    fontFamily: "Source Sans Pro, sans-serif",
    h1: { fontWeight: 600 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 600,
    },
    overline: {
      fontSize: 16,
    },
  },
  overrides: {
    MuiDrawer: {
      paperAnchorDockedLeft: {
        borderWidth: 0,
      },
    },
    MuiCardActionArea: {
      focusHighlight: {
        backgroundColor: "white",
      },
    },
  },
});

export default theme;
