import React, { Component } from 'react';
import { SellMain, SellInputs } from 'components';
class Sell extends Component {
  render() {
    return (
      <div className="container">
        <div className="outer">
          <div className="inner">
            <SellMain />
            <SellInputs />
          </div>
        </div>
      </div>
    );
  }
}

export default Sell;
