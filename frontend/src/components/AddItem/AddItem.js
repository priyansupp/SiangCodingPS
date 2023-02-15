import React from 'react';
import './AddItem.css'

function AddItem() {
  return (
    <div className='additem_form'>
        <form>
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
                <div className='NameHead'>Name: </div>
                <input className='NameInput' placeholder='enter product name' required></input>
            </div>
            <div className='Pricepp'>
                <div className='PriceHead'>Price: </div>
                <input className='PriceInput' placeholder="enter product's price(in ₹)" type="number" required></input>
            </div>
            <div className='Descriptionpp'>
                <div className='DescriptionHead'>Description: </div>
                <textarea className='DescriptionInput' placeholder="enter product's descripton" required></textarea>
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
