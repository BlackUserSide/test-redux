import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux'
import {App} from './App';
import {rootReducer} from "./redux/rootReducer";
import {Provider} from "react-redux";
const store = createStore(rootReducer)
render(<Provider store={store}>
    <React.StrictMode>
     <App />
    </React.StrictMode></Provider>,
  document.getElementById('root')
);


