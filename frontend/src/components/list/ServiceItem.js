import React from 'react';
import data from '../../database/service_list.json'
import './ServiceList.css'

function ServiceItem() {
  return (
    <div>
      <div>
        <div className='head_listService'>
          Services
        </div>
            {data.service.map((data)=>{
                return(
                  <div className='service_list_sec'>
                  <img src={data.service_img} alt='pi' className='service_img_list'></img>
                  <div className='about_service_list'>
                      <div className='service_name_list'>
                          {data.service_name}
                      </div>
                      <div className='service_des_list'>
                          {data.sevice_des}
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

export default ServiceItem;
