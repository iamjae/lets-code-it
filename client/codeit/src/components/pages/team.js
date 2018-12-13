import React, { Component } from 'react'

export default class team extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>specialization</th>
          </tr>
          <tr>
            <td>John</td>
            <td>Otitoju</td>
            <td>Nodejs, React</td>
          </tr>
          <tr>
            <td>Lois</td>
            <td>Ibiyomi</td>
            <td>HTML, CSS, PHP</td>
          </tr>
          <tr>
            <td>John</td>
            <td>Arokoyo</td>
            <td>PHP, Content Creator</td>
          </tr>
        </table>
      </div>
    )
  }
}