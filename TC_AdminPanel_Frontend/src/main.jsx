import React from 'react'
import ReactDOM from 'react-dom/client'
//import Welcomepage from './welcomePage';
import Homepage from './HomePage';
import PendingLicenses from './Pendinglicenses';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PendingLicenses/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


        <RouterProvider router={router} />
  </React.StrictMode>,
)