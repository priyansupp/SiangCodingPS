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
                {data.trendingShops.map((shop)=>{
                  const url = "shpp"
                  return(
                    // <Link to={} key={shop.id}>
                      <ShopCard key={shop.id} img={shop.shop_img_link} name={shop.shopName} contact={shop.shopContact}/>
                    // </Link>
                  )
                })}       
            </div>
    </div>
  );
}

export default TrendingShop;
