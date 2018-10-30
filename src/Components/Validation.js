import React, { Component } from 'react';
import LocationMap from './InteractiveMap';
import MapStyled from './mapstyled';

class Validation extends Component {
  render() {
    return (
      <div>
        <MapStyled />
        <div>
          <LocationMap />
        </div>
      </div>
    );
  }
}
export default Validation;
