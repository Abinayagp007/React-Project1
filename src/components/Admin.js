import React from 'react'
import ProductCard from './ProductCard'
import Header from './Header'
import Footer from './Footer'

export default function Admin() {
  return (
    <div>
               <h2 style={{alignContent:"inherit"}}>ADMIN DETAILS</h2>
        <ProductCard/>
        <Footer/>
    </div>
  )
}
