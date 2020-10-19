import React from "react";
import PropTypes from "prop-types";
import TechIcon from "./TechIcon";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { API_URL } from "../constants";
import SearchField from "../navigation/SearchField";

const useStyles = makeStyles((theme) => ({
  techList: {
    marginTop: theme.spacing(1),
  },
  cardMedia: {
    height: 50,
    width: 50,
  },
}));

const TechsList = ({ techs }) => {
  const classes = useStyles();

  return (
    <div className={classes.techList}>
      <Grid container spacing={3}>
        {techs.map((tech) => (
          <Grid item xs={12} sm={6}>
            <Card>
              <Grid container>
                <Grid item xs={6}>
                  <CardContent>
                    <Avatar
                      src={`${API_URL}images/Techs/${tech.ID}.png`}
                      variant="rounded"
                      className={classes.cardMedia}
                    />
                  </CardContent>
                </Grid>
                <Grid item xs={6}>
                  <CardContent>
                    <Typography variant="h6">{tech.internal_name}</Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

TechsList.propTypes = {};

export default TechsList;
