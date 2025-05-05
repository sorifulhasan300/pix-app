import React from "react";
import { useNavigate } from "react-router";

const CategoryCard = ({ app }) => {
  const navigate = useNavigate();
  const { thumbnail, name, rating, downloads, id } = app;
  const handleNavigate = () => {
    navigate(`/appDetails/${id}`);
  };

  return (
    <div onClick={() => handleNavigate()}>
      {" "}
      <div className="flex gap-2 shadow-sm  p-4  border">
        <img width={60} height={10} src={thumbnail} alt="" />
        <div>
          <h1>{name}</h1>
          <h3>{downloads}</h3>
          <p>{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
