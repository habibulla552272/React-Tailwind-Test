import React from "react";

const Our_TestimonialsProps = (props) => {
  return (
    <section className="bg-white rounded-md">
      <div className=" ">
        <p className="p-4">{props.p1} </p>
        <div className="pt-1 border-t-2 bg-gray-200 w-full ">
          <div className="flex justify-between py-4 px-4">
            <div className="flex gap-3 px-4 py-2">
              <img src={props.Image} alt="" />
              <p className="flex items-center">{props.p2}</p>
            </div>

            <p className="py-2  flex items-center">{props.p3}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Our_TestimonialsProps;
