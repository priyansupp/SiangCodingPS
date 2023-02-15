import React from 'react';
import { Link } from 'react-router-dom';
import './Popup.css'

function Popup() {
  return (
    <div className='boxpp'>
      <div className='login_pop'>
        <div className='customer'>
          <Link to="/LoginS">
          <button className='customer_button'>Login as Customer</button>
          </Link>
        </div>
        <div className='shopkeeper'>
          <button className='shopkeeper_button'>Login as Shopkeeper</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
