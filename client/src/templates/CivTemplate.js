import React from "react";
import PropTypes from "prop-types";
import MainTemplate from "../../src/templates/MainTemplate";
import { Button, Card, Container, Grid, makeStyles } from "@material-ui/core";
import UnitInfoCard from "../components/units/UnitInfoCard";
import CivCard from "../components/civilizations/CivCard";
import CivInfoCard from "../components/civilizations/CivInfoCard";
import ListIcon from "../components/navigation/ListIcon";
import Link from "next/link";
import Head from "next/head";
import { API_URL } from "../constants";

const useStyles = makeStyles((theme) => ({
  techtreeButton: {
    float: "right",
  },
  children: {},
}));

const CivTemplate = ({ civilization, children }) => {
  const classes = useStyles();

  const { civ } = civilization;

  return (
    <MainTemplate>
      <Head>
        <title>{civ.name}</title>

        <link
          rel="icon"
          type="image/png"
          href={`${API_URL}images/Civs/${civ.name}.png`}
        />

        <meta name="description" content={civ.help_text} />
      </Head>

      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Link href="/civilizations">
              <Button variant="contained" color="secondary" size="large">
                <ListIcon
                  src={`/img/civilizations.svg`}
                  alt={`civ-icon`}
                  invert
                />
                return
              </Button>
            </Link>

            <Link href={`/civilizations/${civ.name}/techtree`}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                className={classes.techtreeButton}
              >
                techtree
              </Button>
            </Link>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={5} lg={5} xl={4}>
                <CivInfoCard civ={civ} />
              </Grid>

              <Grid
                item
                xs={12}
                md={7}
                lg={7}
                xl={8}
                className={classes.children}
              >
                {children}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MainTemplate>
  );
};

CivTemplate.propTypes = {};

export default CivTemplate;
