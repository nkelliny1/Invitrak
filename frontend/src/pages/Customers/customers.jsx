import React from 'react';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';
import axios from 'axios';
import Navigation from '../../components/Navigation/navigation';

class Customers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            country: '',
            phone: '',
            email: '',
            type: '',
        };
        this.editCustomer = this.editCustomer.bind(this);
      }
    componentDidMount() {
      //initialize datatable
      $(document).ready(function () {
          $('#customersTable').DataTable();
      });

      this.deleteOrder = this.deleteOrder.bind(this);

      axios({
            method: 'get',
            url: 'https://localhost:44319/api/orders',
            headers: { }
        })
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        let orders = response.data;
        })
        .catch(function (error) {
        console.log(error);
        });

        const customersList = customers.map((customer) =>
            <tr>
            <td>{customer.ID}</td>
            <td>{customer.Name}</td>
            <td>{customer.Address}</td>
            <td>{customer.City}</td>
            <td>{customer.State}</td>
            <td>{customer.Zip}</td>
            <td>{customer.Country}</td>
            <td>{customer.phone}</td>
            <td>{customer.Email}</td>
            <td>{customer.Type}</td>
            <td>
            <ul className="navbar-nav me-auto">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Actions</a>
                <div class="dropdown-menu">
                    <button type="button" class="dropdown-item" data-toggle="modal" data-target="#editModal" data-whatever={customer.ID}>Edit</button>
                    <button type="button" class="dropdown-item" onClick={this.deleteCustomer} value={customer.ID}>Delete</button>
                </div>
            </li>
            </ul>
            </td>
        </tr>
        );

   }

   deleteCustomer(e) {
    e.preventDefault();
    axios({
      method: 'delete',
      url: 'https://localhost:44319/api/customer/' + e.target.value,
      headers: {}
    })
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      this.setState({errorMessage: "Customer deleted successfully."})
    })
    .catch(function (error) {
      console.log(error);
      this.setState({errorMessage: "Oops, something went wrong. Please try again later."})
    });
  }

  editCustomer(e) {
    e.preventDefault();
    axios({
      method: 'put',
      url: 'https://localhost:44319/api/customer/' + e.target.value,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : JSON.stringify({
        'Name': this.state.name,
        'Address': this.state.address,
        'City': this.state.city,
        'State': this.state.state,
        'Zip': this.state.zip,
        'Country': this.state.country,
        'Phone': this.state.phone,
        'Email': this.state.email,
        'Type': this.state.type,
      })
    })
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      this.setState({errorMessage: "Customer edited successfully."})
    })
    .catch(function (error) {
      console.log(error);
      this.setState({errorMessage: "Oops, something went wrong. Please try again later."})
    });
  }
    render(){
    return (
    <div>
        <Navigation></Navigation>
      <div className="MainDiv">
        <div className="container">
        <h3 style={{marginTop: "20px", marginBottom: "20px"}}>Customers</h3>
        <button type="button" className="btn btn-primary btn-lg" href="/customers/new">Add Customer(s)</button>
            <table id="ordersTable" class="display">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Address</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Zip</th>
                      <th>Country</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Type</th>
                      <th>Actions</th>
                  </tr>
              </thead>
              <tbody>
                  {customersList}
              </tbody>
              <tfoot>
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Address</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Zip</th>
                      <th>Country</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Type</th>
                      <th>Actions</th>
                  </tr>
              </tfoot>
          </table>
          <div className="modal fade" id="editModal" tabIndex={-1} role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Order</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
            <form onSubmit={this.editCustomer}>
        <fieldset>
          <legend>Edit Customer(s)</legend>
          <div className="form-group">
            <label htmlFor="custName" className="form-label mt-4">Customer Name</label>
            <input type="text" className="form-control" id="custName" aria-describedby="partID" placeholder="Customer Name" onChange={this.setState({name: e.target.value})}/>
          </div>
          <div className="form-group">
            <label htmlFor="custAddress" className="form-label mt-4">Customer Address</label>
            <input type="text" className="form-control" id="custAddress" aria-describedby="custAddress" placeholder="Customer Address" onChange={this.setState({address: e.target.value})}/>
          </div>
          <div className="form-group">
            <label htmlFor="custCity" className="form-label mt-4">Customer City</label>
            <input type="text" className="form-control" id="custCity" aria-describedby="custCity" placeholder="Customer City" onChange={this.setState({city: e.target.value})}/>
          </div>
          <div className="form-group">
            <label htmlFor="custState" className="form-label mt-4">Customer State</label>
            <input type="text" className="form-control" id="custState" aria-describedby="custState" placeholder="Customer State" onChange={this.setState({state: e.target.value})}/>
          </div>
          <div className="form-group">
            <label htmlFor="custZip" className="form-label mt-4">Customer Zip Code</label>
            <input type="text" className="form-control" id="custZip" aria-describedby="custZip" placeholder="Customer Zip Code" onChange={this.setState({zip: e.target.value})}/>
          </div>
          <div className="form-group">
            <label htmlFor="custCountry" className="form-label mt-4">Customer Country</label>
            <input type="text" className="form-control" id="custCountry" aria-describedby="custCountry" placeholder="Customer Country" onChange={this.setState({country: e.target.value})}/>
          </div>
          <div className="form-group">
            <label htmlFor="custPhone" className="form-label mt-4">Customer Phone Number</label>
            <input type="tel" className="form-control" id="custPhone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" aria-describedby="custPhone" placeholder="Customer Phone Number" onChange={this.setState({phone: e.target.value})}/>
          </div>
          <div className="form-group">
            <label htmlFor="custEmail" className="form-label mt-4">Customer Email Address</label>
            <input type="email" className="form-control" id="custEmail" aria-describedby="custEmail" placeholder="Customer Email Address" onChange={this.setState({email: e.target.value})}/>
          </div>
          <div className="form-group">
            <label htmlFor="custType" className="form-label mt-4">Customer Type</label>
            <input type="text" className="form-control" id="custType" aria-describedby="custType" placeholder="Customer Type" onChange={this.setState({type: e.target.value})}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </fieldset>
      </form>
            </div>
          </div>
        </div>
      </div>
          </div>
        </div>
        </div>
    );
  }
  }
  export default Customers;