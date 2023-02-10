import React from 'react';

function ShopCard(props) {
  return (   
    <div className='shop_card'>
        <img src={props.img_card} alt='card' className='card_img_shop'></img>
    </div> 
  );
}

export default ShopCard;

