import React, { use } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyProfile = () => {
  const { updateUserProfile, user, setUser, loading } = use(AuthContext);
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    updateUserProfile({ displayName: name, photoURL: image })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: image });
        console.log("update sucessfuly");
      })
      .catch((error) => {
        console.log(error);
        setUser(user);
      });
  };
  return (
    <div>
      <div className=" w-8/12  flex items-center justify-center mx-auto h-screen">
        <div className="place-items-center w-4xl h-150 shadow py-4">
          <div className="avatar ">
            {loading ? (
              <span className="loading loading-ring loading-xl"></span>
            ) : (
              <div className=" w-40 rounded-full  ring-offset-2">
                {user ? (
                  <img
                    width="48"
                    height="48"
                    src={user.photoURL}
                    alt="user-male-circle--v1"
                  />
                ) : (
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/user-male-circle--v1.png"
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
              className="bg-gray-50 rounded mt-4  p-4 w-full"
              placeholder="Your Full Name"
              type="text"
              name="name"
              id=""
            />
            <label className="label mt-4">image Url</label>
            <input
              className="bg-gray-50 rounded mt-4  p-4 w-full"
              placeholder="Your Image Url"
              type="text"
              name="image"
              id=""
            />
            <button
              type="submit"
              className="btn bg-gray-50 mt-10 text-gray-600"
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
