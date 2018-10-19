import React, { Component } from 'react';

class SellInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      product: '',
      condition: '',
      price: '',
      purchaseDate: '',
      pictureMain: '',
      pictureTop: '',
      pictureBottom: '',
      pictureFront: '',
      pictureBack: '',
      pictureRight: '',
      pictureLeft: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handlePost() {
    const {
      category,
      product,
      condition,
      price,
      purchaseDate,
      pictureMain,
      pictureTop,
      pictureBottom,
      pictureFront,
      pictureBack,
      pictureRight,
      pictureLeft
    } = this.state;
    const { writer } = this.props;
    this.props
      .onPost({
        writer,
        category,
        product,
        condition,
        price,
        purchaseDate,
        pictureMain,
        pictureTop,
        pictureBottom,
        pictureFront,
        pictureBack,
        pictureRight,
        pictureLeft
      })
      .then(() => {
        const { history } = this.props;
        history.push('/home');
      });
  }

  render() {
    return (
      <div className="sell-inputs-form">
        <div className="sell-inputs-form-wrapper">
          <label for="category">category: </label>
          <div className="sell-inputs-form-container">
            <form action="#">
              <p>
                <label>
                  <input name="group1" type="radio" checked />
                  <span>Red</span>
                </label>
              </p>
              <p>
                <label>
                  <input name="group1" type="radio" />
                  <span>Yellow</span>
                </label>
              </p>
              <p>
                <label>
                  <input class="with-gap" name="group1" type="radio"  />
                  <span>Green</span>
                </label>
              </p>
              <p>
                <label>
                  <input name="group1" type="radio" disabled="disabled" />
                  <span>Brown</span>
                </label>
              </p>
            </form>
          </div>
        </div>
        <div className="sell-inputs-form-wrapper">
          <label for="product">Product: </label>
          <input
            type="text"
            className="sell-inputs-product"
            name="product"
            onChange={this.handleChange}
          />
        </div>
        <div className="sell-inputs-form-wrapper">
          <label for="condition">Condition: </label>
          <input
            type="text"
            className="sell-inputs-condition"
            name="condition"
            onChange={this.handleChange}
          />
        </div>
        <div className="sell-inputs-form-wrapper">
          <label for="price">Price: </label>
          <input
            type="text"
            className="sell-inputs-price"
            name="price"
            onChange={this.handleChange}
          />
        </div>
        <div className="sell-inputs-form-wrapper">
          <label for="purchaseDate">Purchase Date: </label>
          <input
            type="text"
            className="sell-inputs-purchaseDate"
            name="purchaseDate"
            onChange={this.handleChange}
          />
        </div>
        <div className="sell-inputs-form-wrapper">
          <label for="pictures">Pictures: </label>
          <input
            type="text"
            className="sell-inputs-pictures"
            name="pictures"
            onChange={this.handleChange}
          />
        </div>
        <div className="sell-inputs-form-submit">
          <a onClick={this.handlePost} className="waves-effect waves-light btn">
            SUBMIT
          </a>
        </div>
      </div>
    );
  }
}

SellInputs.propTypes = {
  writer: React.PropTypes.string,
  onPost: React.PropTypes.func
};

SellInputs.defaultProps = {
  writer: '',
  onPost: ({
    category,
    product,
    condition,
    price,
    purchaseDate,
    pictureMain,
    pictureTop,
    pictureBottom,
    pictureFront,
    pictureBack,
    pictureRight,
    pictureLeft
  }) => {
    console.error('onPost not defined');
  }
};

export default SellInputs;
