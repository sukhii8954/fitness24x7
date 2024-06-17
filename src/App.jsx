// import React, { useEffect, useState } from "react";
import {Route , Routes} from 'react-router-dom';
import Home from "./Pages/Home";
import ExerciseDetails from "./Pages/ExerciseDetails";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


const App = () => {
  return (
    <>
      <div  className="m-auto xl:w-full">
        <Navbar/>
        <Routes>
          <Route path="/" element= {<Home/>} />
          <Route path="/exercise/:id" element= {<ExerciseDetails/>} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
};

export default App;
