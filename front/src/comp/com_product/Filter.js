import React from 'react'
import { Button, Flex } from 'antd';
import MultiRangeSlider from "react-js-multi-range-sliders";
import { useState,useEffect } from 'react'
import { Col, InputNumber, Row, Slider, Space } from 'antd';
import { Rate } from 'antd';

import { Link } from 'react-router-dom'
import './filter.css'
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; 
import { useSelector, useDispatch } from 'react-redux'
import { f} from '../../redux/apiSlice'


function Filter() {
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  let [inputValue, setInputValue] = useState(1);
  const count = useSelector((state) => state.counter.value)
  let [valueRate,setValueRate]=useState(0 );
  const dispatch = useDispatch()
   
    let [cat,setCateg]=useState()
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/category/count')
        .then(res=>res.json())  
        .then(json=>setCateg(json))
    },[])
   
    
  return (
    
    <div className='filter p-5 mt-4  '>
      <p  onClick={()=>{
                dispatch(f("http://127.0.0.1:8000/api/products/page?page=1"));
                
                  
                }} className='rest d-flex justify-content-end'>Reset</p>
    <div className='cat'>
        <h4>Category</h4>
                {   cat && cat.map((item) =>{
                return<div className='d-flex justify-content-between'>
                <p onClick={()=>{console.log("ee");
                dispatch(f("http://127.0.0.1:8000/api/products/category/"+item.category));
                console.log(count )
                  
                }    } > {item.category}  </p>
                <span >{item.count}</span> 
                </div>
                 }) }
    </div>
    <div>
      <div className='row'>
      <div className='col-6'>
    <h4>Price</h4></div> <div className='col-6 d-flex justify-content-end'><Button type="link">ok</Button></div>      </div>   
    <Slider range onChange={(value)=>setInputValue(value)}  min={1} max={2000}  defaultValue={[20, 50]}  />
    <div className='row'>
      <div className='col-6'>
    <InputNumber
         value={inputValue[0]}
          style={{ margin: '0 16px' }}
        
        /></div>
        
        <div className='col-6'>
        <InputNumber
      
       value={inputValue[1]}
          style={{ margin: '0 16px' }}
          
        />
        <p  onClick={()=>{
          console.log('http://127.0.0.1:8000/api/products/deal?dealmin='+inputValue[0]+"&"+'dealmax='+inputValue[1]);
          
          dispatch(f('http://127.0.0.1:8000/api/products/deal?dealmin='+inputValue[0]+"&"+'dealmax='+inputValue[1]))
               
                
                  
                }} className='rest d-flex justify-content-end'>Ok</p>
        </div>  
</div>

    </div>
    <div>
    <h4>Deal</h4>          
    <div class="form-check">
  <input value="80" onClick={(value)=>{dispatch(f('http://127.0.0.1:8000/api/products/pro/'+value.target.value));}}   class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
  <label class="form-check-label" for="flexRadioDefault2">
  80% et plus
  </label>
</div>
<div class="form-check">
  <input value="60" onClick={(value)=>{dispatch(f('http://127.0.0.1:8000/api/products/pro/'+value.target.value));}} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
  <label class="form-check-label" for="flexRadioDefault2">
  60% et plus
  </label>
</div>
<div class="form-check">
  <input  value='20' onClick={(value)=>{dispatch(f("http://127.0.0.1:8000/api/products/pro/"+value.target.value));}} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
  <label class="form-check-label" for="flexRadioDefault2">
  40% et plus
  </label>
</div>










    </div>

    <div>
    <h4>Rate</h4>   
    
    <Rate   onChange={(valueRate)=>setValueRate(valueRate)} style={{ "color": '#ff3852' }} allowHalf defaultValue={0 } />
    <p  onClick={()=>{
          dispatch(f('http://127.0.0.1:8000/api/products/rate/'+valueRate ))}} className='rest d-flex justify-content-end'>Ok</p>
    
    </div>
    
</div>
  )
}

export default Filter