import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux_store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderEntireTree = () => {

    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
            </React.StrictMode>
        </BrowserRouter>
    );
}
renderEntireTree()

store.subscribe(renderEntireTree)

reportWebVitals();
