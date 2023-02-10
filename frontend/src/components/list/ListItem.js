import React from 'react';
import data from '../../database/Item_list.json'
import './ListItem.css'

function ListItem() {
  return (
    <div>
        <div>
            <div className='head_listItem'>
                Items
            </div>
            {data.item.map((data)=>{
                return(
                    <div className='item_list_sec'>
                        <img src={data.item_img} alt='pi' className='item_img_list'></img>
                        <div className='about_item_list'>
                            <div className='item_name_list'>
                                {data.item_name}
                            </div>
                            <div className='item_des_list'>
                                {data.img_des}
                            </div>
                            <hr></hr>
                        </div>
                    </div>   
                )
            })}
        </div>
    </div>
  );
}

export default ListItem;

