import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <h1>Hello</h1>
      </div>
    );
  }
}
export default App;
