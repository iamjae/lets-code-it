import React, { Component } from 'react'
import {Link } from 'react-router-dom'

export default class header extends Component {
  render() {
    return (
      <div>
          <nav className="navbar navbar-expand-lg">
          <header class="head">
          <h1 style={{fontStyle:'italic'}}>LET'S CODE IT</h1>
            <ul class="menu">
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/register">Team With Us</Link></li>
            <li><Link to="/hire">Hire Us</Link></li>
            <li><Link to="/details">About Us</Link></li>
            </ul>
        </header>
        </nav>
      </div>
    )
  }
}
