import React from 'react';
import ListItem from './ListItem';
import ServiceItem from './ServiceItem';
import './fullList.css'

function Full_list() {
  return (
    <div className='full_List'>
      <div className='head1'>
        Popular Items and Services
      </div>
      <div className='full_List_flex'>
        <ListItem/>
        <ServiceItem/>
      </div>
    </div>
  );
}

export default Full_list;
