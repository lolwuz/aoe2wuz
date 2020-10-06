import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Container,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginBottom: theme.spacing(3),
  },
}));

const Navigation = (props) => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Container>
          <Typography variant="h6">Civs</Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

Navigation.propTypes = {};

export default Navigation;
