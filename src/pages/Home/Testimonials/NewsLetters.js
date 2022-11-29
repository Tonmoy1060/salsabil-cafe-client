import React from "react";
import bottomBanner from "../../../assets/banners/bottomBanner.jpg";

const NewsLetters = () => {
  return (
    <div className="lg:m-7 md:m-7 rounded-lg py-3 pb-10">
      <div
        className="hero rounded-lg"
        style={{ backgroundImage: `url(${bottomBanner})` }}
      >
        <div className="hero-overlay  rounded-lg"></div>
        <div className="hero-content text-center  py-14 m-3">
          <div className="max-w-4xl">
            <div className="text-center text-neutral-content mb-14">
              <div className="w-10 rounded-lg m-2 h-1 mx-auto bg-secondary"></div>
              <h4 className="text-md tracking-wide font-bold ">NEWSLETTER</h4>
              <h1 className="font-bold lg:text-6xl md:text-5xl text-3xl my-5 font-serif ">
              Subscribe our newsletter
              </h1>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Facere, dignissimos.
              </p>
            </div>
            <form className="py-5 my-3">
            <input type="text" placeholder="Enter Your Email Here" className="input w-full max-w-xs" />
            <button className="btn btn-primary ml-5 text-white lg:mt-0 mt-3"> subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetters;
