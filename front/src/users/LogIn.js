import React, { useEffect } from 'react'
import Nav from '../comp/Nav'
import { useNavigate } from "react-router-dom";
import './login.css'
import { redirect } from "react-router-dom";
import { Link} from 'react-router-dom';
import { Navigate } from "react-router-dom";

import { Button, Checkbox, Form, Input } from 'antd';
import { ProForm, ProFormText } from '@ant-design/pro-components';  
function LogIn() {
  let navigate = useNavigate();
  let login=localStorage.getItem("user");
 useEffect(()=>{
  if (login!="") {
    navigate("/product")
  }
 
 },[])
  let onFinish=async(val)=>{
    let f=await fetch(`http://127.0.0.1:8000/api/auth/login?username=${val.username}&password=${val.password}`);
    let r=await f.json();
    if (r!=false) {
      if (r[0].type=="admin") {
        
        localStorage.setItem("user", JSON.stringify(r))
        navigate("/dashboard");
       
      }else{
      localStorage.setItem("user", JSON.stringify(r))
      console.log("user")
      navigate("/product")
      ;}
    }
  
    }
  return (
   <>
   <Nav></Nav>
   <div name="log" className='container-fluid d-flex justify-content-center'>
<div name="holder" className='col-8 m-5 p-5   '>
    <h2 className='text-center'>Welcome</h2>

    
   <Form
    name="basic"
    labelCol={{
      span: 8,
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
    onFinish={onFinish}
    //onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" onClick={navigate("/product")} htmlType="submit">
        LogIn
      </Button>
    </Form.Item>
  </Form>
  <p>Don’t have an account?<Link   style={{color:"#ff3852"}} to={"/signup"}>Sign Up</Link>  </p>
   </div>
   
   </div>
   </>
  )
}

export default LogIn


