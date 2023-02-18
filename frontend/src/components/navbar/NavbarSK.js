import React from 'react';
import logo from '../../assets/navbar/lenden_logo.png'
import {Link, useNavigate} from 'react-router-dom';
import Profile from '../../assets/card/pizza.jpg';
import { useState, useContext } from 'react';
import './NavbarSK.css';
import { TokenContext } from '../../context/tokenContext';
import { UserContext } from '../../context/userContext';
import axios from 'axios';

function NavbarSK() {
    const navigate = useNavigate();
    const [userClick, setUserClick] = useState(false);
    const { token, setToken } = useContext(TokenContext);
    const handlLogout = async (e) => {
        e.preventDefault();
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        await axios.post("/api/auth/logout/", {
            headers: {"Authorization" : `Bearer ${token}`}
          }).catch(e => {
            console.log(`error2 is ${e}`);
          });
        setToken(null);
    }

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
                        <li><Link to="/Products">My Products</Link></li>
                        <li><Link to="/Requests">Pending Requests</Link></li>
                        <li><Link to="/Approved">Approved Requests</Link></li>
                        <li onClick={handlLogout}>Log Out</li>
                    </ul>
                </div>
                }
        </div>
  );
}

export default NavbarSK;
