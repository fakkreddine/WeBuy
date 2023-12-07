import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Avatar, List } from 'antd';
import "./topuser.css"
function Topuser() {
    let [data,setdata]=useState()
    useEffect(()=>{

        fetch('http://127.0.0.1:8000/api/topuser')
        .then(res=>res.json())  
        .then(json=>setdata(json))
     

    },[])
    
      return (
    <div className='topuser'>
        <h1>Top Deals</h1>
        <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
        <List.Item>
        <List.Item.Meta 
          avatar={<Avatar  style={{width:"45px",height:"45px"}} src={item.avatar} />}
          title={<span>{item.name} {item.last_name}</span>}
          description={<span>{item.mail}</span>}
        />
        <span className='cost'>${item.cost}</span>
      </List.Item>

    )}
  />
        
    </div>
  )
}

export default Topuser