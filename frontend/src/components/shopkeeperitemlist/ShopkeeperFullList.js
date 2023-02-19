import React from 'react';
import { useState, useRef, useEffect } from 'react';
import ShopkeeperItemsList from './ShopkeeperItemsList';
import ShopkeeperServiceList from './ShopkeeperServiceList';
import './ShopkeeperFullList.css';
import {GrChapterAdd} from 'react-icons/gr'
import { Link } from 'react-router-dom';

function ShopkeeperFullList() {
    var temp = <ShopkeeperItemsList />
  const [dis, setdis] = useState(0);
    switch (dis) {
        case 0: temp = <ShopkeeperItemsList />; break;
        case 1: temp = <ShopkeeperServiceList />; break;
        default: break;
    }
    const u1 = useRef()
    const u2 = useRef()
    useEffect(() => {
        // console.log(search);
        u1.current.className = 'items_list_button_S'
        u2.current.className = 'services_list_button_S'
        switch (dis) {
            case 0: u1.current.className = 'items_list_button_after_S'; break;
            case 1: u2.current.className = 'services_list_button_after_S'; break;
            default: break;
        }
    }, [dis])
  return (
    <div className='full_List_S'>
      <div className='switch_list_S'>
        <div className='add_button_k'>
        <button ref={u1} id='gen_id' onClick={() => { if (dis !== 0) setdis(0) }}>ITEMS</button>
        <button ref={u2} id='lor_id' onClick={() => { if (dis !== 1) setdis(1) }}>SERVICES</button>
        </div>
        
        <div className='add_buttons_S'>
          <Link to="/AddItem">
          <button className='add_items_button_S'>ADD ITEM <GrChapterAdd/></button>
          </Link>
          <Link to="/AddService">
          <button className='add_service_button_S'>ADD SERVICE <GrChapterAdd/></button>
          </Link>
        </div>
      </div>
      <div className='full_List_flex_S'>
        {temp}
      </div>
    </div>
  );
}

export default ShopkeeperFullList;
