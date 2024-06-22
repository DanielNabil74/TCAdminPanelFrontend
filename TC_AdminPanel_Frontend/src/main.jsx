import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Welcomepage from './Pages/welcomePage';
import Homepage from './Pages/HomePage';
import PendingLicenses from './Pages/Pendinglicenses';
import Museuminfo from './Pages/Museuminfo';
import Addmuseum from './Pages/ِAddmuseum';
import Museum from './Pages/Museum';
import IndoorLocMain from './Pages/IndoorLocMain';
import IndoorLocMuseum from './Pages/IndoorLocMuseum';
import IndoorLocMuseumNot from './Pages/IndoorLocMuseumNot';
import ProtectedRoute from './ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcomepage />,
  },
  {
    path: '/home',
    element: <ProtectedRoute element={<Homepage />} />,
  },
  {
    path: '/PendingLicenses',
    element: <ProtectedRoute element={<PendingLicenses />} />,
  },
  {
    path: '/MuseumInfo',
    element: <ProtectedRoute element={<Museuminfo />} />,
  },
  {
    path: '/AddMuseum',
    element: <ProtectedRoute element={<Addmuseum />} />,
  },
  {
    path: '/Museum',
    element: <ProtectedRoute element={<Museum />} />,
  },
  {
    path: '/IndoorLocMain',
    element: <ProtectedRoute element={<IndoorLocMain />} />,
  },
  {
    path: '/IndoorLocMuseum',
    element: <ProtectedRoute element={<IndoorLocMuseum />} />,
  },
  {
    path: '/IndoorLocMuseumNot',
    element: <ProtectedRoute element={<IndoorLocMuseumNot />} />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
