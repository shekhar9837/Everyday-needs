import React, { Children } from "react";
import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import HomePage from "./components/HomePage";


const App = () => {
  return (
    <div >
     <Home/>

    </div>
  );
};


export default App;
