import React from "react";
import { useNavigate } from "react-router";
import { FaStar } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const CategoryCard = ({ app }) => {
  const navigate = useNavigate();
  const { thumbnail, name, rating, downloads, id, description } = app;
  const handleNavigate = () => {
    navigate(`/appDetails/${id}`);
  };

  return (
    <div onClick={() => handleNavigate()}>
      <div className="place-items-center bg-white p-4 space-y-4 rounded-xl w-sm">
        <div className="">
          <img src={thumbnail} width={50} height={50} alt="" />
        </div>
        <div className="text-center">
          <h1 className="font-bold">{name}</h1>
          <p className="w-80 text-gray-600 mt-3 text-sm pb-4 pt-4">
            {description}
          </p>
        </div>
        <div className="w-full place-items-center mt-4">
          <span className="flex items-center gap-2 ">
            {downloads}
            <HiDownload />
          </span>
          <span className="flex items-center gap-2 ">
            {rating}
            <FaStar color="#FFD700" />
          </span>
        </div>
        <div className="pt-4">
          <a className="text-sm text-gray-600 ">Download Pix Store</a>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
{
  /* <div className="flex  gap-2 p-4 ">
  <div className="card bg-base-100 w-96 shadow-sm">
    <div className=" place-items-center mt-4">
      <div className="w-40">
        <img className="rounded-xl w-full h-full" src={thumbnail} alt="Shoes" />
      </div>
    </div>

    <div className="card-body">
      <h2 className="card-title">Card Title</h2>
      <p>
        A card component has a figure, a body part, and inside body there are
        title and actions parts
      </p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Get App</button>
      </div>
    </div>
  </div>
</div>; */
}
