import React, { Component } from 'react'
import './Test.css'
import TestIntro from '../testIntro/TestIntro'
import Question from '../question/Question'
import TestFinished from '../testFinished/TestFinished'
import axios from 'axios'
import {serverAddress} from '../../serverConnectionData'

class Test extends Component {
  constructor(props){
    super(props);
    this.state = {
      preguntas: [],
      sendData: 0,
      current: 0,
      obj: {
        proyecto: "",
        respuestas: []
      },
      encuestado: {
        nombre: "",
        email: ""
      }
    }
    this.handleChildrenClick = this.handleChildrenClick.bind(this)
    this.handleQuestionIndex = this.handleQuestionIndex.bind(this)
    this.handleFinishTest = this.handleFinishTest.bind(this)
    this.newEncuestado = this.newEncuestado.bind(this)
    this.oldEncuestado = this.oldEncuestado.bind(this)
  }

  handleQuestionIndex(a){
    this.state.obj.respuestas.push(a);
    var c = this.state.current,
        l = (this.state.preguntas.length)-1;
    if(c<l){
      c++;
      this.setState({
        current: c
      })
    }else{
      this.setState({
        sendData: 2
      })
    }
  }

  handleChildrenClick(sent, matricula, nombre, email){
    this.setState({
      sendData: sent,
      obj:{
        proyecto: this.props.match.params._id,
        respuestas: []
      },
      encuestado: {
        matricula: matricula,
        nombre: nombre,
        email: email
      }
    })
  }

  handleFinishTest(){
    axios.post(`${serverAddress}/encuestado`, {
      matricula: this.state.encuestado.matricula,
    })
    .then(response => {
      if(!response.data){
        axios.post(`${serverAddress}/encuestados`, {
          matricula: this.state.encuestado.matricula,
          nombre: this.state.encuestado.nombre,
          email: this.state.encuestado.email
        })
        .then(response => {
          this.newEncuestado(response.data._id)
        })
        .catch(error =>{
          console.log(error)
        })
      }else{
        this.oldEncuestado(response.data._id)
      }
    })
    .catch(error => {
      console.log(error)
    })
  }

  newEncuestado(encuestado){
    const d = new Date();
    const date = d.getDate() +'/'+(d.getMonth()+1)+'/'+d.getFullYear();
    axios.post(`${serverAddress}/respuestas`, {
      encuestado: encuestado,
      proyectos: [{
        proyecto: this.state.obj.proyecto,
        fecha: date,
        respuestas: this.state.obj.respuestas
      }]
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    });
  }

  oldEncuestado(encuestado){
    const d = new Date();
    const date = d.getDate() +'/'+(d.getMonth()+1)+'/'+d.getFullYear();
    axios.post(`${serverAddress}/pushRespuestas`, {
      encuestado: encuestado,
      proyectos: [{
        proyecto: this.state.obj.proyecto,
        fecha: date,
        respuestas: this.state.obj.respuestas
      }]
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  componentDidMount(){
    var self = this;
    axios.get(`${serverAddress}/preguntas/${this.props.match.params._id}`)
      .then(response => {
        self.setState({
          preguntas: response.data
        });
      })
      .catch(function(error){
        console.log(error);
      });
  }

  render() {
    if(this.state.sendData === 0){
      return( <TestIntro handleChildrenClick={this.handleChildrenClick} /> );
    }else{
      if(this.state.sendData === 1){
        return( <Question preguntas={this.state.preguntas[this.state.current]} handleQuestionIndex={this.handleQuestionIndex} /> );
      }else{
        return ( <TestFinished handleFinishTest={this.handleFinishTest} /> )
      }
    }
  }
}

export default Test;
