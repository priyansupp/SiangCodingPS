import React from 'react';
import Card from './Card';
import data from '../../database/offers.json'
import './carousel.css';
import {AiFillRightCircle} from 'react-icons/ai';
import {AiFillLeftCircle} from 'react-icons/ai';
import { useState } from 'react';

function Carousel() {
  const[Currentindex, setCurrentindex]=useState(0);

  const gotoPrevious = () =>{
    const isFirstSlide = Currentindex === 0
    const newIndex = isFirstSlide ? data.offers.length-1:Currentindex-1
    setCurrentindex(newIndex)
  }
  const gotoNext = () =>{
    const isLastSlide = Currentindex === data.offers.length-1
    const newIndex = isLastSlide ? 0:Currentindex+1
    setCurrentindex(newIndex)
  }
  return (
    <div className='card_scroll'>
      <AiFillLeftCircle className='leftArrow_slider' onClick={gotoPrevious}/>
      <AiFillRightCircle className='rightArrow_slider' onClick={gotoNext}/>
          <div className='slider_offers'>
            <Card img_card={data.offers[Currentindex].img_link} prod_name={data.offers[Currentindex].product} new_price={data.offers[Currentindex].new_price} offer_name={data.offers[Currentindex].offer_name} valid={data.offers[Currentindex].validity}/>
          </div>
    </div>
  );
}

export default Carousel;
