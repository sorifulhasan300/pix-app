import React, { use } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const navigate = useNavigate();
  const { name } = use(AuthContext);
  console.log(name);

  const handleNavigate = () => {
    navigate("/auth/login");
  };
  const link = (
    <div className="flex flex-col lg:flex-row gap-4">
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "bg-red-500" : "")}
      >
        Apps
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? "" : "")}>
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
            <a className="text-[#3752FD] text-4xl font-bold">P</a>
            <a className="text-xl ">
              Pix
              <span className="font-bold">Apps</span>
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          <button onClick={() => handleNavigate()} className="btn">
            Log in
          </button>
          <h1>{name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
