import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import MatchPlayer from "../player/MatchPlayer";
import MapInfo from "./MapInfo";

const useStyles = makeStyles((theme) => ({
  vsGrid: {
    textAlign: "center",
  },
  vsIcon: {
    height: 40,
    marginTop: theme.spacing(3),
  },
}));

const MatchCard = ({ match }) => {
  const classes = useStyles();
  const { players, match_uuid, opened, map_type, map_size } = match;

  console.log(match);

  const getTimeElapsedString = () => {
    const time_elapsed = new Date() - new Date(opened * 1000);

    const days_elapsed = time_elapsed / (1000 * 3600 * 24);
    const hours_elapsed = time_elapsed / (1000 * 3600);
    const minutes_elapsed = time_elapsed / 1000;

    if (days_elapsed > 1) return `${Math.round(days_elapsed)} days ago`;

    if (hours_elapsed > 1) return `${Math.round(hours_elapsed)} hours ago`;

    if (minutes_elapsed > 1)
      return `${Math.round(minutes_elapsed)} minutes ago`;
  };

  const teams = players
    .map((player) => {
      return player.team;
    })
    .filter((team, index, self) => {
      return self.indexOf(team) === index;
    });

  return (
    <Card style={{ height: "100%" }}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <Typography variant="h5">{getTimeElapsedString()}</Typography>
          </Grid>

          <Grid item xs={5}>
            <MapInfo map_type={map_type} map_size={map_size} />
          </Grid>

          {teams.map((team, index) => (
            <>
              <Grid key={team} item xs={5}>
                {players
                  .filter((player) => player.team === team)
                  .map((player) => (
                    <MatchPlayer player={player} />
                  ))}
              </Grid>

              {index % 2 !== 1 && (
                <Grid item xs={2} className={classes.vsGrid}>
                  <img
                    alt="vs-icon"
                    src="/img/vs.svg"
                    className={classes.vsIcon}
                  />
                </Grid>
              )}
            </>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

MatchCard.propTypes = {};

export default MatchCard;
