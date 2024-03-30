
import React from "react";
import './../styles/App.css';
import Home from "./Home";
import About from "./About";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: 'about',
      element: <About/>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

