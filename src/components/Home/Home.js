import { Tab } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Tabs } from 'react-bootstrap';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';
import './Home.css'

const Home = () => {

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allFood')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    const breakfast = foods.filter(food => food.type === "breakfast");
    
    const lunch = foods.filter(food => food.type === "lunch");

    const dinner = foods.filter(food => food.type === "dinner");

    return (
        <div>
            <section className="search">
                <h1>Best food waiting for your belly</h1>
                <input className="search-box" type="text" name="" placeholder="Search food items" />
                <input className="search-btn" type="submit" value="Search" />
            </section>
            <section className="tab-section container">
                <div className="tabs">
                    <Tabs className=' mt-4 justify-content-center' defaultActiveKey="profile" id="uncontrolled-tab-example">
                        <Tab  className="tab-bar p-3" eventKey="home" title="Breakfast">
                            <div className="row mt-5"  style={{ width: '100%' }}>
                                {
                                    breakfast.map(brk =>
                                        <div className="col-md-4 p-4 foods">
                                            <Breakfast brk={brk} ></Breakfast>
                                        </div>
                                        )
                                }
                            </div>
                        </Tab>
                        <Tab className="tab-bar" eventKey="profile" title="Lunch">
                        <div className="row mt-5"  style={{ width: '100%' }}>
                                {
                                    lunch.map(lnch =>
                                        <div className="col-md-4 p-4 foods">
                                            <Lunch lnch={lnch} ></Lunch>
                                        </div>
                                        )
                                }
                            </div>
                        </Tab>
                        <Tab className="tab-bar" eventKey="contact" title="Dinner">
                        <div className="row mt-5"  style={{ width: '100%' }}>
                                {
                                    dinner.map(dnr =>
                                        <div className="col-md-4 p-4 foods">
                                            <Dinner dnr={dnr} ></Dinner>
                                        </div>
                                        )
                                }
                            </div>
                        </Tab>
                    </Tabs>
                </div>

            </section>
        </div>
    );
};

export default Home;
