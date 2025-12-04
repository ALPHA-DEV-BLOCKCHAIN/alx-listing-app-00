import React from "react";

const Header = () => {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">StayFinder</h1>

        <div className="hidden md:flex items-center gap-6">
          <button className="text-gray-600 hover:text-black">Rooms</button>
          <button className="text-gray-600 hover:text-black">Mansions</button>
          <button className="text-gray-600 hover:text-black">Countryside</button>
        </div>

        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-md px-3 py-1"
          />
          <button className="px-4 py-1 bg-black text-white rounded-md">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
