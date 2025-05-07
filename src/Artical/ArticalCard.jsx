import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import SingleArticle from "./SingleArticle";

const ArticalCard = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("/articles.json")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
      });
  }, []);

  return (
    <div className="cursor-pointer grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-4 mt-4">
      {items.map((art) => {
        return <SingleArticle art={art}></SingleArticle>;
      })}
    </div>
  );
};

export default ArticalCard;
