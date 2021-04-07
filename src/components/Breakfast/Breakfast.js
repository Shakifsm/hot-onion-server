import React from 'react';

const Breakfast = (props) => {
    const {foodName, imageURL, shortDescription, price} = props.brk;
    return (
        <div>
            <img style={{width:'30%'}} src={imageURL} alt=""/>
            <h4>{foodName}</h4>
            <p style={{textAlign:'justify'}}>{shortDescription}</p>
            <h4>${price}</h4>
        </div>
    );
};

export default Breakfast;