import ReactDOM from 'react-router-dom';
import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import Services from './Services.jsx';
import Nav from './Navbar.jsx';

const Main=()=>{
  return (
    <>
    <Nav/>
    <Switch>
    <Route exact  path="/" component={Home}/>
    <Route exact path="/Contact" component={Contact}/>
    <Route exact path="/About" component={About}/>
    <Route exact path="/Services" component={Services}/>
    <Redirect to="/"/>
    </Switch>
    </>
  )
}
export default Main; 