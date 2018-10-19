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
    pictureLeft,
    writer
  }) {
    return this.props
      .sellPostRequest({
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
        pictureLeft,
        writer
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
            <SellInputs onPost={this.handlePost} writer="kyk" />
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
      pictureLeft,
      writer
    }) => {
      return dispatch(
        sellPostRequest({
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
          pictureLeft,
          writer
        })
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sell);
