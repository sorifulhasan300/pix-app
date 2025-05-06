import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const AppDetails = () => {
  const [appDetails, setAppDetails] = useState([]);
  const [install, setInstall] = useState(true);
  const [userReview, setUserReview] = useState("");
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
    setUserReview(review);
  };

  const handleUserState = () => {
    setUserState(true);
    console.log(userState);
  };

  return (
    <div className="mt-5 min-h-screen shadow p-4">
      <img className="w-full h-[600px] rounded-2xl" src={banner} alt="" />
      <div className="space-y-4">
        <div className="flex  items-center gap-4 mt-4">
          <img width={60} className="rounded " src={thumbnail} alt="" />
          <h1 className="font-bold text-2xl">{name}</h1>
        </div>
        <h1>{developer}</h1>
        <div className="">
          <p>{description}</p>
        </div>
        <div className=" flex gap-4 ">
          {features?.map((feature) => (
            <p className="bg-gray-100 text-sm p-2 rounded">{feature}</p>
          ))}
        </div>
      </div>
      <div className="review">
        {reviews?.map(({ user, rating, comment }, index) => {
          return (
            <div key={index}>
              <p>{user}</p>
              <p>{rating}</p>
              <p>{comment}</p>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          handleInstall(setInstall(!install));
          handleUserState();
        }}
        className="btn mt-4 "
      >
        {install ? "Install" : "Uninstall"}
      </button>

      {userState ? (
        <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-50 dark:text-gray-800">
          <div className="flex flex-col items-center w-full">
            <h2 className="text-3xl font-semibold text-center">
              Your opinion matters!
            </h2>
            <div className="flex flex-col items-center py-6 space-y-3">
              <span className="text-center">How was your experience?</span>
              <div className="flex space-x-3">
                <button
                  type="button"
                  title="Rate 1 stars"
                  aria-label="Rate 1 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-10 h-10 dark:text-yellow-700"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Rate 2 stars"
                  aria-label="Rate 2 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-10 h-10 dark:text-yellow-700"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Rate 3 stars"
                  aria-label="Rate 3 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-10 h-10 dark:text-yellow-700"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Rate 4 stars"
                  aria-label="Rate 4 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-10 h-10 dark:text-yellow-700"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Rate 5 stars"
                  aria-label="Rate 5 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-10 h-10 dark:text-gray-400"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <textarea
                rows="3"
                placeholder="Message..."
                className="p-4 rounded-md resize-none dark:text-gray-800 dark:bg-gray-50"
                autocomplete="off"
              ></textarea>
              <button
                type="button"
                className="py-4 my-8 font-semibold rounded-md dark:text-gray-50 dark:bg-violet-600"
              >
                Leave feedback
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-sm dark:text-gray-600"
            >
              Maybe later
            </a>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      {/* <div className="mt-8">
        <form onSubmit={(e) => handleReviewSubmit(e)}>
          <textarea
            className="textarea disabled "
            placeholder="Review"
            name="review"
          ></textarea>
          <br />
          <button
            className={`${
              userState ? "btn mt-4 cursor-pointer" : "btn mt-4 tab-disabled "
            }`}
            type="submit"
          >
            Submit Review
          </button>
        </form>
      </div>
      <div className="mt-4">
        <p>Review Section</p>
        <div className="bg-gray-100 p-4">
          <p>{userReview}</p>
        </div>
      </div> */}
    </div>
  );
};

export default AppDetails;
