import React from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import ShopkeeperApproved from '../components/sellerApproved/ShopkeeperApproved';

function SKapprovedRequests() {
  return (
    <div>
        <Navbar/>
        <ShopkeeperApproved/>
        <Footer/>
    </div>
  );
}

export default SKapprovedRequests;
