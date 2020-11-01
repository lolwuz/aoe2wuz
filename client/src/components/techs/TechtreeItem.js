import { Avatar, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { API_URL } from "../../constants";

const useStyles = makeStyles((theme) => ({
  avatar: {
    marginLeft: 15,
    marginTop: 0,
  },
  title: {
    color: theme.palette.primary.light,
    textAlign: "center",
  },
}));

function TechtreeItem({ item }) {
  const classes = useStyles();
  const { ID, type } = item;

  return (
    <div>
      <Avatar
        src={`${API_URL}images/Units/${ID}.png`}
        variant="square"
        className={classes.avatar}
      />
      <Typography className={classes.title}>Test</Typography>
    </div>
  );
}

export default TechtreeItem;
