import React from "react";
import { API_URL } from "../../../src/constants";
import MainTemplate from "../../../src/templates/MainTemplate";
import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import techtreeLines from "../../../src/techtree";
import SearchField from "../../../src/navigation/SearchField";
import Link from "next/link";
import TechtreeItem from "../../../src/techs/TechtreeItem";

const lineHeight = 220;
const itemSize = 70;
const itemPadding = 20;
const itemTop = 25;
const paddingLeft = 140;

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    marginTop: -theme.spacing(3),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    borderRadius: 0,
  },
  techtree: {
    width: "calc(100vw - 220px)",
    overflowX: "scroll",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  line1: {
    height: lineHeight,
    width: 77 * (itemSize + itemPadding + itemPadding),
    backgroundColor: theme.palette.secondary[50],
    position: "relative",
  },
  line2: {
    height: lineHeight,
    width: 77 * (itemSize + itemPadding + itemPadding),
    backgroundColor: theme.palette.background.default,
    position: "relative",
  },
  line3: {
    height: lineHeight,
    width: 77 * (itemSize + itemPadding + itemPadding),
    backgroundColor: theme.palette.secondary[50],
    position: "relative",
  },
  line4: {
    height: lineHeight,
    width: 77 * (itemSize + itemPadding + itemPadding),
    backgroundColor: theme.palette.background.default,
    position: "relative",
  },
  ageIcon: {
    margin: 50,
  },
}));

function techtree({ civilization }) {
  const theme = useTheme();
  const classes = useStyles();
  const { civ, unique, disabled, enabled } = civilization;

  return (
    <MainTemplate>
      <Container maxWidth="xl" className={classes.searchContainer}>
        <Grid container spacing={3}>
          <Grid item xs={4} sm={6} md={8}>
            <Link href={`/civilizations/${civ.name}`}>
              <Button variant="contained" color="primary" size="large">
                return
              </Button>
            </Link>
          </Grid>

          <Grid item xs={8} sm={6} md={4}>
            <SearchField name="search" label="Search civs..." />
          </Grid>
        </Grid>
      </Container>

      <div className={classes.techtree}>
        <div className={classes.line1}>
          <img
            src={`${API_URL}images/Ages/dark_age_de.png`}
            alt="dark-age-icon"
            className={classes.ageIcon}
          />

          {techtreeLines.line1.map((item, index) => {
            if (!item) return null;

            return (
              <div
                style={{
                  position: "absolute",
                  top: itemTop,
                  height: itemSize,
                  width: itemSize,
                  left: (index / 2) * (itemSize + itemPadding) + paddingLeft,
                  backgroundColor: theme.palette.primary.dark,
                }}
              >
                <TechtreeItem item={item} />
              </div>
            );
          })}

          {techtreeLines.line2.map((item, index) => {
            if (!item) return null;

            return (
              <div
                style={{
                  position: "absolute",
                  top: itemTop * 2 + itemSize,
                  height: itemSize,
                  width: itemSize,
                  left: (index / 2) * (itemSize + itemPadding) + paddingLeft,
                  backgroundColor: theme.palette.primary.dark,
                }}
              >
                <TechtreeItem item={item} />
              </div>
            );
          })}
        </div>
        <div className={classes.line2}>
          <img
            src={`${API_URL}images/Ages/feudal_age_de.png`}
            alt="feadal-age-icon"
            className={classes.ageIcon}
          />
          {techtreeLines.line3.map((item, index) => {
            if (!item) return null;

            return (
              <div
                style={{
                  position: "absolute",
                  top: itemTop,
                  height: itemSize,
                  width: itemSize,
                  left: (index / 2) * (itemSize + itemPadding) + paddingLeft,
                  backgroundColor: theme.palette.primary.dark,
                }}
              >
                <TechtreeItem item={item} />
              </div>
            );
          })}

          {techtreeLines.line4.map((item, index) => {
            if (!item) return null;

            return (
              <div
                style={{
                  position: "absolute",
                  top: itemTop * 2 + itemSize,
                  height: itemSize,
                  width: itemSize,
                  left: (index / 2) * (itemSize + itemPadding) + paddingLeft,
                  backgroundColor: theme.palette.primary.dark,
                }}
              >
                <TechtreeItem item={item} />
              </div>
            );
          })}
        </div>
        <div className={classes.line3}>
          <img
            src={`${API_URL}images/Ages/castle_age_de.png`}
            alt="castle-age-icon"
            className={classes.ageIcon}
          />

          {techtreeLines.line5.map((item, index) => {
            if (!item) return null;

            return (
              <div
                style={{
                  position: "absolute",
                  top: itemTop,
                  height: itemSize,
                  width: itemSize,
                  left: (index / 2) * (itemSize + itemPadding) + paddingLeft,
                  backgroundColor: theme.palette.primary.dark,
                }}
              >
                <TechtreeItem item={item} />
              </div>
            );
          })}

          {techtreeLines.line6.map((item, index) => {
            if (!item) return null;

            return (
              <div
                style={{
                  position: "absolute",
                  top: itemTop * 2 + itemSize,
                  height: itemSize,
                  width: itemSize,
                  left: (index / 2) * (itemSize + itemPadding) + paddingLeft,
                  backgroundColor: theme.palette.primary.dark,
                }}
              >
                <TechtreeItem item={item} />
              </div>
            );
          })}
        </div>
        <div className={classes.line4}>
          <img
            src={`${API_URL}images/Ages/imperial_age_de.png`}
            alt="imperial-age-icon"
            className={classes.ageIcon}
          />

          {techtreeLines.line7.map((item, index) => {
            if (!item) return null;

            return (
              <div
                style={{
                  position: "absolute",
                  top: itemTop,
                  height: itemSize,
                  width: itemSize,
                  left: (index / 2) * (itemSize + itemPadding) + paddingLeft,
                  backgroundColor: theme.palette.primary.dark,
                }}
              >
                <TechtreeItem item={item} />
              </div>
            );
          })}

          {techtreeLines.line8.map((item, index) => {
            if (!item) return null;

            return (
              <div
                style={{
                  position: "absolute",
                  top: itemTop * 2 + itemSize,
                  height: itemSize,
                  width: itemSize,
                  left: (index / 2) * (itemSize + itemPadding) + paddingLeft,
                  backgroundColor: theme.palette.primary.dark,
                }}
              >
                <TechtreeItem item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </MainTemplate>
  );
}

techtree.propTypes = {};

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(`${API_URL}civilizations`);
  const data = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = data.map((civ) => ({
    params: { name: civ.name },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { name } = params;

  const res = await fetch(`${API_URL}civilizations/${name}`);
  const data = await res.json();

  return {
    props: {
      civilization: data,
    },
  };
}

export default techtree;
