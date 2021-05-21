import React from "react";

interface Employee extends React.Component {
  id: any;
  firstName: string;
  lastName: string;
  preferredName: string;
  email: string;
  jobTitle: string;
  office: string;
  department: string;
  phoneNumber: string;
  skypeId: string;
  imageUrl: string;
}
export default Employee;
