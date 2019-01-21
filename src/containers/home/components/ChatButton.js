import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ChatIcon from "@material-ui/icons/Chat";
import Fab from "@material-ui/core/Fab";
const styles = theme => ({
  fabGreen: {
    color: '#fff'
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  }
});

const ChatButton = (props) => {
  const {classes} = props;
  return (
    <Fab className={classes.fab} color="secondary" aria-label="Chat">
      <ChatIcon className={classes.fabGreen} />
    </Fab>
  );
};
ChatButton.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ChatButton);
