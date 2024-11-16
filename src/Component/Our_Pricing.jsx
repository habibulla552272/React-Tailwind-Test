import React from "react";
import Our_CourseProps from "./Our_CourseProps";
import Our_pricingProps from "./Our_pricingProps";
import { MdArrowOutward } from "react-icons/md";

const Our_Pricing = () => {
  return (
    <section className="bg-gray-300">
      <div className="container mx-auto">
        <div className="px-5 py-4 md:flex md:justify-between">
          <div>
            <h2 className="font-semibold text-2xl">Our Courses </h2>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem?
            </p>
          </div>
          <div className="py-1 px-1 bg-white flex flex-row justify-center items-center">
            <button className="bg-orange-400 px-4  py-2">Monthly</button>
            <button className="bg-white px-4  py-2">Yearly</button>
          </div>
        </div>

        <div className="md:flex md:justify-center bg-white">
          <div className="md:w-[45%] w-11/12 mx-auto py-2">
            <Our_pricingProps
              p1="Free Plan"
              p2="$0"
              p3="/month"
              tittle="Availoble Features"
              p4="Access to selected Free Courses"
              p5="LImited courese materials and resources"
              p6="Basic community Support"
              p7="No Certification Upon completion"
              okay={<MdArrowOutward />}
            />
          </div>
          <div className="md:w-[45%] w-11/12 mx-auto py-2">
            <Our_pricingProps
              p1="pro Plan"
              p2="$70"
              p3="/month"
              tittle="Availoble Features"
              p4="Unlimited access to all courses. "
              p5="LImited courese materials and resources"
              p6="Basic community Support"
              p7="No Certification Upon completion"
              okay={<MdArrowOutward />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Our_Pricing;
