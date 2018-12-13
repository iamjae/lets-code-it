import React, { Component } from 'react'

export default class register extends Component {
  render() {
    return (
      <div>
        <form action=" " method="POST">
          <div class="form-container">
            <h1>
              Register
            </h1>
            <p>
              Register your details so we can get to know you
            </p>
            <label><b>First Name</b></label>
            <input type="text" placeholder="Enter your first name" name="fname" required/>
            
            <label><b>Last Name </b></label>
            <input type="text" placeholder="Enter your last" name="lname" required/>

            <label><b>e-mail</b></label>
            <input type="text" placeholder="Enter e-mail address" name="email" required/>

            <label><b>Contact Number</b></label>
            <input type="number" placeholder="enter phone number" name="phone" required/>

            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    )
  }
}
