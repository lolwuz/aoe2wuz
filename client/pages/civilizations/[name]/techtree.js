import React from "react";
import { API_URL } from "../../../src/constants";
import MainTemplate from "../../../src/templates/MainTemplate";
import {
  Avatar,
  Button,
  Chip,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
  useTheme,
} from "@material-ui/core";
import techtreeLines from "../../../src/techtree";
import SearchField from "../../../src/components/navigation/SearchField";
import Link from "next/link";
import TechtreeItem from "../../../src/components/techs/TechtreeItem";
import { Autocomplete } from "@material-ui/lab";
import { useRouter } from "next/router";
import TechtreeLayout from "../../../src/templates/TechtreeLayout";

const lineHeight = 220;
const itemSize = 70;
const itemPadding = 20;
const itemTop = 25;
const paddingLeft = 140;

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    marginTop: theme.spacing(9),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    borderRadius: 0,
  },
  techtree: {
    width: "100vw",
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

function techtree({ civilization, civilizations }) {
  const theme = useTheme();
  const classes = useStyles();
  const { civ, unique, disabled, enabled } = civilization;
  const router = useRouter();
  const { name } = router.query;

  return (
    <TechtreeLayout>
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
            <Autocomplete
              id="civs-selector"
              options={civilizations}
              getOptionLabel={(option) => option.name}
              defaultValue={civilizations.filter((civ) => civ.name === name)[0]}
              renderOption={(option) => (
                <Link href={`/civilizations/${option.name}/techtree`}>
                  <Grid container>
                    <Grid xs={2}>
                      <Avatar
                        src={`${API_URL}images/Civs/${option.name.toLowerCase()}.png`}
                      />
                    </Grid>
                    <Grid xs={10}>
                      <Typography>{option.name}</Typography>
                    </Grid>
                  </Grid>
                </Link>
              )}
              disableClearable
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="filled"
                  label="Civilization"
                  placeholder="Choose Civ"
                />
              )}
            />
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
    </TechtreeLayout>
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

  const resCivilization = await fetch(`${API_URL}civilizations/${name}`);
  const civilization = await resCivilization.json();

  const resCivilizations = await fetch(`${API_URL}civilizations`);
  const civilizations = await resCivilizations.json();

  return {
    props: {
      civilization,
      civilizations,
    },
  };
}

export default techtree;
