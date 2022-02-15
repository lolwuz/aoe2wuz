import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const MAP_NAMES = {
  "29": "Arena",
};

const useStyles = makeStyles((theme) => ({
  container: {
    border: `solid ${theme.palette.secondary.light} 1px`,
  },
  cardMedia: {
    height: "100%",
    width: "100%",
  },
}));

export default function MapInfo({ map_size, map_type }) {
  const classes = useStyles();
  const map_name = MAP_NAMES[map_type] ? MAP_NAMES[map_type] : "unknown";

  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item xs={4}>
          <CardMedia image="/img/map.jpg" className={classes.cardMedia} />
        </Grid>

        <Grid item xs={8}>
          <CardContent>
            <Typography variant="body1">{map_name}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}
