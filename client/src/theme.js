import { createMuiTheme } from "@material-ui/core/styles";
import {
  orange,
  blue,
  deepOrange,
  indigo,
  grey,
} from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: indigo,
    secondary: orange,
  },
  shape: {
    borderRadius: 10,
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
    primary: indigo,
    secondary: orange,
  },
  shape: {
    borderRadius: 10,
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
