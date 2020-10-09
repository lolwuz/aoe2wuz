import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Navigation from "../navigation/Navigation";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Link from "next/link";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useRouter } from "next/router";

const drawerWith = 160;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWith,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.background.paper,
    width: drawerWith,
    height: "100%",
    overflowY: "hidden",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      flexShrink: 0,
    },
  },
  content: {
    flexGrow: 1,
    marginTop: theme.spacing(3),
  },
  contentHeight: {
    minHeight: "75vh",
  },
  toolbar: theme.mixins.toolbar,
  navList: {
    marginTop: theme.spacing(6),
  },
  footer: {
    flexGrow: 0,
    marginTop: theme.spacing(3),
  },
  footerDiv: {},
  githubIcon: {
    float: "right",
  },
  madeBy: {
    marginTop: theme.spacing(3),
  },
  fixShadow: {
    position: "fixed",
    height: 20,
    width: drawerWith + 20,
    top: 64,
    backgroundColor: theme.palette.primary.main,
    zIndex: theme.zIndex.drawer + 2,
    maskImage:
      "radial-gradient(circle 10px at 100% 100%, transparent 0, transparent 20px, black 20px)",
  },
  fixFade: {
    position: "fixed",
    height: 34,
    width: drawerWith,
    top: 84,
    backgroundColor: theme.palette.primary.main,
    zIndex: theme.zIndex.drawer + 2,
  },
  fixBottom: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.primary.main,
    marginTop: -theme.spacing(1),
  },
  navPointer: {
    top: 5,
    right: 0,
    height: 0,
    width: 0,
    borderTop: "20px solid transparent",
    borderBottom: "20px solid transparent",
    borderRight: `20px solid rgb(240, 240, 240)`,
    position: "absolute",
  },
  chatButton: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.paper,
    "&:hover": {
      backgroundColor: theme.palette.background.paper,
    },
    position: "absolute",
    bottom: theme.spacing(3),
  },
}));

const MainTemplate = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleToggle = () => {
    setOpen(!open);
  };

  const drawer = (
    <div className={classes.drawerPaper}>
      <div className={classes.toolbar}>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
      </div>

      <List className={classes.navList}>
        {["Civilizations", "Units", "Techs", "Buildings", "Counters"].map(
          (text, index) => (
            <Link href={`/${text.toLowerCase()}`} key={index}>
              <ListItem button key={text}>
                <ListItemText
                  primary={
                    <Typography variant="subtitle1">
                      {text.toUpperCase()}
                    </Typography>
                  }
                />

                {pathname.toLowerCase().includes(text.toLowerCase()) && (
                  <div className={classes.navPointer} />
                )}
              </ListItem>
            </Link>
          )
        )}
      </List>

      <div className={classes.fixBottom}>
        <Button variant="contained" className={classes.chatButton}>
          chat
        </Button>
      </div>
    </div>
  );

  return (
    <div className={classes.root}>
      <Navigation handleToggle={handleToggle} open={open} />

      <div className={classes.fixShadow} />
      <div className={classes.fixFade} />

      <nav className={classes.drawer}>
        <Drawer
          variant="persistent"
          open={desktop ? true : open}
          transitionDuration={{}}
        >
          {drawer}
        </Drawer>
      </nav>

      <main className={classes.content}>
        {/* Enables room for toolbar */}
        <div className={classes.toolbar} />

        <div className={classes.contentHeight}>{children}</div>

        {/* footer */}
        <footer className={classes.footer}>
          <div className={classes.footerDiv}>
            <Card>
              <CardContent>
                <Typography variant="body2">
                  Age of Empires II DE © Microsoft Corporation. 'website-name'
                  was created under Microsoft's "Game Content Usage Rules" using
                  assets from Age of Empires II DE, and it is not endorsed by or
                  affiliated with Microsoft.
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={8}>
                    <Typography variant="body2" className={classes.madeBy}>
                      Made with love by{" "}
                      <a
                        target="_about:blank"
                        rel="noreferrer noopener"
                        href="https://metmarten.dev"
                      >
                        Marten Hoekstra
                      </a>
                    </Typography>
                  </Grid>

                  <Grid item xs={4}>
                    <a
                      target="_about:blank"
                      rel="noreferrer noopener"
                      href="https://github.com/lolwuz/aoe2wuz/"
                    >
                      <IconButton className={classes.githubIcon}>
                        <GitHubIcon />
                      </IconButton>
                    </a>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </div>
        </footer>
      </main>
    </div>
  );
};

MainTemplate.propTypes = {};

export default MainTemplate;
