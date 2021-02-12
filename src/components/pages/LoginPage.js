import React from 'react';
import {Link} from "react-router-dom";

export default class LoginPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="auth">
                <form className="form-signin">
                    <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email" required autoFocus/>
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
                    <p className="mt-4 mb-3 text-muted"><Link to='/'>Go Back</Link></p>
                </form>
            </div>
        );
    }
}
