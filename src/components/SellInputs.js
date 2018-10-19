import React, { Component } from 'react';

class SellInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      category: '',
      contents: '',
      tumbnail: '',
      image: '',
      deliveryMethod: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePost = this.handlePost.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDeliverClick = this.handleDeliverClick.bind(this);
  }

  handleDeliverClick(e) {
    this.setState({
      deliveryMethod: e.target.id
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.value);
  }

  handleClick(e) {
    this.setState({
      category: e.target.id
    });
  }

  handlePost() {
    const {
      name,
      price,
      category,
      contents,
      tumbnail,
      image,
      deliveryMethod
    } = this.state;
    const { writer } = this.props;
    this.props
      .onPost({
        name,
        price,
        category,
        writer,
        contents,
        tumbnail,
        image,
        deliveryMethod
      })
      .then(() => {
        const { history } = this.props;
        history.push('/home');
      });
  }

  render() {
    const { category, deliveryMethod } = this.state;
    return (
      <div className="sell-inputs-wrapper">
        <label className="category-label" for="category">
          Category
        </label>
        <p>
          <input
            className="with-gap"
            type="radio"
            checked={category === 'drone'}
          />
          <label
            value="drone"
            name="category"
            id="drone"
            onClick={this.handleClick}
          >
            Drone
          </label>
        </p>
        <p>
          <input
            className="with-gap"
            type="radio"
            checked={category === 'segway'}
          />
          <label
            value="segway"
            name="category"
            id="segway"
            onClick={this.handleClick}
          >
            Segway
          </label>
        </p>
        <p>
          <input
            className="with-gap"
            type="radio"
            checked={category === 'gopro'}
          />
          <label
            value="gopro"
            name="category"
            id="gopro"
            onClick={this.handleClick}
          >
            GoPro
          </label>
        </p>
        <p>
          <input
            className="with-gap"
            type="radio"
            checked={category === 'playstation'}
          />
          <label
            value="playstation"
            name="category"
            id="playstation"
            onClick={this.handleClick}
          >
            PlayStation
          </label>
        </p>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                id="name"
                type="text"
                onChange={this.handleChange}
                name="name"
              />
              <label for="last_name">Product Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="price"
                type="text"
                onChange={this.handleChange}
                name="price"
              />
              <label for="last_name">Price</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="contents"
                type="text"
                onChange={this.handleChange}
                name="contents"
              />
              <label for="last_name">Details</label>
            </div>
          </div>
          <label className="deliveryMethod-label" for="deliveryMethod">
            How to receive
          </label>
          <p>
            <input
              className="with-gap"
              type="radio"
              checked={deliveryMethod === 'delivery'}
            />
            <label
              value="delivery"
              name="deliveryMethod"
              id="delivery"
              onClick={this.handleDeliverClick}
            >
              Delivery
            </label>
          </p>
          <p>
            <input
              className="with-gap"
              type="radio"
              checked={deliveryMethod === 'directlyReceived'}
            />
            <label
              value="directlyReceived"
              name="deliveryMethod"
              id="directlyReceived"
              onClick={this.handleDeliverClick}
            >
              Directly received
            </label>
          </p>
        </form>
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
    name,
    price,
    category,
    writer,
    contents,
    tumbnail,
    image,
    deliveryMethod
  }) => {
    console.error('onPost not defined');
  }
};

export default SellInputs;
