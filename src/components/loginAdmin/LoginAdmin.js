import React, { Component } from 'react'
import axios from 'axios'
import Alert from '../alert/Alert'
import {serverAddress} from '../../serverConnectionData'

class LoginAdmin extends Component {
  constructor(props){
    super(props);
    this.state = {
      usuario: '',
      pass: '',
      alert: false,
      alertText: 'Debes ingresar ambos campos de manera correcta.'
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const e = event.target;
      this.setState({
        [e.name]: e.value
      })
  }

  login(e){
    if(!this.state.usuario || !this.state.pass){
      this.setState({
        alert: true,
        alertText: 'Debes ingresar ambos campos de manera correcta.'
      })
    }else{
      axios.post(`${serverAddress}/login`, {
        usuario: this.state.usuario,
        password: this.state.pass
      })
      .then(response => {
        if(!response.data.message){
          sessionStorage.setItem('user', response.data.nombre);
          this.props.componentState(true);
        }else{
          this.setState({
            alert: true,
            alertText: response.data.message
          })
        }
      })
      .catch(error => {
        console.log(error);
      });
    }
  }

  render() {
      return (
          <loginadmin>
            <div className="container">
              <div className="row justify-content-center">
                <div className="form-data col-sm-6">
                  <h2>Para entrar</h2>
                  <p>Por favor ingresa los datos requeridos, luego presiona continuar.</p>
                  <div className="col-sm-12">
                    <div className="input-group">
                      <span className="input-group-addon" id="basic-addon1"><span className="fa fa-user-o"></span></span>
                      <input type="text" name="usuario" className="form-control" placeholder="Usuario" aria-describedby="basic-addon1" value={this.state.value} onChange={this.handleChange} autoComplete="off" />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-group">
                      <span className="input-group-addon" id="basic-addon1"><span className="fa fa-lock"></span></span>
                      <input type="password" name="pass" className="form-control" placeholder="Contraseña" aria-describedby="basic-addon1" value={this.state.value} onChange={this.handleChange} />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <br/>
                    <input className="btn btn-default pull-right submit-btn" type="submit" value="Continuar" onClick={(e)=>this.login(e)} />
                  </div>
                  <div className="col-sm-12">{ this.state.alert ? <Alert msg={this.state.alertText} /> : null }</div>
                </div>
              </div>
            </div>
          </loginadmin>
      );
  }
}

export default LoginAdmin;
