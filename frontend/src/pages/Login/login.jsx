import React from 'react';
import axios from 'axios';
import './login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: ''
    };
    this.loginAccount = this.loginAccount.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
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

  nextPath(path) {
    this.props.history.push(path);
  }

  loginAccount(e) {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'https://localhost:44319/token',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : JSON.stringify({
        "grant_type": "password",
        "username": this.state.email,
        "password": this.state.password
      })
    })
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      localStorage.setItem('accessToken', response.data.access_token);
      localStorage.setItem('userName', response.data.userName);
      this.nextPath('/');
    })
    .catch(function (error) {
      console.log(error);
      this.setState({errorMessage: "Login Invalid. Please try again with correct credentials."});
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
          <button type="submit" className="btn btn-primary" onClick={this.loginAccount}>Sign Up</button>
          <br></br>
          <span className="account-link">Already have an account? <a href="/login">Click here</a> to login.</span>
        </fieldset>
      </form>
      </div>
    );
  }
}

export default Login;