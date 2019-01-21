import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import AppMenu from "./AppMenu";
import Search from "./Search";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  toolbar: {
    paddingRight: 0
  }
};

const AppBar_ = props => {
  const { classes } = props;
  return (
    <AppBar className={classes.root} position="relative" color="primary">
      <Toolbar className={classes.toolbar} color="inherit">
        <Typography variant="h6" color="inherit">
          WhatsApp
        </Typography>
        <div className={classes.grow} />
        <Search />
        <AppMenu />
      </Toolbar>
    </AppBar>
  );
};
AppBar_.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(AppBar_);
