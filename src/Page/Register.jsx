import React, { use, useState } from "react";
import { CiLogin } from "react-icons/ci";
import { useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { registerUser, googleSignIn } = use(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleNavigate = () => {
    navigate("/auth/login");
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(error);
    if (password.length < 6) {
      return setError("password length must 6 character");
    } else {
      setError("");
    }
    if (!/[a-z]/.test(password)) {
      return setError("Must have at least one lowercase letter");
    } else {
      setError("");
    }
    if (!/[A-Z]/.test(password)) {
      return setError("Must have at least one uppercase letter");
    } else {
      setError("");
    }

    registerUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-center font-bold mt-8">Register Account</h1>
      <div className="card-body">
        <form onSubmit={handleRegister} className="fieldset">
          {/* Full Name */}
          <label className="label">Full Name</label>
          <input
            required
            type="text"
            name="name"
            className="input"
            placeholder="Full Name"
          />
          {/* Image Url */}
          <label className="label">Image Url</label>
          <input
            required
            type="text"
            name="image"
            className="input"
            placeholder="Image Url"
          />
          {/* Email */}
          <label className="label">Email</label>
          <input
            required
            name="email"
            type="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            required
            name="password"
            type="password"
            className="input"
            placeholder="Password"
          />
          <button
            type="submit"
            className="btn bg-white text-black border-[#e5e5e5] mt-4"
          >
            Create an Account
          </button>
        </form>
        <button
          onClick={() => handleGoogleSignIn()}
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
        <div className="flex place-items-center ">
          <a className="mr-4">Already have an account?</a>
          <CiLogin />
          <button
            onClick={() => handleNavigate()}
            className="font-bold link link-hover "
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
