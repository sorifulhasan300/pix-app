import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import CategoryCard from "../CategoryCard/CategoryCard";
import Slider from "../Components/Slider";
import { FaFire } from "react-icons/fa";
import ArticalCard from "../Artical/ArticalCard";
import FindApk from "../Components/FindApk";
import { Helmet } from "react-helmet-async";

const Apps = () => {
  const [trendingApp, setTrendingApp] = useState([]);
  const [productivityApp, setProductivityApp] = useState([]);
  const [healthCareApp, setHealthCareApp] = useState([]);
  const [educationalApp, setEducationalApp] = useState([]);
  const data = useLoaderData();

  //
  useEffect(() => {
    //trending app
    const trendingApp = data
      .filter((app) => app.rating > 4.5)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 6);
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
    <div className="">
      <Helmet>
        <title>Apps Dashboard</title>
      </Helmet>
      <div className="w-11/12    mx-auto">
        <Slider></Slider>
      </div>
      {/* treanding apps */}
      <div className=" cursor-pointer bg-white p-4 mt-4">
        <div className="w-10/12 mx-auto">
          <div className="flex items-center gap-2">
            <FaFire color="#FC6400"></FaFire>
            <h1 className="font-bold text-xl ">Trending Apps</h1>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4    place-items-center">
          {trendingApp.map((app, index) => (
            <CategoryCard key={index} app={app}></CategoryCard>
          ))}
        </div>
      </div>
      {/* prodactivity apps */}
      <div className="cursor-pointer bg-white p-4 mt-4">
        <div className="w-10/12 mx-auto mb-4">
          <h1 className="font-bold text-xl ">Productivity</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4    place-items-center">
          {productivityApp.map((app, index) => (
            <CategoryCard key={index} app={app}></CategoryCard>
          ))}
        </div>
      </div>
      {/* Health care app */}
      <div className="mt-20 cursor-pointer">
        <div className="w-10/12 mx-auto mb-4">
          <h1 className="font-bold text-xl ">Health care</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4   place-items-center">
          {healthCareApp.map((app, index) => (
            <CategoryCard key={index} app={app}></CategoryCard>
          ))}
        </div>
      </div>
      {/* Edu cation app */}
      <div className="mt-20 cursor-pointer">
        <div className="w-10/12 mx-auto mb-4">
          <h1 className="font-bold text-xl ">Educational</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4   place-items-center">
          {educationalApp.map((app, index) => (
            <CategoryCard key={index} app={app}></CategoryCard>
          ))}
        </div>
      </div>
      <div className="w-10/12 mx-auto mt-10">
        <h1 className="font-bold text-xl ">
          Popular Articles In Last 24 Hours
        </h1>
        <ArticalCard></ArticalCard>
      </div>
    </div>
  );
};

export default Apps;
