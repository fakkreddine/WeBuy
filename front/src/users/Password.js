import React from 'react'
import {  Input,Form, Checkbox ,Button ,Upload,} from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import {  UploadOutlined } from '@ant-design/icons';
import { add_user,add_st } from '../redux/cartslice';
function Password() {
    const dispatch = useDispatch();
    let redux = useSelector(state => state.cart.user)
    let st = useSelector(state => state.cart.st)
    let onFinish=async(val)=>{
        console.log(val)
        dispatch(add_user(val.last_name))
        dispatch(add_user(val.avatar))
        dispatch(add_user(val.name))
        dispatch(add_user(val.password))
        dispatch(add_st(true))
        
       
         }
         /*  <Upload name="logo" action="/upload.do" listType="picture">
        <Button icon={<UploadOutlined />}>Click to upload</Button>
      </Upload>*/ 
  return (
    <>

<h1 className='mb-4'> Your Informations</h1>
<Form 
  onFinish={onFinish}
      name="basic"
      labelCol={{
        span: 5,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth:600,
      }}
      initialValues={{
        remember: true,
      }}
  
      autoComplete="off"
    >
      <Form.Item  className='m-4'
        label="Name"
        name="name"
        
        rules={[
          {
            required: true,
            message: 'Please input your Name!',
          },
        ]}
      >
        <Input placeholder="Enter your Name"/>
      </Form.Item>
      <Form.Item  className='m-4'
        label="Last Name"
        name="last_name"
        
        rules={[
          {
            required: true,
            message: 'Please input your Last Name!',
          },
        ]}
      >
            
        <Input placeholder="Enter your Last Name"/>
      </Form.Item>
      <Form.Item  className='m-4'
        label="Avatar"
        name="avatar"
        

      >
      
      <Input placeholder="Enter your Avatar"/>
      </Form.Item>
      <Form.Item  className='m-4'
        label="Password"
        name="password"
        
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password  placeholder="Enter your Password"/>
      </Form.Item>
      
      <Form.Item  className='mt-5'>
      <button onClick={()=> {
        
            }} className='b' type="submit">Next Step</button>
        
      
    </Form.Item>
      
       
     
      </Form>
    </>
  )
}

export default Password