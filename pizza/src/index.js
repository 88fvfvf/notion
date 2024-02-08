import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './page/App';
import Basket from './page/basket/Basket';
import { store } from './store/store';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/basket' element={<Basket />} />
            </Routes>
        </BrowserRouter>
    </Provider>
);
