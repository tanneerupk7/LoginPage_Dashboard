
import { FaLinkedin, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa"; // Import social icons
import React from "react";
import Logo from "../assets/logo.svg";
import Image from "../assets/main-img.png";

import { Link } from "react-router-dom";
 
const LoginPage = () => {
  return (
    <div className="min-h-screen bg-custom-color flex flex-col rounded-xl">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 mb-0">
        <img src={Logo} alt="Logo" className="h-16" />
        <div className="text-center flex-grow">
          <h1 className="text-3xl font-semibold text-white">
            Lubricants reimagined
          </h1>
          <p className="text-sm text-gray-300">Since 190 years</p>
        </div>
      </header>
 
      {/* Main Section */}
      <main className="flex flex-grow items-center justify-between px-10">
        {/* Left Section: Image */}
        <div className="flex-1 relative h-96">
          <img
            src={Image}
            alt="Machinery"
            className="rounded-lg object-cover w-full"
          />
          <p className="absolute bottom-0 left-4  text-white text-xl font-bold ">
            The Future Of Sheet Metal Processing
          </p>
        </div>
 
        {/* Right Section: Login Form */}
        <div className="p-8 rounded-lg w-full max-w-sm bg-gradient-to-br from-white/50 to-[#102d44] p-6 rounded-lg shadow-md">
          <h2 className="text-white text-2xl font-semibold mb-2">Login</h2>
          <p className="text-gray-300 mb-6">Welcome to Pavan LT</p>
          <form className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-gray-300 text-sm mb-1">Email ID</label>
              <input
                type="email"
                placeholder="Enter your email ID"
                className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white"
              />
            </div>
            {/* Password */}
            <div>
              <label className="block text-gray-300 text-sm mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white"
              />
            </div>
            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between text-sm text-gray-300">
              <label className="flex items-center space-x-2">
                <div className="relative">
                  <input type="checkbox" className="hidden peer" />
                  <div className="w-10 h-5 bg-gray-600 rounded-full peer-checked:bg-blue-500 transition-all"></div>
                  <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></div>
                </div>
                <span className="text-gray-300">Remember me</span>
              </label>
              <a href="#" className="hover:underline">
                Forgot Password?
              </a>
            </div>
            {/* Submit Button */}
            <Link to="/dashboard">
              <button
                type="submit"
                className="w-full bg-white font-bold py-2 rounded-md hover:bg-slate-200 transition mt-5"
              >
                LOGIN
              </button>
            </Link>
          </form>
        </div>
      </main>
 
      {/* Footer */}
      <footer className="bg-custom-color text-white text-sm">
        <div className="flex justify-between items-center flex-wrap">
          {/* Left: About Button */}
          <div className="bg-white w-custom-width rounded-tr-lg flex justify-between h-20">
            <button className="bg-yellow-500 text-black px-4 py-2 rounded-3xl font-semibold hover:bg-yellow-600 max-h-10 mt-5 ml-10">
              About Pavan
            </button>
            {/* Center: Social Icons */}
     {/* Center: Social Icons */}
     <div className="flex space-x-4 mt-6 mr-10 text-2xl">
  <a
    href="https://www.linkedin.com/"
    title="LinkedIn"
    className="text-black hover:text-blue-500 transition duration-200 ease-in-out"
  >
    <FaLinkedin />
  </a>
  <a
    href="https://www.youtube.com/"
    title="YouTube"
    className="text-black hover:text-red-500 transition duration-200 ease-in-out"
  >
    <FaYoutube />
  </a>
  <a
    href="https://www.instagram.com/"
    title="Instagram"
    className="text-black hover:text-pink-400 transition duration-200 ease-in-out"
  >
    <FaInstagram />
  </a>
  <a
    href="https://www.tiktok.com/"
    title="TikTok"
    className="text-black hover:text-gray-500 transition duration-200 ease-in-out"
  >
    <FaTiktok />
  </a>
</div>
 
          </div>
          {/* Right: Policy Links */}
          <div className="text-xs text-gray-400 mt-4 md:mt-0 mr-6">
            <p className="inline-block mr-5">&copy; 2024 All Rights Reserved</p>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>{" "}
            |
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
 
export default LoginPage;
 
 