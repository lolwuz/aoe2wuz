import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Button,
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
import { GlobalSearch } from "./GlobalSearch";
import Link from "next/link";
import { useSession, getSession } from "next-auth/client";
import UserAvatar from "./UserAvatar";

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.primary.main
        : theme.palette.primary.main,
  },
  logo: {
    height: 45,
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  buttons: {
    flexGrow: 1,
    textAlign: "right",
  },
  globalSearch: {
    position: "absolute",
    left: 200,
    [theme.breakpoints.down("sm")]: {
      left: 80,
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  button: {
    color: theme.palette.background.paper,
  },
  buttonMatches: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(7),
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
  const [session, loading] = useSession();
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("md"));
  const classes = useStyles();

  console.log(session);

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        {!desktop && (
          <IconButton onClick={() => handleToggle()} color="inherit">
            <MenuIcon />
          </IconButton>
        )}

        <Link href="/">
          <Typography variant="h6" className={classes.title}>
            aoe2dash.com
          </Typography>
        </Link>

        <div className={classes.globalSearch}>
          <GlobalSearch />
        </div>

        <div className={classes.buttons}>
          {session && (
            <>
              <Link href="/leaderboards">
                <Button size="large" className={classes.button}>
                  leaderboards
                </Button>
              </Link>

              <Link href="/matches">
                <Button
                  size="large"
                  variant="contained"
                  className={classes.buttonMatches}
                  startIcon={desktop && <GamesIcon />}
                >
                  {desktop ? "My Matches" : <GamesIcon />}
                </Button>
              </Link>
            </>
          )}

          {!session ? (
            <Link href="/api/auth/signin">
              <Button
                size="large"
                variant="outlined"
                className={classes.buttonRegister}
                startIcon={desktop && <PersonIcon />}
              >
                {desktop ? "Register" : <PersonIcon />}
              </Button>
            </Link>
          ) : (
            <UserAvatar user={session.user} />
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

Navigation.propTypes = {};

export default Navigation;
