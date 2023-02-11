import React from 'react';
import './card.css';

function Card(props) {
  return (
    <div className='sale_card'>
      
        <img src={props.img_card} alt='card' className='card_img'></img>
        <div className='offer_container'>
          <div className='prod_name'>
            {props.prod_name}
          </div>
          <div className='tagline'>
            <div className='offer_name'>
              {props.offer_name}
            </div>
          </div>
          <div className='spec_price'>
            Special Price: {props.new_price}           
          </div>
          <div className='validity'>
            Valid Till: {props.valid}
          </div>
        </div>
    
    </div>
  );
}

export default Card;
