import React, { useEffect, useState } from 'react'
import { CloseCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { useNavigate } from "react-router-dom";
import {  Typography } from 'antd';

import { Navigate } from "react-router-dom";
import Nav from '../Nav'
import { Spin } from 'antd';
import { Button, Result } from 'antd';
import axios from "axios";
import { Avatar, List } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import './cart.css'
import { Divider } from 'antd';
import CardTemp from './CardTemp';
import {init} from '../../redux/cartslice'

function Cart() {
  let navigate = useNavigate();
  const { Paragraph, Text } = Typography;
  let login=localStorage.getItem("user");
  let [ini,setinit]=useState(false);
useEffect(()=>{ if (login=="") {
  navigate("/login");
}},[])
 
  const d = new Date();
  let year=d.getFullYear();
let month=d.getMonth();
let day=d.getDate();
let currentDate = `${day}-${month}-${year}`;

  
  let carte = useSelector(state => state.cart.value)
  let su = useSelector(state => state.cart.coun)
  let  [sold,setsold]=useState()
  let [q,setq]=useState();
  let [res,setres]=useState();
  console.log(carte.length)
  let order=()=>{
    if (carte.length>0) {
      axios.post('http://127.0.0.1:8000/api/products/order', {
      date:`${currentDate}`,
      user: `${JSON.parse(login)[0].id}`,
      status: "pending",
      products: `${JSON.stringify(carte)}`,
      cost:su
    })
    .then(function (response) {
     setinit(true);
      setres(
        
      
      <Result 
      status="success"
      
      title="Submission Successfully "
      subTitle={`Order number #${response.data} Admin server handiling takes 1-5 minutes, please wait.`}
      extra={[
        <Button onClick={()=>{navigate("/");}} type="primary" key="console">
        Go Home
        </Button>,
        <Button  onClick={()=>navigate("/product")} key="buy">Buy Again</Button>,
      ]}
    />)
    
    
      
    })
    .catch(function (error) {
      
      setres( <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        extra={<Button  onClick={()=>navigate("/product")} type="primary">Back Home</Button>}
      />)
       
    }); 
    }
    
  }
  let suc=(n)=>{
    if (q>=0){
      if (q+n>=0){
    setq(q+n);
  }
  
  }    }
  if (res==undefined) {
    
  }
  return (<>
    <Nav></Nav>
    <div className='container-fluid p-0  align-item-center'>
      <div name='all' className='d-flex justify-content-center '>
      <div name="cont" className='col-lg-9 mt-3 p-4'>
      {res||<div>
        <h2 >Panier </h2> <Divider />
        <List
    itemLayout="horizontal"
    dataSource={carte}
    renderItem={(item,index) => (
     
      <CardTemp props={item} index={index}></CardTemp>
    )}
  />
  <Divider />
  
      <div className='row '>
    <h4>Sous-total</h4>
    <p>{su}$</p></div>
    <button onClick={()=>{setres(<div className='d-flex justify-content-center  position-absolute top-50 start-50 '><Spin tip="Loading" size="large"></Spin></div>);
    if (carte.length==0) {
     setres(<Result
      status="error"
      title="Submission Failed"
      subTitle="Please check and modify the following information before resubmitting."
      extra={[
        <Button onClick={()=>navigate("/product")}  type="primary" key="console">
          Go Home
        </Button>,
        <Button onClick={()=>navigate("/cart")}key="buy">Buy Again</Button>,
      ]}
    >
      <div className="desc">
        <Paragraph>
          <Text
            strong
            style={{
              fontSize: 16,
            }}
          >
            The content you submitted has the following error:
          </Text>
        </Paragraph>
        <Paragraph>
          <CloseCircleOutlined className="site-result-demo-error-icon" /> Your account has been
          frozen.
        </Paragraph>
        <Paragraph>
          <CloseCircleOutlined className="site-result-demo-error-icon" /> Check your Internet connection

        </Paragraph>
      </div>
    </Result>)
      
    }else {order(); }}
 } name="com" className='b'>commander</button>
 
</div>}</div></div>
          
       



    </div></>
  )

}
export default Cart