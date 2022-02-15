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
import { API_URL } from "../../constants";
import GoogleAds from "react-google-ads";

const useStyles = makeStyles((theme) => ({
  card: {
    minHeight: 140,
    transition: "0.3s",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: theme.shadows[10],
    },
    "&:focussed": {
      transform: "translateY(-4px)",
      boxShadow: theme.shadows[10],
    },
  },
  cardMedia: {
    height: "100%",
  },
  title: {
    color: theme.palette.primary.main,
  },
}));

const CivCard = ({ civ }) => {
  const [collapsed, setCollapsed] = useState(false);
  const classes = useStyles();
  const { name, help_text } = civ;

  const firstLine = help_text.split("\n")[0];

  return (
    <Card className={classes.card}>
      <Link href={`/civilizations/${name}`}>
        <CardActionArea>
          <Grid container>
            <Grid item sm={5} md={4}>
              <CardContent>
                <img
                  src={`${API_URL}images/Civs/${name.toLowerCase()}.png`}
                  className={classes.cardMedia}
                />
              </CardContent>
            </Grid>
            <Grid item sm={7} md={8}>
              <CardContent>
                <Typography variant="h6" className={classes.title}>
                  {name}
                </Typography>

                <Typography
                  variant="body1"
                  dangerouslySetInnerHTML={{
                    __html: firstLine,
                  }}
                />
              </CardContent>
            </Grid>
          </Grid>
        </CardActionArea>
      </Link>
    </Card>
  );
};

CivCard.propTypes = {};

export default CivCard;
