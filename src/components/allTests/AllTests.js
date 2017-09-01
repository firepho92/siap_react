import React, { Component } from 'react'
import TestCard from '../testCard/TestCard'
import axios from 'axios'
import {serverAddress} from '../../serverConnectionData'
import './AllTests.css'
import ExportPreguntas from '../agregarPreguntas/main'

class AllTests extends Component {
  constructor(){
    super();
    this.state = {
      proyectos: []
    };
  }
  componentDidMount(){
    var self = this;
    axios.get(`${serverAddress}/proyectos`)
      .then(response => {
        self.setState({
          proyectos: response.data
        });
      })
      .catch(function(error){
        console.log(error)
      });
  }
  render() {
      return (
        <test>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-6'>

                <TestCard proyectos={ this.state.proyectos } />

              </div>

              <ExportPreguntas />

            </div>
          </div>
        </test>
      );
  }
}

export default AllTests;
