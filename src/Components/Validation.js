import React, { Component } from 'react';
import LocationMap from './InteractiveMap';
import MapStyled from './mapstyled';

class Validation extends Component {
  render() {
    return (
      <div>
        <MapStyled />
        <p>Pantalla tutor</p>
        <LocationMap />
      </div>
    );
  }
}
export default Validation;
