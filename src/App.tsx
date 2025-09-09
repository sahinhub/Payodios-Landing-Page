import * as React from "react";
import { useState, useEffect, useContext } from "react";
import { IoMdMoon } from "react-icons/io";
import { LuSunMedium } from "react-icons/lu";
import { Globe } from "./components/magicui/globe";
import { Outlet } from "react-router-dom";
import { NavigationMenuDemo } from "./components/Header";
function App() {
  
  return (
    <div className="bg-gray-900 text-black text-white min-h-screen relative">
     <NavigationMenuDemo></NavigationMenuDemo>
     
     <Outlet></Outlet>
        


    </div>
  );
}

export default App;
