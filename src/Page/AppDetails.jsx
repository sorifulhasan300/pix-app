import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";

const AppDetails = () => {
  const [appDetails, setAppDetails] = useState([]);
  const [install, setInstall] = useState(true);
  const [userReview, setUserReview] = useState([]);
  const [userState, setUserState] = useState(false);
  const { id } = useParams();
  const data = useLoaderData();
  useEffect(() => {
    const findApps = data?.find((app) => app.id == id);
    setAppDetails(findApps);
  }, [data, id]);
  const {
    banner,
    name,
    status,
    downloads,
    rating,
    category,
    developer,
    description,
    features,
    reviews,
    thumbnail,
  } = appDetails;

  const handleInstall = () => {
    console.log("hello");
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const review = e.target.review.value;
    setUserReview([...userReview, review]);
    console.log(userReview);
  };

  const handleUserState = () => {
    setUserState(true);
    console.log(userState);
  };

  return (
    <div className="w-11/12 mx-auto ">
      <div
        className="w-full h-[500px] rounded-xl bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
      <div className=" p-10 mt-4">
        <div className="space-y-4">
          <div className="items-center space-y-1.5">
            <h1 className="font-bold text-2xl">{name}</h1>
            <h1 className="text-[#131313]"> {developer}</h1>
          </div>

          <div className="flex items-center gap-4  justify-between">
            <div className="flex items-center gap-4">
              <img width={60} className="rounded " src={thumbnail} alt="" />
              <div className="flex gap-2 text-sm items-center">
                <div className="">
                  <FaStar color="#EFBF04"></FaStar>
                </div>
                <p className="text-sm">{rating}</p>
              </div>
              <p>{downloads}+</p>
            </div>
            <button
              onClick={() => {
                handleInstall(setInstall(!install));
                handleUserState();
              }}
              className="btn "
            >
              {install ? "Install" : "Uninstall"}
            </button>
          </div>
          <div className="border border-gray-50 w-full"></div>
          <div className="">
            <p className="text-xl">About This App</p>
            <p className="text-[#13131390] mt-4">{description}</p>
          </div>
          <div className=" flex gap-4 flex-wrap">
            {features?.map((feature) => (
              <div className="badge badge-outline text-gray-600">{feature}</div>
            ))}
          </div>
        </div>
        {/* user Review section */}

        <div className="">
          {userState ? (
            <div>
              <div className="mt-8">
                <form onSubmit={(e) => handleReviewSubmit(e)}>
                  <textarea
                    className="textarea disabled "
                    placeholder="Review"
                    name="review"
                  ></textarea>
                  <br />
                  <button
                    className={`${
                      userState
                        ? "btn mt-4 cursor-pointer"
                        : "btn mt-4 tab-disabled "
                    }`}
                    type="submit"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>

        {/* Rating and review */}
        <div className="mt-4">
          <p className="text-xl">Ratings and Reviews</p>
          <div className="p-4">
            <div className="review">
              {reviews?.map(({ user, rating, comment }, index) => {
                return (
                  <div className="space-y-4" key={index}>
                    <div className="flex gap-2 items-center">
                      <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/color/48/user-male-circle--v1.png"
                        alt="user-male-circle--v1"
                      />
                      <p>{user}</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          <FaStar color="#EFBF04"></FaStar>
                          <FaStar color="#EFBF04"></FaStar>
                          <FaStar color="#EFBF04"></FaStar>
                        </div>
                        <p>{rating}</p>
                      </div>
                      <p className="">April 20, 2025</p>
                    </div>
                    <p>{comment}</p>
                  </div>
                );
              })}
            </div>
            <p>{userReview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
