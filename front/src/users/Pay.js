import React from 'react'
import paypal from "../res/paypal.png"
import mastercard from "../res/card.png"
import { useSelector, useDispatch } from 'react-redux'
import {  Input,Form, Checkbox ,Button } from 'antd';
import { add_user ,add_st} from '../redux/cartslice';
import {
   
    Select,
   
  } from 'antd';
import { useState } from 'react';
function Pay() {
    let redux = useSelector(state => state.cart.user)
    let st = useSelector(state => state.cart.st)
    const dispatch = useDispatch();
    let [p,setp]=useState("mastercard")


    let pay=(p=="mastercard")?<Input.Password prefix={<img  width={"20px"} src={mastercard} />}  placeholder="Payment Details"/>:<Input.Password prefix={<img  width={"20px"} src={paypal} />}  placeholder="Payment Details"/>;

    const { Option } = Select;
    let onFinish=async(val)=>{
        
        dispatch(add_user(val.adress))
        let v={"type":val.payment,"id":val.id}
        console.log(v)
        dispatch(add_user(
          JSON.stringify(v)))
        dispatch(add_st(true))
        console.log(redux)

       
       
         }
  return (
    
    <>
    <h1 className='mb-4'> Payment Details</h1>
<Form
 onFinish={onFinish}
    name="basic"
    labelCol={{
      span: 6   ,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}

    autoComplete="off"
  >
 <Form.Item  className='m-4'
        label="Adress"
        name="adress"
        
        rules={[
          {
            required: true,
            message: 'Please input your adress!',
          },
        ]}
      >
        <Input placeholder="Enter your Name"/>
      </Form.Item>
<Form.Item  className='m-4'
        label="Payment Method"
        name="payment"
        
        rules={[
          {
            required: true,
            message: 'Please input your Payment!',
          },
        ]}
      >
       <Select onChange={(val)=>{setp(val)}} placeholder="Please select a Payment Method">
      <Option value="paypal"><img width={"20px"}  src={paypal}/> Paypal</Option>
      <Option value="mastercard"><img  width={"20px"} src={mastercard}/> Mastercard</Option>
    </Select>
      </Form.Item>
      <Form.Item  className='m-4'
        label="Payment Details"
        name="id"
        
        rules={[
          {
            required: true,
            message: 'Please input your Payment Details!',
          },
        ]}
      >
        {pay}
      </Form.Item>
    
    <Form.Item >
    <button onClick={()=> {
      
          }} className='b' type="submit">Next Step</button>
      
    
  </Form.Item>
    
     
   
    </Form></>  
    
  )
}

export default Pay

