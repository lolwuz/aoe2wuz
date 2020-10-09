import React from "react";
import PropTypes from "prop-types";
import TechIcon from "./UnitIcon";
import { Card, CardContent, makeStyles } from "@material-ui/core";
import UnitIcon from "./UnitIcon";

const useStyles = makeStyles((theme) => ({
  unitsList: {
    marginTop: theme.spacing(1),
  },
}));

const UnitsList = ({ units }) => {
  const classes = useStyles();

  return (
    <Card className={classes.unitsList}>
      <CardContent>
        {units.map((unit) => (
          <UnitIcon unit={unit} key={unit.ID} />
        ))}
      </CardContent>
    </Card>
  );
};

UnitsList.propTypes = {};

export default UnitsList;
