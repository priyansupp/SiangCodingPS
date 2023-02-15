import React from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import ShopkeeperRequests from '../components/sellerRequestStatus/ShopkeeperRequests';

function SKrequest() {
  return (
    <div>
        <Navbar/>
        <ShopkeeperRequests/>
        <Footer/>
    </div>
  );
}

export default SKrequest;
