import React from "react";
import PropTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";
import { getCountriesCode } from "./utils";

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
    countryCode: "",
    countriesCode: []
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentWillMount() {
    getCountriesCode().then(response => {
      this.setState({ countriesCode: response });
    });
  }
  render() {
    const { classes } = this.props;
    const { countriesCode } = this.state;
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
                <Select
                  className={classes.select}
                  value={this.state.countryCode}
                  onChange={this.handleChange}
                  displayEmpty
                  fullWidth
                  inputProps={{
                    name: "countryCode",
                    id: "country-code",
                    classes: {
                      root: classes.input
                    }
                  }}
                >
                  <MenuItem value="" disabled>
                    Country Code
                  </MenuItem>
                  {countriesCode.map(item => (
                    <MenuItem
                      key={item.callingCode}
                      component="div"
                      value={item.callingCode}
                    >
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  placeholder=""
                  margin="normal"
                  value={this.state.countryCode}
                  InputProps={{
                    readOnly: true,
                    classes: {
                      root: classes.input
                    },
                    startAdornment: (
                      <InputAdornment position="start">+</InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  placeholder="Phone number"
                  fullWidth
                  margin="normal"
                  InputProps={{
                    classes: {
                      root: classes.input
                    }
                  }}
                />
              </Grid>
            </Grid>
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
