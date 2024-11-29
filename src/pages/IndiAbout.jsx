import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CaseImage from "../assets/same.png";
import CaseStudy1 from "../assets/Case Study 1.png";
import CaseStudy2 from "../assets/Case Study 2.png";
import CaseStudy3 from "../assets/Case Study 3.png";
import CaseStudy4 from "../assets/Case Study 4.png";
import CaseStudy5 from "../assets/Case Study 5.png";
import CaseStudy6 from "../assets/Case Study 6.png";
import CaseStudy7 from "../assets/Case Study 7.png";
import CaseStudy8 from "../assets/Case Study 8.png";
import { AboutUsData } from "../data/aboutusData";
import AboutUsbg from "../assets/AboutUsbg.png";
import Navbar from "../components/Navbar";
import "./Slider.css";
import ContactUs from "../components/ContactUs";

const IndiAbout = () => {
  const items = [
    {
      bgurl: CaseStudy1,
      title: "Greenfield Ocean Race Project Achieves X% Feasibility Milestone",
      description:
        "Formulated a feasibility model for a sports and event management company for launch of a greenfield ocean race initiative in Saudi Arabia...",
    },
    {
      bgurl: CaseStudy2,
      title:
        "From Concept to Capital: How an Innovative F&B E-Commerce and FinTech Startup Raised $xxx Million",
      description:
        "Crafted an Investor Memorandum and Financial Model to propel Fundraising Efforts for an Innovative F&B E-Commerce and FinTech Startup in KSA",
    },
    {
      bgurl: CaseStudy3,
      title:
        "Strategic Investment Spark: From IPO Dreams to Multibillion-Dollar Reality, a Fund's Multifold Exit Triumph",
      description:
        "Assisting a New York Hedge Fund in analyzing and investing in an E-Betting Platform, leading to a multibillion-dollar IPO and resulting in a multifold exit for the fund",
    },
    {
      bgurl: CaseStudy4,
      title:
        "Strategic Investment Spark: From IPO Dreams to Multibillion-Dollar Reality, a Fund's Multifold Exit Triumph",
      description:
        "Assisting a New York Hedge Fund in analyzing and investing in an E-Betting Platform, leading to a multibillion-dollar IPO and resulting in a multifold exit for the fund",
    },
  ];

  const { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 3 : prevIndex - 1
    );
  };

  const [response, setResponse] = useState(AboutUsData);
  const [indiResponse, setIndiResponse] = useState("");

  useEffect(() => {
    const fetchData = response.filter((e) => e.name === id);
    console.log(Object(fetchData));
    setIndiResponse(Object(fetchData));
  }, []);

  return (
    <div className="w-full h-screen">
      {indiResponse && (
        <div>
          <div
            className="bg-black text-white sm:h-[70vh] pb-10 mb-4 relative"
            style={{
              backgroundImage: `url(${AboutUsbg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Navbar />
            <div className="w-[50%] bg-white h-[50%] text-black mt-20 flex flex-col gap-2 pt-9 rounded-sm border-r-8 border-red-600">
              <div className="flex items-center justify-center">
                <div className="p-3">
                  <img
                    className="w-[160px] h-[160px] rounded-sm"
                    alt={indiResponse[0].imgsrc}
                    src={indiResponse[0].imgsrc}
                  ></img>
                </div>
                <div className="flex flex-col w-3/4">
                  <p className="text-[32px] font-[600]">
                    {indiResponse[0].name}
                  </p>
                  <p className="font-[600] text-[22px] text-[#CC2027] my-1">
                    {indiResponse[0].position}
                  </p>
                  <p className="text-[16px]">
                    Engineer and an MBA by education, Gautam has deep interest
                    in finance. He brings over a decade of global advisory
                    experience in offering strategic insights that drive growth,
                    innovation, and productivity for organizations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto flex flex-col gap-8 mb-10">
            <div>
              <h1 className="text-[32px] font-[600] text-[#1E227F]">
                About Gautam
              </h1>
              <p>
                {indiResponse[0].roles.map((e, index) => (
                  <p key={index} className="my-3">
                    {e}
                  </p>
                ))}
              </p>
            </div>
            <div>
              <h1 className="text-[32px] font-[600] text-[#1E227F]">
                Educational Background
              </h1>
              <p className="my-3">{indiResponse[0].educationalbackground}</p>
            </div>
            <div>
              <h1 className="text-[32px] font-[600] text-[#1E227F]">
                Global Impact
              </h1>
              <p className="my-3">{indiResponse[0].globalimpact}</p>
            </div>
          </div>
          <div className="relative mt-20 max-w-7xl mx-auto pb-16">
  <div className="slider-container mx-3">
    <div className="slider overflow-hidden">
      <div className="slider-content flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <div key={index} className="w-full lg:w-1/3 flex-shrink-0 px-2">
            <div className="h-72 sm:h-96">
              <div className="bg-cover bg-center h-full" style={{ backgroundImage: `url(${item.bgurl})` }}></div>
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <p className="text-lg sm:text-xl font-semibold text-gray-900">
                {item.title}
              </p>
              <p className="text-sm sm:text-base font-normal text-gray-700">
                {item.description}
              </p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <button className="rounded px-3 py-2 bg-red-200 text-xs text-red-600">
                Start Ups
              </button>
              <a href="#" className="text-red-600 text-xs font-semibold">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="absolute top-[-3rem] right-0 left-0 flex items-center justify-between px-3">
      <h1 className="text-xl sm:text-2xl font-semibold text-blue-900">
        Success Stories
      </h1>
      <div className="flex gap-3">
        <button
          className="bg-gray-400 px-3 py-1 rounded-full text-white"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <button
          className="bg-gray-400 px-3 py-1 rounded-full text-white"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>
    </div>
  </div>
</div>

        </div>
      )}
    </div>
  );
};

export default IndiAbout;
