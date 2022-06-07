import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import {
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}


 class CreateUser extends Component {
  constructor(props) {
    super(props);
    

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePassword2 = this.onChangePassword2.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    }
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  // onChange = e => {
  //   this.setState({ [e.target.id]: e.target.value });
  // };


  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
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

  onChangePassword2(e) {
    this.setState({
      password2: e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }

    console.log(user);

    axios.post('http://localhost:4567/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: '',
      name: '',
      email: '',
      password: '',
      password2: ''

    })
  

  this.props.registerUser(user, this.props.history); 
  };


  render() {
    const { errors } = this.state;

    return (
      <div>
        <h3>Create New User</h3>
        <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
        <form noValidate onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <span className="red-text">{errors.username}</span>
            <input  type="text"
                required
                // className="form-control"
                value={this.state.username}
                error={errors.username}
                id="username"
                onChange={this.onChangeUsername}
                className={classnames("", {
                  invalid: errors.username
                })}
                />
                <label>Name: </label>
                <span className="red-text">{errors.name}</span>
              <input  type="text"
                required
                // className="form-control"
                value={this.state.name}
                error={errors.name}
                id="name"
                onChange={this.onChangeName}
                className={classnames("", {
                  invalid: errors.name
                })}
                />
                 <label>Email: </label>
                 <span className="red-text">{errors.email}</span>
              <input  type="text"
                required
                // className="form-control"
                value={this.state.email}
                error={errors.email}
                id="email"
                onChange={this.onChangeEmail}
                className={classnames("", {
                  invalid: errors.email
                })}
                />
                  <label>Password: </label>
                  <span className="red-text">{errors.password}</span>
              <input  type="text"
                required
                // className="form-control"
                value={this.state.password}
                error={errors.password}
                id="password"
                onChange={this.onChangePassword}
                className={classnames("", {
                  invalid: errors.password
                })}
                />
                 <label>Confirm password: </label>
                 <span className="red-text">{errors.password2}</span>
              <input  type="text"
                required
                // className="form-control"
                value={this.state.password2}
                error={errors.password2}
                id="password2"
                onChange={this.onChangePassword2}
                className={classnames("", {
                  invalid: errors.password2
                })}
                />

          </div>
          
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}

CreateUser.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(CreateUser));

// maybe