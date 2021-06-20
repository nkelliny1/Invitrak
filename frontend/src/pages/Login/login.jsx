import React from 'react';
import './login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container"  style={{width: "30%"}}>
        <h3>Login</h3>
        <form>
        <fieldset>
          <div className="form-group">
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
          <br></br>
          <span className="account-link">Don't have an account? <a href="/register">Click here</a> to sign up.</span>
        </fieldset>
      </form>
      </div>
    );
  }
}

export default Login;