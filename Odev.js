import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import Celcius from "./Celcius";
import Fahrenheit from "./Fahrenheit";
import Kelvin from "./Kelvin";

class Odev extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sicaklik: 0,
    };
  }

  sicaklikArtir = () => {
    this.setState({ sicaklik: this.state.sicaklik + 1 });
  };

  sicaklikAzalt = () => {
    this.setState({ sicaklik: this.state.sicaklik - 1 });
  };

  render() {
    return (
      <div>
        <div
          className="text-center display-3"
          // style={{textAlign: "center", fontSize: 32, fontWeight: "bold",}}
        >
          Hava Durumu
        </div>
        <Container className="mt-5">
          <div></div>
          <Row className="mb-2">
            <Col className="mb-5" xs={12} sm={2} md={6} lg={6} xl={6} xxl={6}>
              <div className="display-6">
                Şu anki Sıcaklık:<span> </span>
                <span style={{ fontWeight: "bold" }}>
                  {this.state.sicaklik}
                </span>
                <span> </span>
                Derece
              </div>
            </Col>
            <Col className="mb-5" xs={12} sm={2} md={2} lg={2} xl={2} xxl={2}>
              <Button
                color="info"
                className="btn-lg"
                onClick={this.sicaklikArtir}
              >
                Sıcaklık Artır
              </Button>
            </Col>
            <Col className="mb-5" xs={12} sm={2} md={2} lg={2} xl={2} xxl={2}>
              <Button
                color="info"
                className="btn-lg"
                onClick={this.sicaklikAzalt}
              >
                Sıcaklık Azalt
              </Button>
            </Col>
          </Row>
          <Row className="mx-md-n5">
            <Col
              className="px-md-2"
              xs={12}
              sm={4}
              md={4}
              lg={4}
              xl={4}
              xxl={4}
            >
              <div>
                <Celcius celciusSicaklik={this.state.sicaklik} />
              </div>
            </Col>
            <Col
              className="px-md-2"
              xs={12}
              sm={4}
              md={4}
              lg={4}
              xl={4}
              xxl={4}
            >
              <div>
                <Kelvin celciusSicaklik={this.state.sicaklik} />
              </div>
            </Col>
            <Col
              className="px-md-2"
              xs={12}
              sm={4}
              md={4}
              lg={4}
              xl={4}
              xxl={4}
            >
              <div>
                <Fahrenheit celciusSicaklik={this.state.sicaklik} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}



export default Odev;
