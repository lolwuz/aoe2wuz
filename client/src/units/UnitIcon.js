import React from "react";
import PropTypes from "prop-types";
import {
  CardActionArea,
  makeStyles,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { API_URL } from "../constants";
import TechToolTip from "../navigation/TechToolTip";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  unitImage: {
    height: 50,
    width: 50,
    marginRight: theme.spacing(1),
    borderColor: theme.palette.divider,
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: theme.shape.borderRadius,
  },
}));

const UnitIcon = ({ unit }) => {
  const classes = useStyles();
  const isMonk = unit.internal_name === "MONKX";

  const costs = [
    `${unit.Cost.Wood ? unit.Cost.Wood : 0}🌲`,
    `${unit.Cost.Food ? unit.Cost.Food : 0}🌽`,
    `${unit.Cost.Gold ? unit.Cost.Gold : 0}💰`,
    `${unit.Cost.Stone ? unit.Cost.Stone : 0}🧱`,
  ].join(", ");

  const shortDescription = unit.LanguageHelp.split("\n")[0].replace(
    "‹cost›",
    costs
  );

  return (
    <TechToolTip
      title={
        <Typography
          dangerouslySetInnerHTML={{
            __html: shortDescription,
          }}
          variant="body1"
        />
      }
    >
      <Link href={`/units/${unit.ID}`}>
        <img
          src={`${API_URL}images/Units/${isMonk ? "monk" : unit.ID}.png`}
          alt={unit.internal_name}
          className={classes.unitImage}
        />
      </Link>
    </TechToolTip>
  );
};

UnitIcon.propTypes = {};

export default UnitIcon;
