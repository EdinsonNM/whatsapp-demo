import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import LoginForm from "./LoginForm";

const styles = theme => ({
  root: {
    position: "relative",
    flexGrow: 1
  },
  linkContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing.unit * 16
  },
  link: {
    textDecoration: "none"
  }
});

const LoginContainer = props => {
  const { classes, login } = props;
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={24}
      >
        <Grid item xs={12} sm={8} md={6}>
          <Typography component="div">
            Whatsapp will send an SMS message (carrier changes may apply) to
            verify your phone number. &nbsp;Enter your country code and phone
            number:
          </Typography>
          <LoginForm />
          <Typography component="div" className={classes.linkContainer}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => login("user", "123")}
            >
              Next
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

LoginContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginContainer);
