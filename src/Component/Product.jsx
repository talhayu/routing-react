import React from 'react'
import { Link  } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function Product() {
  return (
    <>
    <div>Product start</div>
    <li><Link to="shirts"> Product-Shirts </Link></li>
    <li><Link to="pents"> Product-Pents </Link></li>
    <Outlet/>

    <div>Product ends</div>
     
    </>
  )
}

export default Product
