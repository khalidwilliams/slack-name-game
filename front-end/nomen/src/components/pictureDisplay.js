import React, { Component } from 'react';

function PictureDisplay(props) {
  return (
    <article className="student-picture">
      <img src={props.image}/>
    </article>
  )
}

export default PictureDisplay;
