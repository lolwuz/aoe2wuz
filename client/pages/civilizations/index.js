import React, { useState } from "react";
import PropTypes from "prop-types";
import MainTemplate from "../../src/templates/MainTemplate";
import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import CivCard from "../../src/civilizations/CivCard";

const useStyles = makeStyles((theme) => ({
  searchField: {
    marginBottom: theme.spacing(1.5),
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
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <TextField
              fullWidth
              variant="filled"
              label="search"
              value={state.search}
              onChange={handleChange}
              className={classes.searchField}
            />
          </Grid>

          <Grid item xs={3}>
            <FormControl variant="filled" fullWidth>
              <Select id="civilization-type-select" label="hello" value="10">
                <MenuItem value="10">Ten</MenuItem>
                <MenuItem value="20">Twenty</MenuItem>
                <MenuItem value="30">Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

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
  const res = await fetch("http://localhost:4000/civilizations");
  const civilizations = await res.json();

  return {
    props: {
      civilizations,
    },
  };
}

export default civilizations;
