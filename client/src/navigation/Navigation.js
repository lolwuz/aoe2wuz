import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Button,
  Container,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import GamesIcon from "@material-ui/icons/Games";

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    height: 45,
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    fontWeight: 600,
  },
  buttonMatches: {
    marginLeft: theme.spacing(1),
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.paper,
    "&:hover": {
      backgroundColor: theme.palette.background.paper,
    },
  },
  buttonRegister: {
    marginLeft: theme.spacing(1),
    color: theme.palette.background.paper,
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.background.paper,
    "&:hover": {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.primary.main,
    },
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

        <img src="/helmet.jpg" className={classes.logo} />

        <Typography variant="h5" className={classes.title}>
          aoe2dashboard.com
        </Typography>

        <Button
          size="large"
          variant="contained"
          className={classes.buttonMatches}
          startIcon={<GamesIcon />}
        >
          My Matches
        </Button>

        <Button
          size="large"
          variant="outlined"
          className={classes.buttonRegister}
          startIcon={<PersonIcon />}
        >
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
};

Navigation.propTypes = {};

export default Navigation;
