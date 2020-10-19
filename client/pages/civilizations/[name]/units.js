import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { API_URL } from "../../../src/constants";
import CivTemplate from "../../../src/templates/CivTemplate";
import TechsList from "../../../src/techs/TechsList";
import SearchField from "../../../src/navigation/SearchField";
import UnitsList from "../../../src/units/UnitsList";

const useStyles = makeStyles((theme) => ({}));

const units = ({ civilization }) => {
  const classes = useStyles();
  const { civ, unique, disabled, enabled } = civilization;

  return (
    <CivTemplate civilization={civilization}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SearchField label={`Search ${civ.name} units...`} />
        </Grid>
      </Grid>

      <UnitsList units={enabled.units} />
    </CivTemplate>
  );
};

units.propTypes = {};

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

export default units;
