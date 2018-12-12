import React, { Component } from 'react'
import { Switch, Route} from 'react-router-dom'
import './components/css/main.css'
import Indexs from './components/pages/index'
import './components/css/MDB-Free/css/mdb.min.css'
import './components/css/MDB-Free/css/bootstrap.min.css'
import './components/css/font-awesome-4.7.0/css/font-awesome.min.css'


export default class router extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" strict exact={true} component={Indexs}/>
        </Switch>
      </div>
    )
  }
}
