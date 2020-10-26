import React from "react";
import PropTypes from "prop-types";
import MainTemplate from "../../src/templates/MainTemplate";
import UnitCard from "../../src/units/UnitCard";
import { API_URL } from "../../src/constants";
import {
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Head from "next/head";
import { Alert } from "@material-ui/lab";
import SearchField from "../../src/navigation/SearchField";

const useStyles = makeStyles((theme) => ({
  typeCard: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(3),
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
  },
  typeTitle: {
    marginBottom: theme.spacing(3),
  },
}));

const index = ({ data }) => {
  const classes = useStyles();
  const { units, types } = data;

  const list = types.map((type) => (
    <div className={classes.typeCard}>
      <Typography variant="h6" className={classes.typeTitle}>
        {type}
      </Typography>
      <Grid container spacing={3}>
        {units
          .filter((unit) => unit.type === type)
          .map((unit) => (
            <Grid item xs={12} sm={6} md={4} key={unit.ID}>
              <UnitCard unit={unit} />
            </Grid>
          ))}
      </Grid>
    </div>
  ));

  return (
    <MainTemplate>
      <Head>
        <title>Units</title>

        <meta name="keywords" content="Units" />

        <meta name="description" content="Age of Empires 2 Units." />
      </Head>

      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} />
          <Grid item xs={12} md={6}>
            <SearchField label="Search units..." />
          </Grid>
        </Grid>

        {list}
      </Container>
    </MainTemplate>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${API_URL}units`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

index.propTypes = {};

export default index;
