import React, { Component } from 'react';
import logo from './logo.svg';
import PictureDisplay from './components/picture-display.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStudent: {
        name:'',
        image:'',
      }
    }
  }

  render() {
    return (
      <div className="App">
        <PictureDisplay image={this.state.currentStudent.image}/>
      </div>
    );

  }
}

export default App;
