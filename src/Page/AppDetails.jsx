import React, { use, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";

const AppDetails = () => {
  const { user } = use(AuthContext);

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
    const rating = e.target.rating.value;
    const reviewObj = { review, rating };
    setUserReview([...userReview, reviewObj]);
  };
  console.log(userReview);

  const handleUserState = () => {
    setUserState(true);
  };

  return (
    <div className="w-11/12 mx-auto ">
      <Helmet>
        <title>Apps Details</title>
      </Helmet>
      <div
        className="w-full h-[200px] lg:h-[500px] rounded-xl bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
      <div className=" p-10 mt-4">
        <div className="space-y-4">
          <div className="items-center space-y-1.5 text-center md:text-start">
            <h1 className="font-bold text-2xl">{name}</h1>
            <h1 className="text-[#131313]"> {developer}</h1>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4  justify-between">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="shadow p-2 rounded">
                <img width={60} className="rounded " src={thumbnail} alt="" />
              </div>
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
              className="btn bg-[#1276F7] text-white "
            >
              {install ? "Install" : "Uninstall"}
            </button>
          </div>
          <div className="border border-gray-50 w-full"></div>
          <div className="mt-8">
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
              <div className="mt-15">
                <form onSubmit={(e) => handleReviewSubmit(e)}>
                  <textarea
                    type="text"
                    placeholder="Add Your Review"
                    name="review"
                    className="textarea textarea-info"
                  ></textarea>
                  <br />
                  <br />
                  <input
                    type="number"
                    name="rating"
                    className="input validator"
                    required
                    placeholder="Rating 1 to 5"
                    min="1"
                    max="10"
                    title="Must be between be 1 to 10"
                  />
                  <p className="validator-hint ">Rating 1 to 5</p>

                  <button
                    className="btn mt-8 bg-[#1276F7] text-white "
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
        <div className="border border-gray-50 mt-15 mb-8"></div>
        <div className="">
          <p className="text-xl ">Ratings and Reviews</p>
          <div className="p-4">
            <div className="review">
              {userReview?.map((review, index) => {
                return (
                  <div className="space-y-4" key={index}>
                    <div className="flex  items-center  gap-4">
                      {user.photoURL ? (
                        <img
                          className="rounded-full"
                          width="48"
                          height="48"
                          src={user.photoURL}
                          alt="img"
                        />
                      ) : (
                        <img
                          className="rounded-full"
                          width="48"
                          height="48"
                          src="https://img.icons8.com/color/48/user-male-circle--v1.png"
                          alt="img"
                        />
                      )}

                      <div className="">
                        <p>{user.displayName}</p>
                        <p>{review.review}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          <FaStar color="#EFBF04"></FaStar>
                          <FaStar color="#EFBF04"></FaStar>
                          <FaStar color="#EFBF04"></FaStar>
                        </div>
                        <p>{review.rating}</p>
                      </div>
                      <p className="">April 20, 2025</p>
                    </div>
                    <div className="border border-gray-50 mt-4 mb-4"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
