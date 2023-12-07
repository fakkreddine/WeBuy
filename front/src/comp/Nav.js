import React from 'react'
import logo from '../res/logo.png'
import user from '../res/user.png'
import cart from '../res/buyIcon.svg'
import './nav.css';
import { Link } from 'react-router-dom';
import { Avatar, Badge, Space } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import admin from '../res/adminic.png'
import logout from '../res/logout.png'
function Nav() {
  let res=false;  
  let navigate = useNavigate();
  let carte = useSelector(state => state.cart.value)
  let login=localStorage.getItem("user");
  if (login!="") {
    let type=JSON.parse(login)[0].type
     res=type=="admin"?true:false;
  }
  
 

  
  let isloged=()=>{
   if (login =="") {
    navigate("/login");
    
   }else{
    navigate("/product");
   }
  }


  let isloged2=()=>{
    if (login =="") {
     navigate("/login");
     
    }else{
     navigate("/cart");
    }
   }

  return (
    <nav className='navbar container-fluid sticky-top '>
<Link to={"/"}><img src={logo} className='logo  ' alt="logo"></img></Link>
<span className='icons'>
{res&&<img onClick={()=>navigate('/dashboard')} src={admin}></img>}
<Badge  on onClick={()=>navigate('/cart')}   count={carte.length}><img src={cart} alt="cart"/></Badge> 
           
<img onClick={isloged} src={user}alt="user"/>
{login&&<img  onClick={()=>{localStorage.setItem("user","");navigate("/")}} src={logout}></img>}
</span>





    </nav>
  )
}

export default Nav