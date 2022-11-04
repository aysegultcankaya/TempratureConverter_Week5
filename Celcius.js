import React from "react";
import { Alert } from "reactstrap";

class Celcius extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Alert color="warning">Celcius: {this.props.celciusSicaklik} C</Alert>
    );
  }
}
export default Celcius;
