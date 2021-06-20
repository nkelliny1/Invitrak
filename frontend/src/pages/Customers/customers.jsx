import React from 'react';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import Navigation from '../../components/Navigation/navigation';


class Customers extends React.Component {
    componentDidMount() {
      //initialize datatable
      $(document).ready(function () {
          $('#example').DataTable();
      });
   }
    render(){
      //Datatable HTML
    return (
        <div>
            <Navigation></Navigation>
      <div className="MainDiv">
        <div className="container">
        <h3 style={{marginTop: "20px", marginBottom: "20px"}}>Customers</h3>
            <table id="example" class="display">
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
                  <tr>
                      <td>ID</td>
                      <td>Name</td>
                      <td>Address</td>
                      <td>City</td>
                      <td>State</td>
                      <td>Zip</td>
                      <td>Country</td>
                      <td>Phone</td>
                      <td>Email</td>
                      <td>Type</td>
                      <td>
                      <ul className="navbar-nav me-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Actions</a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Edit</a>
                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Delete</a>
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
            
          </div>
        </div>
        </div>
    );
  }
  }
  export default Customers;