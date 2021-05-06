import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { CartContext } from '../../App';
import './FoodDetails.css'

const FoodDetails = () => {
    const { foodId } = useParams();
    const [selectedFoods, setSelectedFoods] = useState([])

    const [cart, setCart] = useContext(CartContext)

    useEffect(() => {
        fetch('https://aqueous-sands-65557.herokuapp.com/allFood')
            .then(res => res.json())
            .then(data => setSelectedFoods(data))
    }, [])

    const newItem = selectedFoods.find(food => food._id === foodId);

    const [count, setCount] = useState(0)

    const handleIncrase = () => {
        setCount(count + 1)
    }

    const handleDecrase = () => {

        setCount(count - 1)
    }

    if (count < 1) {
        setCount(1)
    }


    const [disabled, setDisabled] = useState(false)
    
    function addToCart() {
        setDisabled(true)

        newItem.count = count;
        setCart([...cart, newItem])

    }


    return (
        <div className="detail-parent container">

            {

                selectedFoods.length === 0 && <div className="spinner-border text-info" style={{ margin: '150px auto' }} role="status">
                    <span className="sr-only">Loading...</span>
                </div>

            }

            <div className="detail-description">
                <h2>{newItem?.foodName}</h2>
                <p>{newItem?.longDescription}</p>
                <div className="price-quantity d-flex">
                    <div id="price">
                        <h4 style={{ color: '#F91944' }}>${newItem?.price * count}</h4>
                    </div>
                    <div className="quantity ml-5">
                        <button className="plus-minus-btn" onClick={handleDecrase}>-</button>
                        {/* <input type="number" defaultValue={count} name="" id="case-count"/> */}
                        <span style={{ color: '#F91944' }} className="ml-2 mr-2">{count}</span>
                        <button onClick={handleIncrase} className="plus-minus-btn">+</button>
                    </div>
                </div>
                <br /><br />
                <Link to="/"><button className='mt-3 mr-3'>Back</button></Link>
                <button disabled={disabled} onClick={addToCart} className='mt-3 ml-3'>{disabled ? "Added" : "Add"}</button>
            </div>
            <div className="detail-img">
                <img src={newItem?.imageURL} alt="" />
            </div>
        </div>
    );
};

export default FoodDetails;

