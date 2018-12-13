import React, { Component } from 'react'
import { Switch, Route} from 'react-router-dom'
import './components/css/main.css'
import Indexs from './components/pages/index'
import './components/css/MDB-Free/css/mdb.min.css'
import './components/css/MDB-Free/css/bootstrap.min.css'
import './components/css/font-awesome-4.7.0/css/font-awesome.min.css'
import Details from './components/pages/details'
import Hire from './components/pages/hire'
import Team from './components/pages/team'
import Register from './components/pages/register'


export default class router extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" strict exact={true} component={Indexs}/>
          <Route path="/team" strict exact={true} component={Team}/>
          <Route path="/register" strict exact={true} component={Register}/>
          <Route path="/hire" strict exact={true} component={Hire}/>
          <Route path="/details" strict exact={true} component={Details}/>
        </Switch>
      </div>
    )
  }
}
