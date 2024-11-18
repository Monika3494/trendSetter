import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AboutUs from './components/AboutUs';
import Blogs from './components/Blogs';
import LogIn from './components/LogIn';
import Landing from './components/Landing';
import Footer from './components/Footer';
import UpperWear from './components/UpperWear';
import BottomWear from './components/BottomWear';


import Profile from './components/Profile';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ColorAnalysis from './components/ColorAnalysis';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/> ,
  },



  {
    path: "/aboutus",
    element:<AboutUs/>,
  },
   

  {
    path: "/Blogs",
    element: <Blogs/>

  },

  {
    path: "/LogIn",
    element: <LogIn/>
  },

  {
    path: "/ColorAnalysis",
    element: <ColorAnalysis/>
  },

  {
    path: "/Landing",
    element: <Landing/>
  },

  {
    path: "/Footer",
    element: <Footer/>
  },  

  {
    path: "/UpperWear",
    element: <UpperWear/>
  },

  {
    path: "/BottomWear",
    element: <BottomWear/>
  },  

  

  {
    path: "/profile",
    element: <Profile/>
  },





  

   
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

