import React from 'react';
import axios from 'axios';
import './register.css';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      errorMessage: ''
    };
    this.registerAccount = this.registerAccount.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setConfirmPassword = this.setConfirmPassword.bind(this);
  }

  componentDidMount() {
  }

  setEmail(e) {
    console.log(e.target.value);
    this.setState({email: e.target.value});
  }

  setPassword(e) {
    console.log(e.target.value);
    this.setState({password: e.target.value});
  }

  setConfirmPassword(e) {
    console.log(e.target.value);
    this.setState({ConfirmPassword: e.target.value});
  }

  registerAccount(e) {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'https://localhost:44319/api/account/register',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : JSON.stringify({
        "Email": this.state.email,
        "Password": this.state.password,
        "ConfirmPassword": this.state.confirmPassword
      })
    })
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      this.setState({errorMessage: "Thank you for creating an account! Please login to begin."})
    })
    .catch(function (error) {
      console.log(error);
      this.setState({errorMessage: "Sorry it seems that email is taken. Please try again with a different email address."})
    });
  }

  render() {
    return (
      <div className="container"  style={{width: "30%"}}>
        {this.state.errorMessage}
        <h3>Register</h3>
        <form>
        <fieldset>
          <div className="form-group">
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.setEmail}/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.setPassword}/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" onChange={this.setConfirmPassword}/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.registerAccount}>Sign Up</button>
          <br></br>
          <span className="account-link">Already have an account? <a href="/login">Click here</a> to login.</span>
        </fieldset>
      </form>
      </div>
    );
  }
}

export default Register;