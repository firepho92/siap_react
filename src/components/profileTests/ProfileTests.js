import React, { Component } from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts'
import './ProfileTests.css'

class ProfileTests extends Component {

  render() {
    return (
      <profileTests>
        {this.props.tests.map((proyecto, i)=>{
          return (
            <div key={i} className="col-sm-12 test">
              <div className="title"><h3>{proyecto.proyecto}</h3>{proyecto.fecha}</div>
              <div className="row">
                <div className="col-sm-4 eval">
                  <p>A evaluar:</p>
                  <div className="rubros">
                    {proyecto.rubros.map((rubro, i)=>{
                      return (
                        <p key={i}>{rubro.name}: <span className="puntaje">{rubro.A}%</span></p>
                      )
                    })}
                  </div>
                </div>
                <div className="col-sm-8 chart">
                  <TwoLevelPieChart proyecto = {proyecto} />
                </div>
              </div>
            </div>
          )
        })}
      </profileTests>
    );
  }

}

class TwoLevelPieChart extends Component {

  render() {
    return (
      <BarChart width={500} height={250} data={this.props.proyecto.rubros}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Bar dataKey="A" fill="#8884d8" />
      </BarChart>
    );
  }

}

export default ProfileTests;
