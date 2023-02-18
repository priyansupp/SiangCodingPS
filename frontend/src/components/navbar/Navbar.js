import './navbar.css'
import logo from '../../assets/navbar/lenden_logo.png'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useState, useEffect, useContext } from 'react';
import {Link} from 'react-router-dom';
import { TokenContext } from '../../context/tokenContext';
import { UserContext } from '../../context/userContext';
import axios from 'axios';
function Navbar(){
    const[pop, setpop] = useState(0);
    const[Search, setSearch] = useState(''); 
    const { token, setToken } = useContext(TokenContext);
    const handleLogout = async (e) => {
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
    useEffect(()=>{
        if(pop){
            document.querySelector('.others').style.filter="blur(8px)"
            document.querySelector('.boxpp').style.visibility = "visible"
            setpop(0);
        }
        console.log(Search);
    }, [pop, Search])
    return(
        <div className='nav'>
            <div className='logo'>
                <Link to="/">
                <img src={logo} alt='logo' className='logo_img'></img>
                </Link>
            </div>
            <div className='search_home'>
                <Link to="/items">
                <input type='text' className='search_item' placeholder='Search items or services' onChange={e=>setSearch(e.currentTarget.value)}></input>
                </Link>
            </div>
            <div className='login'>
                {token ? <button className='login_button' onClick={handleLogout}>Logout</button>
                : <button className='login_button' onClick={()=>setpop(1)}>Login</button>
                }
                
            </div>
            <div className='cart'>
                <AiOutlineShoppingCart/>
            </div>
        </div>
    );
}
export default Navbar