import React, { use, useRef } from "react";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser, googleSignIn, forgetPassword, setLoading } =
    use(AuthContext);
  const location = useLocation();

  const handleNavigate = () => {
    navigate("/auth/register");
  };

  // User login
  const handleUserLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((result) => {
        Swal.fire({ title: "Login Successful!", icon: "success" });
        location.state ? navigate(location?.state) : navigate("/");
      })
      .catch((error) => {
        Swal.fire({ title: "InValid Email or Password", icon: "error" });
      });
    
    setLoading(false);
  };

  // Google login
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        Swal.fire({ title: "Login Successful!", icon: "success" }),
          location.state ? navigate(location?.state) : navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Something was wrong plz try again",
          icon: "error",
        });
      });
  };
  const emailRef = useRef();
  const handleResetPass = () => {
    const email = emailRef.current.value;
    
    forgetPassword(email)
      .then((result) => {
        Swal.fire({ title: "email send successfully", icon: "success" });
      })
      .catch((error) => {
        Swal.fire({
          title: "Something was wrong plz try again",
          icon: "error",
        });
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="card-body">
        <form onSubmit={handleUserLogin} className="fieldset">
          <label className="label">Email</label>
          <input
            required
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            ref={emailRef}
          />
          <label className="label">Password</label>
          <input
            required
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />

          <div>
            <a onClick={() => handleResetPass()} className="link link-hover">
              Forgot password?
            </a>
          </div>
          <button type="submit" className="bg-[#1276F7]  btn text-white mt-4">
            Login
          </button>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
        <div>
          <a className="">
            New to PixApps?{" "}
            <button
              onClick={() => handleNavigate()}
              className="link link-hover under-liner"
            >
              register
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
