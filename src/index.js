import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderEntireTree = () => {
    debugger

    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App
                    state={store.getState()}
                    addPost={store.addPost.bind(store)}
                    updateNewPostText={store.updateNewPostText.bind(store)}
                    sendMassage={store.sendMassage.bind(store)}
                    updateNewMassageText={store.updateNewMassageText.bind(store)}
                />
            </React.StrictMode>
        </BrowserRouter>
    );
}
renderEntireTree()

store.subscribe(renderEntireTree)

reportWebVitals();
