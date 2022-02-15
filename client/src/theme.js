import { createMuiTheme } from "@material-ui/core/styles";
import { blue, blueGrey, red, orange } from "@material-ui/core/colors";

const shadows = [
  "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
];

// Create a theme instance.
const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: red,
    secondary: blue,
    background: {
      default: blueGrey[50],
      paper: "#FFFFFF",
    },
  },
  shadows: shadows,
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
        boxShadow: "none",
      },
    },
    MuiCardActionArea: {
      focusHighlight: {
        backgroundColor: "white",
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
    primary: red,
    secondary: red,
  },
  shadows: new Array(25).fill("none"),
  shape: {
    borderRadius: 0,
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
