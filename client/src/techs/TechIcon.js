import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Tooltip, Typography } from "@material-ui/core";
import { API_URL } from "../constants";

const useStyles = makeStyles((theme) => ({
  techImage: {
    height: 50,
    width: 50,
    marginRight: theme.spacing(1),
    borderColor: theme.palette.divider,
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: theme.shape.borderRadius,
  },
}));

const TechIcon = ({ tech }) => {
  const classes = useStyles();

  return (
    <Tooltip
      title={
        <Typography
          dangerouslySetInnerHTML={{
            __html: tech.internal_name,
          }}
          variant="body1"
        />
      }
    >
      <img
        src={`${API_URL}images/Techs/${tech.ID}.png`}
        alt={tech.internal_name}
        className={classes.techImage}
      />
    </Tooltip>
  );
};

TechIcon.propTypes = {};

export default TechIcon;
