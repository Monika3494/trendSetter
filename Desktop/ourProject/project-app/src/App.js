import React from 'react';
import './App.css';

import Header from './components/Header';
import AboutUs from './components/AboutUs';
import ColorAnalysis from './components/ColorAnalysis';
import Blogs from './components/Blogs';
import LogIn from './components/LogIn';
import Landing from './components/Landing';
import Footer from './components/Footer';
import UpperWear from './components/UpperWear';
import BottomWear from './components/BottomWear';

import Profile from './components/Profile';

const App = () => {
  return (

    
    <div className="App">
      {/* Header Section */}
      <Header />
      <main>
        <selection id="About us">
        <AboutUs />
        </selection>

        {/* <selection id="ColorAnalysis">
        <ColorAnalysis />
        </selection>

        <selection id="Blogs">
        <Blogs />
        </selection>

        <selection id="LogIn">
        <LogIn />
        </selection>

        <selection id="Landing">
        <Landing />
        </selection>    

        <selection id="Footer">
        <Footer />
        </selection>

        <selection id="UpperWear">
        <UpperWear />
        </selection>  

        <selection id="BottomWear">
        <BottomWear />
        </selection>  

        

        <selection id="Profile">
        <Profile />
        </selection> */}


      
        

        
        
       

      </main>
    </div>
  );
};

export default App;


