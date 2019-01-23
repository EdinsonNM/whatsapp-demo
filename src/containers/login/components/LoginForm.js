import React from "react";
import PropTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";
import { getCountriesCode } from "../../../api/user";
import { Button } from '@material-ui/core';
import { Typography } from "@material-ui/core";

const styles = theme => ({
  root: {
    position: "relative"
  },
  form: {
    position: "relative",
    display: "flex",
    minWidth: 400,
    justifyContent: "center"
  },
  formControl: {
    display: "inline-flex",
    margin: theme.spacing.unit,
    width: 400
  },
  select: {
    "&:before": {
      borderBottomColor: "#128C7E"
    },
    "&:after": {
      borderBottomColor: "#128C7E"
    },
    "&:hover:not(.MuiInput-disabled-):not(.MuiInput-focused-):not(.MuiInput-error-):before": {
      borderBottomColor: "#128C7E"
    },
    "& svg": {
      color: "#128C7E"
    }
  },
  input: {
    "&:before": {
      borderBottomColor: "#128C7E"
    },
    "&:after": {
      borderBottomColor: "#128C7E"
    },
    "&:hover:not(.MuiInput-disabled-):not(.MuiInput-focused-):not(.MuiInput-error-):before": {
      borderBottomColor: "#128C7E"
    }
  }
});

const styleCountrySelect = {
  name: {
    display: "flex",
    flexGrow: 1
  },
  code: {
    display: "flex"
  }
};

const CountrySelectOption = withStyles(styleCountrySelect)(props => {
  const { countryCode, classes } = props;
  return (
    <MenuItem component="div" value={countryCode.callingCode}>
      {countryCode.name}
    </MenuItem>
  );
});

class LoginForm extends React.Component {
  state = {
    email: "",
    password: ''
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleLogin = () => {
    const {email, password} = this.state;
    this.props.login(email, password);
  }
  render() {
    const { classes, login } = this.props;
    const { email, password } = this.state;
    return (
      <div className={classes.root}>
        <form className={classes.form} autoComplete="off">
          <FormControl className={classes.formControl}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={24}
            >
              <Grid item xs={12}>
                <TextField
                  onChange={this.handleChange}
                  name="email"
                  placeholder="Email"
                  margin="normal"
                  value={email}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={this.handleChange}
                  name="password"
                  type="password"
                  placeholder="Contraseña"
                  fullWidth
                  margin="normal"
                  value={password}
                />
              </Grid>
            </Grid>
            <Typography component="div" className={classes.linkContainer}>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.handleLogin}
            >
              Login
            </Button>
          </Typography>
          </FormControl>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginForm);
