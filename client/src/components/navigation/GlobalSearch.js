import { IconButton, InputBase, makeStyles } from "@material-ui/core";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.primary.dark,
    borderRadius: theme.shape.borderRadius * 4,
  },
  input: {
    marginLeft: theme.spacing(1),
    color: theme.palette.background.paper,
    flex: 1,
  },
  iconButton: {
    padding: 10,
    color: "inherit",
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export const GlobalSearch = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="search site"
        inputProps={{ "aria-label": "search site" }}
        fullWidth
      />
      <IconButton aria-label="search" className={classes.iconButton}>
        <SearchIcon />
      </IconButton>
    </div>
  );
};
