import React from 'react'
import Nav from './Nav.js'
import main from '../res/main2.png'
import twiter from '../res/twi.svg'
import fb from '../res/fb.svg'
import insta from '../res/insta.svg' 
import './top.css';

function Top() {
  return (
    <div className='top container-fluid'>
<Nav></Nav>
<div>
    <img  alt ="main img" className='img img-fluid  mx-auto d-block mx-auto d-block' src={main}/>
<div className='text position-absolute top-50 start-0 translate-middle-y'>
    <p>Find your passion to feel the beat and sensation of natural sound from our cool stuff</p>
        <button>Explore stuff</button></div>
</div>
        

    
    <div className='media'> 
        <img alt="fb" src={fb}></img>
        <img alt="insta" src={insta}></img>
        <img alt="link"  src={twiter}></img>
    </div>




    </div>
  )
}

export default Top