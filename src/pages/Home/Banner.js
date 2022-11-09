import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import bannerImage from "../../assets/banners/banner.png";
import auth from "../../firebase.init";

const Banner = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
      }}
      className="p-5 "
    >
      <div className="flex  items-center font-semibold tracking-wide lg:px-20 px-3 mx-3 my-[-10px] text-white">
        <div className="w-9 rounded-lg mr-4 h-1 bg-primary"></div>
        <h1 className=" tracking-wide font-mono capitalize">Hello, {user ? user.displayName : 'Anonymous'}</h1>
      </div>
      <div className="lg:px-20">
        <div className="card  py-8 lg:py-28">
          <div className="card-body  text-neutral-content ">
            <h2 className="card-title font-bold lg:text-6xl text-4xl font-serif ">
              Welcome Back <br />
              to tasty
            </h2>
            <p className="py-7">
              If a dog chews shoes whose shoes does he choose <br /> If a dog
              chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions justify-start">
              <button className="btn btn-primary text-white">
                Reserve Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
