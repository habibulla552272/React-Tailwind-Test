import React from "react";
import BenefitsProps from "./BenefitsProps";
import { MdArrowOutward } from "react-icons/md";

const Benefits = () => {
  return (
    <section className="bg-gray-300">
      <div className="container mx-auto">
        <div className="px-5 py-4 md:flex md:justify-between">
          <div>
            <h2 className="font-semibold text-2xl">Benefits</h2>
            <p className="py-3"> 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem?
            </p>
          </div>
          <div>
            <button className="bg-white px-4  py-2">view all</button>
          </div>
        </div>
        <div className="md:flex  md:justify-between md:flex-wrap ">
          <div className="w-11/12 md:w-[30%] mx-auto py-3 ">
            <BenefitsProps
              Number="01"
              tittle="Flexlble Learning Schedule"
              Discription="Fit Your courseWork Aroound Your Existion commitments and obligations"
              Icons={<MdArrowOutward />}
            />
          </div>
          <div className="w-11/12 md:w-[30%] mx-auto py-3 ">
            <BenefitsProps
              Number="02"
              tittle="Flexlble Learning Schedule"
              Discription="Fit Your courseWork Aroound Your Existion commitments and obligations"
              Icons={<MdArrowOutward />}
            />
          </div>
          <div className="w-11/12 md:w-[30%] mx-auto py-3">
            <BenefitsProps
              Number="03"
              tittle="Flexlble Learning Schedule"
              Discription="Fit Your courseWork Aroound Your Existion commitments and obligations"
              Icons={<MdArrowOutward />}
            />
          </div>
          <div className="w-11/12 md:w-[30%] mx-auto py-3">
            <BenefitsProps
              Number="04"
              tittle="Flexlble Learning Schedule"
              Discription="Fit Your courseWork Aroound Your Existion commitments and obligations"
              Icons={<MdArrowOutward />}
            />
          </div>
          <div className="w-11/12 md:w-[30%] mx-auto py-3">
            <BenefitsProps
              Number="05"
              tittle="Flexlble Learning Schedule"
              Discription="Fit Your courseWork Aroound Your Existion commitments and obligations"
              Icons={<MdArrowOutward />}
            />
          </div>
          <div className="w-11/12 md:w-[30%] mx-auto py-3">
            <BenefitsProps
              Number="06"
              tittle="Flexlble Learning Schedule"
              Discription="Fit Your courseWork Aroound Your Existion commitments and obligations"
              Icons={<MdArrowOutward />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
