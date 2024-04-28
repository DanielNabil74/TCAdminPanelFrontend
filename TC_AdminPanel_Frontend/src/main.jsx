import React from 'react'
import ReactDOM from 'react-dom/client'
import Welcomepage from './welcomePage';
import Homepage from './HomePage';
import PendingLicenses from './Pendinglicenses';
import Museuminfo from './Museuminfo';
import Addmuseum from './ِAddmuseum';
import Museum from './Museum';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcomepage/>,
  },
  {
    path: "/home",
    element: <Homepage/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)