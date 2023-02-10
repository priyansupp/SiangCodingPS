import React from 'react';
import ShopCard from './ShopCard';
import shopImage from '../../assets/Shop/roasted_pot.png'
import './TrendingShop.css'

function TrendingShop() {
  return (
        <div className='Trending_main'>
            <div className='heading_shop'>
                Trending Shop
            </div>
            <div className='shop_scroll'>
                <ShopCard img_card={shopImage}/>
                <ShopCard img_card={shopImage}/>
                <ShopCard img_card={shopImage}/>
                <ShopCard img_card={shopImage}/>         
            </div>
    </div>
  );
}

export default TrendingShop;
