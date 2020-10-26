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
import ListIcon from "../navigation/ListIcon";
import Chat from "../chat/Chat";
import { useSession } from "next-auth/client";

const drawerWith = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWith,
      flexShrink: 0,
    },
    boxShadow: theme.shadows[5],
  },
  drawerPaper: {
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.background.paper
        : theme.palette.background.paper,
    color: theme.palette.background.paper,
    width: drawerWith,
    height: "100%",
    overflowY: "hidden",

    [theme.breakpoints.down("md")]: {
      width: drawerWith,
      flexShrink: 0,
    },
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
    background: theme.palette.background.paper,
    marginTop: theme.spacing(3),
  },
  footer: {
    flexGrow: 0,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  footerDiv: {},
  githubIcon: {
    float: "right",
  },
  madeBy: {
    marginTop: theme.spacing(3),
  },
  listItem: {
    color:
      theme.palette.type === "dark"
        ? theme.palette.text.primary
        : theme.palette.text.primary,
  },
  navPointer: {
    top: 5,
    right: 0,
    height: 0,
    width: 0,
    borderTop: "20px solid transparent",
    borderBottom: "20px solid transparent",
    borderRight: `20px solid ${theme.palette.background.default}`,
    position: "absolute",
  },
  chatButton: {
    position: "absolute",
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.paper,
    bottom: theme.spacing(3),
    left: theme.spacing(3),
    right: theme.spacing(3),
  },
  listItemIcon: {
    width: 30,
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
        {[
          "Civilizations",
          "Units",
          "Techs",
          "Buildings",
          "Counters",
          "Techtree",
        ].map((text, index) => (
          <Link
            href={
              text === "Techtree"
                ? "/civilizations/Aztecs/techtree"
                : `/${text.toLowerCase()}`
            }
            key={index}
          >
            <ListItem button key={text}>
              <ListIcon src={`/img/${text}.svg`} alt={`${text}-icon`} />
              <ListItemText
                primary={
                  <Typography variant="subtitle1" className={classes.listItem}>
                    {text.toUpperCase()}
                  </Typography>
                }
              />

              {pathname.toLowerCase().includes(text.toLowerCase()) && (
                <div className={classes.navPointer} />
              )}
            </ListItem>
          </Link>
        ))}
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
            <Container maxWidth="lg">
              <Card>
                <CardContent>
                  <Typography variant="body2">
                    Age of Empires II DE © Microsoft Corporation. 'website-name'
                    was created under Microsoft's "Game Content Usage Rules"
                    using assets from Age of Empires II DE, and it is not
                    endorsed by or affiliated with Microsoft.
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
            </Container>
          </div>
        </footer>

        <Chat />
      </main>
    </div>
  );
};

MainTemplate.propTypes = {};

export default MainTemplate;
