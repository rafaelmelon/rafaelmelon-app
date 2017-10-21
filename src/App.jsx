import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'

import HomeContainer from './components/HomeContainer'
import NotFound from './components/NotFound'

class App extends Component {
  render(){
    return (
      <Switch>
        <Route exact path="/" component={ HomeContainer }/>
        <Route component={NotFound}/>
      </Switch>
    )
  }
}

export default App
