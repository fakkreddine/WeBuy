import React from 'react'
import fast from '../res/fast.svg'
import money from '../res/money.svg'
import support from '../res/support.svg'
import './Mid.css'
import p from '../res/product.png'
import product1 from '../res/product1.png'
import product2 from '../res/product2.png'
import product3 from '../res/product3.png'
import p2 from '../res/popular.png'

import pop1 from '../res/pop1.png'
import pop2 from '../res/pop2.png'
import pop3 from '../res/pop3.png'
import pop4 from '../res/pop4.png'
import pop5 from '../res/pop5.png'
import pop6 from '../res/pop6.png'
import music from '../res/music.jpg'


function Mid() {
  return (
  
    <div  className=' Mid container-fluid mt-5  '>
        <div className='row d-flex justify-content-center pt-5 '>
            <div className='col-lg-3 col-sm-12 mx-4  mb-auto d-flex justify-content-center mt-5 '>
                <img className="rounded float-start me-3"  src={fast}></img>
                <div> <h4>Fast Shipping</h4>
                <p className=" d-flex text-center"> Fast Shipping for All Order</p></div>
            </div>
            
            <div className='col-lg-3 col-sm-12 mx-4  mb-auto   d-flex justify-content-center mt-5'>
                <img class="rounded float-start me-3"  src={money}></img>
                <div> <h4>Money Guarantee</h4>
                <p className    =" d-flex text-center">30 Days Money Back</p></div>
            </div>
            <div className='col-lg-3 col-xs-12 mx-4 mb-auto  d-flex justify-content-center  mt-5 '>
                <img  className="rounded float-start me-3" src={support}></img>
                <div>   <h3>24/7 Support</h3>
                <p className=" d-flex text-center">Technical Support 24/7</p></div>
            </div>


            <div className='pro container-fluid mt-5 pt-5'>
                <div className='row  d-flex justify-content-center'>
                        <img  className=" img img-fluid object-fit-fill"src={p}></img>
                </div>
                <div className='row d-flex justify-content-center '>
                     <div className='col-lg-5 col-sm-12 '>
                        <img src={product1} className='product img img-fluid  object-fit-fill   m-2'></img>
                        
                    </div>
                    <div className='col-lg-5 col-sm-12 mb-5 pb-5 '>
                 
                     
                        <img src={product2} className='product img img-fluid m-2' ></img>
                        <img src={product3} className='product img img-fluid  object-fit-fill m-2' ></img>
                    
                    </div>
            
                

               
            
                </div>

                






            </div>









            <div className='popula container-fluid mt-5 pt-5'>
              
              <div className='row  d-flex justify-content-center mw-80'>
                                  <img  className=" img img-fluid object-fit-fill"src={p2}></img>
                          </div>
            <div className='row d-flex justify-content-center mt          '>
                     <div className='col-lg-3  col-sm-12 mt-4 '> 
                        <img src={pop1} className='product img img-fluid  object-fit-fill   '></img>
                        
                        
                    </div>
                    <div className='col-lg-3  col-sm-12  mt-4'>
                        <img src={pop2} className=' img img-fluid  object-fit-fill   '></img>
                        
                        
                    </div>
                    <div className='col-lg-3  col-sm-12 mt-4'>
                        <img src={pop3} className='product img img-fluid  object-fit-fill   '></img>
                        
                        
                    </div>


                    <div className='row d-flex justify-content-center  mt-5'>
                     <div className='col-lg-3  col-sm-12  mt-4'> 
                        <img src={pop4} className='product img img-fluid  object-fit-fill   '></img>
                        
                        
                    </div>
                    <div className='col-lg-3  col-sm-12  mt-4'>
                        <img src={pop5} className=' img img-fluid  object-fit-fill   '></img>
                        
                        
                    </div>
                    <div className='col-lg-3  col-sm-12 mt-4 '>
                        <img src={pop6} className='product img img-fluid  object-fit-fill   '></img>
                        
                        
                    </div>
          
          
              </div>

             
          
          
              </div>
          
          












        </div>
    </div>















    



    
  </div>
  )
}

export default Mid