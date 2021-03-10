import React from 'react';
// import {Link} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';
import './App.css';
import Web from '../src/images/img2.svg';
const Common=(props)=>{
    return (
        <>
        <section className="d-flex align-items-center" id="header">
         
            <div className="container-fluid nav_bg">
                <div className="row mt-5">
                    <div className="col-10 mx-auto  ">
                    <div className="row mt-5">
                        <div className="col-md-6 pt- pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h4>{props.name} <br/><strong className="navbar-brand">Piyush Awasthi</strong></h4>
                            <h5 className="my-3">
                                we are the team of talent developer making website
                            </h5>
                            <div className="mt-3">
                                <NavLink exact to={props.visit} href="" className="btn btn-outline-primary">{props.btname}</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img d-flex justify-content-center">
                            <img src={Web} className="img-fluid animated  mt-5"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        </>
        
        )
}
export default Common;
