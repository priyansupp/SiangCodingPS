import './navbar.css'
import logo from '../../assets/navbar/lenden_logo.png'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    const[pop, setpop] = useState(0);
    const[Search, setSearch] = useState(''); 
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
                
                <input type='text' className='search_item' placeholder='Search items or services' onChange={e=>setSearch(e.target.value)}></input>
                
            </div>
            <div className='login'>
                <button className='login_button' onClick={()=>setpop(1)}>Login</button>
            </div>
            <div className='cart'>
                <AiOutlineShoppingCart/>
            </div>
        </div>
    );
}
export default Navbar