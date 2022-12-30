import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogData = [
  { id: 1, name: 'Arsen' },
  { id: 2, name: 'Mycola' },
  { id: 3, name: 'Andrey' },
  { id: 4, name: 'Igor' },
  { id: 5, name: 'Viktor' },
  { id: 6, name: 'Antony' },
  { id: 7, name: 'Bot' },
  { id: 8, name: 'Roma' },

]

const massagesData = [
  { id: 1, massage: 'Hi' },
  { id: 2, massage: 'Hi' },
  { id: 3, massage: 'Its you admin?' },
  { id: 4, massage: 'Yes' },
  { id: 4, massage: 'Cool!' }
]

const postData = [
  { id: 1, massage: 'Hi, how a you?', likeColum: 15 },
  { id: 2, massage: 'Its my first post', likeColum: 999 }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogData={dialogData} massagesData={massagesData} postData={postData} />
  </React.StrictMode>
);


reportWebVitals();
