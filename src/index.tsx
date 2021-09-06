import React from "react";
import ReactDOM from 'react-dom';
import Title from "./components/Title";
import Login from "./components/Login";
import Main from "./components/Main"
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import './style/index.css'
function App() {


    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login}></Route>
                <Route path='/main' component={Main}></Route>
            </Switch>
        </BrowserRouter>
    );
}



ReactDOM.render(<App/>, document.getElementById('root'));