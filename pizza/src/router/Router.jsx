import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../page/App';
import Basket from '../page/basket/Basket';

const Router = () => {
    return (
        <Router>
            <Route path='/' element={<App />}/>
            <Route path='/basket' element={<Basket/>}/>
        </Router>
    )
}