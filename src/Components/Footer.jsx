import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";
const Footer = () => {
  return (
    <div className="">
      <footer className="footer sm:footer-horizontal  bg-white border-t border-gray-100 text-base-content p-10">
        <aside className="space-y-4">
          <div className="flex items-center gap-2">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8"
              alt="Flowbite Logo"
            />
            <h1 className="text-xl">
              Pix <span className="font-bold text-[#1276F7]">Apps</span>
            </h1>
          </div>

          <p className="w-sm text-gray-600">
            PixApps - A multi-platform app store primarily focused on Android,
            providing extensive app-related content. Discover the app you want
            easier, faster, and safer, with quick and efficient downloads and
            installations.
          </p>
          <div className="flex gap-4 ">
            <a href="https://www.instagram.com/hasibhasan1642/" target="_blank">
              <FaInstagram size={24}></FaInstagram>
            </a>
            <a href="https://www.facebook.com/sorifulhasan300" target="_blank">
              <MdFacebook size={24}></MdFacebook>
            </a>
            <a
              href="https://www.youtube.com/@sorifullhasan3818"
              target="_blank"
            >
              <FaYoutube size={24}></FaYoutube>
            </a>
            <a href="https://telegram.org/" target="_blank">
              <FaTelegram size={24}></FaTelegram>
            </a>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">APK Install</a>
          <a className="link link-hover">APK Signature Verification</a>
          <a className="link link-hover">APK Download Service</a>
          <a className="link link-hover">APKPure Premium</a>
        </nav>
        <nav>
          <h6 className="footer-title">Developer</h6>
          <a className="link link-hover">Developer Console</a>
          <a className="link link-hover">APK Website Builder</a>
          <a className="link link-hover">Submit APK</a>
          <a className="link link-hover">Traffic Monetization with APKPure</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Business Cooperation</a>
        </nav>
      </footer>
      <div className="border-t border-gray-100 pb-4"></div>
      <p className="text-sm text-gray-500 text-center pb-4">
        Copyright © 2014-2025 Pix Apps All rights reserved. | Privacy Policy |
        Copyright Policy | Terms | EU AMAU
      </p>
    </div>
  );
};

export default Footer;
