import React from 'react';
import { Link } from 'react-router-dom﻿';
import { connect } from 'react-redux';
import { login } from '../actions/login';


export default () => {

  return (

    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Memoryable
          </Link>


        </div>

        <div className="collapse navbar-collapse">
         <ul className="nav navbar-nav navbar-right">
         <li>
         <Link to="/login" className="navbar-brand">Login
         </Link>
         <Link to="/signup" className="navbar-brand">Signup
         </Link>
         </li>
         </ul>
        </div>
      </div>
    </nav>


  );
}
