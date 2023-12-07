import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Image } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Rate } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux'
import Nav from "../Nav"
import "./moer.css"
import Comment from './Comment';
import { set } from 'animejs';
import {add} from '../../redux/cartslice'
import { Button, message, Space } from 'antd';


function More() {
  const dispatch = useDispatch()
  let [user,setuser]=useState();
  const { Header, Content, Footer, Sider } = Layout;
    let [product,setp]=useState()
     let  p=useParams().id;
   let [i,setimg]=useState()
   
let [q,setq]=useState(1);
let [remove,setremove]=useState("off")


const [messageApi, contextHolder] = message.useMessage();
const success = () => {
  messageApi.open({
    type: 'success',
    content: 'item added successfully',
  });
};
 let funQan=(n)=>{
  if (q>=0){
    if (q+n>=0){
  setq(q+n);
  setremove("");}

}
  


 }
  
 
 















 let fet=async()=>
{
  let f=await fetch(`http://127.0.0.1:8000/api/products/item/${p}`);
   let r=await f.json();
   let x=await r[0];
  await setp(x);
  await setimg(JSON.parse(x.img));



}



   
    useEffect(()=>{
      fet();  
     
  },[])
  console.log(i);
 
   if (!product) {
    return <Nav></Nav>
    
   }else{
  return (
    <><Nav></Nav><div className='container-fluid'>
      <div className='row'>
        <div className='col-7'>
          <div className='row'>
            <span className='col-4'>  
            <Image.PreviewGroup>

              <Sider >
                <Layout>
                  {i&&i.map(item=>{
                    return <Image width={'80%'} src={item.img} />
                  })}
                  
                  
                </Layout>

              </Sider>
            </Image.PreviewGroup></span>

            <span className='col-8'><Image width={'100%'} src={product.image}></Image></span>


          </div>
        </div>
        <div className='col-5 mt-5 pt-5'>
          <Breadcrumb
            items={[
              {
                href: '/product',
                title: <HomeOutlined />,
              },

              {
                title: product.category,
              },
            ]} />
          <h2  className='mt-4'>{product.title}</h2>
          <span class="text-title">${product.price}</span>
          <span class="text-title m-2">$<s>{(product.price*(product.deal)/100)}</s></span>

          <div className='mt-2'><Rate disabled defaultValue={product.rate} style={{ "color": '#ff3852' }} /></div>

          <div className='d mt-4'><p>{product.description}</p></div>

         <div className='d-flex justify-content-center'> 
         <span>Qty </span>
         <span  class={"icon-minus-squared "+remove} onClick={()=>funQan(-1)} >&ndash;</span>
<input name="Quantity"  value={q} type="number" id="Quantity" class="qty-field" min="0" />
<span class="icon-plus-squared" onClick={()=>funQan(1)}>+</span>  

 </div>
         <p  onClick={(value)=>{dispatch(add([product,q]));
        success()}}className='b text-center mt-4' >Add to Cart</p>

         {contextHolder}
         <Comment props={product}></Comment>
        </div>





      </div>
      
    </div>
   </>
  )
}}

export default More
