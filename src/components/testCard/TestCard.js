import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './TestCard.css'

class TestCard extends Component {
  render() {
    return (
      <div>
        { this.props.proyectos.map(proyecto =>{
          return (
            <testCard key={proyecto._id}>
              <div className='Tests-card'>
                <div className='Tests-card-title'>{proyecto.nombre}</div>
                <div className='Tests-card-description'>{proyecto.descripcion}</div>
                <Link to={`/test/${proyecto._id}`} className='pull-right Tests-card-btn'>Ir al test  <i className="fa fa-angle-right" aria-hidden="true"></i></Link>
              </div>
            </testCard>
          );
        }) }
      </div>

    );
  }
}

export default TestCard;
