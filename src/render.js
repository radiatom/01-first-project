import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, updateNewPostText,sendMassage,updateNewMassageText } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addPost={addPost}  updateNewPostText={updateNewPostText} sendMassage={sendMassage} updateNewMassageText={updateNewMassageText}/>
            </React.StrictMode>
        </BrowserRouter>
    );
}

export default renderEntireTree