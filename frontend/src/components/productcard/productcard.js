import React from 'react';
import { Link } from 'react-router-dom';
import './productcard.css';
import {FaRupeeSign} from 'react-icons/fa';
import {MdLabel} from 'react-icons/md';

const Productcard = (props) => {
    return (
        // props.image, props.name, props.price, props.description
        <Link to={`/item/${props.id}`}>
            <div className='product'>
                
                <img src={props.image} alt={props.name} />
                
                
                <div className='info'>
                    <div className='name'>
                        <h3>{props.name}</h3>
                    </div>
                    <div className="category">
                        <MdLabel className='icon' />
                        <h3>{props.category}</h3>
                    </div>
                    <div className='price'>
                        <FaRupeeSign className='icon' />
                        <h3>{props.price}</h3>
                    </div>
                </div>
                <div className='description'>
                    {props.description}
                </div>
            </div>
        </Link>
    );
}

export default Productcard;