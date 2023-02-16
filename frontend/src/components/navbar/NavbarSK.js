import React from 'react';
import logo from '../../assets/navbar/lenden_logo.png'
import {Link} from 'react-router-dom';
import Profile from '../../assets/card/pizza.jpg';
import { useState } from 'react';
import './NavbarSK.css';

function NavbarSK() {
    const [userClick, setUserClick] = useState(false);

  return (
    <div className='nav_SK'>
            <div className='logo_SK'>
                <Link to="/">
                <img src={logo} alt='logo' className='logo_img_SK'></img>
                </Link>
            </div>
            <div className='search_home_SK'>
                <Link to="/SK/Products">
                <input type='text' className='search_item_SK' placeholder='Search items or services'></input>
                </Link>
            </div>
            <div className='profile_SK'>
                <img src={Profile} alt='profile' className='profile_img_SK' onClick={() => {
                    
                    setUserClick(
                        (prev) => !prev
                    );
                    // setOpenMenu(false)
                }}></img>
            </div>
            {
                userClick &&
                <div className="nav-hamburg2">
                    <ul>
                        <li><Link to="/">My Profile</Link></li>
                        <li><Link to="/SK/Products">My Products</Link></li>
                        <li><Link to="/SK/Requests">Pending Requests</Link></li>
                        <li><Link to="/SK/Approved">Approved Requests</Link></li>
                        <li><Link to="/">Log Out</Link></li>
                    </ul>
                </div>
                }
        </div>
  );
}

export default NavbarSK;
