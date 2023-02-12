import React from 'react';
import ShopCard from './ShopCard';
import data from '../../database/trendingShops.json'
import './TrendingShop.css'

function TrendingShop() {
  return (
        <div className='Trending_main'>
            <div className='heading_shop'>
                Trending Shop
            </div>
            <div className='shop_scroll'>
                {data.trendingShops.map((data)=>{
                  return(
                    <ShopCard img={data.shop_img_link} name={data.shopName} contact={data.shopContact}/>
                  )
                })}       
            </div>
    </div>
  );
}

export default TrendingShop;
