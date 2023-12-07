import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useSelector, useDispatch }   from 'react-redux'
    import { Navigate,useNavigate } from "react-router-dom";
import { Button, Result } from 'antd';
import { add_user ,add_st} from '../redux/cartslice';

function Res() {

    let r = useSelector(state => state.cart.user)
  let navigate = useNavigate();
  let[cont,setcont]=useState()
  const dispatch = useDispatch();
  const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    }
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return "mobile";
    }
    return "desktop";
  };
    useEffect(()=>{
        axios.post('http://127.0.0.1:8000/api/addUser', {
            name:`${r[3]}`,
            last_name:`${r[1]}`,
            mail: `${r[0]}`,
            password: `${r[4]}`,
            avatar:`${r[2]}`,
            adress: `${r[5]}`,
            method: `${r[6]}`,
            type:"user",
            device:getDeviceType()
          }).then(function (response) {
           
             setcont(
               
             
             <Result 
             status="success"
             
             title="Submission Successfully "
             subTitle={`welcom Abord ${r[3]} `}
             extra={[
               <Button onClick={()=>{navigate("/");}} type="primary" key="console">
               Go Home
               </Button>,
               <Button  onClick={()=>navigate("/product")} key="buy">Buy Again</Button>,
             ]}
           />)
           
           
             
           })
           .catch(function (error) {
             
             setcont( <Result
               status="500"
               title="500"
               subTitle="Sorry, something went wrong."
               extra={<Button  onClick={()=>navigate("/product")} type="primary">Back Home</Button>}
             />)
              
           });
        
            
    },[])
  return (
    <div><div>{cont}</div> </div>
  )
}

export default Res