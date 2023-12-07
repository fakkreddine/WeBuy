import React from 'react'
import Topuser from './compoennet/Topuser'
import Totaluser from './compoennet/Totaluser'
import Chart from './compoennet/Chart'
import Toatal from './compoennet/Toatal'
import Orders from './compoennet/Orders'
import Products from './compoennet/Products'
function Body() {
  return (
    <div >
        
        <div className='row'>
      <div className='col'>
      <Topuser></Topuser></div>
      
      
      
        <div className='col'>
           
              <Totaluser></Totaluser>
              <Toatal></Toatal>
              <Orders></Orders>
              <Products></Products>
      
        </div>
        <div className='col'>
        <Chart></Chart> </div>
        </div>


    </div>
  )
}

export default Body