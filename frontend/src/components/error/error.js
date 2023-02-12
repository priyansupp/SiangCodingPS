import React from 'react';
import { Link } from 'react-router-dom';
import './error.css';

const Error = () => {
    return (
        <div className='error'>
            <div className='error__container'>
                <div className='left'>
                    <h1>404</h1>
                </div>
                <div className='right'>
                    <h1>ERROR!</h1>
                    <h2>PAGE NOT FOUND</h2>
                    <Link to='/'>Go Back</Link>
                </div>
            </div>     
        </div>

    );
}

export default Error;