import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useDarkMode } from "../Components/DarkModeContext";
import logo from "../Images/logo.jpg";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <nav className={`p-6 text-1xl font-semibold ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
        <div className="flex justify-between">
          <div>
          <img src={logo} alt="Logo" className="h-10 w-10 rounded-full " />
          </div>
          <div>
            <button
              onClick={toggleDarkMode}
              className={`px-4 py-2 rounded-full ${
                isDarkMode
                  ? "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  : "bg-slate-600 text-white hover:bg-slate-600"
              }`}
            >
              {isDarkMode ? "Light" : "Dark"}
            </button>
          </div>
          <div>
              <button className="bg-slate-600 text-white p-2 w-24 hover:bg-slate-300 rounded-full">
                <span>Hire me</span>
              </button>
          </div>
          <ul className="sm:flex gap-5">
            <li className="hover:text-gray-200 hover:bg-slate-600 hover:rounded-full p-2">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-gray-200 hover:bg-slate-600 hover:rounded-full p-2">
              <Link to="/Skills">Skills</Link>
            </li>
            <li className="hover:text-gray-200 hover:bg-slate-600 hover:rounded-full p-2">
              <Link to="/Project">Projects</Link>
            </li>
            <li className="hover:text-gray-200 hover:bg-slate-600 hover:rounded-full p-2">
              <Link to="/Experience">Experience</Link>
            </li>
            <li className="hover:text-gray-200 hover:bg-slate-600 hover:rounded-full p-2">
              <Link to="/Certification">Certification</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
