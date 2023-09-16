import React from 'react';
import ReactDOM from 'react-dom/client';
// router
import { RouterProvider } from 'react-router-dom';
import router from './route/router';
// redux
import store from './redux/store';
import { Provider } from 'react-redux';
// style
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <RouterProvider router={router} />
  </Provider>
);

