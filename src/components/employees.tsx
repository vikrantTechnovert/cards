import React from "react";
import Employee from "../Models/employee";

export interface props {
  emp: Employee[];
}

class Employees extends React.Component<props> {
  render() {
    const { emp } = this.props;
    return (
      <div>
        {
          <table className="table table-bordered">
            Employee Details
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Email</th>
              </tr>
            </thead>
            {emp.map((emp, index) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.firstName}</td>
                <td>{emp.email}</td>
              </tr>
            ))}
          </table>
        }
      </div>
    );
  }
}

export default Employees;
