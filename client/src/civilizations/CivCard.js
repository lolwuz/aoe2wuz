import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Grid,
  makeStyles,
  Tooltip,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import { API_URL } from "../constants";
import GoogleAds from "react-google-ads";

const useStyles = makeStyles((theme) => ({
  card: {
    minHeight: 140,
  },
  cardMedia: {
    height: "100%",
  },
}));

const CivCard = ({ civ }) => {
  const [collapsed, setCollapsed] = useState(false);
  const classes = useStyles();
  const { name, help_text } = civ;

  const firstLine = help_text.split("\n")[0];

  return (
    <Card className={classes.card}>
      <Grid container>
        <GoogleAds client="" slot="" style={{ width: "100%", height: 100 }} />
        <Grid item xs={3}>
          <CardContent>
            <img
              src={`${API_URL}images/Civs/${name.toLowerCase()}.png`}
              className={classes.cardMedia}
            />
          </CardContent>
        </Grid>
        <Grid item xs={9}>
          <CardContent>
            <Typography variant="h6">{name}</Typography>

            <Typography
              variant="body1"
              dangerouslySetInnerHTML={{
                __html: firstLine,
              }}
            />
          </CardContent>
        </Grid>
      </Grid>

      <Collapse in={collapsed} collapsedHeight={0}>
        <CardContent>
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{
              __html: help_text,
            }}
          />
        </CardContent>
      </Collapse>

      <CardActions style={{ textAlign: "right" }}>
        <Button onClick={() => setCollapsed(!collapsed)} variant="outlined">
          quick info
        </Button>

        <Link href={`/civilizations/${name}`}>
          <Button variant="contained" color="primary">
            full info
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

CivCard.propTypes = {};

export default CivCard;
