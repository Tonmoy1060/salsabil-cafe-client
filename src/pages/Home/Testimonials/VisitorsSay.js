import React from "react";

const VisitorsSay = () => {
  return (
    <div>
      <div className="text-center mt-14 pt-2">
        <div className="w-10 rounded-lg m-2 h-1 mx-auto bg-primary"></div>
        <h4 className="text-lg tracking-wide font-bold pt-2">TESTIMONIALS</h4>
        <h1 className="font-bold lg:text-5xl text-4xl my-4 font-serif ">
          What our visitor's say
        </h1>
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
          dignissimos.
        </p>
      </div>
      <div className="lg:flex items-center my-10 mb-6">
        <div className="card ">
          <div className="card-body">
            {/* <img className="max-w-[85px]" src={features} alt="" /> */}
            <h2 className="card-title font-bold  my-3 font-serif font-serif ">
              Menu for every taste
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            {/* <img className="max-w-[85px]" src={features2} alt="" /> */}
            <h2 className="card-title font-bold  my-3 font-serif ">
              Always fresh ingredients
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card ">
          <div className="card-body ">
            {/* <img className="max-w-[85px]" src={features3} alt="" /> */}
            <h2 className="card-title  font-bold  my-3 font-serif ">
              Experienced chefs
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-3/4 mx-auto">
        <div className="divider mt-0 pt-0"></div>
      </div>
    </div>
  );
};

export default VisitorsSay;
