import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <Router>
        <Header></Header>
        <Switch>
            <Route path="/home">
                <Home></Home>
            </Route>
            <Route path="/admin">
                <Admin></Admin>
            </Route>
            <Route path="/login">
                <Login></Login>
            </Route>
            <Route path="/signup">
                <Signup></Signup>
            </Route>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="/*">
                <NotFound></NotFound>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
