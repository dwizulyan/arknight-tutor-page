import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="relative ">
      <Navbar />
      <div className="pt-20 px-10">
        <Outlet />
      </div>
    </div>
  );
};
export default App;
