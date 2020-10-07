import React from "react";
import PropTypes from "prop-types";
import TechIcon from "./UnitIcon";
import { makeStyles } from "@material-ui/core";
import UnitIcon from "./UnitIcon";

const useStyles = makeStyles((theme) => ({
  unitsList: {
    marginTop: theme.spacing(1),
  },
}));

const UnitsList = ({ units }) => {
  const classes = useStyles();

  return (
    <div className={classes.unitsList}>
      {units.map((unit) => (
        <UnitIcon unit={unit} key={unit.ID} />
      ))}
    </div>
  );
};

UnitsList.propTypes = {};

export default UnitsList;
