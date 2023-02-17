import React from 'react'
import Shopcard from '../components/Shopcard/Shopcard'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import './Shoppage.css'
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
