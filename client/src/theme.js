import { createMuiTheme } from "@material-ui/core/styles";
import {
  amber,
  blue,
  blueGrey,
  deepOrange,
  lightBlue,
  orange,
  red,
  yellow,
} from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: red,
    secondary: lightBlue,
  },
  shape: {
    borderRadius: 10,
  },
  spacing: 8,
  shadows: new Array(25).fill("0px 0px 20px -12px rgba(0,0,0,0.4)"),
  typography: {
    fontFamily: "Source Sans Pro, sans-serif",
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
  },
});

export default theme;
