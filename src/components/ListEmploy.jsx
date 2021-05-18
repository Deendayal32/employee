import React, { Component } from 'react';
import EmployeeService from '../service/EmployeeService';

class ListEmploy extends Component {
    constructor(props){
        super(props)
        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
    }
    addEmployee(){
        this.props.history.push('/add-employee');
    }
    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }
    render() {
        return (
            <div>
               <h2 className="text-center">Employee List</h2> 
               <div className ="row">
                   <button className = "btn btn-primary" onClick={this.addEmployee}>AddEmployee</button>
               </div>
               <div className = "row">
                   <table className = "table table-striped table-border">
                       <thead>
                           <tr>
                               <th>Employee FName</th>
                               <th>Employee LName</th>
                               <th>Employee Email Id</th>
                               <th>Actions</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               this.state.employees.map(
                                   employee =>
                                   <tr key = {employee.id}>
                                       <td>{employee.firstName}</td>
                                       <td>{employee.lastName}</td>
                                       <td>{employee.emailId}</td>
                                    </tr>
                               )
                           }
                       </tbody>
                   </table>
               </div>
            </div>
        );
    }
}

export default ListEmploy;