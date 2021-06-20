import React from 'react';
import './register.css';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container"  style={{width: "30%"}}>
        <h3>Register</h3>
        <form>
        <fieldset>
          <div className="form-group">
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" />
          </div>
          <button type="submit" className="btn btn-primary">Sign Up</button>
          <br></br>
          <span className="account-link">Already have an account? <a href="/login">Click here</a> to login.</span>
        </fieldset>
      </form>
      </div>
    );
  }
}

export default Register;