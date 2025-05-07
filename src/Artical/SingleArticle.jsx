import React from "react";
import { useNavigate } from "react-router";

const SingleArticle = ({ art }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={art.images} alt="Shoes" />
      </figure>
      <div className="card-body">
        <p>{art.title}</p>
        <p>{art.date}</p>
      </div>
    </div>
  );
};

export default SingleArticle;
