import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';

class Muro extends Component {
  onClick = () => {
    console.log('hola soy el evento');
  };

  render() {
    return (
      <Navbar brand="AppName" left>
        <NavItem href="get-started.html">¡Hola Chofer!</NavItem>
        <NavItem href="components.html">Inicia 7:00 am.</NavItem>
        <NavItem href="">Tempo estimado del viaje</NavItem>
        <NavItem href="./Lector.js" onClick={this.onClick}>
          Lector QR
        </NavItem>

        <NavItem href="">Cerrar Sesión</NavItem>
      </Navbar>
    );
  }
}

export default Muro;
