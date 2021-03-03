import React from 'react';
import {Link} from "react-router-dom";

export default class LoginPage extends React.Component {
    render() {
        return (
            <div className="auth">
                <form className="auth__form auth__form-signin">
                    <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email" name="name" required autoFocus />
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" name="password" required />
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
                    <p className="mt-4 mb-3 text-muted"><Link to='/'>Go home</Link></p>
                </form>
            </div>
        );
    }
}
