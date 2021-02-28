import React from "react";
import Searchbar from "./Searchbar";

const Navbar: React.FC = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="flex items-center justify-between py-4 mx-auto px-14 max-w-7xl">
        <div className="flex space-x-9 justify-left">
          <div className="font-sans text-xl font-bold tracking-widest uppercase">
            RAWG
          </div>
          <Searchbar />
        </div>

        <div className="w-12 h-12 bg-pink-500"></div>
      </div>
    </div>
  );
};

export default Navbar;