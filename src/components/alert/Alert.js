import React, { Component } from 'react'
import './Alert.css'

class Alert extends Component {

  render() {
    return (
      <alerta>
        <div className="alert alert-danger alerta" role="alert">{this.props.msg}</div>
      </alerta>
    );
  }
}

export default Alert;
