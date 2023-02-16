import React from 'react';
import data from '../../database/service_list.json';
import './ListService.css';
import {MdOutlineLibraryAdd} from 'react-icons/md';
import { Link } from 'react-router-dom';

function ListService() {
  return (
    <div>
      <div>
            {data.service_catgs.map((service_catg)=>{
              const url = "/services/" + service_catg.cat_name;
                return(
                  <Link to={url} key={service_catg.id}>
                  <div className='service_list_sec'>
                  <img src={service_catg.cat_img} alt='pi' className='service_img_list'></img>
                  <div className='about_service_list'>
                      <div className='service_name_list'>
                          {service_catg.cat_name}
                      </div>
                      <div className='service_des_list'>
                          {service_catg.img_des}
                            <div className='cart_list'>
                                <MdOutlineLibraryAdd/>
                            </div>
                      </div>
                  </div>
              </div>   
              </Link>
                );
            })}
        </div>
    </div>
  );
}

export default ListService;
