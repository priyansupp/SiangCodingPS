import React from 'react';
import ListItem from './ListItem';
import ListService from './ListService';
import { useState, useRef, useEffect } from 'react';
import './fullList.css'

function Full_list() {
  // var temp = <ListItem />
  // const [dis, setdis] = useState(0);
  //   switch (dis) {
  //       case 0: temp = <ListItem />; break;
  //       case 1: temp = <ListService />; break;
  //       default: break;
  //   }
  //   const u1 = useRef()
  //   const u2 = useRef()
  //   useEffect(() => {
  //       // console.log(search);
  //       u1.current.className = 'items_list_button'
  //       u2.current.className = 'services_list_button'
  //       switch (dis) {
  //           case 0: u1.current.className = 'items_list_button_after'; break;
  //           case 1: u2.current.className = 'services_list_button_after'; break;
  //           default: break;
  //       }
  //   }, [dis])
  return (
    <div className='full_List'>
      <div className='head1'>
        Explore Categories
      </div>
      <div className=''>
        
      </div>
      {/* <div className='full_List_flex'>
        {temp}
      </div> */}
    </div>
  );
}

export default Full_list;
