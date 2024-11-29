import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/FooterSection";
import CaseStudy1 from "../assets/Case Study 1.png";
import CaseStudy2 from "../assets/Case Study 2.png";
import CaseStudy3 from "../assets/Case Study 3.png";
import CaseStudy4 from "../assets/Case Study 4.png";
import CaseStudy5 from "../assets/Case Study 5.png";
import CaseStudy6 from "../assets/Case Study 6.png";
import CaseStudy7 from "../assets/Case Study 7.png";
import CaseStudy8 from "../assets/Case Study 8.png";
import Insightbg from "../assets/insightbg.png";
import RecentUpdates from "../section/RecentUpdates";
import ContactUs from "../components/ContactUs";

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 3 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div
        className="bg-black text-white h-[100vh] md:h-[70vh] pb-10 mb-4 relative "
        style={{
          backgroundImage: `url(${Insightbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <div className="sm:w-[50%] w-[70%] py-5 px-3 bg-white min-h-fit text-black mt-20 flex flex-col gap-2 pt-9 rounded-sm border-r-8 border-red-600">
          <p className="ml-4 sm:ml-14 font-bold" style={{ color: "#FF6347" }}>
            What we think
          </p>
          <h1 className="text-4xl font-semibold ml-4 sm:ml-14">
            Insights, Media & Case Studies
          </h1>
          <p className="ml-4 sm:ml-14 pr-10 mt-6 text-blue-800">
            We combine sector expertise with extensive management competence to
            offer solutions that are as unique as our clientele. Every strategy
            applied and every recommendation made is customized to the
            individual needs of our customers.
          </p>
        </div>
      </div>
      <h2 className="text-blue-900 mt-9 font-semibold text-2xl ml-36">
        Insights
      </h2>
      <div className="grid ml-10 mr-10 grid-cols-1 md:grid-cols-2 md:ml-52 md:mr-52 mb-10 mt-8 gap-8">
        <div className="mb-4">
          <img src={CaseStudy5} alt="Case Study 5" className="w-full" />
          <h2 className="text-xl font-bold mt-4">Case study 1</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
          <div className="flex justify-between mt-8 items-center">
            <button className="bg-red-100 text-red-600 px-4 py-2 rounded-full">
              #tag
            </button>
            <a
              href="#"
              className="text-red-600 hover:text-blue-900 flex items-center mr-6"
            >
              Read More
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="mb-4">
          <img src={CaseStudy6} alt="Case Study 6" className="w-full" />
          <h2 className="text-xl font-bold mt-4">Case study 2</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
          <div className="flex justify-between mt-8 items-center">
            <button className="bg-red-100 text-red-600 px-4 py-2 rounded-full">
              #tag
            </button>
            <a
              href="#"
              className="text-red-600 hover:text-blue-900 flex items-center mr-6"
            >
              Read More
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="mb-4">
          <img src={CaseStudy7} alt="Case Study 7" className="w-full" />
          <h2 className="text-xl font-bold mt-4">Case study 3</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
          <div className="flex justify-between mt-8 items-center">
            <button className="bg-red-100 text-red-600 px-4 py-2 rounded-full">
              #tag
            </button>
            <a
              href="#"
              className="text-red-600 hover:text-blue-900 flex items-center mr-6"
            >
              Read More
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="mb-4">
          <img src={CaseStudy8} alt="Case Study 8" className="w-full" />
          <h2 className="text-xl font-bold mt-4">Case study 4</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
          <div className="flex justify-between mt-8 items-center">
            <button className="bg-red-100 text-red-600 px-4 py-2 rounded-full">
              #tag
            </button>
            <a
              href="#"
              className="text-red-600 hover:text-blue-900 flex items-center mr-6"
            >
              Read More
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="slider-container relative mt-20 max-w-7xl mx-auto pb-16">
        <div className="slider overflow-hidden">
          <div
            className="slider-content flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div key={index} className="w-full lg:w-1/3 flex-shrink-0 px-2">
                <div className="h-72 sm:h-96">
                  <div
                    className="bg-cover bg-center h-full"
                    style={{ backgroundImage: `url(${item.bgurl})` }}
                  ></div>
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
      <div className="container mx-auto px-4">
        <RecentUpdates />
        <ContactUs />
      </div>
      <Footer />
    </>
  );
};

export default CaseStudies;
