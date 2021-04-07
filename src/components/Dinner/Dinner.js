import React from 'react';

const Dinner = (props) => {
    const {foodName, imageURL, shortDescription, price} = props.dnr;
    return (
        <div>
            <img style={{width:'30%'}} src={imageURL} alt=""/>
            <h4>{foodName}</h4>
            <p style={{textAlign:'justify'}}>{shortDescription}</p>
            <h4>${price}</h4>
        </div>
    );
};

export default Dinner;