import React from 'react';
import axios from 'axios';
import Navigation from '../../../components/Navigation/navigation';


class AddOrder extends React.Component {
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
        this.addOrder = this.addOrder.bind(this);
      }
    componentDidMount() {
   }
   addOrder(e) {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'https://localhost:44319/api/orders',
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
      this.setState({errorMessage: "Order added successfully!"})
    })
    .catch(function (error) {
      console.log(error);
      this.setState({errorMessage: "Oops something went wrong. Please try again later."})
    });
  }
    render(){
    return (
        <div>
            <Navigation></Navigation>
            <form onSubmit={this.addOrder}>
        <fieldset>
          <legend>Add Order(s)</legend>
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
    );
  }
  }
  export default AddOrder;