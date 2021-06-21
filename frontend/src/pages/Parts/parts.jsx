import React from 'react';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';
import axios from 'axios';
import Navigation from '../../components/Navigation/navigation';

class Parts extends React.Component {
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
      }
    componentDidMount() {
      //initialize datatable
      $(document).ready(function () {
          $('#partsTable').DataTable();
      });

      this.deletePart = this.deletePart.bind(this);

      axios({
            method: 'get',
            url: 'https://localhost:44319/api/parts',
            headers: { }
        })
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        let parts = response.data;
        })
        .catch(function (error) {
        console.log(error);
        });

        const partsList = parts.map((part) =>
            <tr>
            <td>{part.ID}</td>
            <td>{part.Name}</td>
            <td>{part.Description}</td>
            <td>{part.Quantity}</td>
            <td>{part.Price}</td>
            <td>{part.CreatedDate}</td>
            <td>{part.CreatedBy}</td>
            <td>{part.ModifiedDate}</td>
            <td>{part.ModifiedBy}</td>
            <td>
            <ul className="navbar-nav me-auto">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Actions</a>
                <div class="dropdown-menu">
                    <button type="button" class="dropdown-item" data-toggle="modal" data-target="#editModal" data-whatever={part.ID}>Edit</button>
                    <button type="button" class="dropdown-item" onClick={this.deletePart} value={part.ID}>Delete</button>
                </div>
            </li>
            </ul>
            </td>
        </tr>
        );

   }

   deletePart(e) {
    e.preventDefault();
    axios({
      method: 'delete',
      url: 'https://localhost:44319/api/parts/' + e.target.value,
      headers: {}
    })
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      this.setState({errorMessage: "Part deleted successfully."})
    })
    .catch(function (error) {
      console.log(error);
      this.setState({errorMessage: "Oops, something went wrong. Please try again later."})
    });
  }

  editPart(e) {
    e.preventDefault();
    axios({
      method: 'put',
      url: 'https://localhost:44319/api/parts/' + e.target.value,
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
      this.setState({errorMessage: "Part edited successfully."})
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
        <h3 style={{marginTop: "20px", marginBottom: "20px"}}>Parts</h3>
        <button type="button" className="btn btn-primary btn-lg" href="/parts/new">Add Part(s)</button>
            <table id="partsTable" class="display">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Date Created</th>
                      <th>Created By</th>
                      <th>Date Modified</th>
                      <th>Modified By</th>
                      <th>Actions</th>
                  </tr>
              </thead>
              <tbody>
                  {partsList}
              </tbody>
              <tfoot>
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Date Created</th>
                      <th>Created By</th>
                      <th>Date Modified</th>
                      <th>Modified By</th>
                      <th>Actions</th>
                  </tr>
              </tfoot>
          </table>
          <div className="modal fade" id="editModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Part</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
            <form onSubmit={this.editPart}>
        <fieldset>
          <legend>Edit Part</legend>
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
          </div>
        </div>
      </div>
          </div>
        </div>
        </div>
    );
  }
  }
  export default Parts;