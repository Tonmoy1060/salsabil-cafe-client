import React from "react";
import features from "../../../assets/card/features.png";
import features2 from "../../../assets/card/features2.png";
import features3 from "../../../assets/card/features3.png";

const Features = () => {
  return (
    <div>
      <div className="text-center ">
        <div className="w-10 rounded-lg m-2 h-1 mx-auto bg-primary"></div>
        <h4 className="text-lg tracking-wide font-bold ">FEATURES</h4>
        <h1 className="font-bold lg:text-5xl text-4xl my-4 font-serif ">
          Why people choose us?
        </h1>
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
          dignissimos.
        </p>
      </div>
      <div className="lg:flex items-center lg:my-10 my-3 mb-6">
        <div className="card ">
          <div className="card-body">
            <img className="max-w-[85px]" src={features} alt="" />
            <h2 className="card-title font-bold  my-3 font-serif font-serif ">
              Menu for every taste
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <img className="max-w-[85px]" src={features2} alt="" />
            <h2 className="card-title font-bold  my-3 font-serif ">
              Always fresh ingredients
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card ">
          <div className="card-body ">
            <img className="max-w-[85px] " src={features3} alt="" />
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

export default Features;
