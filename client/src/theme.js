import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {},
  shadows: Array(25).fill("none"),
  shape: {
    borderRadius: 0,
  },
});

export default theme;
