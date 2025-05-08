import React, { use } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const MyProfile = () => {
  const { updateUserProfile, user, setUser, loading } = use(AuthContext);
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    updateUserProfile({ displayName: name, photoURL: image })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: image });
        Swal.fire({
          title: "Profile Update successfully",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Something was wrong",
          icon: "error",
        });
        setUser(user);
      });
  };
  return (
    <div>
      <Helmet>
        <title>My Profile</title>
      </Helmet>
      <div className="  w-8/12  flex items-center justify-center mx-auto h-screen">
        <div className="place-items-center w-4xl h-150 shadow py-4">
          <div className="avatar ">
            {loading ? (
              <div className="w-5 h-5 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <div className=" w-40 rounded-full  ring-offset-2">
                {user ? (
                  <img width="48" height="48" src={user.photoURL} alt="" />
                ) : (
                  <img
                    width="48"
                    height="48"
                    src=""
                    alt="user-male-circle--v1"
                  />
                )}
              </div>
            )}
          </div>
          <div className="text-center mt-6 space-y-2 ">
            <h1 className="font-bold text-2xl ">{user?.displayName}</h1>
            <h1 className="text-sm  text-gray-500">{user?.email}</h1>
          </div>
          <form
            onSubmit={(e) => handleUpdateProfile(e)}
            className="flex flex-col  w-full p-4 mt-2"
          >
            <label className="label">Full Name</label>
            <input
              className="bg-gray-50 rounded outline outline-[#1276F7] mt-4  p-4 w-full"
              placeholder="Your Full Name"
              type="text"
              name="name"
              id=""
            />
            <label className="label mt-4">image Url</label>
            <input
              className="bg-gray-50 rounded mt-4 outline outline-[#1276F7]   p-4 w-full"
              placeholder="Your Image Url"
              type="text"
              name="image"
              id=""
            />
            <button
              type="submit"
              className="btn bg-[#1276F7] text-white mt-10 text-gray-800"
            >
              Update Profile
            </button>
          </form>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default MyProfile;
