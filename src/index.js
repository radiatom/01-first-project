import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.css';
import store from './redux/redux_store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <HashRouter>
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>
    </HashRouter>
    // <HashRouter> треба щоб гітхаб коректно ссилкі обробляв
    // <BrowserRouter>
    //     <Provider store={store}>
    //         <React.StrictMode>
    //             <App />
    //         </React.StrictMode>
    //     </Provider>
    // </BrowserRouter>
    // {/* <BrowserRouter> це правильна дорога для побудови додатку */}
);

reportWebVitals();
