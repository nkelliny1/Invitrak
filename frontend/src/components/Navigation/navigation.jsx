import React from 'react';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: localStorage.getItem('userName'),
    };

    this.logoutAccount = this.logoutAccount.bind(this);
  }

  componentDidMount() {
  }

  nextPath(path) {
    this.props.history.push(path);
  }

  logoutAccount(e) {
    e.preventDefault();
    axios(
        {
      method: 'post',
      url: 'https://localhost:44319/api/account/logout',
      headers: { 
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
      }
    })
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      this.nextPath('/login');
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Invitrak</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/orders">Orders</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/parts">Parts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/customers">Customers</a>
              </li>
            </ul>
            <form className="d-flex">
            <ul className="navbar-nav me-auto">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">{this.state.username}</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#" onClick={this.logoutAccount}>Logout</a>
                </div>
            </li>
            </ul>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;