import { createMuiTheme } from "@material-ui/core/styles";
import {
  indigo,
  blue,
  blueGrey,
  red,
  deepOrange,
} from "@material-ui/core/colors";

// Create a theme instance.
const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: blue,
    secondary: indigo,
    background: {
      default: blueGrey[50],
      paper: "#FFFFFF",
    },
  },
  shadows: new Array(25).fill(
    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
  ),
  shape: {
    borderRadius: 10,
  },
  spacing: 8,
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: { fontWeight: 500 },
    h2: { fontWeight: 500 },
    h3: { fontWeight: 500 },
    h4: { fontWeight: 500 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
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
    MuiButton: {
      root: {
        borderRadius: 25,
      },
    },
    MuiInputAdornment: {
      positionStart: {
        color: blue[300],
      },
    },
    MuiOutlinedInput: {
      root: {},
    },
  },
});

// Create a theme instance.
const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: blue,
    secondary: indigo,
  },
  shadows: new Array(25).fill(
    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
  ),
  shape: {
    borderRadius: 10,
  },
  spacing: 8,
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: { fontWeight: 500 },
    h2: { fontWeight: 500 },
    h3: { fontWeight: 500 },
    h4: { fontWeight: 500 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
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
    MuiButton: {
      root: {
        borderRadius: 25,
      },
    },
    MuiInputAdornment: {
      positionStart: {
        color: blue[300],
      },
    },
    MuiOutlinedInput: {
      root: {},
    },
  },
});

export default lightTheme;
