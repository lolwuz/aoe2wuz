import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import UnitIcon from "./UnitIcon";
import UnitCard from "./UnitCard";

const useStyles = makeStyles((theme) => ({
  title: { marginBottom: theme.spacing(1.5) },
}));

const UnitCounterCard = ({ counters }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h6">This unit is weak against:</Typography>
      </Grid>
      {counters.map((unit) => (
        <Grid item xs={6}>
          <UnitCard unit={unit} white />
        </Grid>
      ))}
    </Grid>
  );
};

UnitCounterCard.propTypes = {};

export default UnitCounterCard;
