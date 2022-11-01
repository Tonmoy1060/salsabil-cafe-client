import React from "react";
import reserveImg from "../../assets/card/reserved.png";

const Reservation = () => {
  return (
    <div className="card lg:max-w-full max-w-1/2  pb-5 lg:pb-0 py-0 my-0 lg:mx-20 mx-7">
      <div className="card-body py-0 my-0 mx-1 lg:mx-5 px-1 lg:px-5 hero  text-neutral-content">
        <div className="hero-content py-0 flex-col lg:flex-row-reverse">
          <img src={reserveImg} className="lg:max-w-lg md:max-w-md max-w-sm rounded-lg" />
          <div className="max-w-sm lg:max-w-xl">
            <div className="flex items-center font-semibold tracking-wide py-4">
              <div className="w-9 rounded-lg mr-4 h-1 bg-primary"></div>
              <h1 className=" tracking-wide">RESERVATION</h1>
            </div>
            <h1 className="text-lg:5xl text-3xl font-bold  font-serif">This evening will be great!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary text-white">GET IN TOUCH</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
