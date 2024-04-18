import React from 'react'
import ReactDOM from 'react-dom/client'
import Welcomepage from './Pages/welcomePage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcomepage/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


        <RouterProvider router={router} />
  </React.StrictMode>,
)