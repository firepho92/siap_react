import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import AllTests from '../allTests/AllTests'
import Test from '../test/Test'
import './Tests.css'

class Tests extends Component {
    render() {
      return (
        <Switch>
          <Route exact path='/test' component={ AllTests } />
          <Route path='/test/:_id' component={ Test } />
        </Switch>
      );
  }
}

export default Tests;
