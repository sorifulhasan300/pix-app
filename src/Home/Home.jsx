import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="">
        <div className="w-11/12 mx-auto">
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
