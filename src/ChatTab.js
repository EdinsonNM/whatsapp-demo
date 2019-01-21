import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import UserChat from "./UserChat";
import { getUsers } from "./utils";
import { loadUsers } from "./redux/actions/users";
import {connect} from 'react-redux';
const styles = theme => ({
  root: {
    width: "100%"
  },
  inline: {
    display: "inline"
  }
});

class ChatTab extends React.Component {
  render() {
    const { classes, users = [] } = this.props;
    return (
      <List className={classes.root}>
        {users.map(user => (
          <UserChat key={user.id} user={user} />
        ))}
      </List>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    users: state.user.data
  }
}
export default connect(mapStateToProps)(withStyles(styles)(ChatTab));
