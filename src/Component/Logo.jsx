import React from 'react'
import Logo1 from "../assets/Logo (1).png";
import Logo2 from "../assets/Logo (2).png";
import Logo3 from "../assets/Logo (3).png";
import Logo4 from "../assets/Logo (4).png";
import Logo5 from "../assets/Logo (5).png";
import Logo6 from "../assets/Logo (6).png";
import Logo7 from "../assets/Logo (7).png";

const Logo = () => {
  return (
    <section className='py-5 bg-gray-300'>
      <div className="container mx-auto ">
        <div className="flex justify-between px-10 py-5 bg-white">
          <img src={Logo1} alt="" />
          <img src={Logo2} alt="" />
          <img className='hidden md:block' src={Logo3} alt="" />
          <img className="hidden md:block" src={Logo4} alt="" />
          <img className="hidden md:block" src={Logo5} alt="" />
          <img className="hidden md:block" src={Logo6} alt="" />
          <img src={Logo7} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Logo
