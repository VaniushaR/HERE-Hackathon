import React, { Component } from 'react';
import { Navbar, NavItem, Button, Card } from 'react-materialize';

class Tut extends Component {
  render() {
    return (
      <Navbar brand="School Tracker" className="color" left>
        <NavItem>
          <Card className="purple" textClassName="white-text">
            <p>Alumnos</p>
            Renata Hernández Rodrigo Hernández
          </Card>
        </NavItem>
        <NavItem className="btn-r" href="">
          <Button> Rutas </Button>
        </NavItem>
        <NavItem className="btn-m" href="">
          <Button> Mensajes </Button>
        </NavItem>
        <NavItem className="log-out" href="">
          {' '}
          Cerrar Sesión{' '}
        </NavItem>
      </Navbar>
    );
  }
}

export default Tut;
