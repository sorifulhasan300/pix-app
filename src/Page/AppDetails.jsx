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
      </div>
    </div>
  );
};

export default AppDetails;
