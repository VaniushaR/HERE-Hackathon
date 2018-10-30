import React, { Component } from 'react';
import { HereMaping } from './HereMaping';
import MapStyled from './mapstyled';

const showPosition = position => {
  let x = position.coords.latitude.toString();
  let y = position.coords.longitude.toString();

  console.log(x, y);
  let coordsCurrent = x + ',' + y;
  console.log(coordsCurrent);

  return HereMaping(coordsCurrent);
};

class LocationMap extends Component {
  refreshLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);
    console.log('sending');

    return null;
  }

  render() {
    this.refreshLocation();
    return (
      <div>
        <MapStyled />
      </div>
    );
  }
}

export default LocationMap;

/*    setInterval(() => {
  }, 1000);
  */
