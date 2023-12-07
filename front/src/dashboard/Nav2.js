import React from 'react'
import not from "../res/notification.png"
import { Avatar, Badge, Space } from 'antd';
import "./nav2.css"
import log from "../res/log.png"
import logo from "../res/logo.png"
import { useEffect } from 'react';
function Nav2() {

    let login=JSON.parse(localStorage.getItem("user"));
    
  return (
<div className='nav2c d-flex justify-content-between'>
      <div className='logo'>
        <img src={logo}></img>
      </div>
      <div className='icons'>
        <Badge    count={2}><img src={not} /></Badge> 


          <div>
            <img  name='userimg' src={login[0].avatar}></img>
            <span className='m-3'>{login[0].name}</span>
          </div>
        <img   src={log}></img>


      </div>


</div>
  )
}

export default Nav2