import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import { Button, Col, Row } from 'react-materialize';

class Lector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      delay: 500,
      result: '',
      exit: false
    };

    this.handleScan = this.handleScan.bind(this);
  }

  handleScan(result) {
    if (result) {
      this.setState({ result });
      this.props.setTimeout(1000);
    }
  }

  handleError(err) {
    console.error(err);
  }
  exit = () => {
    this.setState.exit = true;
    console.log(this.state.exit);
  };
  render() {
    const previewStyle = {
      height: 240,
      width: 320
    };

    if (this.state.exit === true) {
      return <h4>Enviado</h4>;
    }
    return (
      <div className="container">
        <Row>
          <Col s={12}>
            <div className="camara">
              {' '}
              <QrReader
                delay={this.state.delay}
                style={previewStyle}
                onError={this.handleError}
                onScan={this.handleScan}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <Button
              small
              waves="white"
              onClick={this.exit()}
              className="btn-qr"
            >
              Enviar
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Lector;
