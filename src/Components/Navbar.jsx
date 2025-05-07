import React, { use } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut, loading } = use(AuthContext);

  const handleNavigate = () => {
    navigate("/auth/login");
  };
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("log out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const link = (
    <div className="flex flex-col lg:flex-row gap-12">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "font-bold underline  underline-offset-6   text-[#1276F7] underline-[#1276F7]  "
            : ""
        }
      >
        Apps
      </NavLink>
      <NavLink
        to={"/profile"}
        className={({ isActive }) =>
          isActive
            ? "font-bold underline  underline-offset-6   text-[#1276F7] underline-[#1276F7]"
            : ""
        }
      >
        My Profile
      </NavLink>
      <NavLink
        to={"/articles"}
        className={({ isActive }) =>
          isActive
            ? "font-bold underline  underline-offset-6   text-[#1276F7] underline-[#1276F7]"
            : ""
        }
      >
        Articles
      </NavLink>
    </div>
  );
  return (
    <div className="sticky top-1000 z-1000">
      <div className="navbar bg-base-100 shadow-sm   ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <div className="logo-title flex gap-1 items-center hidden lg:block">
            <div className="flex gap-2">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                class="h-8"
                alt="Flowbite Logo"
              />
              <a className="text-xl ">
                Pix
                <span className="font-bold text-[#1276F7]">Apps</span>
              </a>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>

        <div className="navbar-end flex gap-4">
          <div class="tooltip tooltip-bottom" data-tip={user?.displayName}>
            {loading ? (
              <span className="loading loading-ring loading-xl"></span>
            ) : (
              <div className="">
                {user ? (
                  <img
                    className="rounded-full"
                    width="48"
                    height="48"
                    src={user?.photoURL}
                    alt="photo"
                  />
                ) : (
                  <img src="" alt="" />
                )}
              </div>
            )}
          </div>

          {loading ? (
            <span className="loading loading-ring loading-xl"></span>
          ) : (
            <div>
              {user ? (
                <button
                  onClick={() => handleLogOut()}
                  className="btn bg-[#1276F7] text-white"
                >
                  Log Out
                </button>
              ) : (
                <button
                  onClick={() => handleNavigate()}
                  className="btn text-white bg-[#1276F7]"
                >
                  Log in
                </button>
              )}
            </div>
          )}
          <h1>{name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
