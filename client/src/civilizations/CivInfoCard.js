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
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  selected: {
    backgroundColor: theme.palette.primary[50],
  },
  icon: {
    width: 20,
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
        <Link href={`/civilizations/${name}/builds`}>
          <ListItem button className={classes.selected}>
            <ListItemIcon>
              <img
                src="/img/Techtree.svg"
                alt="techtree-icon"
                className={classes.icon}
              />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="overline">Build Orders</Typography>}
            />
            <ListItemIcon>
              <IconButton>
                <ChevronLeftIcon />
              </IconButton>
            </ListItemIcon>
          </ListItem>
        </Link>

        <Link href={`/civilizations/${name}/units`}>
          <ListItem button>
            <ListItemText
              primary={<Typography variant="overline">units</Typography>}
            />
            <ListItemIcon>
              <IconButton>
                <ChevronLeftIcon />
              </IconButton>
            </ListItemIcon>
          </ListItem>
        </Link>

        <Link href={`/civilizations/${name}/techs`}>
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
        </Link>

        <Link href={`/civilizations/${name}/buildings`}>
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
        </Link>
      </List>
    </Card>
  );
};

CivInfoCard.propTypes = {};

export default CivInfoCard;
