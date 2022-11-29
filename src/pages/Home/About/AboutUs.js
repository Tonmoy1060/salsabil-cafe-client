import React from "react";
import coffee from "../../../assets/card/coffee.jpg";
import { CgBorderStyleSolid } from "react-icons/cg";

const AboutUs = () => {
  return (
    <div className="">
      <div className="hero lg:py-10 py-3 mt-4">
        <div className="hero-content  flex-col lg:flex-row ">
          <img src={coffee} className="lg:max-w-xl md:max-w-lg xs:max-w-xs sm:max-w-md  rounded-lg shadow-2xl" />
          <div>
            <div className="flex items-center font-semibold tracking-wide py-4">
              <div className="w-9 rounded-lg mr-4 h-1 bg-secondary"></div>
              <h1>About Us</h1>
            </div>
            <h1 className="lg:text-5xl text-4xl font-bold  font-serif">
              We invite to visit our cafe!
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary text-white">Read More</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-3/4 mx-auto">
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default AboutUs;
