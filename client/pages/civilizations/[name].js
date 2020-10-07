import React, { useState } from "react";
import PropTypes from "prop-types";
import MainTemplate from "../../src/templates/MainTemplate";
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
import TechIcon from "../../src/techs/TechIcon";
import TechsList from "../../src/techs/TechsList";
import UnitsList from "../../src/units/UnitsList";
import CivCard from "../../src/civilizations/CivCard";
import ButtonLink from "../../src/navigation/ButtonLink";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
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

  console.log(enabled.units);

  const firstLine = civ.help_text.split("\n")[0];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setState({ ...state, [name]: value });
  };

  return (
    <MainTemplate>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Link href="/civilizations">
              <Button
                variant="contained"
                color="primary"
                className={classes.returnButton}
              >
                all civilizations
              </Button>
            </Link>

            <Card>
              <CardContent>
                <Typography variant="h2">{civ.name}</Typography>
                <Typography
                  variant="body1"
                  dangerouslySetInnerHTML={{
                    __html: civ.help_text,
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={8} className={classes.returnButton}>
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
          </Grid>
        </Grid>
      </Container>
    </MainTemplate>
  );
};

civilizations.propTypes = {};

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:4000/civilizations");
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

  const res = await fetch(`http://localhost:4000/civilizations/${name}`);
  const data = await res.json();

  return {
    props: {
      civilization: data,
    },
  };
}

export default civilizations;
