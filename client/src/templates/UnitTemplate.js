import React from "react";
import PropTypes from "prop-types";
import MainTemplate from "../../src/templates/MainTemplate";
import { API_URL } from "../../src/constants";
import { Container, Grid, makeStyles } from "@material-ui/core";
import UnitInfoCard from "../components/units/UnitInfoCard";

const useStyles = makeStyles((theme) => ({}));

const UnitTemplate = ({ unit, children }) => {
  const classes = useStyles();

  return (
    <MainTemplate>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={5} lg={5} xl={4}>
            <UnitInfoCard unit={unit} />
          </Grid>

          <Grid item xs={12} md={7} lg={7} xl={8}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </MainTemplate>
  );
};

UnitTemplate.propTypes = {};

export default UnitTemplate;
