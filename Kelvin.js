import React from "react";
import { Alert } from "reactstrap";

class Kelvin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Alert color="warning">
        Kelvin: {this.props.celciusSicaklik + 273.15} K
      </Alert>
    );
  }
}

export default Kelvin;
