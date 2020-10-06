import React from "react";
import PropTypes from "prop-types";
import MainTemplate from "../src/templates/MainTemplate";
import { Container, Grid } from "@material-ui/core";
import CivCard from "../src/civilizations/CivCard";

const civilizations = ({ civilizations }) => {
  return (
    <MainTemplate>
      <Container>
        <Grid container spacing={3}>
          {civilizations.map((civ) => (
            <Grid item xs={12} sm={6} md={4}>
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
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("http://localhost:4000/civilizations");
  const data = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      civilizations: data.data,
    },
  };
}

export default civilizations;
