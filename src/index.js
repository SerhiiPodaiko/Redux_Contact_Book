import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {rootReducer} from "./redux/reducers/rootReducer";
import {createStore} from "redux";


const store = createStore(rootReducer);

ReactDOM.render(
    <BrowserRouter>
       <Provider store={store}>
           <App />
       </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

