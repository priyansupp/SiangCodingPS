import React from 'react';
import Products from '../components/products/products';
import Footer from '../components/footer/Footer'
import { useLocation } from 'react-router-dom';

const Productspage = (props) => {
    const location = useLocation();
    const cat_name = location.pathname.split('/')[2];

    return (
        <div className='productspage'>
            <Products cat_name={cat_name}/>
            <Footer/>
        </div>
    );
}

export default Productspage;