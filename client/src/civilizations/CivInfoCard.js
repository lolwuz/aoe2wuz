import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { API_URL } from "../constants";
import ChevronLeftIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles((theme) => ({
  selected: {
    backgroundColor: theme.palette.primary[50],
  },
}));

const CivInfoCard = ({ civ }) => {
  const classes = useStyles();
  const { ID, name } = civ;

  return (
    <Card className={classes.infoCard}>
      <Grid container>
        <Grid item xs={12} sm={8} md={9}>
          <CardContent>
            <Typography variant="h4">{name}</Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <div className={classes.image}>
            <img src={`${API_URL}images/civs/${name}.png`} />
          </div>
        </Grid>
      </Grid>

      <List>
        <ListItem button className={classes.selected}>
          <ListItemText
            primary={<Typography variant="overline">Build Orders</Typography>}
          />
          <ListItemIcon>
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
          </ListItemIcon>
        </ListItem>

        <ListItem button>
          <ListItemText
            primary={<Typography variant="overline">Technologies</Typography>}
          />
          <ListItemIcon>
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
          </ListItemIcon>
        </ListItem>

        <ListItem button>
          <ListItemText
            primary={<Typography variant="overline">Buildings</Typography>}
          />
          <ListItemIcon>
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
          </ListItemIcon>
        </ListItem>
      </List>
    </Card>
  );
};

CivInfoCard.propTypes = {};

export default CivInfoCard;
