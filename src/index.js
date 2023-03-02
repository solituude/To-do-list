import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>
    );
}
rerenderEntireTree(store.getState());
store.subscribe(() => {
    let currState = store.getState();
    rerenderEntireTree(currState);
});

reportWebVitals();
