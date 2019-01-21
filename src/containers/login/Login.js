import React from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { loginAction } from "../../redux/actions/auth";
import { Redirect } from "react-router-dom";
import LoginBar from './components/LoginBar';
import LoginContainer from './components/LoginContainer';
const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingLeft: theme.spacing.unit * 5,
    paddingRight: theme.spacing.unit * 5
  }
});

const Login = props => {
  const { classes, login, logged } = props;
  if (logged) {
    return <Redirect to="/home" />;
  }
  return (
    <Grid container className={classes.root}>
      <LoginBar />
      <LoginContainer login={login} />
    </Grid>
  );
};

Login.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  logged: state.auth.logged
});
const mapDispatchToProps = dispatch => ({
  login: (username, password) => {
    dispatch(loginAction(username, password));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Login));
