import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import banner from "/banner.jpg";
import { Helmet } from "react-helmet-async";
const Artical = () => {
  return (
    <div className="w-8/12 mx-auto">
      <Helmet>
        <title>Article</title>
      </Helmet>
      <h1 className="text-xl mb-4">
        How to Download Dream League Soccer 2025 APK Latest Version 12.140 for
        Android 2025
      </h1>
      <p className="text-sm text-gray-500">
        Read through this guide to learn how to download and install Dream
        League Soccer 2025 apk latest version 12.140 on mobile in 2025. Follow
        the step-by-step tutorial to download Dream League Soccer 2025 apk for
        Android.
      </p>
      <div className="mt-4 text-gray-500 text-sm">
        <p>By Robert L. Rivera</p>
        <p>2025-05-07</p>
      </div>
      <div
        className="mt-4 mb-4 w-full h-[500px] rounded-xl bg-cover bg-center"
        style={{
          backgroundImage: `url('https://play-lh.googleusercontent.com/yDIjYDVuEuTZo1OkQKvEwujWGEjjvRdNdx-hdoM4PuPMS9YZUCcvswfc2Z5dMXd0bvNa=w851-h2160-rw')`,
        }}
      ></div>
      <div className="shadow flex flex-col gap-4 text-sm p-4 mt-4">
        <a href="">About Dream League Soccer 2023</a>
        <a href="">How to download Dream League Soccer 2023 for Android</a>
        <a href="">What's New in the Latest Version 12.140</a>
      </div>
      <div className="">
        <h1 className="text-xl mb-4 mt-4">About Dream League Soccer 2023</h1>
        <p className="text-sm text-gray-500">
          Dream League Soccer 2022 is a mobile soccer game where players can
          build and customize their own dream team with over 4,000 licensed
          players. The game features 3D animations, immersive commentary, and
          the ability to compete against other players globally. Players can
          upgrade their stadium and facilities, recruit agents and scouts, and
          develop their players' abilities. Dream League Live allows players to
          compete against elite teams and rise through 8 divisions and 10 cup
          competitions. The game is free to play, but in-game items can be
          purchased with real money.
        </p>
      </div>
      <div className="">
        <h1 className="text-xl  mt-8">
          How to download Dream League Soccer 2023 for Android
        </h1>
        <p className="mt-2">
          To install Dream League Soccer 2023 on your mobile device:
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-8 text-sm text-gray-500">
        <p>
          Step 1: Go to APKPure.com and search for{" "}
          <span className="text-blue-400">Dream League Soccer 2023.</span>
        </p>
        <p>
          Step 2: Tap the Download APK button to begin downloading it to your
          device.
        </p>
        <p>
          Step 3: Once the download is completed, start installing Dream League
          Soccer 2023 on your phone.
        </p>
        <p>
          Step 4: Once the installation is completed, you can start playing
          Dream League Soccer 2023 on your mobile device immediately. Have fun!
        </p>
      </div>
      <div className="mt-4">
        <h4 className="text-xl ">What's New in the Latest Version 12.140</h4>
        <p className="space-y-4 mt-4 text-sm text-gray-500">
          Last updated on May 7, 2025 <br /> Minor bug fixes and improvements.
          Install or update to the newest version to check it out! <br />{" "}
          Discover and download even more of the hottest mobile games on
          APKPure! Our editors have carefully selected the following three
          articles as introductions to some of the most popular apps available:
        </p>
      </div>
    </div>
  );
};

export default Artical;
