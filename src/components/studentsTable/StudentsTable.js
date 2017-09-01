import React, { Component } from 'react'
import StudentsListItem from '../studentsListItem/StudentsListItem'

class StudentsTable extends Component {

  render(){
    return(
      <studentsTable>
        <div className="row">
          <div className="col-sm-12">
            <div className="form-data col-sm-12 admin-table">
              <h3>Lista de estudiantes</h3>
              <div className="col-sm-12">
                <div className="input-group">
                  <span className="input-group-addon" id="basic-addon1"><span className="fa fa-search"></span></span>
                  <input type="text" name="nombre" className="form-control" placeholder="Nombre" aria-describedby="basic-addon1" autoComplete="off" onChange={(e)=>this.props.handleChange(e)} />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">Buscar</button>
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>id</th>
                        <th>Matrícula</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                      </tr>
                    </thead>
                    <StudentsListItem students = {this.props.students} handleClick = {this.props.handleClick} />
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </studentsTable>
    );
  }
}

export default StudentsTable;
