import React from "react";
import { Outlet } from "react-router-dom";
// import Navbar from "./components/Navbar";

const Categories = () => {
  return (
    <div className="flex-1">
      {/* <Navbar/> */}
      <Outlet/>
    </div>
  );
};

export default Categories;