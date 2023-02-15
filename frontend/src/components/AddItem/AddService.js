import React from 'react';
import './AddItem.css'

function AddService() {
  return (
    <div className='additem_form'>
        <form>
            <div className="headpp">
                Service Info
            </div>
            <div className='picpp'>
                <div className='picHead'>Upload Service's Picture:</div>
                <div className='picture'>
                    <input type="file" id="myFile" name="Choose file"/>
                </div>
            </div>
            <div className='Namepp'>
                <div className='NameHead'>Name: </div>
                <input className='NameInput' placeholder='enter service name' required></input>
            </div>
            <div className='Pricepp'>
                <div className='PriceHead'>Price: </div>
                <input className='PriceInput' placeholder="enter service's price(in ₹)" type="number" required></input>
            </div>
            <div className='Descriptionpp'>
                <div className='DescriptionHead'>Description: </div>
                <textarea className='DescriptionInput' placeholder="enter service's descripton" required></textarea>
            </div>
            <button className="submitpp" type="submit" >
                <div className="save_changespp">
                    Add Service
                </div>
            </button>
        </form>
    </div>
  );
}

export default AddService;
