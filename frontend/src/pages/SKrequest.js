import React from 'react';
import Footer from '../components/footer/Footer';
import NavbarSK from '../components/navbar/NavbarSK';
import ShopkeeperRequests from '../components/sellerRequestStatus/ShopkeeperRequests';

function SKrequest() {
  return (
    <div>
        <NavbarSK/>
        <ShopkeeperRequests/>
        <Footer/>
    </div>
  );
}

export default SKrequest;
