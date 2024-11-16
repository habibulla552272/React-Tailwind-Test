import React from 'react'
import Our_CourseProps from './Our_CourseProps';

import Image1 from "../assets/Image (1).png"
import Image2 from "../assets/Image (2).png";
import Image3 from "../assets/Image (3).png";

import Image4 from "../assets/Image (4).png";
import Image5 from "../assets/Image (5).png";
import Image6 from "../assets/Image (1).png";


const Our_Courses = () => {
  return (
    <section className="bg-gray-300">
      <div className="container mx-auto ">
        <div className="px-5 py-4 md:flex md:justify-between">
          <div>
            <h2 className="font-semibold text-2xl">Our Courses </h2>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem?
            </p>
          </div>
          <div>
            <button className="bg-white px-4  py-2">view all</button>
          </div>
        </div>
        <div className='md:flex md:flex-wrap md:justify-between'>
          <div className="md:w-[48%] py-3">
            <Our_CourseProps
              Image={Image1}
              p1="4 weeks"
              p2="Beginner"
              p3="By John Smith"
              tittle="Web Design Fundomentals"
              Discription="Fit Your courseWork Aroound Your Existion commitments and obligations"
            />
          </div>
          <div className="md:w-[48%] py-3">
            <Our_CourseProps
              Image={Image2}
              p1="6 Weeks"
              p2="Beginner"
              p3="By John Smith"
              tittle="UX/UI Design"
              Discription="Fit Your courseWork Aroound Your Existion commitments and obligations"
            />
          </div>
          <div className="md:w-[48%] py-3">
            <Our_CourseProps
              Image={Image3}
              p1="4 Seeks"
              p2="Beginner"
              p3="By John Smith"
              tittle="Web Design Fundomentals"
              Discription="Fit Your courseWork Aroound Your Existion commitments and obligations"
            />
          </div>
          <div className="md:w-[48%] py-3">
            <Our_CourseProps
              Image={Image4}
              p1="4 Seeks"
              p2="Beginner"
              p3="By John Smith"
              tittle="Web Design Fundomentals"
              Discription="Fit Your courseWork Aroound Your Existion commitments and obligations"
            />
          </div>
          <div className="md:w-[48%] py-3">
            <Our_CourseProps
              Image={Image1}
              p1="4 Seeks"
              p2="Beginner"
              p3="By John Smith"
              tittle="Web Design Fundomentals"
              Discription="Fit Your courseWork Aroound Your Existion commitments and obligations"
            />
          </div>
          <div className="md:w-[48%] py-3">
            <Our_CourseProps
              Image={Image1}
              p1="4 Seeks"
              p2="Beginner"
              p3="By John Smith"
              tittle="Web Design Fundomentals"
              Discription="Fit Your courseWork Aroound Your Existion commitments and obligations"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Our_Courses
