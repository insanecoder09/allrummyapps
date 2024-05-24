import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Privacy from "./Privacy";
import Games from "./Games";

function App() {
  return (
    <div className="bg-white h-screen w-full mx-auto relative">
      {/* Header */}

      <img
        className=" fixed h-10 right-0 top-[50%] z-10"
        src="https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716309568/telegram-rummybonusapp_dpm5vy.png"
        alt="telegram"
      />

      <div className="header h-[10%]">
        <div className="bg-[#003A92] text-white h-[55%] flex justify-between items-center px-4">
          <h1 className="text-md font-bold">AllRummyApps</h1>
          <h1 className="text-xl font-bold">Share</h1>
        </div>
        <nav className="bg-white h-[45%] flex justify-between items-center">
          <NavLink
            className="hover:bg-zinc-700 hover:text-white h-full w-full flex items-center justify-center"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="hover:bg-zinc-700 hover:text-white h-full w-full flex items-center justify-center"
            to="/games"
          >
            Games
          </NavLink>
          <NavLink
            className="hover:bg-zinc-700 hover:text-white h-full w-full flex items-center justify-center"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="hover:bg-zinc-700 hover:text-white h-full w-full flex items-center justify-center"
            to="/privacy"
          >
            Privacy
          </NavLink>
          <NavLink
            className="hover:bg-zinc-700 hover:text-white h-full w-full flex items-center justify-center"
            to="/contact  "
          >
            Contact
          </NavLink>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/games" element={<Games />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/privacy" element={<Privacy />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
