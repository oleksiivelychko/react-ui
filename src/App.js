import React from 'react';
import { connect } from "react-redux";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/auth/LoginPage";
import RegisterPage from "./components/pages/auth/RegisterPage";
import ProfilePage from "./components/pages/user/ProfilePage";
import { logout } from "./actions/auth/AuthActions";
import { clearMessage } from "./actions/auth/MessageActions";
import { history } from "./helpers/history";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }

  logOut() {
    this.props.dispatch(logout());
  }

  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/profile" component={ProfilePage} />
          </Switch>
        </BrowserRouter>
    )
  }
}

function mapStateToProps(state) {
    const { user } = state.auth;
    return {
        user,
    };
}

export default connect(mapStateToProps)(App);
