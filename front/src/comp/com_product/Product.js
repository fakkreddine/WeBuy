import React from 'react'
import Nav from '../Nav'
import { useNavigate } from "react-router-dom";
import ProductList from './ProductList'
import { Link, Routes } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Filter from './Filter'
import './product.css'
import { lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { set } from 'animejs'
function Product () {
  let navigate = useNavigate();
  let login=localStorage.getItem("user");
  if (login=="") {
    navigate("/login");
  }
  let [products,setproducts]= useState({});
let [api,setApi]=useState("http://127.0.0.1:8000/api/products/page?page=1");

let [nbP,setnbP]=useState([]);
let a = useSelector((state) => state.counter.value)
const dispatch = useDispatch()
let  myFunction = async () => {
  // run asynchronous tasks here
  
  let fet= await fetch(a|| api   );
 let jso=await fet.json();

 setproducts(jso);
 let li =await jso.links;
 setnbP(li);  
};
useEffect(()=>{
  myFunction();

  
},[api,a])




    
  return (
    <>  <Nav></Nav>
    <div  className='page container-fluid p-2 '>

  
    
  <div className='row'>
    <div className='col-lg-3 col-sm-12'>



<Filter></Filter>



      
   
   
   
   
   
   
   
   
   
   
   
   
   
   </div>
   
    <div className='col-lg-9 col-sm-12'><ProductList props={products.data} ></ProductList></div></div>
    
   <div className='container-fluid m-4 d-flex justify-content-center'>
   <div classname="bua btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div className="bu btn-group me-2" role="group" aria-label="First group">
   {nbP&&nbP.map(item=>{
    return  <button  onClick={(e)=>{setApi(item.url);}} type="button" className=" b">{item.label}</button>
   })}
   
   
   </div>
   </div>
   </div>
    </div></>
  )
}

export default  Product