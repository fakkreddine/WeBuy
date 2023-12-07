import React from 'react'
import {
   
    Select,
   
  } from 'antd';
  import { useSelector, useDispatch } from 'react-redux'
import {  Input,Form, Checkbox ,Button } from 'antd';
import paypal from "../res/paypal.png"
import master from "../res/card.png"
import { add_user ,add_st} from '../redux/cartslice';

function Mail() {
    const dispatch = useDispatch();
    let redux = useSelector(state => state.cart.user)
    let st = useSelector(state => state.cart.st)
    const { Option } = Select;
    
        let onFinish=async(val)=>{
            await console.log(val)
           
           await dispatch(add_user(val.Email))
           dispatch(add_st(true))
           
            
          
           
             }
    
  return (
    <><h1 className='mb-4'> Create your account</h1>
    <Form
     onFinish={onFinish}
        name="basic"
        labelCol={{
          span: 4,
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
        <Form.Item  className='m-3'
          label="Email"
          name="Email"
          
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input placeholder="Enter your Email"/>
        </Form.Item>
        <Form.Item
          
          name='check'
         
        >
           <Checkbox  className='m-3'>By signing up,you agree to our <span name="c">privacy policy, user terms</span> and <span name="c">merchant agreement</span></Checkbox>
        </Form.Item>
        <Form.Item >
        <button onClick={()=> {
          console.log("ff ")
              }} className='b' type="submit">Next Step</button>
          
        
      </Form.Item>
        
         
       
        </Form></>
  )
  
}

export default Mail