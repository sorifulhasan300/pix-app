import React, { use } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = use(AuthContext);
  console.log(user);

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
    <div className="flex flex-col lg:flex-row gap-4">
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "font-bold underline" : "")}
      >
        Apps
      </NavLink>
      <NavLink
        to={"/my-profile"}
        className={({ isActive }) => (isActive ? "font-bold underline" : "")}
      >
        My Profile
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? "" : "")}>blog</NavLink>
    </div>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
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
                <span className="font-bold">Apps</span>
              </a>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>

        <div className="navbar-end flex gap-4">
          <div className="relative group inline-block cursor-pointer">
            <div className="avatar w-10 block hover:hidden">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
              </div>
            </div>
            <h1 className="absolute left-1/2 -translate-x-1/2 top-full  text-center text-sm rounded shadow hidden group-hover:block">
              Soriful hasan
            </h1>
          </div>

          {user ? (
            <button onClick={() => handleLogOut()} className="btn">
              Log Out
            </button>
          ) : (
            <button onClick={() => handleNavigate()} className="btn">
              Log in
            </button>
          )}
          <h1>{name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
