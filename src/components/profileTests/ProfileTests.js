import React, { Component } from 'react'
import {Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis} from 'recharts'
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
                        <p key={i}>{rubro.subject}: <span className="puntaje">{rubro.A}</span></p>
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
      <RadarChart cx={300} cy={150} outerRadius={90} width={500} height={300} data={this.props.proyecto.rubros}>
        <Radar name={this.props.proyecto.proyecto} dataKey="A" stroke="#45B94C" fill="#45B94C" fillOpacity={0.6}/>
        <PolarGrid />
        <Legend />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis/>
      </RadarChart>
    );
  }

}

export default ProfileTests;
