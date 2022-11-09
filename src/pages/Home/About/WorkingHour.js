import React from "react";
import banner from "../../../assets/banners/banner.jpg";

const WorkingHour = () => {
  return (
    <div>
      <div
        className="hero  rounded-lg  my-12"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero-overlay  rounded-lg  "></div>
        <div className="hero-content text-center lg:pr-0">
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row lg:pr-0.5 ">
              <div className="text-center lg:text-left  text-white lg:pr-14 lg:mr-14">
                <div className="flex items-center font-semibold tracking-wide py-4">
                  <div className="w-9 rounded-lg mr-4 h-1 bg-primary"></div>
                  <h1 className=" tracking-wide font-mono">ABOUT US</h1>
                </div>
                <h1 className="lg:text-5xl text-4xl font-bold font-serif ">Working hours</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi.
                </p>
                <button className="btn btn-primary text-white">
                  CONTACT US
                </button>
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:rounded-l-none lg:rounded-r-md  lg:ml-14">
                <div className="card-body  tracking-wide py-14 px-0">
                  <div className="text-center">
                    <h1 className="font-semibold ">EVERY SEVEN DAY</h1>
                    <div className="my-6 font-serif ">
                      <p className="font-bold text-2xl">
                        09<span className="text-primary"> : </span>00
                      </p>
                      <p className="font-bold text-2xl">
                        22<span className="text-primary"> : </span>00
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <h1 className="font-semibold ">EVERY FESTIVAL DAY</h1>
                    <div className="my-6 font-serif ">
                      <p className="font-bold text-2xl">
                        24<span className="text-primary"> / </span>07
                      </p>
                      <p className="font-bold text-2xl">
                        24<span className="text-primary"> / </span>07
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-3/4 mt-10 mx-auto">
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default WorkingHour;
