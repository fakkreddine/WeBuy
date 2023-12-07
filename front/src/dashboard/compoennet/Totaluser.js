import React, { useState,useEffect  
 } from 'react'
 import "./taotaluser.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Button, Col, Row, Statistic } from 'antd';
import {
    UserOutlined
  } from '@ant-design/icons';
function Totaluser() {

    let [dat,setdata]=useState()
    useEffect(()=>{

        fetch('http://127.0.0.1:8000/api/totaluser')
        .then(res=>res.json())  
        .then(json=>setdata(json))
    

    },[])
       

  return (
    
<div className='Totaluser' >
<div className='head'><UserOutlined /><span className="p-3">Total Users</span></div>
    <div className='chart' >
<div className='row'>
   <div className='col-6 p-3' >
<Statistic  className="f" title="" value={dat&&dat.all[0].count}suffix="&nbsp;  Users" /> 0</div>
   
        <LineChart className='col-6' width={190} dot={false} height={100} data={dat&&dat.data}>
        <Tooltip contentStyle={{background:"transparent",border:"none"}}/>
             <Line type="monotone" dataKey="QT" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
            </div >
            <div className=' topuserFeet d-flex flex-row-reverse'>
            <span className='month'>{dat&&(((dat.data[dat.data.length-1].QT)*100)/dat.all[0].count)}%</span><br/>
            <span>This Month </span>
            </div>

    </div>

</div>
  )
}

export default Totaluser