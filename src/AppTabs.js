import React from "react";
import PropTypes from "prop-types";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CameraAlt from "@material-ui/icons/CameraAlt";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";

import ChatTab from "./ChatTab";
import TabContainer from "./TabContainer";
import {connect} from 'react-redux';
import { loadUsers } from './redux/actions/users';

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "16px"
  },
  camera: {
    marginRight: "16px"
  },
  tabs: {
    width: "100%"
  }
});

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#fff"
    }
  }
});

class AppTabs extends React.Component {
  state = {
    value: 0
  };
  componentWillMount(){
    this.props.loadUsers();
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div>
        <AppBar className={classes.root} position="relative" color="primary">
          <MuiThemeProvider theme={theme}>
            <CameraAlt className={classes.camera} />
            <Tabs
              className={classes.tabs}
              indicatorColor="secondary"
              value={value}
              variant="fullWidth"
              onChange={this.handleChange}
            >
              <Tab label="Chats" />
              <Tab label="Estados" />
              <Tab label="Llamadas" />
            </Tabs>
          </MuiThemeProvider>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <ChatTab/>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <ChatTab />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <ChatTab />
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadUsers: () => {
      dispatch(loadUsers());
    }
  }
}
AppTabs.propTypes = {
  classes: PropTypes.object.isRequired
};
export default connect(null, mapDispatchToProps)(withStyles(styles)(AppTabs));
