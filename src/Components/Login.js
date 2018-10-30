import React, { Component } from 'react';
import { Row, Input, Button, Container, Col } from 'react-materialize';
import Validation from './Validation';
import Muro from './Chofer';
import Tut from './Tutor';

let Val;
let Chofer;
let Tuto;
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutor: false,
      teacher: false,
      driver: false
    };
    console.log(this.state.tutor);
  }

  LogIn = () => {
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
    console.log(emailInput);
    console.log(typeof passwordInput);
    Val = <Validation />;
    Chofer = <Muro />;
    Tuto = <Tut />;

    if (emailInput === 'tutor@schooltracker.com' && passwordInput === '12345') {
      this.setState({ tutor: (this.state.tutor = true) });
      console.log('tutor', this.state.tutor);
      alert('login exitoso');
    } else if (
      emailInput === 'teacher@schooltracker.com' &&
      passwordInput === '12345'
    ) {
      this.setState({ teacher: (this.state.teacher = true) });
      alert('login exitoso');
    } else if (
      emailInput === 'driver@schooltracker.com' &&
      passwordInput === '12345'
    ) {
      this.setState({ driver: (this.state.driver = true) });
      alert('login exitoso');
    } else {
      alert(
        'Password o Contraseña incorrecta, si necesitas restablecer tus datos ponte en contacto con la Oficina de Control Escolar, 55667000'
      );
    }
    //conditional rendering:
    console.log(this.state.tutor, this.state.teacher, this.state.driver);

    if (this.state.tutor === true) {
      return { Val };
    } else if (this.state.teacher === true) {
      return { Val };
    } else if (this.state.driver === true) {
      return { Chofer };
    } else {
      return <p> X </p>;
    }
  };

  render() {
    if (this.state.teacher === true || this.state.driver === true) {
      return (
        <div>
          <div>{Chofer}</div>
          <div>{Val}</div>
        </div>
      );
    } else if (this.state.tutor === true) {
      return (
        <div>
          <div>{Tuto}</div>
          <div>{Val}</div>
        </div>
      );
    }
    return (
      <div className="login">
        <Row>
          <Col s={12}>
            <Input
              type="email"
              placeholder="Email"
              id="email"
              s={12}
              m={12}
              l={10}
            />
            <Input
              type="password"
              id="password"
              placeholder="password"
              s={12}
              m={12}
              l={10}
            />
            <Button
              className="btn-login"
              waves="light"
              node="a"
              onClick={this.LogIn}
            >
              Ingresar
            </Button>
          </Col>
        </Row>
        <div />
      </div>
    );
  }
}

export default Login;
