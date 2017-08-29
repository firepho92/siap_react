import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

class Home extends Component {
    render() {
        return (
          <home>
            <div className="container">
              <div className="row align-items-center home">
                <div className="col">
                  <h1>SIAP</h1>
                  <br/>
                  <h4>Sistema Integral de Apoyo Psicológico</h4>
                  <br/>
                  <h5>Es un sistema mediante el cual se busca apoyar al personal docente dando pautas para una mejor enseñanza personal.</h5>
                  <br/>
                  <Link to='/test' className='home-btn'>Empezar Tests</Link>
                </div>
              </div>
            </div>
          </home>
        );
    }
}

export default Home;
