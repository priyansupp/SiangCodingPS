import React from 'react';
import data from '../../database/shopkeeperService.json';
import './ShopkeeperServiceList.css'
import {FaTrash, FaEdit} from 'react-icons/fa'

function ShopkeeperServiceList() {
  return (
    <div>
        <div>
            {data.service.map((data)=>{
                return(
                  <div className='service_list_sec_s'>
                  <img src={data.service_img} alt='pi' className='service_img_list_s'></img>
                  <div className='about_service_list_s'>
                      <div className='service_name_list_s'>
                          {data.service_name}
                      </div>
                      <div className='service_des_list_s'>
                        <div className='service_des_on_s'>
                            {data.service_des}
                        </div>
                        <div className='service_price_list_s'>
                            ₹{data.service_price}
                        </div>
                        <div className='edit_S'>
                            <FaEdit className='edit_bin_S'/>
                            <span class="tooltiptext_S">Edit Item</span>
                        </div>
                        <div className='delete_s'>
                            <FaTrash className='trash_bin'/>
                            <span class="tooltiptext_s">Remove Item</span>
                        </div>
                          </div>
                      </div>
                  </div> 
                )
            })}
        </div>
    </div>
  );
}

export default ShopkeeperServiceList;
