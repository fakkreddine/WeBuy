import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer ,Tooltip} from 'recharts';
import  { useState,useEffect  
} from 'react'
import "./char.css"
function Chart() {
    let [data,setdata]=useState()
    useEffect(()=>{

        fetch('http://127.0.0.1:8000/api/device')
        .then(res=>res.json())  
        .then(json=>setdata(json))
    

    },[])
   
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    <div className='chart' name="chart">
       <div className='head p-3 '><span className="p-3">Leads by Source</span></div>
        <div className='holder d-flex justify-content-center mt-4'>
 <PieChart width={200} height={200}  >
    <Tooltip  contentStyle={{background:"transparent",border:"none"}}/>
        <Pie
          data={data}
          
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="qt"
        >
          {data&&data.map((entry, index) => (<>
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            
               


            </>
          ))}
        </Pie>
        
      </PieChart></div>
      <div className='titel row m-2 mt-5'>
      {data&&data.map((entry, index) => (<>
      <div className='c d-flex align-items-center col 
      '>
        <div className='dot ' style={{background:COLORS[index]}}></div>
                <div className='type'>{entry.name}</div>

                </div>
                
            </>
          ))}
          </div>



    </div>
  )
}

export default Chart