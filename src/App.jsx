import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Country from './pages/Country';
import AppLayout from './components/layout/AppLayout';
import ErrorPage from './pages/ErrorPage';
import "./App.css";

const App = () => {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <AppLayout /> ,
      errorElement: < ErrorPage/>,
      children: [  {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/country",
        element: <Country />,
      }]

    },
  
  ]);
  

  return  <RouterProvider router={router}>

  </RouterProvider>
}

export default App