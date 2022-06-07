import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default class CreateUser extends Component {
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
  }

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
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                error={errors.username}
                id="username"
                onChange={this.onChangeUsername}
                />
                <label>Name: </label>
              <input  type="text"
                required
                className="form-control"
                value={this.state.name}
                error={errors.name}
                id="name"
                onChange={this.onChangeName}
                />
                 <label>Email: </label>
              <input  type="text"
                required
                className="form-control"
                value={this.state.email}
                error={errors.email}
                id="email"
                onChange={this.onChangeEmail}
                />
                  <label>Password: </label>
              <input  type="text"
                required
                className="form-control"
                value={this.state.password}
                error={errors.password}
                id="password"
                onChange={this.onChangePassword}
                />
                 <label>Confirm password: </label>
              <input  type="text"
                required
                className="form-control"
                value={this.state.password2}
                error={errors.password2}
                id="password2"
                onChange={this.onChangePassword2}
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