import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import classnames from "classnames";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault();
const userData = {
      email: this.state.email,
      password: this.state.password
    };
this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };

  
render() {
    const { errors } = this.state;
    return (
      <form noValidate onSubmit={this.onSubmit}>
        <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/user">Register</Link>
                </p>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
          <input
            type="email"
            // className="form-control"
            placeholder="Enter email"
            error={errors.email}
            id="email"
            className={classnames("", {
              invalid: errors.email || errors.emailnotfound
            })}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
          <input
            type="password"
            // className="form-control"
            placeholder="Enter password"
            error={errors.password}
            id="password"
            className={classnames("", {
              invalid: errors.password || errors.passwordincorrect
            })}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);