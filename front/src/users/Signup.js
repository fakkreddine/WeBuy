import React from 'react'
import Nav from '../comp/Nav'
import './signup.css'
import back from '../res/backS.png'
import {  Input,Form, Checkbox ,Button } from 'antd';
import Mail from './Mail'
import Password from './Password'

import { Link, Navigate} from 'react-router-dom';
import { LoadingOutlined,BankOutlined , CheckOutlined , SolutionOutlined, UserOutlined } from '@ant-design/icons';
import logo from '../res/logof.png'
import { Steps } from 'antd';
import { useState ,useEffect} from 'react';
import { add_user ,add_st} from '../redux/cartslice';
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate } from "react-router-dom";
import Pay from './Pay';

import Res from './Res';

function Signup() {
  
  let navigate = useNavigate();
  let r = useSelector(state => state.cart.user)
    let st = useSelector(state => state.cart.st)
 
  let[pos,setpos]=useState(0);
  let[cont,setcont]=useState(<Mail/>);
  let [status,setstatus]=useState(["Finished",'wait','wait','wait'])
  let[load,setload]=useState([ <LoadingOutlined />,null,null])
  let[com,setcom]=useState([<Mail/>,<Password/>,<Pay/>,<Res/>]  )

  useEffect(()=>{
    
    console.log(r)
    
      setpos(pos+1);
      status[pos]="Finished";
      setcont(com[pos]);
     
      for (let index = 0; index < load.length; index++) {
        if (index==pos) {
          load[index]=<LoadingOutlined />
       
        }else load[index]=null
        
      
  
      
    }
    
  },[r,st])
  return (
    <>
  
    <div name="sign"className='container-fluid'>
<div className='row '>
  <div name="col-holder" className='col-6 '> 
<div name="head" className=''>
  <div className='row p-3'>
    <div className='col-6 '> <img className='logo ' onClick={()=>navigate('/')} src={logo}></img></div>
    <div className='col-6 d-flex justify-content-end  '><p>Don’t have an account?<Link style={{color:"#ff3852"}} to={"/login"}>Log In</Link>  </p></div>
 
  </div>
</div>
<div  className='h-25 d-flex justify-content-center'>
  <div name="steps" className=' align-self-center'>
<Steps

    items={[
      {
        title: 'Login',
        status: status[0],
        icon: load[0] ||<UserOutlined />,
      },
      {
        title: 'Verification',
        status: status[1],
        icon: load[1] ||<SolutionOutlined />,
      },
      {
        title: 'Pay',
        status: status[2],
        icon:load[2] ||<BankOutlined />,  

      },
      {
        title: 'Done',
        status: status[3],
        icon:   <CheckOutlined />,
      },
    ]}
  />

</div>
</div>
<div className=' h-50 d-flex justify-content-center'>
  <div className=' w-75'>
    {cont}
  
  </div>
</div>


  
  </div>
  <div  className='col-6 p-0 '> 
<img  name="bak"src={back}></img>


  
</div>
</div>


    </div>
    
    </>
  )
}

export default Signup

