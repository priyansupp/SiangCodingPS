import React, { useEffect, useState, useContext } from 'react';
import Productcard from '../productcard/productcard';
import logo from '../../assets/navbar/lenden_logo.png'
// import { Link } from 'react-router-dom';
import axios from 'axios';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {Link} from 'react-router-dom';
import { TokenContext } from '../../context/tokenContext';
import './products.css';

function Products(props){
    const[pop, setpop] = useState(0);
    const[Search, setSearch] = useState(''); 
    const { token, setToken } = useContext(TokenContext);
    const [items, setItems] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    let filteredData = () => {
        return items.filter(x=>Object.values(x)
        .join(' ')
        .toLowerCase()
        .includes(Search.toLowerCase()))
    }
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

    const getItems = async () => {
        // setLoading(true);
        try{
            console.log(`Bearer ${localStorage.getItem("access_token")}`)
            const request = await axios.get('http://127.0.0.1:8000/api/item/', {
                headers: {
                    Authorization : `Bearer ${localStorage.getItem("access_token")}`
                }}
                );
                
            setItems(request.data);
            // setLoading(false);
        }
        catch(error){
            console.log('Error: ', error);
            setError(true);
            // setLoading(false);
        }
    }

    // For time being we will fetch data from json file
    // const getItemsFromJson = async () => {
    //     setLoading(true);
    //     try{
    //         setItems(data);
    //         setLoading(false);
    //     }
    //     catch(error){
    //         console.log('Error: ', error);
    //         setError(true);
    //         setLoading(false);
    //     }

    //     console.log(props.cat_name);

    // }
        

    useEffect(() => {
        getItems();
        // getItemsFromJson();
    }, [Search]);

    // if(loading){
    //     return <div className='products'>Loading...</div>
    // }

    if(error){
        return <div className='products'>Error...</div>
    }

    return (
        <div className='all_products'>
            <div className='nav'>
            <div className='logo'>
                <Link to="/">
                <img src={logo} alt='logo' className='logo_img'></img>
                </Link>
            </div>
            <div className='search_home'>
                <Link to="/services/:cat_name">
                <input type='text' className='search_item' placeholder='Search items or services' onChange={e=>setSearch(e.currentTarget.value)}></input>
                </Link>
            </div>
            <div className='login'>
                {token ? <button className='login_button' onClick={handleLogout}>Logout</button>
                : <button className='login_button'>Login</button>
                }
                
            </div>
            <div className='cart'>
                <AiOutlineShoppingCart/>
            </div>
        </div>
            <div className='products'>
                {
                    filteredData().map((item) => {
                        return (
                        <React.Fragment key={item.id}>
                        <Productcard id={item.item_id} image={item.image} name={item.name} price={item.price} description={item.description} category={item.category} />
                        </React.Fragment>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Products;
