import './navbar.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useState, useEffect } from 'react';
function Navbar(){
    const[pop, setpop] = useState(0);
    useEffect(()=>{
        if(pop){
            document.querySelector('.others').style.filter="blur(8px)"
            document.querySelector('.boxpp').style.visibility = "visible"
            setpop(0);
        }
    }, [pop])
    return(
        <div className='nav'>
            <div className='logo'>
                Len-Den
            </div>
            <div className='search_home'>
                <input type='text' className='search_item' placeholder='Search items or services'></input>
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