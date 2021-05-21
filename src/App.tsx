import React from "react";
import "./App.css";
import Employee from "./Models/employee";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./components/employees";
import http from "./httpServices/http";
import { Link, Route } from "react-router-dom";
import Form from "./components/form";

class App extends React.Component {
  apiEndPoint: string = "https://localhost:5001/api/Employees";
  state = {
    emp: [] as Employee[],
  };

  getEmployee = async () => {
    await http.get(this.apiEndPoint).then((response: any) => {
      this.setState({ emp: response.data });
    });
  };

  updateEmployee = async () => {
    await http.put(this.apiEndPoint);
  };

  deleteEmployee = async () => {
    const id = 118;
    await http.delete(`${this.apiEndPoint}/${id}`);
  };

  render() {
    const { emp } = this.state;
    return (
      <div>
        <Link to="/form">
          <button
            type="button"
            className="btn btn-outline-primary"
          >
            Add
          </button>
        </Link>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={this.updateEmployee}
        >
          Update
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={this.deleteEmployee}
        >
          Delete
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={this.getEmployee}
        >
          Get
        </button>
        <Employees emp={emp} />
        <Route path="/form" component={Form}></Route>
      </div>
    );
  }
}

export default App;
