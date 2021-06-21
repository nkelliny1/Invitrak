import React from 'react';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';
import axios from 'axios';
import Navigation from '../../components/Navigation/navigation';

class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            partID: '',
            custID: '',
            orderQty: '',
            orderTotal: '',
            orderTax: '',
            shipping: '',
        };
      }
    componentDidMount() {
      //initialize datatable
      $(document).ready(function () {
          $('#ordersTable').DataTable();
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

        const ordersList = orders.map((order) =>
            <tr>
            <td>{order.ID}</td>
            <td>{order.PartID}</td>
            <td>{order.CustomerID}</td>
            <td>{order.Quantity}</td>
            <td>{order.Total}</td>
            <td>{order.Tax}</td>
            <td>{order.Shipping}</td>
            <td>
            <ul className="navbar-nav me-auto">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Actions</a>
                <div class="dropdown-menu">
                    <button type="button" class="dropdown-item" data-toggle="modal" data-target="#editModal" data-whatever={order.ID}>Edit</button>
                    <button type="button" class="dropdown-item" onClick={this.deleteOrder} value={order.ID}>Delete</button>
                </div>
            </li>
            </ul>
            </td>
        </tr>
        );

   }

   deleteOrder(e) {
    e.preventDefault();
    axios({
      method: 'delete',
      url: 'https://localhost:44319/api/order/' + e.target.value,
      headers: {}
    })
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      this.setState({errorMessage: "Order deleted successfully."})
    })
    .catch(function (error) {
      console.log(error);
      this.setState({errorMessage: "Oops, something went wrong. Please try again later."})
    });
  }

  editOrder(e) {
    e.preventDefault();
    axios({
      method: 'put',
      url: 'https://localhost:44319/api/order/' + e.target.value,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : JSON.stringify({
        'PartID': this.state.partID,
        'CustomerID': this.state.custID,
        'Quantity': this.state.orderQty,
        'Total': this.state.orderTotal,
        'Tax': this.state.orderTax,
        'Shipping': this.state.shipping,
      })
    })
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      this.setState({errorMessage: "ORder edited successfully."})
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
        <h3 style={{marginTop: "20px", marginBottom: "20px"}}>Orders</h3>
        <button type="button" className="btn btn-primary btn-lg" href="/orders/new">Add Order(s)</button>
            <table id="ordersTable" class="display">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>PartID</th>
                      <th>CustomerID</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Tax</th>
                      <th>Shipping</th>
                      <th>Actions</th>
                  </tr>
              </thead>
              <tbody>
                  {ordersList}
              </tbody>
              <tfoot>
                  <tr>
                      <th>ID</th>
                      <th>PartID</th>
                      <th>CustomerID</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Tax</th>
                      <th>Shipping</th>
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
            <form onSubmit={this.editOrder}>
        <fieldset>
          <legend>Edit Order(s)</legend>
          <div className="form-group">
            <label htmlFor="partID" className="form-label mt-4">Part ID</label>
            <input type="number" className="form-control" id="partID" aria-describedby="partID" placeholder="Part ID" onChange={this.setState({partID: e.target.value})}/>
          </div>
          <div className="form-group">
            <label htmlFor="custID" className="form-label mt-4">Customer ID</label>
            <input type="number" className="form-control" id="custID" aria-describedby="custID" placeholder="Customer ID" onChange={this.setState({custID: e.target.value})}/>
          </div>
          <div className="form-group">
            <label htmlFor="orderQty" className="form-label mt-4">Order Quantity</label>
            <input type="number" className="form-control" id="orderQty" aria-describedby="orderQty" placeholder="Order Quantity" onChange={this.setState({orderQty: e.target.value})}/>
          </div>
          <div className="form-group">
            <label htmlFor="orderTotal" className="form-label mt-4">Order Total</label>
            <input type="number" className="form-control" id="orderTotal" min="0.01" step="0.01" aria-describedby="partPrice" placeholder="Order Total" onChange={this.setState({orderTotal: e.target.value})}/>
          </div>
          <div className="form-group">
            <label htmlFor="orderTax" className="form-label mt-4">Order Tax</label>
            <input type="number" className="form-control" id="orderTax" min="0.01" step="0.01" aria-describedby="orderTax" placeholder="Order Tax" onChange={this.setState({orderTax: e.target.value})}/>
          </div>
          <div className="form-group">
            <label htmlFor="shipping" className="form-label mt-4">Order Shipping</label>
            <input type="number" className="form-control" id="shipping" min="0.01" step="0.01" aria-describedby="shipping" placeholder="Order Shipping" onChange={this.setState({shipping: e.target.value})}/>
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
  export default Orders;