import React from "react";

const Header = () => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello, <br /> <span className="text-3xl font-semibold">Jayant 👋</span>
      </h1>
      <button className="bg-red-600 text-lg font-medium py-2 px-5 rounded-lg">Log Out</button>
    </div>
  );
};

export default Header;
