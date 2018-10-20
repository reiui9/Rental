import React, { Component } from 'react';
import { SellMain, SellInputs } from 'components';
import { connect } from 'react-redux';
import { sellPostRequest } from 'actions/sell';

class Sell extends Component {
  constructor(props) {
    super(props);
    this.handlePost = this.handlePost.bind(this);
    this.state = {
      //
    };
  }

  handlePost({
    name,
    price,
    category,
    contents,
    tumbnail,
    image,
    deliveryMethod
  }) {
    return this.props
      .sellPostRequest({
        name,
        price,
        category,
        contents,
        tumbnail,
        image,
        deliveryMethod
      })
      .then(() => {
        if (this.props.status === 'SUCCESS') {
        } else {
        }
      });
  }

  render() {
    return (
      <div className="container">
        <div className="outer">
          <div className="inner">
            <SellMain />
            <SellInputs
              writer={this.props.params.username}
              onPost={this.handlePost}
              writer="kyk"
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    status: state.sell.status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sellPostRequest: ({
      name,
      price,
      category,
      contents,
      tumbnail,
      image,
      deliveryMethod
    }) => {
      return dispatch(
        sellPostRequest({
          name,
          price,
          category,
          contents,
          tumbnail,
          image,
          deliveryMethod
        })
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sell);
