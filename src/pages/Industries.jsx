import React from "react";
import bgOurFootprint from "../assets/bgOurFootprint.png";
import Navbar from "../components/Navbar";
import MapImage from "../assets/fp.png";
import RecentUpdates from "../section/RecentUpdates";
import ContactUs from "../components/ContactUs";
import Footer from "../components/FooterSection";

const Industries = () => {
  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-center w-full h-80 md:h-96 lg:h-144 flex items-center justify-start "
        style={{ backgroundImage: `url(${bgOurFootprint})`, height: "34rem" }}
      >
        <div className="relative p-4 sm:p-12 opacity-90 bg-gradient-to-r from-zinc-100 via-purple-100 to-pink-100 max-w-lg md:max-w-2xl lg:max-w-3xl mx-4">
          <div className="text-red-600 text-lg font-semibold mb-2">
            Our Footprint
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4">
            Expanding Horizons Globally
          </h1>
          <p className="text-blue-800 text-lg">
            We have created impact with 30+ clients across 4 continents, by
            delivering services to customer delight.
          </p>
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-red-600"></div>
        </div>
      </div>
      <div className="relative overflow-hidden bg-zinc-100 :bg-zinc-900">
        <img src={MapImage} alt="World Map" className="w-full h-auto" />
        <div className="absolute left-[23%] top-[35%] flex items-center space-x-2 bg-white :bg-zinc-800 shadow-lg rounded-full py-1 px-3">
          <img
            src="https://placehold.co/40x40"
            alt="North America"
            className="w-6 h-6 rounded-full"
          />
          <span className="text-black :text-white">North America</span>
        </div>
        <div className="absolute left-[48%] top-[27%] flex items-center space-x-2 bg-white :bg-zinc-800 shadow-lg rounded-full py-1 px-3">
          <img
            src="https://placehold.co/40x40"
            alt="Europe"
            className="w-6 h-6 rounded-full"
          />
          <span className="text-black :text-white">Europe</span>
        </div>
        <div className="absolute left-[52%] top-[39%] flex items-center space-x-2 bg-white :bg-zinc-800 shadow-lg rounded-full py-1 px-3">
          <img
            src="https://placehold.co/40x40"
            alt="MENA"
            className="w-6 h-6 rounded-full"
          />
          <span className="text-black :text-white">MENA</span>
        </div>
        <div className="absolute left-[71%] top-[41%] flex items-center space-x-2 bg-white :bg-zinc-800 shadow-lg rounded-full py-1 px-3">
          <img
            src="https://placehold.co/40x40"
            alt="APAC"
            className="w-6 h-6 rounded-full"
          />
          <span className="text-black :text-white">APAC</span>
        </div>
      </div>
      <div className="container mx-auto px-4">
         <RecentUpdates/>
      <ContactUs/>
      </div>
      <Footer/>
     
    </>
  );
};

export default Industries;
