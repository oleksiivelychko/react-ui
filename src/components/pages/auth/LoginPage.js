import React from 'react';
import {Link, Redirect} from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { connect } from "react-redux";
import { login } from "../../../actions/auth/AuthActions";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            email: '',
            password: '',
            loading: false,
        };
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value,
        });
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            loading: true,
        });

        this.form.validateAll();

        const { dispatch, history } = this.props;

        if (this.checkBtn.context._errors.length === 0) {
            dispatch(login(this.state.email, this.state.password))
                .then(() => {
                    history.push("/profile");
                    window.location.reload();
                })
                .catch(() => {
                    this.setState({
                        loading: false
                    });
                });
        } else {
            this.setState({
                loading: false,
            });
        }
    }

    render() {
        const { isLoggedIn, message } = this.props;

        if (isLoggedIn) {
            return <Redirect to="/profile" />;
        }

        return (
            <div className="auth">
                <Form
                    onSubmit={this.handleLogin}
                    ref={(c) => {
                        this.form = c;
                    }}
                    className="auth__form auth__form-signin"
                >
                    <img className="mb-4" src="logo.svg" alt="" width="100" height="100"/>
                    <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
                    <Input
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        autoFocus
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        validations={[required]}
                    />
                    <Input
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        validations={[required]}
                    />
                    <button
                        className="btn btn-lg btn-primary btn-block"
                        type="submit"
                        disabled={this.state.loading}
                    >
                        {this.state.loading && (
                            <span className="spinner-border spinner-border-sm" />
                        )}
                        Log in
                    </button>

                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}

                    <CheckButton
                        style={{ display: "none" }}
                        ref={(c) => {
                            this.checkBtn = c;
                        }}
                    />

                    <p className="mt-4 mb-3 text-muted"><Link to='/'>Go home</Link></p>
                </Form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { isLoggedIn } = state.auth;
    const { message } = state.message;
    return {
        isLoggedIn,
        message
    };
}

export default connect(mapStateToProps)(LoginPage);
