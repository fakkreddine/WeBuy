import React from 'react'
import "../menu.css"
import {
   Link
  } from "react-router-dom";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Topuser from './Topuser';
import Totaluser from './Totaluser';
import Chart from './Chart';
import Orders from './Orders';
import Products from './Products';
import Toatal from './Toatal';
import main from "../../res/home.png"
import list from "../../res/list.png"
import links from "../../res/link.png"
function MenuDash() {
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
  return (
    <div className='h'>


<Layout
     
    >
      <Sider collapsible   >
            
        <Menu   defaultOpenKeys={['sub1','sub2','sub3']}mode="inline" theme=''   items={items}/>
      </Sider>
     
      <Layout >
        
      <Content className='c'>
       
        <div><Topuser></Topuser></div>
        <div className='ca'>
       
        <Toatal></Toatal>
        <Products></Products>
        <Orders></Orders>
       </div>    
        <div className='ca'><Chart></Chart>   <Totaluser></Totaluser>
         </div> 
        </Content>
        
        
      </Layout>

    </Layout>
    </div>
  ) 
}

export default MenuDash