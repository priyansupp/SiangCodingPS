import React, { useEffect, useState } from 'react';
import data from "../../database/Items.json";
import Itemcard from '../itemcard/itemcard';
// import { Link } from 'react-router-dom';
import './items.css';

function Items(){
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // const getItems = async () => {
    //     setLoading(true);
    //     const response = await fetch('http://localhost:8000/api/items/');
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

    }
        

    useEffect(() => {
        // getItems();
        getItemsFromJson(   )
    }, []);

    if(loading){
        return <div className='items'>Loading...</div>
    }

    if(error){
        return <div className='items'>Error...</div>
    }

    return (
        <div className='items'>
            {
                items.map((item) => {
                    return <Itemcard key={item.id} id={item.id} image={item.image} name={item.name} price={item.price} description={item.description} category={item.category} />
                })
            }
        </div>
    );
}

export default Items;
