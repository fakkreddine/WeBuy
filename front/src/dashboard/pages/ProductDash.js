import React from 'react'
import axios from 'axios';
import edit from "../../res/edit.png"
import { Button, Form, Input } from 'antd';
import save from "../../res/save.png"
import "../dash.css"
import bin from "../../res/bin.png"
import { List } from 'antd';
import { Switch } from 'antd';

import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import {
    Link
   } from "react-router-dom";
import { useState,useEffect } from 'react'
import { Avatar, Breadcrumb, Layout, Menu, theme } from 'antd';
import { Badge } from 'antd';

import {
    EditableProTable,
    ProCard,
    ProFormField,
    ProFormRadio
  } from "@ant-design/pro-components"
  import { Space, Table, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import Nav2 from '../Nav2';
import Topuser from '../compoennet/Topuser';
import Totaluser from '../compoennet/Totaluser';
import Chart from '../compoennet/Chart';
import Orders from '../compoennet/Orders';
import Products from '../compoennet/Products';
import Toatal from '../compoennet/Toatal';
import main from "../../res/home.png"   
import list from "../../res/list.png"
import links from "../../res/link.png"
import {message } from 'antd';

function ProductDash() {
    let[isedit,setisediting]=useState(false)
        let[e,sete]=useState(false)
        let is=(record)=>{
            if (record=="completed") {
                return true
            }else return false
           } 
          
        const success = () => {
            messageApi.open({
                type: 'success',
                content: 'Deleted successfuly ',
              });
          };
    
        let [d,setdata]=useState()
        let [deleted,setdelet]=useState(0)
        const [messageApi, contextHolder] = message.useMessage();
        const [form] = Form.useForm();
        useEffect(()=>{
    
            fetch('http://127.0.0.1:8000/api/products   ')
            .then(res=>res.json())  
            .then(json=>setdata(json))
            console.log("ff")
           
            
        
    
        },[deleted])
        
        
       
    
        
        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
                key: 'id',
                render: (id) => (
                    <>
                    <div>#{id}</div>
                      </>
                  ),}  ,  
            {
              title: 'title',
              dataIndex: 'title',
              key: 'title',
              render: (_,record) => {
                if (e==record.id){
                  return(
                
<Form.Item name='name'rules={[{required:true,message:"fill input please"}]}>
  <Input />
</Form.Item>)
                }else{return <div>{record.title }</div>}
              }
            },
            {
              title: 'avatar',
              dataIndex: 'image',
              key: 'image',
              render: (_,id) => (
                <>
                <div>
                <List.Item>
                <List.Item.Meta 
              avatar={<Avatar  style={{width:"50px",height:"50px"}} src={id.image} />}
              
            />
              </List.Item> 
                </div>
                  </>
              ),
              
            },
            {
              title: 'Deal',
              dataIndex: 'deal',
              key: 'deal',
              render: (_,record) => {
                if (e==record.id){
                  return(
                
<Form.Item name='deal'rules={[{required:true,message:"fill input please"}]}>
  <Input />
</Form.Item>)
                }else{return <div>{record.deal }%</div>}
              }
            },
            {
                title: 'Category',
                dataIndex: 'category',
                key: 'category',render: (_,record) => {
                  if (e==record.id){
                    return(
                  
  <Form.Item name='category'rules={[{required:true,message:"fill input please"}]}>
    <Input />
  </Form.Item>)
                  }else{return <div>{record.category }</div>}
                }
                
              },
            {
              title: 'Quantity',
              dataIndex: 'qt',
              render: (_, record ) => {
    
                if (e==record.id){
                  return(
                
<Form.Item  name='qt' rules={[{required:true,message:"fill input please"}]}>
  <Input/>
</Form.Item>)
                }else{return  <Space>
                  <div>{record.qt}</div>
        <Badge status="success" />
        
      </Space>}
              }
               
              }
            ,
            {
                title: 'Cost',
                dataIndex: 'price',
                key: 'price',
                render: (price) => (
                    <>
                    <div>$ {price}</div>
                      </>
                  )
              },
            {
              title: 'Action',
              key: 'action',
              render: (_, record) => (
                <Space size="middle">
                  
                  <span src={bin} onClick={()=>{axios.delete(`http://127.0.0.1:8000/api/product/delet/${record.id}`)
      .then(() => {success(); setdelet(deleted+1)
       
      });}}><img width={20}  src={bin}/></span>
       <span  onClick={()=> {
        setisediting(true);
        
        form.setFieldsValue({
        name:record.title,
        qt:record.qt,
        deal:record.deal,
        category:record.category
       })
       sete(record.id)
       
       }}><img width={20} src={edit}  /></span>
       <span>{
        isedit&& (<Button  type="link" htmlType="submit" ><img  width={20} src={save}></img></Button>)
        
       } </span>
                </Space>
              ),
            },
          ];    
         
          function getItem(label, key, icon, children, type) {
            return {
              key,
              icon,
              children,
              label,
              type,
            };
          }
        const { Header, Content, Footer, Sider } = Layout;
    
        const items = [
            getItem('Main', 'sub1', <img width={"20px"} src={main}/>, [
               
                getItem(<Link to={"/"}>Home</Link> , '1'),
              getItem(<Link to={"/dashboard"}>Dashboard</Link>, '2'),
              getItem(<Link to={"/product"}>Product</Link>, '3'),
              getItem(<Link to={"/cart"}>Cart </Link>, '4'),
              
            ]),
            getItem('List', 'sub2', <img width={"20px"} src={list}/>,     [
              getItem(<Link to={"/customer"}>Users </Link>, '5'),
              getItem(<Link to={"/all"}>Products </Link>, '6'),
              getItem(<Link to={"/orders"}>orders </Link>, '7'),
         
              ,
            ]),
            {
              type: 'divider',
            },
            getItem('Generale', 'sub3', <img width={"20px"} src={links}/>, [
              getItem(<Link to={"/cart"}>LogIn </Link>, '9'),
              getItem(<Link to={"/signup"}>SignUp </Link>, '10'),
              getItem(<Link to={"/cart"}>Calendar </Link>, '11'),
             
            ]),
          ];
          let finish=(value)=>{
            
            axios.patch(`http://127.0.0.1:8000/api/products/update`, {
              id:e,
              title:value.name,
              deal:value.deal,
                        category:value.category,
                        qt:value.qt,
                        
                        
                      })
                     
  .then(setdelet(deleted+1))
  .catch(error => console.error(error));
  sete(); 
          

          }
  return (
    <>
    <Nav2></Nav2>
    <div  className='hom'>


<Layout
     
    >
      <Sider collapsible   >
            
        <Menu   defaultOpenKeys={['sub1','sub2','sub3']}mode="inline" theme=''   items={items}/>
      </Sider>
     
      <Layout >
        
      <Content className='c d-flex justify-content-center align-items-center'>
       
      <div className='w-75'> <Form form={form} 
      onFinish={finish}> <Table columns={columns} dataSource={d}  width={1000}/></Form></div>
        </Content>
        
        
      </Layout>

    </Layout>
    </div>
    
    </>
  )
}

export default ProductDash