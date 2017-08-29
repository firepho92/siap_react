import React, { Component } from 'react'
import './Admin.css';
import LoginAdmin from '../loginAdmin/LoginAdmin'
import AdminProfiles from '../adminProfiles/AdminProfiles'

class Admin extends Component {
  constructor(props){
    super(props);
    this.state = {
      state: false
    };
    this.componentState = this.componentState.bind(this)
  }

  componentState(state){
    this.setState({
      state: state
    })
  }

  render() {
    if(!sessionStorage.getItem('user')){
      return (<LoginAdmin componentState={this.componentState} />);
    }else{
      return(<AdminProfiles componentState={this.componentState} />)
    }
  }
}

export default Admin;
