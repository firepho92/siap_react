import React, { Component } from 'react'
import './TestIntro.css'
import Alert from '../alert/Alert'
import axios from 'axios'
import {serverAddress} from '../../serverConnectionData'

class TestIntro extends Component {
  constructor(props){
    super(props);
    this.state = {
      matricula: '',
      nombre: '',
      email: '',
      alert: false,
      alertText: '',
      inputState: ''
    };
    this.handleChange = this.handleChange.bind(this)
    this.checkEmail = this.checkEmail.bind(this)
  }

  handleChange(event){
    const e = event.target;
    if(e.name === 'matricula' && e.value.length > 2){
      axios.post(`${serverAddress}/encuestado`, {
        matricula: e.value
      })
      .then(response=>{
        if(response.data != null){
          console.log(response.data);
          this.setState({
            nombre: response.data.nombre,
            email: response.data.email,
            value1: response.data.nombre,
            value2: response.data.email
          })
        }
      })
      .catch(error=>{
        console.log(error);
      })
    }
    this.setState({
      [e.name]: e.value
    })
  }

  handleClick(event){
    if(!this.state.nombre || !this.state.email){
      this.setState({
        alert: true,
        alertText: "Debes ingresar los campos de manera correcta."
      })
    }else{
      if(this.checkEmail(this.state.email)){
        const sent = 1;
        this.props.handleChildrenClick(sent, this.state.matricula, this.state.nombre, this.state.email)
      }else{
        this.setState({
          alert: true,
          alertText: "Email incorrecto, vuelve a escribirlo."
        })
      }
    }
  }

  checkEmail(email){
    const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return regex.test(email)
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="form-data col-sm-6">
            <h2>Antes de empezar</h2>
            <p>Por favor ingresa los datos requeridos, luego presiona continuar para empezar</p>
            <div className="col-sm-12 campo">
              <div className="input-group">
                <span className="input-group-addon" id="basic-addon1"><i className="fa fa-id-card-o"></i></span>
                <input type="text" value={this.state.value} onChange={this.handleChange} name="matricula" className="form-control" placeholder="Matrícula" aria-describedby="basic-addon1" autoComplete="off" />
              </div>
            </div>
            <div className="col-sm-12 campo">
              <div className="input-group">
                <span className="input-group-addon" id="basic-addon1"><i className="fa fa-user-o"></i></span>
                <input type="text" value={this.state.value1} onChange={this.handleChange} name="nombre" className="form-control" placeholder="Nombre" aria-describedby="basic-addon1" autoComplete="off" />
              </div>
            </div>
            <div className="col-sm-12 campo">
              <div className="input-group">
                <span className="input-group-addon" id="basic-addon1"><i className="fa fa-envelope-o"></i></span>
                <input type="email" value={this.state.value2} onChange={this.handleChange} name="email" className="form-control" placeholder="Correo" aria-describedby="basic-addon1" autoComplete="off" />
              </div>
            </div>
            <div className="row justify-content-center">
              <input className="btn btn-default submit-btn" type="submit" value="Continuar" onClick={(e)=>this.handleClick(e)} />
            </div>
            <div className="col-sm-12">{ this.state.alert ? <Alert msg={this.state.alertText} /> : null }</div>
          </div>
        </div>
      </div>
    );
  }
}

export default TestIntro;
