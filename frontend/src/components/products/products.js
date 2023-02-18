import React, { useEffect, useState } from 'react';
// import data from "../../database/Items.json";
import Productcard from '../productcard/productcard';
import logo from '../../assets/navbar/lenden_logo.png'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {Link} from 'react-router-dom';
import useDebounce from '../hooks/use_debounce';
// import { Link } from 'react-router-dom';
import './products.css';
import axios from 'axios'

function Products(props){

    const [items, setItems] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);
    const [Search, setSearch] = useState('');

    let filteredData=()=>{
        return items.filter(x => Object.values(x)
        .join(' ')
        .toLowerCase()
        .includes(Search.toLowerCase()))
    }

    useEffect(() => {
        async function fetchData(){
            // setLoading(true);
            try{
                const request = await axios.get('http://127.0.0.1:8000/api/items/');
                setItems(request.data);
                // setLoading(false);
            }
            catch(err){
                // setLoading(false);
                // setError(true)
                console.log(err)
            }
        }
        fetchData()
    }, [Search])


    // const getItems = async () => {
    //     setLoading(true);
    //     const response = await fetch('/api/customer/items/');
    //     try{
    //         const data = await response.json();
    //         setItems(data);
    //         setLoading(false);
    //     }
    //     catch(error){
    //         console.log('Error: ', error);
    //         setError(true);
    //         setLoading(false);
    //     }
    // }

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

        // console.log(props.cat_name);

    //}
    // const fetchData = async() => {
    //     const endpoint = `http://127.0.0.1:8000/api/items`
    //     console.log(endpoint)
    //     try{
    //       const response = await axios.get(endpoint);

    //       setItems(response.data)
    //     //   console.log(response.data)

    
    //     }
    //     catch(e){
    //       console.log(e);
    //     }
    //   }
    
        

    
    // if(loading){
    //     return <div className='products'>Loading...</div>
    // }

    // if(error){
    //     return <div className='products'>Error...</div>
    // }

    return (
        <div>
        <div className='nav'>
            <div className='logo'>
                <Link to="/">
                <img src={logo} alt='logo' className='logo_img'></img>
                </Link>
            </div>
            <div className='search_home'>
                
                <input type='text' className='search_item' placeholder='Search items or services' onChange={e=>setSearch(e.currentTarget.value)}></input>
                
            </div>
            <div className='login'>
                <button className='login_button' >Login</button>
            </div>
            <div className='cart'>
                <AiOutlineShoppingCart/>
            </div>
        </div>
        <div className='products'>
            {
                filteredData().map((item) => {
                    // console.log(item);
                    return(
                        <React.Fragment key={item.id}>
                            <Productcard  item={item} />
                        </React.Fragment>
                    )
                     
                })
            }
        </div>
        </div>
    );
}

export default Products;
