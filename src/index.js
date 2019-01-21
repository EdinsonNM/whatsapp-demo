import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import "./styles/styles.css";
import { Provider } from "react-redux";
import store from './redux/store';
import Home from './containers/home/Home';
import Login from './containers/login/Login';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#075e54"
    },
    secondary: {
      main: "#25D366",
      contrastText: "#fff"
    }
  }
});

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact={true} path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
