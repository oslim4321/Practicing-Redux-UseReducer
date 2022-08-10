import React from 'react';
import './App'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './STORES/store'
import { Provider } from 'react-redux';
import CartApp from './ADD-TO-CART/CartApp';
import Reducer from './USE-REDUCER/Reducer';
import Loop from './LOOPING/Loop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <CartApp /> */}
      {/* <App /> */}
      <Loop />
      {/* <Reducer /> */}
    </Provider>
  </React.StrictMode>
);
