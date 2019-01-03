import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">Tareas</a>
       </nav>
       <img src={logo} className='App-logo' alt='logo'></img>
      
      </div>
    );
  }
}

export default App;
