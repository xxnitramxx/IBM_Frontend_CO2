import "./App.css";
import React from "react";

class Department extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      department: props.department,
      sourceType: props.source_type,
      emissionsMtco2e: props.emissions_mtco2e,
      id: props.key,
    };
  }

  render() {
    return (
      <tr key={"row_" + this.state.id}>
        <td className="depCol">{this.state.department}</td>
        <td className="sourceCol">{this.state.sourceType}</td>
        <td className="coCol">
          {(Math.round(this.state.emissionsMtco2e * 10000000) / 10000000)}
        </td>
      </tr>
    );
  }
}

export default Department;
