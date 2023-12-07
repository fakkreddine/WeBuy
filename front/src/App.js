import { useEffect, useState } from "react";
import Load from "./comp/Load";
import Home from "./comp/Home";
import './app.css'
import Product from "./comp/com_product/Product";
import Cart from "./comp/cart/Cart";
import LogIn from './users/LogIn'
import Signup from './users/Signup'
import ProductDash from "./dashboard/pages/ProductDash"

import { Routes,Route,Link } from "react-router-dom";
import More from "./comp/more info/More";
import Dashboard from "./dashboard/Dashboard"
import UserDash from "./dashboard/pages/UserDash"
import OrdersDash from "./dashboard/pages/OrdersDash";
function App() {
 

 
    
  return (
    <div className="App">
      <Routes>
    
      <Route path="/all" element={<><ProductDash></ProductDash></> } ></Route>
      <Route path="/signup" element={<><Signup></Signup></> } ></Route>
      <Route path="/" element={<><Home></Home></> } ></Route>
      <Route path="/dashboard" element={<><Dashboard></Dashboard></> } ></Route>
      <Route path="/customer" element={<><UserDash></UserDash></> } ></Route>
      <Route path="/orders" element={<><OrdersDash></OrdersDash></> } ></Route>
      <Route path="/product" element={<><Product></Product></>}></Route>
      <Route path="/product/page" element={<><Product></Product></>}></Route>
      <Route path="/cart" element={<><Cart></Cart></>}></Route>
      <Route path="/login" element={<><LogIn></LogIn></>}></Route>
    
      
      <Route path="/product/item/:id" element={<><More></More></>}></Route>
      
      </Routes>

      
    
      
    </div>
  );
}

export default App;
