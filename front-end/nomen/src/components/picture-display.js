import React, { Component } from 'react';

function PictureDisplay() {
  return (
    <div>
      <img src={this.props.img}/>
    </div>
  )
}

module.exports = PictureDisplay;
