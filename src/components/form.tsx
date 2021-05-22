import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import http from "../httpServices/http";
import store from "../store/store";
import { increment } from "../store/actions";

class Form extends React.Component {
  apiEndPoint: string = "https://localhost:5001/api/Employees";

  state = {
    emp: {} as any,
  };

  handleChange = (e: any) => {
    const employee = { ...this.state.emp };
    employee[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ emp: employee });
  };

  addEmployee = async () => {
    await http.post(this.apiEndPoint, this.state.emp);
    store.dispatch(increment());
    console.log(store.getState());
  };

  render() {
    const { emp } = this.state;
    return (
      <div>
        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            className="form-control"
            value={emp.firstname}
            name="firstName"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            value={emp.lastName}
            name="lastName"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            value={emp.email}
            name="email"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="number"
            className="form-control"
            value={emp.phoneNumber}
            name="phoneNumber"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-default"
            onClick={this.addEmployee}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}
export default Form;
