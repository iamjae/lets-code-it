import React, { Component } from 'react'

export default class header extends Component {
  render() {
    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light fixed-top scrolling-navbar">
            <div className="container">
            <a className="navbar-brand" href="">
                <strong>Flawless Empire</strong>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-7" aria-controls="navbarSupportedContent-7" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent-7">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="">Home
                    <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="">Profile</a>
                </li>
                </ul>
                <form className="form-inline">
                <div className="md-form mt-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                </div>
                </form>
            </div>
            </div>
        </nav>
      </div>
    )
  }
}
