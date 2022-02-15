import React from "react";
import PropTypes from "prop-types";
import TechIcon from "./UnitIcon";
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import UnitIcon from "./UnitIcon";
import UnitInfoCard from "./UnitInfoCard";
import UnitCard from "./UnitCard";

const useStyles = makeStyles((theme) => ({
  unitsList: {
    marginTop: theme.spacing(1),
  },
}));

const UnitsList = ({ units }) => {
  const classes = useStyles();

  return (
    <div className={classes.unitsList}>
      <Grid container spacing={2}>
        {units.map((unit) => (
          <Grid item xs={4} key={unit.ID}>
            <UnitCard unit={unit} white />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

UnitsList.propTypes = {};

export default UnitsList;
