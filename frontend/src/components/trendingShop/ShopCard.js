import React from 'react';
import './shopCard.css';
import {IoMdCall} from 'react-icons/io';

function ShopCard(props) {
  return (   
    <div className='shop_card'>
        <img src={props.img} alt='card' className='card_img_shop'></img>
        <div className='shop_card_detail'>
          <div className='shop_card_name'>
            {props.name}
          </div>
          <div className='shop_card_contact'>
            {props.contact}
            <IoMdCall className='contact_icon'/>
          </div>
        </div>
    </div> 
  );
}

export default ShopCard;

