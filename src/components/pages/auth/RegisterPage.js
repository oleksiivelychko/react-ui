import React from 'react';
import {Link} from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { connect } from "react-redux";
import { register } from '../../../actions/auth/AuthActions'

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const username = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const email = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

const password = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

const confirmPassword = (value) => {
    if (value !== this.state.password) {
        return (
            <div className="alert alert-danger" role="alert">
                The passwords don't match.
            </div>
        );
    }
};

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);

        this.state = {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            successful: false,
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
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

    onChangeConfirmPassword(e) {
        this.setState({
            confirmPassword: e.target.value,
        });
    }

    handleRegister(e) {
        e.preventDefault();

        this.setState({
            successful: false,
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            this.props
                .dispatch(
                    register(this.state.username, this.state.email, this.state.password, this.state.confirmPassword)
                )
                .then(() => {
                    this.setState({
                        successful: true,
                    });
                })
                .catch(() => {
                    this.setState({
                        successful: false,
                    });
                });
        }
    }

    render(){
        const { message } = this.props;

        return (
            <div className="auth">
                <Form
                    className="auth__form auth__form-signup"
                    onSubmit={this.handleRegister}
                    ref={(c) => {
                        this.form = c;
                    }}
                >
                    <h1 className="h3 mb-3 font-weight-normal">Sign up</h1>
                    <Input
                        type="text"
                        id="inputName"
                        className="form-control"
                        placeholder="Full name"
                        name="username"
                        autoFocus
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        validations={[required, username]}
                    />
                    <Input
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        validations={[required, email]}
                    />
                    <Input
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        validations={[required, password]}
                    />
                    <Input
                        type="password"
                        id="inputPasswordConfirm"
                        className="form-control"
                        placeholder="Password confirm"
                        name="password_confirm"
                        value={this.state.confirmPassword}
                        onChange={this.onChangeConfirmPassword}
                        validations={[required, password, confirmPassword]}
                    />
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                    <p className="mt-4 mb-3 text-muted"><Link to='/'>Go home</Link></p>

                    {message && (
                        <div className="form-group">
                            <div className={ this.state.successful ? "alert alert-success" : "alert alert-danger" } role="alert">
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

                </Form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { message } = state.message;
    return {
        message,
    };
}

export default connect(mapStateToProps)(RegisterPage);
