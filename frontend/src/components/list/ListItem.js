import React from 'react';
import data from '../../database/Item_list.json';
import './ListItem.css'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { Link } from 'react-router-dom';

function ListItem() {
  // console.log(data.item_catgs);
  return (
    <div>
      {data.item_catgs.map((item_catg) => {
        const url = "/items/" + item_catg.cat_name;
            return (
                <Link to={url} key={item_catg.id} style={{color:'black', textDecoration: 'none' }}>
                    <div className='item_list_sec'>
                        <img src={item_catg.cat_img} alt='pi' className='item_img_list'></img>
                        <div className='about_item_list'>
                            <div className='item_name_list'>
                                {item_catg.cat_name}
                            </div>
                            <div className='item_des_list'>
                                {item_catg.img_des}
                                <div className='cart_list'>
                                    <AiOutlineShoppingCart/>
                                </div>
                            </div>
                            
                        </div>
                    </div>   
                </Link>
            );
        }
        )}
        
    </div>
  );
}

export default ListItem;
