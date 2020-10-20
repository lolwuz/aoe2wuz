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
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  selected: {
    backgroundColor: theme.palette.primary[50],
    border: `solid 4px ${theme.palette.background.paper}`,
  },
  icon: {
    width: 20,
  },
}));

const CivInfoCard = ({ civ }) => {
  const classes = useStyles();
  const { ID, name } = civ;
  const router = useRouter();

  const isSelected = (name) => {
    const routeUpper = router.route.toUpperCase();
    const nameUpper = name.toUpperCase();

    if (routeUpper.includes(nameUpper)) return classes.selected;

    return "";
  };

  return (
    <Card className={classes.infoCard}>
      <Link href={`/civilizations/${name}`}>
        <Grid container className={isSelected("")}>
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
      </Link>

      <List>
        <Link href={`/civilizations/${name}/builds`}>
          <ListItem button className={isSelected("builds")}>
            <ListItemText
              primary={<Typography variant="overline">Builds</Typography>}
            />
            <ListItemIcon>
              <IconButton>
                <ChevronLeftIcon />
              </IconButton>
            </ListItemIcon>
          </ListItem>
        </Link>

        <Link href={`/civilizations/${name}/units`}>
          <ListItem button className={isSelected("units")}>
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
          <ListItem button className={isSelected("techs")}>
            <ListItemText
              primary={<Typography variant="overline">Techs</Typography>}
            />
            <ListItemIcon>
              <IconButton>
                <ChevronLeftIcon />
              </IconButton>
            </ListItemIcon>
          </ListItem>
        </Link>

        <Link href={`/civilizations/${name}/buildings`}>
          <ListItem butto className={isSelected("buildings")} n>
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
