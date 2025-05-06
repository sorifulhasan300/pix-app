import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Slider from "../Components/Slider";

const Home = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
        <div className=" w-11/12 mx-auto"></div>
      </header>
      <main className="bg-[#F3F4F6]">
        {/* <Slider></Slider> */}
        <div className="w-11/12 mx-auto pt-8 pb-8">
          <Outlet></Outlet>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home;
