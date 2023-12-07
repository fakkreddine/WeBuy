import React from 'react'
import axios from 'axios';
import "../dash.css"
import bin from "../../res/bin.png"
import {
    Link
   } from "react-router-dom";
import { useState,useEffect } from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
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

function UserDash() {
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Deleted successfuly ',
          });
      };
    let [deleted,setdelet]=useState(false)
    let [d,setdata]=useState()
    const [messageApi, contextHolder] = message.useMessage();
    useEffect(()=>{

        fetch('http://127.0.0.1:8000/api/alluser')
        .then(res=>res.json())  
        .then(json=>setdata(json))
        setdelet(false);
    

    },[deleted])
    useEffect(()=>{

        setdelet(false)
    

    },[deleted])

    
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
           
          },    
        {
          title: 'customer',
          dataIndex: 'name',
          key: 'name',
         
        },
        {
          title: 'Last',
          dataIndex: 'last_name',
          key: 'last',
        },
        {
          title: 'Address',
          dataIndex: 'adress',
          key: 'address',
        },
        {
          title: 'status',
          
          render: (_, { tags }) => (
            <>
             <Space>
                <div>Active</div>
      <Badge status="success" />
      
    </Space>
              </>
          ),
        },
        {
            title: 'Password',
            dataIndex: 'password',
            key: 'password',
          },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              
              <span src={bin} onClick={()=>{axios.delete(`http://127.0.0.1:8000/api/users/${record.id}`)
  .then(() => {success()
   
  });setdelet(true);}}><img width={20}  src={bin}/></span>
            </Space>
          ),
        },
      ];    
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sydney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
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
          getItem(<Link to={"/cart"}>SignUp </Link>, '10'),
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
    
    </>
    );
}

export default UserDash