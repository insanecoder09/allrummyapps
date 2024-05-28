import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Privacy from "./Privacy";
import Games from "./Games";
import { IoMenu } from "react-icons/io5";
import Tac from "./Tac";

function App() {
  const [show, setShow] = useState(0);
  return (
    <div className="bg-white h-screen w-full mx-auto relative">
      {/* Header */}

      <a
        className=" fixed right-0 top-[50%] z-10"
        href="https://t.me/AllTypeLoots"
        target="_blank"
      >
        <img
          className="h-10"
          src="https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716309568/telegram-rummybonusapp_dpm5vy.png"
          alt="telegram"
        />
      </a>

      <div className="header h-[9%]">
        <div className="bg-[#003A92] text-white h-[60%] flex justify-between items-center px-3 relative">
          <div className="text-md font-bold h-full flex items-center gap-2">
            <img
              className=" h-[80%] rounded-md"
              src="https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776157/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.36_AM_lmvele.jpg"
              alt="logo"
            />
            <h1>RummyBestApps</h1>
          </div>
          <div className="flex items-center gap-2">
            <a
              className=""
              href="https://t.me/AllTypeLoots"
              target="_blank"
            >
              <img
                className="h-7"
                src="https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716309568/telegram-rummybonusapp_dpm5vy.png"
                alt="telegram"
              />
            </a>
            <button
              onClick={() => setShow((prev) => !prev)}
              className="text-xl font-bold flex items-center gap-1"
            >
              <IoMenu />
              <h1 className="text-xs">MENU</h1>
            </button>
          </div>
          {show ? (
            <div className="w-full h-fit absolute top-[100%] left-0 z-20 bg-[#003A92]">
              <NavLink
                onClick={() => setShow(0)}
                className="hover:bg-zinc-700 hover:text-white py-1 w-full flex items-center justify-center"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => setShow(0)}
                className="hover:bg-zinc-700 hover:text-white py-1 w-full flex items-center justify-center"
                to="/games"
              >
                Games
              </NavLink>
              <NavLink
                onClick={() => setShow(0)}
                className="hover:bg-zinc-700 hover:text-white py-1 w-full flex items-center justify-center"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                onClick={() => setShow(0)}
                className="hover:bg-zinc-700 hover:text-white py-1 w-full flex items-center justify-center"
                to="/privacy"
              >
                Privacy
              </NavLink>
              <NavLink
                onClick={() => setShow(0)}
                className="hover:bg-zinc-700 hover:text-white py-1 w-full flex items-center justify-center"
                to="/contact"
              >
                Contact
              </NavLink>
              <NavLink
                onClick={() => setShow(0)}
                className="hover:bg-zinc-700 hover:text-white py-1 w-full flex items-center justify-center"
                to="/tac"
              >
                Terms And Condition
              </NavLink>
            </div>
          ) : null}
        </div>

        <nav className="bg-white h-[40%] font-bold flex justify-between items-center">
          <NavLink
            className="hover:bg-zinc-700 hover:text-white h-full w-full flex items-center justify-center"
            to="/"
          >
            Home
          </NavLink>
          <div className="h-[70%] w-[4px] bg-black"></div>
          <NavLink
            className="hover:bg-zinc-700 hover:text-white h-full w-full flex items-center justify-center"
            to="/games"
          >
            Games
          </NavLink>
          <div className="h-[70%] w-[4px] bg-black"></div>
          <NavLink
            className="hover:bg-zinc-700 hover:text-white h-full w-full flex items-center justify-center"
            to="/about"
          >
            About
          </NavLink>
          <div className="h-[70%] w-[4px] bg-black"></div>
          <NavLink
            className="hover:bg-zinc-700 hover:text-white h-full w-full flex items-center justify-center"
            to="/privacy"
          >
            Privacy
          </NavLink>
          <div className="h-[70%] w-[4px] bg-black"></div>
          <NavLink
            className="hover:bg-zinc-700 hover:text-white h-full w-full flex items-center justify-center"
            to="/contact"
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
        <Route path="/tac" element={<Tac />}></Route>
      </Routes>
    </div>
  );
}

export default App;
