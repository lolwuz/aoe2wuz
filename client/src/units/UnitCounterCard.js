import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import UnitIcon from "./UnitIcon";

const useStyles = makeStyles((theme) => ({
  title: { marginBottom: theme.spacing(1.5) },
}));

const UnitCounterCard = ({ counters }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" className={classes.title}>
          Counters
        </Typography>

        {counters.map((unit) => (
          <UnitIcon unit={unit} />
        ))}
      </CardContent>
    </Card>
  );
};

UnitCounterCard.propTypes = {};

export default UnitCounterCard;
