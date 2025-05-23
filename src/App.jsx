 import React from 'react';
import Product from './components/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart'
import RootLayout from './components/RootLayout';
import NavbarPanel from './components/NavbarPanel';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Dashboard />}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
