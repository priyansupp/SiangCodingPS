import React from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import ShopkeeperFullList from '../components/shopkeeperitemlist/ShopkeeperFullList';

function ShopkeeperItems() {
  return (
    <div>
        <Navbar/>
        <ShopkeeperFullList/>
        <Footer/>
    </div>
  );
}

export default ShopkeeperItems;
