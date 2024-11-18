import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { IoMenu } from "react-icons/io5";

import { RiCloseLargeFill } from "react-icons/ri";

const Navbar = () => {
  const [Menu, StateMenu] = useState(false);
  const menuShow = () => {
    StateMenu(!Menu);
  };
  

  return (
    <section className="bg-gray-300">
      <div className="Container mx-auto">
        <div className="flex justify-between py-5 px-10">
          <div className="flex items-center gap-10">
            <img
              className="flex justify-center md:justify-start"
              src={Logo}
              alt=""
            />

            <ul
              className={`md:flex md:space-y-0 md:gap-8  md:static ${
                Menu
                  ? "absolute top-14 left-0 space-y-6 duration-500  bg-black text-white h-56 w-36 flex flex-col items-center justify-center opacity-80"
                  : "absolute top-14 -left-40 ]"
              }`}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>{" "}
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div
            onClick={menuShow}
            className="md:hidden flex items-center  text-4xl"
          >
            {Menu ? <RiCloseLargeFill /> : <IoMenu />}
          </div>
          <div className="flex items-center gap-3">
            <button>Sign up</button>
            <button className="md:px-8 md:py-3 px-3 h-10 flex items-center bg-primary text-white rounded-md">
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
