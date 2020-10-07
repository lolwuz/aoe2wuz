import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
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

const drawerWith = 240;

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
    width: drawerWith,
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
    marginTop: theme.spacing(3),
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
}));

const MainTemplate = ({ children }) => {
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
        {["Civilizations", "Techs", "Buildings", "Counters"].map(
          (text, index) => (
            <Link href={`/${text.toLowerCase()}`} key={index}>
              <ListItem button key={text}>
                <ListItemText primary={text.toUpperCase()} />
              </ListItem>
            </Link>
          )
        )}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <Navigation handleToggle={handleToggle} open={open} />

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
            <Container maxWidth="xl">
              <Grid container spacing={3}>
                <Grid item xs={4} />
                <Grid item xs={8}>
                  <Card>
                    <CardContent>
                      <Typography variant="body2">
                        Age of Empires II DE © Microsoft Corporation.
                        'website-name' was created under Microsoft's "Game
                        Content Usage Rules" using assets from Age of Empires II
                        DE, and it is not endorsed by or affiliated with
                        Microsoft.
                      </Typography>

                      <Grid container spacing={3}>
                        <Grid item xs={8}>
                          <Typography
                            variant="body2"
                            className={classes.madeBy}
                          >
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
                </Grid>
              </Grid>
            </Container>
          </div>
        </footer>
      </main>
    </div>
  );
};

MainTemplate.propTypes = {};

export default MainTemplate;
