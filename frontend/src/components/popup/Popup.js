import React from 'react';
import { Link } from 'react-router-dom';
import './Popup.css';

function Popup() {
  return (
    <div className='boxpp'>
      <div className='login_pop'>
        <Link to="/login">
          <div className='customer'>
            <button className='customer_button'>
                Login as Customer
            </button>
          </div>
        </Link>
        <Link to="/login">
          <div className='shopkeeper'>
            <button className='shopkeeper_button'>
              Login as Shopkeeper
            </button>
          </div>
        </Link>

        <Link to="/register">
          <div className='register'>
            <button className='register_button'>
                Register User
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Popup;
