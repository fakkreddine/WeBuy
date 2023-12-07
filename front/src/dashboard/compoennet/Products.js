import React from 'react'
import { useState,useEffect  
} from 'react'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Button, Col, Row, Statistic } from 'antd';
import  "./p.css"
import order from "../../res/pr.png"
function Products() {
    let [dat,setdata]=useState()
    useEffect(()=>{

        fetch('http://127.0.0.1:8000/api/product')
        .then(res=>res.json())  
        .then(json=>setdata(json))
    

    },[])
  return (
    <div className='order'>



<div className='head '><img src={order}></img><span className="p-3">Products</span></div>
    <div className='row  mt-3   mb-3'>

    <span className=" col p-3">Total Products</span>
   
    <div className='col d-flex d-flex align-items-center' name="stat" ><Statistic
     className='a'
          value={dat&&dat[0].qt}
          precision={1}
         
          prefix={<ArrowUpOutlined />}
          suffix="QTY"
        /></div>
    </div>

    </div>
  )
}

export default Products