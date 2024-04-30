import React from 'react'
import ImageSwiper from './ImageSwiper'
import ImageListPage from './ImageListPage'
import Header from './Header'
import Footer from './Footer'

export default function Festivals() {
  return (
    <div>
      <Header/>
        <ImageSwiper/>
        <ImageListPage/>
        <Footer/>
    </div>
  )
}
