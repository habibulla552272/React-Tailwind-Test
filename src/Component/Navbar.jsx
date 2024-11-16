import React from 'react'
import {Link} from "react-router-dom";
import Logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <section className='bg-gray-300'>
      <div className="Container mx-auto">
        <div className="flex justify-between py-5 px-10">
          <div className="flex items-center gap-10">
            <img src={Logo} alt="" />

            <ul className="flex gap-5">
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
          <div className="flex gap-3">
            <button>Sign up</button>
            <button className="px-8 py-3 bg-primary text-white rounded-md">
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar
