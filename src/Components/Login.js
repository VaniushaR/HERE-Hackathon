import React, { Component } from 'react';
import { Row, Input, Button, Container } from 'react-materialize';
import Validation from './Validation';
import Muro from './Chofer';
let Val;
let Chofer;

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
    {
      return (
        <div>
          <Container className="login">
            <Row>
              <h1> Login </h1>
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
            </Row>
          </Container>
          {Val}
          <div />
        </div>
      );
    }
  }
}
export default Login;
