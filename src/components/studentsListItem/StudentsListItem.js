import React, { Component } from 'react'
import './StudentsListItem.css'

class StudentsListItem extends Component {

  render(){
    const key = 'table';
    return(
      <tbody>{this.props.students.map((student, i)=>{
        return (<tr key={student.encuestado._id}  onClick={(e)=>this.props.handleClick(key, i)}><th scope={student.encuestado._id}>{i+1}</th><td>{student.encuestado.matricula}</td><td className='item-link'>{student.encuestado.nombre}</td><td>{student.encuestado.email}</td></tr>);
      })}</tbody>
    );
  }
}

export default StudentsListItem;
