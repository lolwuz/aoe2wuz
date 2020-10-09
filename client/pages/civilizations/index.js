import React, { useState } from "react";
import PropTypes from "prop-types";
import MainTemplate from "../../src/templates/MainTemplate";
import {
  Card,
  CardContent,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import CivCard from "../../src/civilizations/CivCard";
import { API_URL } from "../../src/constants";

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
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(1),
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
      <Container className={classes.searchContainer}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8} md={6}>
            <TextField
              variant="outlined"
              label="search"
              value={state.search}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={4} md={6} className={classes.titleGrid}>
            <Typography variant="h4" className={classes.title}>
              List of Civilizations
            </Typography>
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
