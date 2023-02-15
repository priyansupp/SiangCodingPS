import React from 'react';
import data from '../../database/PendingRequestSeller.json';
import './ShopkeeperRequests.css';
import {SlCallEnd} from 'react-icons/sl'

function ShopkeeperRequests() {
  return (
    <div className='requests_total'>
        <div className='head_requests_pending'>
            Requests Pending
        </div>
        <div className='scroll_requests'>
            {data.requests.map((data)=>{
                return(
                    <div className='item_list_requests_pen'>
                        <img src={data.item_img} alt='pi' className='item_img_requests_pen'></img>
                        <div className='about_item_requests_pen'>
                            <div className='item_name_requests_pen'>
                                {data.item_name}
                                <div className='item_qty_requests_pen'>
                                    Quantity: {data.item_qty}
                                </div>
                                <div className='requests_pending_button'>
                                    <button className='requests_approve_button'>Approve</button>
                                    <button className='requests_decline_button'>Decline</button>
                                </div>
                            </div>
                            <div className='cust_name_requests_pen'>
                                Request by:
                                <div className='cust_name_requests_pen_on'>
                                    {data.customer_name}
                                </div>
                                <div className='cust_contact_requests_pen'>
                                    <SlCallEnd className='cust_contacts_logo'/>
                                    {data.customer_contact}
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

export default ShopkeeperRequests;
