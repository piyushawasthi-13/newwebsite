import React from 'react';
import { NavLink } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
const Nav=()=>{
    return (
        <>
        <div className="container-fluid">
            <div className="row">
            <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto mb-3 mb-lg-0">
                    <li className="nav-item">
                      <NavLink  exact activeClassName="Menu-active" className="nav-link active"  to="/" aria-current="page" href="#">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" exact activeClassName="Menu-active"  to="/About"href="#">About</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" exact activeClassName="Menu-active" to="/Contact" href="#">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" exact activeClassName="Menu-active" to="/Services" href="#">Services</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        
            </div>
            </div>
        </div>
        </>
        
        
        )
}
export default Nav;