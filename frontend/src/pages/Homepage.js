import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Popup from '../components/popup/Popup'

function Homepage() {
  return (
    <div className='home_page'>
      <div className='others'>
        <div className='nav_home'>
          <Navbar/>
        </div>
      </div>
      <div className='popup'>
        <Popup/>
      </div>
    </div>
  );
}

export default Homepage;
