import React, { Component } from 'react'
import './StudentTestProfile.css'
import ProfileTests from '../profileTests/ProfileTests'

class StudentTestProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      proyectos: false,
      calificaciones: []
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    console.log(this.props);
  }

  componentDidMount(){
    var proyectos = [];
    //eslint-disable-next-line
    const dataPromise = new Promise((resolve, reject)=>{
      //eslint-disable-next-line
      this.props.currentStudent.proyectos.map((proyecto, indexP)=>{
        var rubros = [];
        //eslint-disable-next-line
        proyecto.proyecto.rubros.map((rubro, indexR)=>{
          var split = rubro.preguntas.split('/'), respuestas = [], x = 0;
          for (var i = 0; i < split.length; i++) {
            var s, n, m;
            s = proyecto.respuestas[split[i]-1].split('/');
            n = parseInt(s[0], 10) - 1;
            m = parseInt(s[1], 10) - 1;
            x = (n * 100) / ( m * split.length ) + x;

            respuestas = parseInt(x.toFixed(1), 10);
          }
          rubros.push({name: rubro.rubro, A: respuestas, fullMark: 100});
        })
        proyectos.push({proyecto: proyecto.proyecto.nombre, fecha: proyecto.fecha , rubros: rubros})
        resolve("Success!")
      })
    })
    .then(response=>{
      this.setState({
        proyectos: proyectos
      })
    })
  }

	render () {
    const key = 'profile';
  	return (
      <studentTestProfile>
      <div className="row">
        <div className="col-sm-3">
          <div className="col-sm-12">
            <div className="profile" onClick = {this.handleClick}>
              <b>{this.props.currentStudent.encuestado.nombre}</b>
              <p>{this.props.currentStudent.encuestado.matricula}</p>
              <p className="email">{this.props.currentStudent.encuestado.email}</p>
            </div>
          </div>
          <button className="btn btn-default submit-btn atras pull-right" type="button" onClick={(e)=>this.props.handleClick(key, 0)}>Atrás</button>
        </div>
        <div className="col-sm-9 tests-container">
          { this.state.proyectos ? <ProfileTests tests = {this.state.proyectos} /> : null }
        </div>
      </div>
      </studentTestProfile>
    );
  }
}

export default StudentTestProfile;
