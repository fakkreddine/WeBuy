import React from 'react';
import anime from 'animejs';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import logo from '../res/logo.gif';
import './load.css';

function Load() {
   
  return (
    <div  className='load container-fluid'>
       
        <img  className="img-fluid mx-auto d-block position-absolute top-50  start-50 translate-middle   " src={logo}></img>
        
    </div>
    )
    }

export default Load