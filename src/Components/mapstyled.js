import React, { Component } from 'react';

class MapStyled extends Component {
  render() {
    return (
      <div>
        <div
          id="map"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'white',
            padding: '5%'
          }}
        />
      </div>
    );
  }
}

export default MapStyled;
