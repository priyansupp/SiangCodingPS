import React from 'react';
import Card from './Card';
import data from '../../database/offers.json'
import './carousel.css'

function Carousel() {
  return (
    <div className='card_scroll'>
        <Card img_card={data.offers[0].img_link} prod_name={data.offers[0].product} new_price={data.offers[0].new_price} offer_name={data.offers[0].offer_name} valid={data.offers[0].validity}/>
        <Card img_card={data.offers[0].img_link} prod_name={data.offers[0].product} new_price={data.offers[0].new_price} offer_name={data.offers[0].offer_name} valid={data.offers[0].validity}/>
        <Card img_card={data.offers[0].img_link} prod_name={data.offers[0].product} new_price={data.offers[0].new_price} offer_name={data.offers[0].offer_name} valid={data.offers[0].validity}/>
    </div>
  );
}

export default Carousel;
