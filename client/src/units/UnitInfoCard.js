import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { API_URL } from "../constants";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const useStyles = makeStyles((theme) => ({
  infoCard: {},
  cardMedia: {
    height: 250,
  },
}));

const UnitInfoCard = ({ unit }) => {
  const classes = useStyles();
  const {
    ID,
    name,
    type,
    HP,
    Range,
    MinRange,
    Speed,
    TrainTime,
    ReloadTime,
  } = unit;

  return (
    <Card className={classes.infoCard}>
      <CardMedia
        image={`${API_URL}images/units/${ID}.png`}
        className={classes.cardMedia}
      />

      <Divider />

      <List>
        <ListItem button>
          <ListItemText
            primary={<Typography variant="h4">{name}</Typography>}
            secondary={<Typography variant="subtitle2">{type} </Typography>}
          />
        </ListItem>

        <Divider />

        <ListItem button>
          <ListItemIcon>
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="overline">
                <b>HP</b>: {`${HP}`}
              </Typography>
            }
          />
        </ListItem>

        <Divider />

        <ListItem button>
          <ListItemIcon>
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="overline">
                <b>RANGE</b>: {`${Range} (start), ${MinRange} (minimum)`}
              </Typography>
            }
          />
        </ListItem>

        <Divider />

        <ListItem button>
          <ListItemIcon>
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="overline">
                <b>SPEED: </b>
                {Speed}
              </Typography>
            }
          />
        </ListItem>

        <Divider />

        <ListItem button>
          <ListItemIcon>
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="overline">
                <b>RELOAD TIME: </b>
                {ReloadTime} seconds
              </Typography>
            }
          />
        </ListItem>

        <Divider />

        <ListItem button>
          <ListItemIcon>
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
          </ListItemIcon>

          <ListItemText
            primary={
              <Typography variant="overline">
                <b>TRAINING TIME: </b>
                {ReloadTime} seconds
              </Typography>
            }
          />
        </ListItem>
      </List>
    </Card>
  );
};

UnitInfoCard.propTypes = {};

export default UnitInfoCard;
