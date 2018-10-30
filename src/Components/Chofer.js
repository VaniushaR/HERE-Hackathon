import React, { Component } from 'react';
import { Navbar, NavItem, Button } from 'react-materialize';
import Lector from './Lector';

let QR;

class Muro extends Component {
  runLector = () => {
    console.log('hola soy el evento');
    return (QR = <Lector />);
  };

  render() {
    return (
      <div>
        <div>
          <Navbar brand="School Tracker" className="color" left>
            <NavItem href="get-started.html">¡Hola Chofer!</NavItem>
            <NavItem href="components.html">Inicia 7:00 am.</NavItem>
            <NavItem href="">Tempo estimado del viaje</NavItem>
            <Button onClick={this.runLector()}>Lector QR</Button>

            <NavItem>Cerrar Sesión</NavItem>
          </Navbar>
        </div>
        <div>{QR}</div>
      </div>
    );
  }
}

export default Muro;
