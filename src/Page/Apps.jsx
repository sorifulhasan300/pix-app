import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import CategoryCard from "../CategoryCard/CategoryCard";

const Apps = () => {
  const [trendingApp, setTrendingApp] = useState([]);
  const [productivityApp, setProductivityApp] = useState([]);
  const [healthCareApp, setHealthCareApp] = useState([]);
  const [educationalApp, setEducationalApp] = useState([]);
  const data = useLoaderData();
  //
  useEffect(() => {
    //trending app
    const trendingApp = data.filter((app) => app.rating > "4.5");
    setTrendingApp(trendingApp);

    //Education category app
    const educational = data.filter((app) => app.category == "Education");
    setEducationalApp(educational);

    //productivity category app
    const productivity = data.filter((app) => app.category == "Productivity");
    setProductivityApp(productivity);

    //health care category app
    const healthCare = data.filter((app) => app.category == "Healthcare");
    setHealthCareApp(healthCare);
  }, [data]);

  return (
    <div className="min-h-screen ">
      {/* treanding apps */}
      <div className="mt-20 cursor-pointer">
        <h1 className="font-bold text-2xl text-center mb-20">Trending Apps</h1>
        <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 place-items-center">
          {trendingApp.map((app, index) => (
            <CategoryCard key={index} app={app}></CategoryCard>
          ))}
        </div>
      </div>
      {/* prodactivity apps */}
      <div className="mt-20 cursor-pointer">
        <h1 className="font-bold text-2xl text-center mb-20">
          Productivity Apps
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 place-items-center">
          {productivityApp.map((app, index) => (
            <CategoryCard key={index} app={app}></CategoryCard>
          ))}
        </div>
      </div>
      {/* Health care app */}
      <div className="mt-20 cursor-pointer">
        <h1 className="font-bold text-2xl text-center mb-20">
          Health care Apps
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 place-items-center">
          {healthCareApp.map((app, index) => (
            <CategoryCard key={index} app={app}></CategoryCard>
          ))}
        </div>
      </div>
      {/* Edu cation app */}
      <div className="mt-20 cursor-pointer">
        <h1 className="font-bold text-2xl text-center mb-20">
          Educational Apps
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 place-items-center">
          {educationalApp.map((app, index) => (
            <CategoryCard key={index} app={app}></CategoryCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apps;
