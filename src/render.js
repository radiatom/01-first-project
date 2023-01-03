import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

const renderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addPost={addPost} />
            </React.StrictMode>
        </BrowserRouter>
    );
}

export default renderEntireTree