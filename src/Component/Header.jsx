import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  return (
    <section className='bg-gray-300'>
      <div className="bg-primary text-center flex items-center gap-3 justify-center py-5">
        <h2 className="font-font_1">
          Free Courses 🌟 Sale Ends Soon, Get It Now
        </h2>
        <p>
          <FaArrowRight />
        </p>
      </div>
    </section>
  );
}

export default Header;