import React, { Component } from 'react'
import './AdminProfiles.css'
import axios from 'axios'
import StudentTestProfile from '../studentTestProfile/StudentTestProfile'
import StudentsTable from '../studentsTable/StudentsTable'
import {serverAddress} from '../../serverConnectionData'

class AdminProfiles extends Component {
  constructor(props){
    super(props);
    this.state = {
      students: [],
      backup: [],
      currentStudent: false,
      studentTests: [],
      alert: false,
      alertText: 'Debes ingresar ambos campos de manera correcta.',
      display: 0,
      maxAnswers: []
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.logout = this.logout.bind(this)
    this.getMaxAnswersScore = this.getMaxAnswersScore.bind(this)
  }

  componentDidMount(){
    axios.get(`${serverAddress}/respuestas`)
    .then(response => {
      this.setState({
        students: response.data,
        backup: response.data
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  handleChange(e){
    var str = e.target.value, filteredStudents = [];
    if(str.length >= 1){
      for (var i = 0; i < this.state.backup.length; i++) {
        if(this.state.backup[i].encuestado.nombre.match(new RegExp(str, 'i'))){
          filteredStudents.push(this.state.backup[i]);
        }
      }
      this.setState({
        students: filteredStudents
      })
    }else{
      this.setState({
        students: this.state.backup
      })
    }
  }

  handleClick(key, iterator){
    if(key === 'table'){
      var mA = [];
      //eslint-disable-next-line
      this.state.students[iterator].proyectos.map(proyecto=>{
        axios.get(`http://192.168.100.4:3030/preguntas/${proyecto.proyecto._id}`)
        .then(response =>{
          var split = '', answersLength;
          split = response.data[0].respuesta.split('/');
          answersLength = split.length - 1;
          mA.push(answersLength)
        })
        .catch(error =>{
          console.log(error)
        })
      })
      this.setState({
        maxAnswers: mA,
        currentStudent: this.state.students[iterator],
        display: 1
      })
    }else{
      this.setState({
        display: 0
      })
    }
  }

  logout(){
    sessionStorage.clear();
    this.props.componentState(false);
  }

  getMaxAnswersScore(){
    console.log(this.state.currentStudent);
  }

  render(){
    return(
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-10">
            <h3>Bienvenido {sessionStorage.getItem('user')}</h3>
          </div>
          <div className="col-1">
            <button onClick={this.logout} className='btn btn-default'>Salir</button>
          </div>
        </div>
        <br/>
        {!this.state.display ? <StudentsTable students = {this.state.students} handleChange = {this.handleChange} handleClick = {this.handleClick} /> : <StudentTestProfile currentStudent = {this.state.currentStudent} maxAnswers = {this.state.maxAnswers} handleClick = {this.handleClick} />}
      </div>
    );
  }
}

export default AdminProfiles;
