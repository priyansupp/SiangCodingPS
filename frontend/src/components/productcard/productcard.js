import React from 'react';
import { Link } from 'react-router-dom';
import './productcard.css';
import {FaRupeeSign} from 'react-icons/fa';
import {MdLabel} from 'react-icons/md';

const Productcard = ({item}) => {
    return (
        // item.image, item.name, item.price, item.description
        <Link to={`/item/${item.id}`}>
            <div className='product'>
                
                <img src={item.image} alt={item.name} />
                
                
                <div className='info'>
                    <div className='name'>
                        <h3>{item.name}</h3>
                    </div>
                    <div className="category">
                        <MdLabel className='icon' />
                        <h3>{item.category}</h3>
                    </div>
                    <div className='price'>
                        <FaRupeeSign className='icon' />
                        <h3>{item.price}</h3>
                    </div>
                    <div className='description'>
                        {item.quantity}
                    </div>
                </div>
                
            </div>
        </Link>
    );
}

export default Productcard;