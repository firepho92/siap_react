import React, { Component } from 'react'
import './TestFinished.css'
import { Link } from 'react-router-dom'

class TestFinished extends Component {

  render() {
    return (
      <question>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-8 question-container">
              <div className="col-sm-12">
                <h2>Has terminado el test.</h2>
                <p>Presiona Terminar para continuar.</p>
              </div>
              <Link to='/' className="btn btn-default pull-right submit-btn" onClick={(e) => this.props.handleFinishTest(e)} > Terminar </Link>
            </div>
          </div>
        </div>
      </question>
    );
  }
}

export default TestFinished;
