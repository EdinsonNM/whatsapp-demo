import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  item: {},
  itemText: {
    paddingLeft: 0,
    marginLeft: "16px"
  },
  bold: {
    fontWeight: "bold"
  },
  inline: {
    display: "inline"
  }
});

class UserChat extends React.Component {
  render() {
    const { classes, user } = this.props;
    return (
      <ListItem button className={classes.item} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={user.avatar} />
        </ListItemAvatar>
        <ListItemText
          className={classes.itemText}
          primary={
            <React.Fragment>
              <Typography
                component="span"
                className={classes.bold}
                color="textPrimary"
              >
                {user.name}
              </Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                className={classes.inline}
                color="textPrimary"
              />
            </React.Fragment>
          }
        />
      </ListItem>
    );
  }
}

UserChat.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })
};

export default withStyles(styles)(UserChat);
