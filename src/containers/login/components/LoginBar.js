import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  bar: {
    boxShadow: "none"
  },
  toolbar: {
    justifyContent: "center"
  },
  header: {
    color: "#128C7E",
    textAlign: "center"
  }
});

const LoginBar = props => {
  const { classes } = props;
  return (
    <AppBar className={classes.bar} position="relative" color="inherit">
      <Toolbar className={classes.toolbar} color="inherit">
        <Typography className={classes.header} variant="h6" color="inherit">
          Iniciar sesión
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

LoginBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginBar);
