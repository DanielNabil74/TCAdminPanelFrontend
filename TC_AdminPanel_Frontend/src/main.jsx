import React from 'react'
import ReactDOM from 'react-dom/client'
import Welcomepage from './welcomePage';
import Homepage from './HomePage';
import PendingLicenses from './Pendinglicenses';
import Museuminfo from './Museuminfo';
import Addmuseum from './ِAddmuseum';
import Museum from './Museum';
import IndoorLocMain from './IndoorLocMain';
import IndoorLocMuseum from './IndoorLocMuseum';
import IndoorLocMuseumNot from './IndoorLocMuseumNot'

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
  },
  {
    path: "/PendingLicenses",
    element: <PendingLicenses/>
  },
  {
    path: "/MuseumInfo",
    element: <Museuminfo/>
  },
  {
    path: "/AddMuseum",
    element: <Addmuseum/>
  },
  {
    path: "/Museum",
    element: <Museum/>
  },
  {
    path: "/IndoorLocMain",
    element: <IndoorLocMain/>
  },
  {
    path: "/IndoorLocMuseum",
    element: <IndoorLocMuseum/>
  },
  {
    path: "/IndoorLocMuseumNot",
    element: <IndoorLocMuseumNot/>
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)