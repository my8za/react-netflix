import React from 'react'
import { Outlet } from 'react-router-dom'
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// components
import Navigation from '../layouts/nav/Navigation';

const index = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  )
}

export default index
