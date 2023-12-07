
import React from 'react'
import { Avatar, List} from 'antd';
import { del,sum,moin,update} from '../../redux/cartslice'

import delet from '../../res/delete.png'
import { FloatButton } from 'antd';     
import { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
function CardTemp(props) {
    const dispatch = useDispatch()
    let[price,setprice]=useState(props.props[0].price*(props.props[0].deal)/100)
    let [count,setcount]=useState(props.props[1]);
    let suc=(n)=>{  
        if (count+n>0){
            setcount(count+n)
        }


    }
    useEffect(()=>{
        
        dispatch(sum(price*count))
        
    },[])
  return (
    <List.Item> 
    <List.Item.Meta
    avatar={<img  width={150}   src={props.props[0].image} />}
    title={<h1>{props.props[0].title}</h1>}
    description={<>
     <span class="text-title"><s>${props.props[0].price}</s></span>
          <span class="text-title m-2">${(props.props[0].price*(props.props[0].deal)/100)}</span>
          <div className='mt-3'>
            <span>Qty </span>
            <span  class={"icon-minus-squared "}  onClick={()=>{suc(-1);
            dispatch(moin(props.props[0].price));dispatch(update([props.props[0].id,count+1]))}} >
                &ndash;</span>
            <input name="Quantity" value={count} type="number" id="Quantity" class="qty-field" min="0" />
            <span class="icon-plus-squared"   onClick={()=>{suc(1);dispatch(sum(price));dispatch(update([props.props[0].id,count+1]))}}  >+</span>  
 
            
          </div>
         
          
    </>}
  />
  <Avatar onClick={()=>{dispatch(moin(price*count))
  dispatch(del(props.index));
  

}
  } src={delet}></Avatar>
  
</List.Item>
    
  )
}

export default CardTemp















