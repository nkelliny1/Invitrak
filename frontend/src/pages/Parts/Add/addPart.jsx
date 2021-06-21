import React from 'react';
import axios from 'axios';
import Navigation from '../../../components/Navigation/navigation';


class AddPart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          partName: '',
          partDesc: '',
          partQty: '',
          partPrice: '',
          partCreateDate: '',
          partCreateBy: '',
          partModifyDate: '',
          partModifyBy: '',
        };
        this.addPart = this.addPart.bind(this);
      }
    componentDidMount() {
   }
   addPart(e) {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'https://localhost:44319/api/parts',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : JSON.stringify({
        'Name': this.state.partName,
        'Description': this.state.partDesc,
        'Quantity': this.state.partQty,
        'Price': this.state.partPrice,
        'CreatedDate': this.state.partCreateDate,
        'CreatedBy': this.state.partCreateBy,
        'ModifiedDate': this.state.partModifyDate,
        'ModifiedBy':  this.state.partModifyBy,
      })
    })
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      this.setState({errorMessage: "Part added successfully!"})
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
            <form onSubmit={this.addPart}>
        <fieldset>
          <legend>Add Part(s)</legend>
          <div className="form-group">
            <label htmlFor="partName" className="form-label mt-4">Part Name</label>
            <input type="text" className="form-control" id="partName" aria-describedby="partName" placeholder="Part Name" onChange={this.setState({partName: e.target.value})}/>
          </div>
          <div className="form-group">
            <label htmlFor="partDesc" className="form-label mt-4">Part Description</label>
            <textarea className="form-control" id="partDesc" rows={3} defaultValue={""} onChange={this.setState({partDesc: e.target.value})}/>
          </div>
          <div className="form-group">
            <label htmlFor="partQty" className="form-label mt-4">Part Quantity</label>
            <input type="number" className="form-control" id="partQty" aria-describedby="partQty" placeholder="Part Quantity" onChange={this.setState({partQty: e.target.value})}/>
          </div>
          <div className="form-group">
            <label htmlFor="partPrice" className="form-label mt-4">Part Price</label>
            <input type="number" className="form-control" id="partPrice" min="0.01" step="0.01" aria-describedby="partPrice" placeholder="Part Price" onChange={this.setState({partPrice: e.target.value})}/>
          </div>
          <div className="form-group">
            <label htmlFor="partCreateDate" className="form-label mt-4">Created Date</label>
            <input type="datetime-local" className="form-control" id="partCreateDate" aria-describedby="partCreateDate" placeholder="Date Created" onChange={this.setState({partCreateDate: e.target.value})}/>
          </div>
          <div className="form-group">
            <label htmlFor="partCreateBy" className="form-label mt-4">Part Created By</label>
            <input type="text" className="form-control" id="partCreateBy" aria-describedby="partCreateBy" placeholder="Part Created By" onChange={this.setState({partCreateBy: e.target.value})}/>
          </div>
          <div className="form-group">
            <label htmlFor="partModifyDate" className="form-label mt-4">Modified Date</label>
            <input type="datetime-local" className="form-control" id="partModifyDate" aria-describedby="partModifyDate" placeholder="Date Modified" onChange={this.setState({partModifyDate: e.target.value})}/>
          </div>
          <div className="form-group">
            <label htmlFor="partModifyBy" className="form-label mt-4">Part Modified By</label>
            <input type="text" className="form-control" id="partModifyBy" aria-describedby="partModifyBy" placeholder="Part Modified By" onChange={this.setState({partModifyBy: e.target.value})}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </fieldset>
      </form>
        </div>
    );
  }
  }
  export default AddPart;