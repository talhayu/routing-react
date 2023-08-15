import React from 'react'
import Navbar from './Component/Navbar'
import Main from './Component/Main'
import Product from './Component/Product'
import {Routes, Route} from "react-router-dom";
import Hero from './Component/Hero';
import Shirts from './Component/Shirts';
import Pents from './Component/Pents';


function App() {
  return (
    <div>
      <Navbar/>
   <Routes>
   <Route path='/' element={<Hero/>}/>
      <Route path='/main' element={<Main/>}/>

      <Route path='/product' element={<Product/>}>
      <Route path='shirts' element={<Shirts/>}/>
      <Route path='pents' element={<Pents/>}/>
        </Route>
       
   </Routes>
  
    </div>
    
  )
}

export default App
