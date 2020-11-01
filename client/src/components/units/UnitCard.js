import React from "react";
import PropTypes from "prop-types";
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { API_URL } from "../../constants";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.background.default,
    transition: "0.3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
    "&:focussed": {
      transform: "scale(1.05)",
    },
  },
  cardWhite: {
    backgroundColor: theme.palette.background.paper,
    transition: "0.3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
    "&:focussed": {
      transform: "scale(1.05)",
    },
  },
  cardMedia: {
    width: "100%",
    height: "100%",
  },
  cardAvatar: {
    height: "100%",
  },
}));

const UnitCard = ({ unit, white }) => {
  const classes = useStyles();
  const { ID, name, internal_name, type } = unit;

  return (
    <Card className={white ? classes.cardWhite : classes.card}>
      <Link href={`/units/${ID}`}>
        <CardActionArea>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <CardContent>
                <Avatar
                  alt={internal_name}
                  src={`${API_URL}images/units/${ID}.png`}
                  variant="rounded"
                  className={classes.cardAvatar}
                />
              </CardContent>
            </Grid>

            <Grid item xs={9}>
              <CardContent>
                <Typography variant="h6">{name}</Typography>

                <Typography variant="subtitle2">{type}</Typography>
              </CardContent>
            </Grid>
          </Grid>
        </CardActionArea>
      </Link>
    </Card>
  );
};

UnitCard.propTypes = {};

export default UnitCard;
