import React from 'react';
import { SlCallEnd } from 'react-icons/sl';
import data from '../../database/ApprovedRequestsSeller.json';
import './ShopkeeperApproved.css'

function ShopkeeperApproved() {
  return (
    <div className='requests_approved'>
        <div className='head_requests_approved'>
            Approved Requests
        </div>
        <div className='scroll_requests_approved'>
            {data.requests.map((data)=>{
                return(
                    <div className='item_list_requests_approved'>
                        <img src={data.item_img} alt='pi' className='item_img_requests_approved'></img>
                        <div className='about_item_requests_approved'>
                            <div className='item_name_requests_approved'>
                                {data.item_name}
                                <div className='item_qty_requests_approved'>
                                    Quantity: {data.item_qty}
                                </div>
                                <div className='requests_approved_button'>
                                    <button className='requests_approved_button_b'>Approved</button>
                                </div>
                            </div>
                            <div className='cust_name_requests_approved'>
                                Request by:
                                <div className='cust_name_requests_approved_on'>
                                    {data.customer_name}
                                </div>
                                <div className='cust_contact_requests_approved'>
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

export default ShopkeeperApproved;
