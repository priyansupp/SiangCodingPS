import React from 'react';
import Items from '../components/items/items';
import Navbar from '../components/navbar/Navbar'

const Itemspage = () => {
    return (
        <div className='itemspage'>
            <Navbar/>
            <Items/>
        </div>
    );
}

export default Itemspage;