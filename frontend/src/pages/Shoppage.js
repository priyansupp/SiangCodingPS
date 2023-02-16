import React from 'react'
import Shopcard from '../components/ShopCard/Shopcard'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

function Shoppage() {
  
  return (
    <div>
        <Navbar />
        <div className='shop'>
        <Shopcard/>
        
        
        </div>
        
        <Footer />
      
    </div>
  )
}

export default Shoppage
