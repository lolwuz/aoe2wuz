import { createMuiTheme } from "@material-ui/core/styles";
import {
  orange,
  indigo,
  blue,
  yellow,
  blueGrey,
} from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: blueGrey,
    secondary: indigo,
    background: {
      default: blueGrey[50],
      paper: "#FFFFFF",
    },
  },
  shape: {
    borderRadius: 0,
  },
  spacing: 8,
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
  shadows: new Array(25).fill("none"),
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

// Create a theme instance.
const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: blueGrey,
    secondary: indigo,
  },
  shape: {
    borderRadius: 0,
  },
  spacing: 8,
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
  shadows: new Array(25).fill("none"),
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
