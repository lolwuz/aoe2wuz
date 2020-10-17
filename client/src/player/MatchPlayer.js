import React from "react";
import PropTypes from "prop-types";
import { Card, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(1),
  },
  title: {
    padding: theme.spacing(1),
  },
  slot: {
    width: 40,
    height: 40,
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
  },
}));

const MatchPlayer = ({ player }) => {
  const classes = useStyles();
  const { name, slot } = player;

  return (
    <Card variant="outlined" className={classes.card}>
      <Grid container spacing={1}>
        <Grid item>
          <div className={classes.slot}>{slot}</div>
        </Grid>
        <Grid item>
          <div className={classes.title}>
            <Typography variant="body1">{name}</Typography>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
};

export default MatchPlayer;
