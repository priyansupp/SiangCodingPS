import React, { useEffect, useState } from 'react';
import data from '../../database/Item_list.json';
import './ListItem.css'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import axios from 'axios';



function ListItem() {
  // console.log(data.item_catgs);
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try{
        const request = await axios.get('http://127.0.0.1/:8000/api/item/');
        setItems(request.data);
      }
      catch(err){
        console.log(err);
      }
    }
    fetchData();
  }, []);


  return (
      <div className="list-item">
        {items.map((item) => (
          <div className="list-item-card">
            <div className="list-item-card-img">
              <img src={item.image} alt={item.id} />
            </div>
            <div className="list-item-card-name">
              {item.name}
            </div>
            <div className="list-item-card-price">
              {item.price}
            </div>
            <div className="list-item-card-button">
              <Link to={`/item/${item.id}`}><button className="list-item-card-button-button"><AiOutlineShoppingCart /></button></Link>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ListItem;
