import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top nav-bar">
                <div className="container">
                    <div className="navbar-header">
                        <NavbarBrand />
                    </div>
                    <Link to='/admin' className="navbar-brand link">Administrar</Link>
                </div>
            </nav>
        );
    }
}

class NavbarBrand extends Component {
    render() {
        return (
          <Link to='/' className="navbar-brand">SIAP</Link>
        );
    }
}

export default Navbar;
