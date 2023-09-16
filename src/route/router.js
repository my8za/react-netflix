import React from 'react'
// library
import { createBrowserRouter } from 'react-router-dom';
// page
import Page from '../page';
import Home from '../page/Home';
import Movies from '../page/Movies';
import MovieDetail from '../page/MovieDetail';
import ErrorPage from '../page/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Page />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      }, {
        path: 'movies',
        element: <Movies />,
      }, {
        path: 'movies/:id',
        element: <MovieDetail />,
      },
    ]
  }
]);

export default router;
