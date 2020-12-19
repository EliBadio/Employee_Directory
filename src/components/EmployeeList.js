import React from 'react';
import Employee from './Employee';

function EmployeeList(props) {
  function searchList() {
    let employeeList = props.employees;
    if (employeeList.length === 0) {
      return employeeList;
    } else if (props.search !== '') {
      employeeList = employeeList.filter(employee => {
        return (
          employee.name.first
            .toLowerCase()
            .includes(props.search.toLowerCase()) ||
          employee.name.last
            .toLowerCase()
            .includes(props.search.toLowerCase()) ||
          employee.location.country
            .toLowerCase()
            .includes(props.search.toLowerCase()) ||
          employee.phone.toLowerCase().includes(props.search.toLowerCase()) ||
          employee.email.toLowerCase().includes(props.search.toLowerCase())
        );
      });
    }
    return employeeList;
  }

  return (
    <table className='employee-table'>
      <thead>
        <tr>
          <th></th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Country</th>
          <th>Phone Number</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {searchList().map(employee => (
          <Employee
            key={employee.name.first + employee.name.last}
            employee={employee}
          />
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeList;
