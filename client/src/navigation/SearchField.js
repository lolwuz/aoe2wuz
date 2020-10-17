import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton, InputBase, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    ["&:hover"]: {
      boxShadow: theme.shadows[5],
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchField(props) {
  const { label, value, name, onChange, fullWidth } = props;
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder={label}
        value={value}
        name={name}
        onChange={onChange}
        inputProps={{ "aria-label": label }}
        fullWidth
      />
      <IconButton aria-label="search" className={classes.iconButton}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
