import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/navigation';
import Login from './pages/Login/login';
import Register from './pages/Register/register';
import Profile from './pages/Profile/profile';
import Dashboard from './pages/Dashboard/dashboard';
import Orders from './pages/Orders/orders';
import Customers from './pages/Customers/customers';
import Parts from './pages/Parts/parts';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/parts">
            <Parts />
          </Route>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
