import React from 'react'
import Mid from './Mid'
import Top from './Top'
import Feet from './Feet'
import Load from './Load'
import { useState,useEffect } from 'react'
  
 

function Home() {
  let [load,setLoad]=useState(<Load></Load>);
  useEffect(()=>{ setTimeout(() => {setLoad(<>
  <Top></Top>
    <Mid></Mid>
    <Feet></Feet>
  
  
  </>)   }, 2000);},[ ])
    
  return (
    <>
    {load}
    
    
    
    
    </>
  )
}

export default Home