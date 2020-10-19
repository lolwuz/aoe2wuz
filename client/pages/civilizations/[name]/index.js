import React, { useState } from "react";
import PropTypes from "prop-types";
import MainTemplate from "../../../src/templates/MainTemplate";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import TechIcon from "../../../src/techs/TechIcon";
import TechsList from "../../../src/techs/TechsList";
import UnitsList from "../../../src/units/UnitsList";
import Link from "next/link";
import { API_URL } from "../../../src/constants";
import CivTemplate from "../../../src/templates/CivTemplate";

const useStyles = makeStyles((theme) => ({
  infoCard: {
    marginTop: -theme.spacing(3),
  },
  returnButton: {
    marginBottom: theme.spacing(3),
  },
  techsButton: { marginTop: theme.spacing(3), marginBottom: theme.spacing(3) },
}));

const civilizations = ({ civilization }) => {
  const { civ, unique, disabled, enabled } = civilization;
  const classes = useStyles();
  const [state, setState] = useState({
    unitSearch: "",
    techSearch: "",
    buildingSearch: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setState({ ...state, [name]: value });
  };

  return (
    <CivTemplate civilization={civilization}>
      <Grid container>
        <Grid item xs={8}>
          <Link href="/techs">
            <Button variant="contained" color="secondary">
              TECHS
            </Button>
          </Link>
        </Grid>

        <Grid item xs={4}>
          <TextField
            name="techSearch"
            variant="standard"
            margin="none"
            size="small"
            label="search techs"
            onChange={handleChange}
            value={state.techSearch}
            fullWidth
          />
        </Grid>
      </Grid>

      <TechsList
        techs={enabled.techs.filter((tech) =>
          tech.LanguageHelp.toUpperCase().includes(
            state.techSearch.toUpperCase()
          )
        )}
      />

      <Grid container className={classes.techsButton}>
        <Grid item xs={8}>
          <Link href="/units">
            <Button variant="contained" color="secondary">
              UNITS
            </Button>
          </Link>
        </Grid>

        <Grid item xs={4}>
          <TextField
            name="unitSearch"
            variant="standard"
            margin="none"
            size="small"
            label="search units"
            onChange={handleChange}
            value={state.unitSearch}
            fullWidth
          />
        </Grid>

        <UnitsList
          units={enabled.units.filter((unit) =>
            unit.LanguageHelp.toUpperCase().includes(
              state.unitSearch.toUpperCase()
            )
          )}
        />
      </Grid>
    </CivTemplate>
  );
};

civilizations.propTypes = {};

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

  console.log(data);

  return {
    props: {
      civilization: data,
    },
  };
}

export default civilizations;
