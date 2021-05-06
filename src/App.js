import React, { createContext, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Admin from "./components/Admin/Admin";
import FoodDetails from "./components/FoodDetails/FoodDetails";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Signup from "./components/Signup/Signup";
import Checkout from "./components/Checkout/Checkout"
import OrderComplete from "./components/OrderComplete/OrderComplete";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const CartContext = createContext();
export const UserContext = createContext();

function App() {

    const [cart, setCart] = useState([]);

    const [loggedInUser, setLoggedInUser] = useState({

        isLoggedIn: false,
        userName: '',
        email: '',
        password: '',
        message: '',

    })

    return (
        <CartContext.Provider value={[cart, setCart]}>
            <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
                <Router>
                    <Header></Header>
                    <Switch>
                        <Route path="/home">
                            <Home></Home>
                        </Route>
                        <Route path="/admin">
                            <Admin></Admin>
                        </Route>
                        <Route path="/food/:foodId">
                            <FoodDetails></FoodDetails>
                        </Route>
                        <PrivateRoute path="/checkout">
                            <Checkout></Checkout>
                        </PrivateRoute>
                        <PrivateRoute path="/orderComplete">
                            <OrderComplete></OrderComplete>
                        </PrivateRoute>
                        <Route path="/login">
                            <Login></Login>
                        </Route>
                        <Route path="/signup">
                            <Signup></Signup>
                        </Route>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route path="*">
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                </Router>
            </UserContext.Provider>
        </CartContext.Provider>
    );
}

export default App;
