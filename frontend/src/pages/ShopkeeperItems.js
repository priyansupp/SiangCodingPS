import React from 'react';
import Footer from '../components/footer/Footer';
import NavbarSK from '../components/navbar/NavbarSK';
import ShopkeeperFullList from '../components/shopkeeperitemlist/ShopkeeperFullList';

function ShopkeeperItems() {
  return (
    <div>
        <NavbarSK/>
        <ShopkeeperFullList/>
        <Footer/>
    </div>
  );
}

export default ShopkeeperItems;
