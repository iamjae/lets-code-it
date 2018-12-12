import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import './components/css/main.css'
import Router from './router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route component={Router} />
      </div>
    );
  }
}

export default App;
