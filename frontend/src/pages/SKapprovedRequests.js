import React from 'react';
import Footer from '../components/footer/Footer';
import NavbarSK from '../components/navbar/NavbarSK';
import ShopkeeperApproved from '../components/sellerApproved/ShopkeeperApproved';

function SKapprovedRequests() {
  return (
    <div>
        <NavbarSK/>
        <ShopkeeperApproved/>
        <Footer/>
    </div>
  );
}

export default SKapprovedRequests;
