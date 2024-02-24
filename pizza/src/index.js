import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './page/App';
import { store } from './store/store';
import PageBasket from './page/basket/PageBasket';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/basket' element={<PageBasket />} />
            </Routes>
        </BrowserRouter>
    </Provider>
);
