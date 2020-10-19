import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  image: {
    width: 15,
  },
  imageInvert: {
    width: 15,
    filter: "invert(1)",
  },
}));

function ListIcon({ src, alt, invert }) {
  const classes = useStyles();

  return (
    <img
      src={src}
      alt={alt}
      className={invert ? classes.imageInvert : classes.image}
    />
  );
}

export default ListIcon;
