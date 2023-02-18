import React from 'react';
import './AddItem.css';
import { useState, useContext } from 'react';
import {TokenContext} from '../../context/tokenContext';
import {UserContext} from '../../context/userContext';
import axios from 'axios';


function AddItem() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [desc, setDesc] = useState("");
    const [cat, setCat] = useState("Ed");
    const { token, setToken } = useContext(TokenContext);
    const { user } = useContext(UserContext);
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(user['id']);
        const url = `http://127.0.0.1:8000/api/shopkeeper/items/${user['id']}`;
        // console.log(url);
        fetch(url,  {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {name: name,
                price: price,
                desc: desc,
                category: cat}),
          }).then().catch(e => {
            console.log(`error2 is ${e}`);
          });
    }

  return (
    <div className='additem_form'>
        <form onSubmit={handleSubmit}>
            <div className="headpp">
                Product Info
            </div>
            <div className='picpp'>
                <div className='picHead'>Upload Product's Picture:</div>
                <div className='picture'>
                    <input type="file" id="myFile" name="Choose file" />
                </div>
            </div>
            <div className='Namepp'>
                <div className='NameHead' onChange={e=>setName(e.target.value)}>Name: </div>
                <input className='NameInput' placeholder='enter product name' required></input>
            </div>
            <div className='Pricepp'>
                <div className='PriceHead' onChange={e=>setPrice(e.target.value)}>Price: </div>
                <input className='PriceInput' placeholder="enter product's price(in ₹)" type="number" required></input>
            </div>
            <div className='Pricepp'>
                <div className='Category'>Category: </div>
                <select onChange={e=>setCat(e.target.value)}>
                    <option value='Ed'>Edible</option>
                    <option value='St'>Stationary</option>
                    <option value='Sp'>Sports</option>
                    <option value='El'>Electronics</option>
                    <option value='Li'>Lifestyles</option>
                </select>
            </div>
            <div className='Descriptionpp'>
                <div className='DescriptionHead'>Description: </div>
                <textarea onChange={e=>setDesc(e.target.value)} className='DescriptionInput' placeholder="enter product's descripton" required></textarea>
            </div>
            <button className="submitpp" type="submit" >
                <div className="save_changespp">
                    Add Item
                </div>
            </button>
        </form>
    </div>
  );
}

export default AddItem;
