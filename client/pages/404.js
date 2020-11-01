import React from "react";
import PropTypes from "prop-types";
import MainTemplate from "../src/templates/MainTemplate";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { GlobalSearch } from "../src/components/navigation/GlobalSearch";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({}));

const Error404 = (props) => {
  const classes = useStyles();

  return (
    <MainTemplate>
      <Container maxWidth="xl" className={classes.container}>
        <Alert severity="warning" variant="filled">
          Sorry this page was not found. (404)
        </Alert>
      </Container>
    </MainTemplate>
  );
};

Error404.propTypes = {};

export default Error404;
