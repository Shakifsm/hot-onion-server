import React from 'react';
import { Link } from 'react-router-dom';

const Breakfast = (props) => {
    const {foodName, imageURL, shortDescription, price, _id} = props.brk;
    
    return (
        <div className="breakfast">
            <Link style={{color:'black', textDecoration:'none'}} to={`/food/${_id}`}>
                <img style={{width:'30%'}} src={imageURL} alt=""/>
                <h4>{foodName}</h4>
                <p style={{textAlign:'justify'}}>{shortDescription}</p>
                <h4>${price}</h4>
            </Link>
        </div>
    );
};

export default Breakfast;