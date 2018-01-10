// Here all the routes of the components are declared

import React, { Component } from 'react'
import {Search, Home, Octocat, Like} from './components'
import history from './history'

import {Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'


export default class Routes extends Component {

  render() {

    return (
      <Router history={history}>
     
        	<Switch>
        		<Route exact path='/' component={Home} />
        		<Route exact path='/:name' component={Octocat} />
        		<Route exact path='/like/:url' component={Like} />
        	</Switch>
       
      </Router>
    )
  }
}