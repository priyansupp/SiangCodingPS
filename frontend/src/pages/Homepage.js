import React from 'react';
import './Homepage.css'
import Carousel from '../components/carousel/Carousel';
import Navbar from '../components/navbar/Navbar';
import Popup from '../components/popup/Popup';
import { useState, useEffect } from 'react';
import FullList from '../components/list/FullList';
import TrendingShop from '../components/trendingShop/TrendingShop';
import Footer from '../components/footer/Footer';

function Homepage() {
  const[pop, setpop] = useState(1);

    useEffect(()=>{
        if(!pop){
            document.querySelector('.others').style.filter="blur(0px)"
            document.querySelector('.boxpp').style.visibility = "hidden"
            setpop(1);
        }
    }, [pop])
  return (
    <div className='home_page'>
      <div className='popup'>
        <Popup/>
      </div>
      <div className='others'>
        <div className='nav_home'>
          <Navbar className='nav_bar'/>
        </div>
        <div className='home_bottom' onClick={()=>setpop(0)}>
          <div className='mid'>
            <div>
              <Carousel/>
            </div>
            <div>
              <FullList/>
            </div>
            <div>
              <TrendingShop/>
            </div>
          </div>
          <div className='footer_mp'>
              <Footer/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
