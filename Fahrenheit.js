import React from "react";
import { Alert } from "reactstrap";

class Fahrenheit extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Alert color="warning">
        Fahrenheit: {this.props.celciusSicaklik * (9 / 5) + 32} F
      </Alert>
    );
  }
}
export default Fahrenheit;
