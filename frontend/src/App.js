import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/login';
import Register from './pages/Register/register';
import Dashboard from './pages/Dashboard/dashboard';
import Orders from './pages/Orders/orders';
import AddOrder from './pages/Orders/Add/addOrder';
import Customers from './pages/Customers/customers';
import AddCustomer from './pages/Customers/Add/addCustomer';
import Parts from './pages/Parts/parts';
import AddPart from './pages/Parts/Add/addPart';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/parts">
            <Parts />
          </Route>
          <Route path="/parts/new">
            <AddPart />
          </Route>
          <Route exact path="/customers">
            <Customers />
          </Route>
          <Route exact path="/customers/new">
            <AddCustomer />
          </Route>
          <Route exact path="/orders">
            <Orders />
          </Route>
          <Route path="/orders/new">
            <AddOrder />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
