import React from 'react'
import axios from 'axios';
import "../dash.css"
import bin from "../../res/bin.png"
import { List } from 'antd';
import { Switch } from 'antd';
import save from "../../res/save.png"

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
function OrdersDash() {
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
    useEffect(()=>{

        fetch('http://127.0.0.1:8000/api/orders')
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
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
         
        },
        {
          title: 'Customer',
          dataIndex: 'user_id',
          key: 'customer',
          render: (_,id) => (
            <>
            <div>
            <List.Item>
            <List.Item.Meta 
          avatar={<Avatar  style={{width:"35px",height:"35px"}} src={id.avatar} />}
          title={<div>{id.name} {id.last_name}</div>}
          description={<div>{id.mail}</div>}
        />
          </List.Item> 
            </div>
              </>
          ),
          
        },
        {
          title: 'Address',
          dataIndex: 'adress',
          key: 'address',
        },
        {
            title: 'validation',
            dataIndex: 'validation',
            key: 'validation',
            render: (_,record) => (
                <>
               
               <Switch  defaultChecked={is(record.status)} onChange={(item)=>{

                if (item) {
                    axios.patch(`http://127.0.0.1:8000/api/orders/update`, {
                        status:"completed",
                        id:record.id
                       
                      })
  .then(setdelet(deleted+1))
  .catch(error => console.error(error));
                    
                }else{
                    axios.patch(`http://127.0.0.1:8000/api/orders/update`, {
                        status:"pending",
                        id:record.id
                       
                      })
                        .then(setdelet(deleted+1))
                        .catch(error => console.error(error));
                }
               }}
     
      
    />
                </>
            )
          },
        {
          title: 'status',
          
          render: (_, tags ) => {


            if (tags.status=="pending") {
                return  <>
                
                 <Space>
                    <div>Pending</div>
          <Badge status="warning" />
          
        </Space>
                  </>
            }else{
                return  <>
                
                 <Space>
                    <div>Completed</div>
          <Badge status="success" />
          
        </Space>
                  </>
            }
          }
        },
        {
            title: 'Cost',
            dataIndex: 'cost',
            key: 'cost',
            render: (cost) => (
                <>
                <div>$ {cost}</div>
                  </>
              )
          },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              
              <span src={bin} onClick={()=>{axios.delete(`http://127.0.0.1:8000/api/orders/delet/${record.id}`)
  .then(() => {success();setdelet(deleted+1)
   
  });}}><img width={"20px"} src={bin}/></span>
  
  
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
    return(
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
       
      <div className='w-75'>  <Table columns={columns} dataSource={d}  width={1000}/></div>
        </Content>
        
        
      </Layout>

    </Layout>
    </div>
    
    </>);
}

export default OrdersDash