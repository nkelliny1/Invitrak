import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import Navigation from '../../components/Navigation/navigation';
import {Bar, Line, Pie, Doughnut} from 'react-chartjs-2';

const state = {
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'Parts',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }


class Dashboard extends React.Component {
    componentDidMount() {
    }
    render(){
      //Datatable HTML
    return (
        <div>
            <Navigation></Navigation>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Bar
                            data={state}
                            options={{
                                title:{
                                display:true,
                                text:'Recent Sales',
                                fontSize:20
                                },
                                legend:{
                                display:true,
                                position:'right'
                                }
                            }}
                        />
                    </div>
                    <div className="col-md-6">
                        <div>
                        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Orders',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
                        </div>
                    </div>
                </div>
      </div>
        </div>
    );
  }
  }
  export default Dashboard;