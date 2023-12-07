import React from 'react'
import  "./order.css"
import { useState,useEffect  
} from 'react'
import order from"../../res/order.png"
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Button, Col, Row, Statistic } from 'antd';
function Orders() {
  let [dat,setdata]=useState()
  useEffect(()=>{

      fetch('http://127.0.0.1:8000/api/order')
      .then(res=>res.json())  
      .then(json=>setdata(json))
  

  },[])
  return (
    <div className='order'>



<div className='head '><img src={order}></img><span className="p-3">Orders</span></div>
    <div className='row  mt-3   mb-3'>

    <span className=" col p-3">Total Orders</span>
   
    <div className='col d-flex d-flex align-items-center' name="stat" ><Statistic
     className='a'
          value={dat&&dat[0].qt }
          
         
          prefix={<ArrowUpOutlined />}
          suffix=" QTY"
        /></div>
    </div>

    </div>
  )
}

export default Orders