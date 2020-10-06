import React from "react";
import PropTypes from "prop-types";
import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import Navigation from "../navigation/Navigation";

const MainTemplate = ({ children }) => {
  return (
    <>
      <nav>
        <Navigation />
      </nav>

      <main>{children}</main>

      <footer />
    </>
  );
};

MainTemplate.propTypes = {};

export default MainTemplate;
