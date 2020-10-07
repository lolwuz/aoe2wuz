import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { Tooltip } from "@material-ui/core";

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

const TechToolTip = ({ title, children }) => {
  return <HtmlTooltip title={title}>{children}</HtmlTooltip>;
};

TechToolTip.propTypes = {
  title: PropTypes.node,
};

export default TechToolTip;
