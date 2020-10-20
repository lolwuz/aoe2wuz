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
  const { players, match_uuid } = match;

  const teams = players
    .map((player) => {
      return player.team;
    })
    .filter((team, index, self) => {
      return self.indexOf(team) === index;
    });

  return (
    <Card>
      <CardContent>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Typography variant="h6">{match_uuid}</Typography>
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
