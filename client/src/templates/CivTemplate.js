import React from "react";
import PropTypes from "prop-types";
import MainTemplate from "../../src/templates/MainTemplate";
import { Container, Grid, makeStyles } from "@material-ui/core";
import UnitInfoCard from "../../src/units/UnitInfoCard";
import CivCard from "../civilizations/CivCard";
import CivInfoCard from "../civilizations/CivInfoCard";

const useStyles = makeStyles((theme) => ({}));

const CivTemplate = ({ civilization, children }) => {
  const classes = useStyles();

  const { civ } = civilization;

  return (
    <MainTemplate>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={5} lg={5} xl={4}>
            <CivInfoCard civ={civ} />
          </Grid>

          <Grid item xs={12} md={7} lg={7} xl={8}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </MainTemplate>
  );
};

CivTemplate.propTypes = {};

export default CivTemplate;
