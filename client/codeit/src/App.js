import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import './components/css/main.css'
import Router from './router'
import Header from './components/layouts/header'
import Footer from './components/layouts/footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route component={Header} />
        <Route component={Router} />
        <Route component={Footer} />
      </div>
    );
  }
}

export default App;
