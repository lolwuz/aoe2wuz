import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardActionArea,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ArrowDropUp from "@material-ui/icons/TrendingUp";
import ArrowDropDown from "@material-ui/icons/TrendingDown";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(1),
  },
  title: {
    padding: theme.spacing(2),
  },
  slot: {
    width: 40,
    height: "100%",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.paper,
    fontWeight: 600,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    textAlign: "center",
  },
  arrowUp: {
    color: "green",
  },
  arrowDown: {
    color: "red",
  },
}));

const MatchPlayer = ({ player }) => {
  const classes = useStyles();
  const { name, slot, rating, won, steam_id } = player;

  return (
    <Link href={`/matches?steam_id=${steam_id}`}>
      <Card variant="outlined" className={classes.card}>
        <CardActionArea>
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <div className={classes.slot}>
                <div>{slot}</div>
              </div>
            </Grid>
            <Grid item xs={10}>
              <div className={classes.title}>
                <Typography variant="body1" className={classes.playerLink}>
                  {name}
                </Typography>

                <Typography variant="body2">
                  <b>RATING</b> {rating}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default MatchPlayer;
