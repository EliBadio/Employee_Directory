import React from 'react';

function Employee(props) {
  return (
    <tr>
      <td>
        <img src={props.employee.picture.medium} alt='Employee' />
      </td>
      <td>{props.employee.name.first}</td>
      <td>{props.employee.name.last}</td>
      <td>{props.employee.location.country}</td>
      <td>{props.employee.phone}</td>
      <td>{props.employee.email}</td>
    </tr>
  );
}

export default Employee;
