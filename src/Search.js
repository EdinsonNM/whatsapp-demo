import React from "react";
import PropTypes from "prop-types";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    display: "flex",
    alignItems: "center"
  }
};

const Search = props => {
  const { classes } = props;
  const handleClick = ev => {};
  return (
    <div className={classes.root}>
      <InputBase />
      <div className="SearchIcon">
        <SearchIcon onClick={handleClick} />
      </div>
    </div>
  );
};

Search.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Search);
