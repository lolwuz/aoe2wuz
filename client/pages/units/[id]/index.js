import React from "react";
import PropTypes from "prop-types";
import MainTemplate from "../../../src/templates/MainTemplate";
import { API_URL } from "../../../src/constants";
import {
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import UnitTemplate from "../../../src/templates/UnitTemplate";
import UnitCounterCard from "../../../src/units/UnitCounterCard";

const useStyles = makeStyles((theme) => ({
  descriptionCard: {
    marginBottom: theme.spacing(3),
  },
}));

const Unit = ({ unit, counters }) => {
  const classes = useStyles();
  const { LanguageHelp } = unit;

  return (
    <UnitTemplate unit={unit}>
      <Card className={classes.descriptionCard}>
        <CardContent>
          <Typography
            dangerouslySetInnerHTML={{ __html: LanguageHelp }}
          ></Typography>
        </CardContent>
      </Card>

      <UnitCounterCard counters={counters} />
    </UnitTemplate>
  );
};

Unit.propTypes = {};

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}units`);
  const { units } = await res.json();

  // Render all unit paths
  const paths = units.map((unit) => {
    return {
      params: { id: unit.ID.toString() },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const unitRes = await fetch(`${API_URL}units/${id}`);
  const unit = await unitRes.json();

  const countersRes = await fetch(`${API_URL}counters/${id}`);
  const counters = await countersRes.json();

  return {
    props: {
      unit,
      counters,
    },
  };
}

export default Unit;
