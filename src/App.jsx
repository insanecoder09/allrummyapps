import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Privacy from "./Privacy";

function App() {
  return (
    <div className="bg-white h-screen max-w-96 w-full mx-auto overflow-y-scroll relative">
      {/* Header */}

      <img className=" fixed h-10 right-0 top-[50%]" src="https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716309568/telegram-rummybonusapp_dpm5vy.png" alt="telegram" />

      <div className="header">
        <div className="bg-red-300 h-12 flex justify-between items-center px-4">
          <h1 className="text-xl font-bold">Logo</h1>
          <h1 className="text-xl font-bold">Share</h1>
        </div>
        <nav className="bg-blue-300 h-8 flex justify-between items-center">
          <Link
            className="bg-red-400 hover:bg-red-300 h-full w-full flex items-center justify-center"
            to="/"
          >
            Home
          </Link>
          <Link
            className="bg-red-400 hover:bg-red-300 h-full w-full flex items-center justify-center"
            to="/about"
          >
            About
          </Link>
          <Link
            className="bg-red-400 hover:bg-red-300 h-full w-full flex items-center justify-center"
            to="/privacy"
          >
            Privacy
          </Link>
          <Link
            className="bg-red-400 hover:bg-red-300 h-full w-full flex items-center justify-center"
            to="/contact  "
          >
            Contact
          </Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/privacy" element={<Privacy/>} ></Route>
        <Route path="/contact" element={<Contact/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
