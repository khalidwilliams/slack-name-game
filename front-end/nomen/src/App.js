import React, { Component } from 'react';
import logo from './logo.svg';
import PictureDisplay from './components/pictureDisplay.js';
import NameChoice from './components/nameChoice.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStudent: {
        name:'',
        image:'',
      },
      nameChoices: ['Alpha', 'Beta', 'Gamma', 'Delta'],
    }
  }

  render() {
    return (
      <div className="App">
        <header className="header">nomen</header>
        <section className="name-choice-container">
          <NameChoice nameOption={this.state.nameChoices[0]} />
          <NameChoice nameOption={this.state.nameChoices[1]} />
          <NameChoice nameOption={this.state.nameChoices[2]} />
          <NameChoice nameOption={this.state.nameChoices[3]} />
        </section>
        <PictureDisplay image={this.state.currentStudent.image}/>
      </div>
    );

  }
}

export default App;
