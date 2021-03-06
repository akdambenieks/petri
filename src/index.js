import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";
import combinedReducer from "./reducers";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(combinedReducer);

ReactDOM.render(
                <Provider store={store}>
                  <App />
                </Provider>
                , document.getElementById('root')
               );
registerServiceWorker();
