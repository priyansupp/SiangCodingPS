import React from 'react';
import Items from '../components/items/items';
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

const Itemspage = () => {
    return (
        <div className='itemspage'>
            <Navbar/>
            <Items/>
            <Footer/>
        </div>
    );
}

export default Itemspage;