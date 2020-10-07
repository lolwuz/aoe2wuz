import React from "react";
import PropTypes from "prop-types";
import MainTemplate from "../src/templates/MainTemplate";
import {
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: { marginTop: theme.spacing(3) },
}));

const Error404 = (props) => {
  const classes = useStyles();

  return (
    <MainTemplate>
      <Container maxWidth="xl" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>Hello</CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">Oh Damn</Typography>

            <Typography variant="body1">
              This page doen't exist. You can search for civilizations, techs
              and units here:
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </MainTemplate>
  );
};

Error404.propTypes = {};

export default Error404;
