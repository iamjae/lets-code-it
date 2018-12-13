import React, { Component } from 'react'

export default class footer extends Component {
  render() {
    return (
      <div>
          <footer>
    <div class="top-footer">
      <div class="contact footer-element">
        <h2>
          Contact Us
        </h2>
        <p>
          Tel: (+234) 424534654<br/>
          Email: letscodeit@code.com
        </p>
      </div>
      <div class="survey footer-element">
        <h2>
          Quick Survey
        </h2>
        <a href="team.html">Team</a><br/>
        <a href="">Blog</a>
      </div>
      <div class="company footer-element">
        <h2>Company</h2>
        <a href="details.html">About Us</a><br/>
        <a href="hire.html">Hire Us</a>
      </div>
    </div>
    <div class="copyright">
      <br/>
      Copyright &#169 Let's Code It 2018
    </div>
  </footer>
      </div>
    )
  }
}
