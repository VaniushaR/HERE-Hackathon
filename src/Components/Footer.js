import React, { Component } from 'react';
import { Footer } from 'react-materialize';

class Footer1 extends Component {
  render() {
    return (
      <div>
        <Footer
          className="grey-text text-lighten-4 right"
          copyrights="copy 2018 Copyright Text"
        />
      </div>
    );
  }
}

export default Footer1;
