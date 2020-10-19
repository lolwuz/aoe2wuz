import React from "react";
import PropTypes from "prop-types";
import MainTemplate from "../../src/templates/MainTemplate";
import { Button, Container, Grid, makeStyles } from "@material-ui/core";
import UnitInfoCard from "../../src/units/UnitInfoCard";
import CivCard from "../civilizations/CivCard";
import CivInfoCard from "../civilizations/CivInfoCard";
import ListIcon from "../navigation/ListIcon";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  techtreeButton: {
    float: "right",
  },
}));

const CivTemplate = ({ civilization, children }) => {
  const classes = useStyles();

  const { civ } = civilization;

  return (
    <MainTemplate>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Link href="/civilizations">
              <Button variant="contained" color="primary" size="large">
                return
              </Button>
            </Link>

            <Link href={`/civilizations/${civ.name}/techtree`}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={
                  <ListIcon
                    src="/img/Techtree.svg"
                    alt="techtree-icon"
                    invert
                  />
                }
                className={classes.techtreeButton}
              >
                techtree
              </Button>
            </Link>
          </Grid>

          <Grid item xs={12} md={5} lg={5} xl={4}>
            <CivInfoCard civ={civ} />
          </Grid>

          <Grid item xs={12} md={7} lg={7} xl={8}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </MainTemplate>
  );
};

CivTemplate.propTypes = {};

export default CivTemplate;
