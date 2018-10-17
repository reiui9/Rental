import React, { Component } from 'react';

class SellInputs extends Component {
  render() {
    return (
      <form className="sell-inputs-form">
        <div className="sell-inputs-form-wrapper">
          <label for="category">category: </label>
        </div>
        <div className="sell-inputs-form-wrapper">
          <label for="title">Title: </label>
          <input type="text" className="sell-inputs-title" />
        </div>
        <div className="sell-inputs-form-wrapper">
          <label for="title">Title: </label>
          <input type="text" className="sell-inputs-title" />
        </div>
        <div className="sell-inputs-form-wrapper">
          <label for="title">Title: </label>
          <input type="text" className="sell-inputs-title" />
        </div>
        <div className="sell-inputs-form-wrapper">
          <label for="title">Title: </label>
          <input type="text" className="sell-inputs-title" />
        </div>
      </form>
    );
  }
}

export default SellInputs;
