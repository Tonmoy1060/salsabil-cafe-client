import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  return (
    <div>
      <div className="card max-w-full bg-base-100   rounded-t-none py-0 mb-10 lg:mx-20 md:mx-14 mx-2">
        <div className="card-body p-2 my-0 ">
          <div>
            <div className="drawer drawer-mobile">
              <input
                id="dashboardDrawer"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content lg:p-10 p-0 md:p-5 bg-yellow-50">
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>

                <label
                  htmlFor="dashboardDrawer"
                  className="btn btn-primary flex absolute right-2 top-2 btn-xs md:btn-lg lg:btn-lg text-white drawer-button lg:hidden"
                >
                  drawer
                </label>
              </div>
              <div className="drawer-side rounded-l-2xl w-3/4 lg:w-full">
                <label
                  htmlFor="dashboardDrawer"
                  className="drawer-overlay "
                ></label>

                <ul className="menu p-4  overflow-y-auto w-50 bg-orange-200 text-base-content">
                  {/* <!-- Sidebar content here --> */}

                  <label
                    htmlFor="dashboardDrawer"
                    className="btn btn-ghost hover:text-white justify-start items-center flex justify-start "
                  >
                    <Link to="/dashboard">Orders</Link>
                  </label>

                  <label
                    htmlFor="dashboardDrawer"
                    className="btn btn-ghost hover:text-white justify-start items-center flex justify-start "
                  >
                    <Link to="/dashboard/review">Review</Link>
                  </label>

                  {admin && (
                    <label
                      htmlFor="dashboardDrawer"
                      className="btn btn-ghost hover:text-white justify-start items-center flex justify-start "
                    >
                      <Link to="/dashboard/customOrder">
                        {" "}
                        {/* <MdOutlineAdd className="text-lg" /> */}
                        Custom Order's
                      </Link>
                    </label>
                  )}

                  {admin && (
                    <label
                      htmlFor="dashboardDrawer"
                      className="btn btn-ghost hover:text-white justify-start items-center flex justify-start "
                    >
                      <Link to="/dashboard/makeAdmin">
                        {" "}
                        {/* <MdGroupAdd className="text-lg" /> */}
                        Make Admin
                      </Link>
                    </label>
                  )}
                  {admin && (
                    <label
                      htmlFor="dashboardDrawer"
                      className="btn btn-ghost hover:text-white justify-start items-center flex justify-start "
                    >
                      <Link to="/dashboard/fillOrderList">
                        {" "}
                        {/* <GoListOrdered className="text-lg" /> */}
                        All Orders
                      </Link>
                    </label>
                  )}
                  {admin && (
                    <label
                      htmlFor="dashboardDrawer"
                      className="btn btn-ghost hover:text-white justify-start items-center flex justify-start "
                    >
                      <Link to="/dashboard/addItem">
                        {" "}
                        {/* <MdOutlineAdd className="text-lg" /> */}
                        Add Item
                      </Link>
                    </label>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
