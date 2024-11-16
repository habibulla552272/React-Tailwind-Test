import React from "react";

const Our_pricingProps = (props) => {
  return (
    <section className="bg-gray-100">
      <div className="px-5 pt-2">
        <p className=" text-center py-1 bg-orange-200 rounded-md">{props.p1}</p>
        <p className="text-center text-2xl py-3">
          {props.p2} <span className="text-xs">{props.p3}</span>
        </p>
        <div className="bg-white px-2 rounded-lg">
          <h2 className="text-2xl font-semibold text-center py-2">
            {props.tittle}
          </h2>
          <div className="flex  gap-2 items-center border-2 border-gray py-3 my-2">
            <p>{props.okay}</p>
            <p>{props.p4}</p>
          </div>
          <div className="flex  gap-2 items-center border-2 border-gray py-3 my2">
            <p>{props.okay}</p>
            <p>{props.p5}</p>
          </div>
          <div className="flex  gap-2 items-center  border-2 border-gray py-3 my-2">
            <p>{props.okay}</p>
            <p>{props.p6}</p>
          </div>
          <div className="flex  gap-2 items-center  border-2 border-gray py-3 my-2">
            <p>{props.okay}</p>
            <p>{props.p7}</p>
          </div>
          <div className="flex  gap-2 items-center border-2 border-gray py-3 my-2">
            <p>{props.okay}</p>
            <p>{props.p8}</p>
          </div>
          <div className="flex  gap-2 items-center border-2 border-gray py-3 my-2">
            <p>{props.crose}</p>
            <p>{props.p9}</p>
          </div>
          <button className="w-full py-1 mt-4 bg-orange-400 rounded-md">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Our_pricingProps;
