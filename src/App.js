import logo from './logo.svg';
import './App.css';
import Canvas from './Canvas.js';
import { Component } from 'react';

class App extends Component {



  render() {
    return (
      <Canvas
        imageToShow={logo}
        width="400"
        height="200"/>
    )
  }
}

export default App;
