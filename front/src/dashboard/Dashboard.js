import React from 'react'

import Body from './Body'
import  "./dash.css"
import Nav2 from './Nav2'
import MenuDash from './compoennet/MenuDash'


function dashboard() {
  

  return (<>
    <div className='hom'>
      <Nav2></Nav2>
      <div>
     <MenuDash></MenuDash>
      </div>
    </div>
   
    </>

  )
}

export default dashboard