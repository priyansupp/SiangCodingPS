import './Shopcard.css'
import {RiStarSFill} from 'react-icons/ri'
import {GoLocation} from 'react-icons/go'
import React from 'react'
import Gallery from './Gallery'

const Shopcard = () => {
    
  return (
    <div className='Main'>
        <div className='main'>
            <div className='name'>
            <img src='https://lh3.googleusercontent.com/MnPXhhRRCmpqssWvvJRluPPRkVjlQhlbbo3WLEzu_YeLM3BnI1W41EnWugq2xkz9vqUF6QFxvoVcmKUe5BKn_xTdAA=w256-rw'></img>
            <div className='Name'>
            <h1>Khoka Eats</h1>
            <div className='stars'>
            <RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/>
            <span>5.0</span>
            </div>
            </div>
            

            </div>

            <div className='timings'>
                <h3><b>Cafe, Healthy Food, Beverages, Salad, Desserts</b></h3>
                <span>9:30 AM -11:30 PM</span>
            </div>

            <div className='location'>
                <h3><b><span>Address</span></b></h3>
                <div className='loc'>
                <span><GoLocation/></span>
                <span>Khoka Gate, IIT Guwahati</span>
                </div>
            </div>

            <div className='buttons'>
                <button>Order Now</button>
                <button>See Menu</button>
            </div>
            
        </div>

        <Gallery/>

       

        

        
    </div>
  )
}

export default Shopcard;
