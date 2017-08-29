import React, { Component } from 'react'
import Respuestas from '../respuestas/Respuestas'
import './Question.css'
import Alert from '../alert/Alert'

class Question extends Component {
  constructor(props){
    super(props);
    this.state = {
      respuesta: null,
      alert: false,
      alertText: "Debes contestar presionando alguna respuesta."
    }
    this.handleAnswers = this.handleAnswers.bind(this);
  }

  handleAnswers(answer, l){
    this.setState({
      respuesta: answer + '/' + l
    })
  }

  handleClick(){
    if(!this.state.respuesta){
      this.setState({
        alert: true
      })
    }else{
      this.props.handleQuestionIndex(this.state.respuesta);
      this.setState({
        respuesta: "",
        alert: false
      })
    }
  }

  render() {
    return (
      <question>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 question-container">
              <div className="col-sm-12">
                <h3>{this.props.preguntas.pregunta}</h3>
                <Respuestas respuestas = {this.props.preguntas.respuesta} handleAnswers = {this.handleAnswers} />
              </div>
              <div className="col-sm-12 btn-zone">
                <input type="submit" className="btn btn-secondary-default submit-button pull-right" value="Siguiente" onClick={(e)=>this.handleClick(e)} />
              </div>
              <br/>
              <div className="col-sm-12 alert">{ this.state.alert ? <Alert msg={this.state.alertText} /> : null }</div>
            </div>
          </div>
        </div>
      </question>
    );
  }
}

export default Question;
