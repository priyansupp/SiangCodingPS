import React, { useEffect, useState } from 'react';
import data from "../../database/Items.json";
import Productcard from '../productcard/productcard';
// import { Link } from 'react-router-dom';
import './products.css';

function Products(props){
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

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
    const getItemsFromJson = async () => {
        setLoading(true);
        try{
            setItems(data);
            setLoading(false);
        }
        catch(error){
            console.log('Error: ', error);
            setError(true);
            setLoading(false);
        }

        // console.log(props.cat_name);

    }
        

    useEffect(() => {
        // getItems();
        getItemsFromJson();
    }, []);

    if(loading){
        return <div className='products'>Loading...</div>
    }

    if(error){
        return <div className='products'>Error...</div>
    }

    return (
        <div className='products'>
            {
                items.map((item) => {
                    return <Productcard key={item.item_id} id={item.item_id} image={item.image} name={item.name} price={item.price} description={item.description} category={item.category} />
                })
            }
        </div>
    );
}

export default Products;
