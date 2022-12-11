import React, { Component } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Pokemon from './components/Pokemon';

import backgroundImage from './components/pattern.png';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App" style={{ background: `url(${backgroundImage})`}}>
        <Navbar />
      <div className="container">
          <Routes>
            <Route exact path="/" element={<Dashboard/>} />
            <Route exact path="/pokemon/:pokemonIndex" element={<Pokemon/>} />
          </Routes>
         </div>
        </div>
      </Router>
    );
  }
}


export default App;
