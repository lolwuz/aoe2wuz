import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Container,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const Navigation = ({ handleToggle, open }) => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("md"));
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        {!desktop && (
          <IconButton onClick={() => handleToggle()} color="inherit">
            <MenuIcon />
          </IconButton>
        )}

        <Typography variant="h6">AGE 2 DASHBOARD</Typography>
      </Toolbar>
    </AppBar>
  );
};

Navigation.propTypes = {};

export default Navigation;
