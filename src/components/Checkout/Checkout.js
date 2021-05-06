import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../App';

const Checkout = () => {

    const [cart, setCart] = useContext(CartContext);

    const foodItem = cart.reduce((sum, foodDetails) => sum + foodDetails.count, 0);

    const total = cart.reduce((sum, foodDetails) => sum + foodDetails.price, 0);


    const removeFood = (foodName) => {
        const newFood = cart.filter(foodDetails => foodDetails.foodName !== foodName);
        setCart(newFood);
    }




    return (
        <div>
            <div className="container">
                {
                    cart.length > 0 ?
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className='checkoutDetails'>Edit Delivery Details</h3>

                                <hr />

                                <Form >
                                    <Form.Group controlId="formBasicText">

                                        <Form.Control style={{ backgroundColor: '#F5F5F5', border: 'none' }} type="order" placeholder="Order Process" required />

                                    </Form.Group>

                                    <Form.Group controlId="formBasicAddress">

                                        <Form.Control style={{ backgroundColor: '#F5F5F5', border: 'none' }} type="address" placeholder="Address" required />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicText">

                                        <Form.Control style={{ backgroundColor: '#F5F5F5', border: 'none' }} type="add delivery instructor" placeholder="Add Delivery Instructor" required />

                                    </Form.Group>

                                    <Form.Group controlId="formBasicText">

                                        <Form.Control style={{ backgroundColor: '#F5F5F5', border: 'none' }} type="flat,suite or floor" placeholder="Flat,suite or floor" required />

                                    </Form.Group>

                                    <Form.Group controlId="formBasicText">

                                        <Form.Control style={{ backgroundColor: '#F5F5F5', border: 'none' }} type="business name" placeholder="Business Name" required />

                                    </Form.Group>

                                    <Button size='lg' block style={{ backgroundColor: "#F91944", border: 'none' }} type="submit">
                                        Save And Continue
                            </Button>
                                </Form>
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-4">
                                <span>From <b>Gulshan Plaza Restaurant</b></span>

                                <p>Arriving in 20-30 minutes</p>
                                <span>107 Road No 8</span>
                                {
                                    cart.map(foodDetails =>

                                        <div className="row" style={{ backgroundColor: '#F5F5F5', marginTop: '10%', borderRadius: '10px' }}>
                                            <div className="col-md-4 pt-2">
                                                <img className='w-100 mt-4' src={foodDetails.imageURL
                                                } alt="" />
                                            </div>
                                            <div className="col-md-8 pt-3">
                                                <h5>{foodDetails.foodName}</h5>
                                                <h3 style={{ color: "#F91944" }}>$ {foodDetails.price}</h3>
                                                <h6>Amount: {foodDetails.count}</h6>
                                                <h4>Cost:$ {(foodDetails.count * foodDetails.price)}</h4>
                                                <br></br>

                                                <Button onClick={() => removeFood(foodDetails.foodName)} variant='danger'>Remove</Button>
                                            </div>

                                        </div>

                                    )
                                }

                                <div className="row mt-5 bg-light">
                                    <div className="col-md-6">
                                        <h5>Subtotal:</h5>
                                        <h5>Tax:</h5>
                                        <h5>Delivery:</h5>
                                        <h5>Total Cost:</h5>

                                    </div>
                                    <div className="col-md-6">
                                        <h5>$ {(total * foodItem)}</h5>
                                        <h5>$3</h5>
                                        <h5>$2</h5>
                                        <h5>${((total * foodItem) + 5)}</h5>


                                    </div>


                                    <Link className="btn btn-danger mt-5 mb-5 btn-lg btn-block border-0" to='/orderComplete'>
                                        <button className="btn btn-danger mx-0 btn-lg btn-block border-0" type="button" >Place Order</button>
                                    </Link>

                                </div>

                            </div>
                        </div>

                        : <h1 className='text-center mt-5'>"At First Add Food to Cart"</h1>
                }
            </div>
        </div>
    );
};

export default Checkout;