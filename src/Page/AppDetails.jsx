import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const AppDetails = () => {
  const [appDetails, setAppDetails] = useState([]);
  const { id } = useParams();
  const data = useLoaderData();
  useEffect(() => {
    const findApps = data?.find((app) => app.id == id);
    setAppDetails(findApps);
  }, [data, id]);

  return (
    <div className="mt-20 min-h-screen">
      <img className="w-full h-[250px]" src={appDetails.banner} alt="" />
      <h1>{appDetails.name}</h1>
    </div>
  );
};

export default AppDetails;
