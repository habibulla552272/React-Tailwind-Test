import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { IoMdMail } from "react-icons/io";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="bg-gray-300 py-10 ">
      <div className="containder  bg-white  ">
        <div className="px-5 py-7 md:flex md:justify-between">
          <div className="py-2">
            <img src={Logo} alt="" />
            <div className="flex items-center  gap-1 py-1">
              <p>
                <IoMdMail />
              </p>
              <p>hello@skillbridge.com</p>
            </div>
            <div className="flex items-center  gap-1 py-1">
              <p>
                <FaPhoneFlip />
              </p>
              <p>+-4-439494949949</p>
            </div>
            <div className="flex items-center  gap-1 py-1">
              <p>
                <FaLocationDot />
              </p>
              <p>somewhere in the world</p>
            </div>
          </div>
          <div className="">
            <h3 className="text-3xl py-2">
              <Link to="/">Home</Link>
            </h3>
            <ul>
              <li className="">
                <Link to="/Benefits">Benefits</Link>
              </li>
              <li className="">
                <Link to="/Benefits">Our Course</Link>
              </li>
              <li className="">
                <Link to="/Benefits">Our Testimonials</Link>
              </li>
              <li className="">
                <Link to="/Benefits">Our FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl py-2">
        
              <Link to="/">About Us</Link>
            </h3>
            <ul>
              <li>
                <Link to="/Benefits">Company</Link>
              </li>
              <li>
                <Link to="/Benefits">Achievements</Link>
              </li>
              <li>
                <Link to="/Benefits">Our Goals</Link>
              </li>
              <li>
                <Link to="/Benefits">Benefits</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl py-2">Social Profiles</h3>
            <div className="flex gap-2">
              <p className="px-1 py-1 bg-gray-200 rounded-md">
                <FaFacebookF />
              </p>
              <p className="px-1 py-1 bg-gray-200 rounded-md">
                <IoLogoTwitter />
              </p>
              <p className="px-1 py-1 bg-gray-200 rounded-md">
                <FaLinkedinIn />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
