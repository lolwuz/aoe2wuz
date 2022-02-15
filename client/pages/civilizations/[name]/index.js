import React, { useState } from "react";
import PropTypes from "prop-types";
import MainTemplate from "../../../src/templates/MainTemplate";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import TechIcon from "../../../src/components/techs/TechIcon";
import TechsList from "../../../src/components/techs/TechsList";
import UnitsList from "../../../src/components/units/UnitsList";
import Link from "next/link";
import { API_URL } from "../../../src/constants";
import CivTemplate from "../../../src/templates/CivTemplate";

const useStyles = makeStyles((theme) => ({
  returnButton: {
    marginBottom: theme.spacing(3),
  },
  techsButton: { marginTop: theme.spacing(3), marginBottom: theme.spacing(3) },
}));

const civilizations = ({ civilization }) => {
  const { civ, unique, disabled, enabled } = civilization;
  const classes = useStyles();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setState({ ...state, [name]: value });
  };

  return (
    <CivTemplate civilization={civilization}>
      <Typography
        variant="body1"
        dangerouslySetInnerHTML={{ __html: civ.help_text }}
      />
    </CivTemplate>
  );
};

civilizations.propTypes = {};

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(`${API_URL}civilizations`);
  const data = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = data.map((civ) => ({
    params: { name: civ.name },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { name } = params;

  const res = await fetch(`${API_URL}civilizations/${name}`);
  const data = await res.json();

  return {
    props: {
      civilization: data,
    },
  };
}

export default civilizations;
