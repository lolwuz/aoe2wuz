import { createMuiTheme } from "@material-ui/core/styles";
import {
  blue,
  deepOrange,
  orange,
  red,
  yellow,
} from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: deepOrange,
    secondary: blue,
    background: {
      default: "rgb(240, 240, 240)",
      paper: "rgb(255, 255, 255)",
    },
  },
  shadows: new Array(25).fill("none"),
  shape: {
    borderRadius: 0,
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
