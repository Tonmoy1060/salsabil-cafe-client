import React from "react";
import { Link } from "react-router-dom";
import { SiCoffeescript } from "react-icons/si";
import { FaSignInAlt } from "react-icons/fa";
import { IoIosReorder } from "react-icons/io";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const handleSignOut = (event) => {
    event.preventDefault();
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  return (
    <div className="lg:px-5 px-1 mt-[-5px]">
      <div className="navbar bg-base-100 rounded-lg py-3 ">
        <div className="navbar-start">
          {/* <label
            htmlFor="my-drawer-2"
            className="btn btn-secondary flex absolute right-2 top-2 btn-xs md:btn-lg lg:btn-lg text-white drawer-button lg:hidden"
          >
            drawer
          </label> */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>

              <li>
                <Link to={"menu"}>Menu</Link>
              </li>
              <li>
                <Link to={"about"}>About</Link>
              </li>

              <li>
                <Link to={"contact"}>Contact</Link>
              </li>
              {/* <li>
                <Link className="btn btn-lg btn-primary text-white">
                  Reservation
                </Link>
              </li> */}
              {user && (
                <li className=" hover:underline hover:text-primary  decoration-primary decoration-4 underline-offset-[35px]">
                  <Link to="dashboard">Dashboard</Link>
                </li>
              )}

              {user ? (
                <li className=" hover:underline hover:text-primary  decoration-primary decoration-4 underline-offset-[35px]">
                  <Link onClick={handleSignOut} to="login">
                    Sign Out
                  </Link>
                </li>
              ) : (
                <li className=" hover:underline hover:text-primary  decoration-primary decoration-4 underline-offset-[35px]">
                  <Link to={"login"}>
                    <FaSignInAlt className="text-2xl text-secondary " />
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div className=" lg:mx-7 mx-3 flex items-center">
            <SiCoffeescript className="lg:text-5xl text-4xl text-accent mr-1 drop-shadow-xl" />

            <div className="justify-center drop-shadow-xl">
              <Link className="normal-case text-2xl font-bold pb-0 mb-0 font-serif  drop-shadow-xl">
                SALSABIL
              </Link>{" "}
              <div className="pt-0 mt-0 text-sm flex items-center font-serif">
                <IoIosReorder className="text-primary text-lg drop-shadow-xl" />

                <small className="drop-shadow-xl">Cafe & Garden</small>

                <IoIosReorder className="text-primary text-lg drop-shadow-xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0 mr-3">
            <li className="  hover:underline hover:text-primary decoration-primary decoration-4 underline-offset-[35px] ">
              <Link to={"/"}>Home</Link>
            </li>

            <li className="  hover:underline hover:text-primary  decoration-primary decoration-4 underline-offset-[35px]">
              <Link to={"menu/"}>Menu</Link>
            </li>
            <li className="  hover:underline hover:text-primary  decoration-primary decoration-4 underline-offset-[35px]">
              <Link to={"about"}>About</Link>
            </li>

            <li className="  hover:underline hover:text-primary  decoration-primary decoration-4 underline-offset-[35px]">
              <Link to={"contact"}>Contact</Link>
            </li>
            {/* <li className="  hover:underline hover:text-primary  decoration-primary decoration-4 underline-offset-[35px]">
              <Link className="btn btn-lg btn-primary text-white">
                Reservation
              </Link>
            
            </li> */}

            {user && (
              <li className=" hover:underline hover:text-primary  decoration-primary decoration-4 underline-offset-[35px]">
                <Link to="dashboard">Dashboard</Link>
              </li>
            )}

            {user ? (
              <li className=" hover:underline hover:text-primary  decoration-primary decoration-4 underline-offset-[35px]">
                <Link onClick={handleSignOut} to="login">
                  Sign Out
                </Link>
              </li>
            ) : (
              <li className=" hover:underline hover:text-primary  decoration-primary decoration-4 underline-offset-[35px]">
                <Link to={"login"}>
                  <FaSignInAlt className="text-2xl text-secondary " />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
