import React, { Component } from 'react'
import Navbar from '../navbar/Navbar'
import Main from '../main/Main'
import './App.css'

class App extends Component {
    render() {
        return (
          <div>
            <Navbar />
            <Main />
          </div>
        );
    }
}

export default App;
