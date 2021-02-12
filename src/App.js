import React from "react";

import {
    BrowserRouter,
    Switch,
    Route, Link
} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                </div>
                <Switch>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/login" component={LoginPage} />
                </Switch>
            </BrowserRouter>
        )
    }
}
