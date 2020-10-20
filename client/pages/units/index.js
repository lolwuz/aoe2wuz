import React from "react";
import PropTypes from "prop-types";
import MainTemplate from "../../src/templates/MainTemplate";
import UnitCard from "../../src/units/UnitCard";
import { API_URL } from "../../src/constants";
import { Container, Grid, Typography } from "@material-ui/core";
import Head from "next/head";

const index = ({ data }) => {
  const { units, types } = data;

  const list = types.map((type) => (
    <>
      <Grid item xs={12}>
        <Typography variant="h6">{type.toUpperCase()}</Typography>
      </Grid>

      {units
        .filter((unit) => unit.type === type)
        .map((unit) => (
          <Grid item xs={12} sm={6} md={4} key={unit.ID}>
            <UnitCard unit={unit} />
          </Grid>
        ))}
    </>
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
          {list}
        </Grid>
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
