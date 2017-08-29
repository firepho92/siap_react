import React, { Component } from 'react'
import './Respuestas.css'

class Respuestas extends Component {
  constructor(props){
    super(props);
    this.state = {
      respuestas: [],
      pressed: "btn btn-default active",
      unpressed: "btn btn-default"
    }
  }

  componentDidMount(){
    var splitted = this.props.respuestas.split("/");
    this.setState({
      respuestas: splitted
    })
  }

  handleClick(e, respuesta, l){
    this.props.handleAnswers(respuesta+1, l);
  }

  render() {
    const l = this.state.respuestas.length;
    return (
      <respuestas>
        <div className="btn-group botones" role="group" aria-label="...">
          {
            this.state.respuestas.map((respuesta, i)=>{
              return (<button id={i} className="btn btn-dark res-btn" type="button" key={i} onClick={(e)=>this.handleClick(e, i, l)}>{respuesta}</button>)
            })
          }
        </div>
      </respuestas>
    );
  }
}

export default Respuestas;
