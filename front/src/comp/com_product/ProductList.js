import React, { useEffect, useState,useCallback } from 'react'
import ProdTempalte from './ProdTempalte'
import { Routes ,Route} from 'react-router-dom'
import More from '../more info/More'
import { useSelector, useDispatch } from 'react-redux'

import Home from '../Home'
import { useParams } from 'react-router-dom'

function ProductList(props) {
    let [pro,setProd]=useState([])
    useEffect(()=>{setProd(props.props)}
      ,[props.props]);
 
  
    
   
    
  
   
   
  
  return (<>
  

      
   
    <div className='container-fluid'>
    
            <div className='row '>
          
                    {pro && pro.map(item =>{

return <ProdTempalte  key={item.id}props={item}></ProdTempalte>



                    })}
               

               
            </div>
        
    </div>
    </>
  )
}

export default ProductList