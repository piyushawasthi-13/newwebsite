import React from 'react';
// import {Link} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';
import './App.css';
import Card from './Card.jsx';
import Sdata from './Sdata.jsx';

const Services = () => {
    return ( <
        >
        <
        div className = "my-5 " >
        <
        h1 className = "tab-center text-center" > Our Service < /h1> <
        /div> <
        div className = "container-fluid mb-5" >
        <
        div className = "row" >
        <
        div className = "col-10 mx-auto" >
        <
        div className = "row gy-4" > {
            Sdata.map((val, ind) => {
                return ( <
                    Card imgsrc = { val.imgsrc }
                    title = { val.title }
                    />
                )
            })
        }

        <
        /div> <
        /div> <
        /div> <
        /div> <
        />

    )
}
export default Services;