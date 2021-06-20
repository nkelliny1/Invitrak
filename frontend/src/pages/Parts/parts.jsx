import React from 'react';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery'; 
import Navigation from '../../components/Navigation/navigation';

class Parts extends React.Component {
    componentDidMount() {
      //initialize datatable
      $(document).ready(function () {
          $('#partsTable').DataTable();
      });
      
      $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('whatever') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.modal-title').text('New message to ' + recipient)
        modal.find('.modal-body input').val(recipient)
      })
   }
    render(){
      //Datatable HTML
    return (
    <div>
        <Navigation></Navigation>
      <div className="MainDiv">
        <div className="container">
        <h3 style={{marginTop: "20px", marginBottom: "20px"}}>Parts</h3>
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
                  <tr>
                      <td>ID</td>
                      <td>Name</td>
                      <td>Description</td>
                      <td>Quantity</td>
                      <td>Price</td>
                      <td>Date Created</td>
                      <td>Created By</td>
                      <td>Date Modified</td>
                      <td>Modified By</td>
                      <td>
                      <ul className="navbar-nav me-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Actions</a>
                            <div class="dropdown-menu">
                                <button type="button" class="dropdown-item" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Edit</button>
                                <button type="button" class="dropdown-item" data-toggle="modal" data-target="#exampleModal" data-whatever="@fat">Delete</button>
                            </div>
                        </li>
                        </ul>
                        </td>
                  </tr>
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
          <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">New message</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                  <input type="text" className="form-control" id="recipient-name" />
                </div>
                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">Message:</label>
                  <textarea className="form-control" id="message-text" defaultValue={""} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Send message</button>
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