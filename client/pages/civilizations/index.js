import React, { useState } from "react";
import PropTypes from "prop-types";
import MainTemplate from "../../src/templates/MainTemplate";
import {
  Container,
  Grid,
  InputBase,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import CivCard from "../../src/civilizations/CivCard";
import { API_URL } from "../../src/constants";
import SearchField from "../../src/navigation/SearchField";

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    marginTop: -theme.spacing(3),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    borderRadius: 0,
  },
  titleGrid: {
    textAlign: "center",
  },
  title: {
    fontWeight: 600,
  },
}));

const civilizations = ({ civilizations }) => {
  const classes = useStyles();
  const [state, setState] = useState({ search: "" });

  const handleChange = (event) => {
    const { value } = event.target;

    setState({ ...state, search: value });
  };

  return (
    <MainTemplate>
      <Container maxWidth="xl" className={classes.searchContainer}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8} md={6}></Grid>

          <Grid item xs={12} sm={4} md={6} className={classes.titleGrid}>
            <SearchField
              name="search"
              value={state.search}
              onChange={handleChange}
              label="Search civs..."
            />
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xl" className={classes.itemsContainer}>
        <Grid container spacing={3}>
          {civilizations
            .filter((civ) =>
              civ.name.toUpperCase().includes(state.search.toUpperCase())
            )
            .map((civ) => (
              <Grid item xs={12} md={6} lg={4} key={civ.id}>
                <CivCard civ={civ} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </MainTemplate>
  );
};

civilizations.propTypes = {};

export async function getStaticProps() {
  const res = await fetch(`${API_URL}civilizations`);
  const civilizations = await res.json();

  return {
    props: {
      civilizations,
    },
  };
}

export default civilizations;
