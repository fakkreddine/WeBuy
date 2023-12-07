import React from 'react'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Button, Col, Row, Statistic } from 'antd';
import Form from './tot.css'
import p from "../../res/p.png"
import { useState,useEffect  
} from 'react'

function Toatal() {
    let [dat,setdata]=useState()
    useEffect(()=>{

        fetch('http://127.0.0.1:8000/api/stock')
        .then(res=>res.json())  
        .then(json=>setdata(json))
    

    },[])
  
  return (
    <div className='tot'>
    <div className='head '><img   src={p}></img><span className="p-3">Stock</span></div>
    <div className='row  mt-3   mb-3'>

    <span className=" col p-3">Total Stock</span>
   
    <div className='col d-flex d-flex align-items-center' name="stat" ><Statistic
     className='a'
          value={dat&&dat[0].qt}
          
         
          prefix={<ArrowUpOutlined />}
          suffix="QTY"
        /></div>
    </div>
    </div>
  )
}

export default Toatal