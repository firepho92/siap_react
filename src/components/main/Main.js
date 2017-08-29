import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../home/Home'
import Tests from '../tests/Tests'
import Admin from '../admin/Admin'
import GenericNotFound from '../genericNotFound/GenericNotFound'
import './Main.css';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      usuario: '',
      loggedIn: false
    };
    this.handleLog = this.handleLog.bind(this)
  }

  handleLog(usuario){
    this.setState({
      usuario: usuario,
      loggedIn: true
    })
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/test' component={Tests} />
          <Route path='/admin' component={Admin} />
          <Route component={GenericNotFound} />
        </Switch>
      </main>
    );
  }
}

export default Main;
