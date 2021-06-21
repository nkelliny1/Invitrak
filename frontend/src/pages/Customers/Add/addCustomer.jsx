import React from 'react';
import axios from 'axios';
import Navigation from '../../../components/Navigation/navigation';


class AddCustomer extends React.Component {
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
        this.addCustomer = this.addCustomer.bind(this);
      }
    componentDidMount() {
   }
   addCustomer(e) {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'https://localhost:44319/api/customers',
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
      this.setState({errorMessage: "Customer added successfully!"})
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
            <form onSubmit={this.addCustomer}>
        <fieldset>
          <legend>Add Customer(s)</legend>
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
    );
  }
  }
  export default AddCustomer;