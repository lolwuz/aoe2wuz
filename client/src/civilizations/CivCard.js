import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { API_URL } from "../constants";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    height: 100,
  },
}));

const CivCard = ({ civ }) => {
  const classes = useStyles();
  const { name, ct } = civ;

  return (
    <Card variant="outlined">
      <CardActionArea>
        <Grid container>
          <Grid item xs={3}>
            <CardMedia
              image={`${API_URL}images/CivIcon-${name}.webp`}
              className={classes.cardMedia}
            />
          </Grid>

          <Grid item xs={9}>
            <CardContent>
              <Typography variant="h6">{name}</Typography>

              <Typography variant="body1">{ct}</Typography>
            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
};

CivCard.propTypes = {
  civ: {},
};

export default CivCard;
