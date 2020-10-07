import React from "react";
import PropTypes from "prop-types";
import TechIcon from "./TechIcon";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  techList: {
    marginTop: theme.spacing(1),
  },
}));

const TechsList = ({ techs }) => {
  const classes = useStyles();

  return (
    <div className={classes.techList}>
      {techs.map((tech) => (
        <TechIcon tech={tech} key={tech.ID} />
      ))}
    </div>
  );
};

TechsList.propTypes = {};

export default TechsList;
