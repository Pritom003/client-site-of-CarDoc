import React from 'react';
import {
  createBrowserRouter
} from "react-router-dom";
import Home from '../layouts/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);

export default router;