import React from "react";
import { FaTelegram } from "react-icons/fa6";

const FindApk = () => {
  return (
    <div className="flex flex-col gap-6 w-96 lg:w-full lg:flex-row lg:gap-0 shadow justify-between place-items-center p-8 mt-8">
      <div className=" ">
        <h1 className="text-[#08A6ED]">Didn't find what you want?</h1>
        <p>
          A lot apps are not listed here. join our Telegram to get exclusive
          apps and games
        </p>
      </div>
      <div className="">
        <button className="btn lg:text-sm text-white bg-[#1276F7]">
          {" "}
          <FaTelegram size={24}></FaTelegram>Search APK on Telegram
        </button>
      </div>
    </div>
  );
};

export default FindApk;
