import React from "react";
import { IoClose } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

const Ask_Question = () => {
  return (
    <section className="bg-gray-300  pt-10">
      <div className="container mx-auto bg-white rounded-md">
        <div className="md:flex md:justify-between py-5">
          <div className="py-5 px-5 md:w-1/3">
            <h2 className="text-3xl font-semibold">
              Frequently Asked Questions
            </h2>
            <p className="w-10/12 py-3">
              Still you have any questions ? Contact Our Team via Support
              @Skillbridge.com
            </p>
            <button className="py-2 px-3 bg-gray-100">See All FAQ's</button>
          </div>
          <div className="px-5 md:w-8/12">
            <div className="border-2 rounded-md px-5 py-3">
              <div className="flex justify-between border-b-2 rounded-md pb-2 items-center">
                <p className="font-semibold">
                  Can i Enroll in multiple Courses at once?
                </p>
                <p className="bg-orange-200 rounded-md flex items-center text-3xl">
                  <IoClose />
                </p>
              </div>
              <p className="py-3 font-medium">
                Absolutely you can enroll in multiple courses simulaneously and
                access them at your convenience.
              </p>
              <div className="flex justify-between items-center bg-gray-200 px-2 py-3 rounded-md">
                <p>Enrollment process for different courses</p>
                <p className="text-3xl rounded-full bg-white px-1 py-1">
                  <IoArrowForward />
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center border-2 rounded-md px-5 py-4 my-2">
              <p>What kind of support can i expect from instructors ?</p>
              <p>
                <FaPlus />
              </p>
            </div>
            <div className="flex justify-between items-center border-2 rounded-md px-5 py-4 my-2">
              <p>Are there any preeequisites for the courses ?</p>
              <p>
                <FaPlus />
              </p>
            </div>
            <div className="flex justify-between items-center border-2 rounded-md px-5 py-4 my-2">
              <p>
                {" "}
                Can i download the courses materials for offfiline access ?
              </p>
              <p>
                <FaPlus />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ask_Question;
