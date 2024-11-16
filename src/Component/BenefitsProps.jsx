import React from "react";

const BenefitsProps = (props) => {
  return (
    <section className="bg-white rounded-md">
     
        <div className="px-6 py-5">
          <p className="flex justify-end text-2xl font-extrabold">{props.Number}</p>
          <h3 className="py-2">{props.tittle} </h3>
          <p className="py-3">{props.Discription} </p>
          <p className="py-5 flex justify-end text-2xl text-orange-300">{props.Icons} </p>
        </div>
     
    </section>
  );
};

export default BenefitsProps;
