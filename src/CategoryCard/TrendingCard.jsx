import React from "react";

const TrenDingCard = ({ app }) => {
  const { thumbnail, name, rating, downloads } = app;

  return (
    <div>
      <div className="flex gap-2 bg-[#F4F7FF] p-4">
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

export default TrenDingCard;
