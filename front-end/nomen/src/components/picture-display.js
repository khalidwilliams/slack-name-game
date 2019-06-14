import React, { Component } from 'react';

function PictureDisplay(props) {
  return (
    <article>
      <img src={props.image}/>
    </article>
  )
}

export default PictureDisplay;
