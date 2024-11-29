import { useState } from "react";
import Insightbg from "../assets/insightbg.png";
import Navbar from "../components/Navbar";
import CaseStudy1 from "../assets/Case Study 1.png";
import CaseStudy2 from "../assets/Case Study 2.png";
import CaseStudy3 from "../assets/Case Study 3.png";
import CaseStudy4 from "../assets/Case Study 4.png";
import CaseStudy5 from "../assets/Case Study 5.png";
import CaseStudy6 from "../assets/Case Study 6.png";
import CaseStudy7 from "../assets/Case Study 7.png";
import CaseStudy8 from "../assets/Case Study 8.png";
import ContactUs from "../components/ContactUs";
import Footer from "../components/FooterSection";

const MidCaseStudies = () => {
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
        <div className="sm:w-[50%] w-[70%] py-5 px-3  bg-white  min-h-fit text-black mt-20 flex flex-col gap-2 pt-9 rounded-sm border-r-8 border-red-600">
          <p className="ml-4 sm:ml-14 font-bold" style={{ color: "#FF6347" }}>
            Case Study
          </p>
          <h1 className="text-4xl mt-4 mb-6 font-semibold  ml-4 sm:ml-14 ">
            Driving USD 3 Bn Fundraise for an E-betting Platform
          </h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between bg-white :bg-zinc-800 p-6 rounded-lg md:p-20 shadow-lg">
        <div className="md:w-2/3">
          <h2 className="text-xl font-bold text-blue-800 :text-blue-400">
            Business Need
          </h2>
          <p className="mt-2 text-zinc-700 :text-zinc-300">
            A New York-based hedge fund sought to invest in an emerging
            e-betting <br /> platform. Given the complexities of varied
            legalization landscapes across <br /> states, the client required
            meticulous due diligence and a robust <br /> valuation model to make
            an informed investment decision.
          </p>
        </div>
        <div className="md:w-1/3 mt-6 md:mt-0 md:pl-6 border-t md:border-t-0 md:border-l border-zinc-200 :border-zinc-600">
          <h3 className="text-sm font-semibold text-red-600 :text-red-400">
            About the client
          </h3>
          <p className="text-zinc-900 :text-zinc-100">
            Hedge fund for
            <br />
            E-betting platform
          </p>
          <h3 className="mt-4 text-sm font-semibold text-red-600 :text-red-400">
            Location
          </h3>
          <p className="text-zinc-900 :text-zinc-100">New York, USA</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap- mt-10">
        <div className="bg-indigo-900  text-white p-12">
          <h2 className="text-xl font-semibold mb-2">
            Commercial Due Diligence
          </h2>
          <p>
            The initial phase involved an exhaustive assessment of the e-betting
            platform's market position, competitive landscape, growth potential,
            and operational capabilities. This comprehensive analysis aimed to
            understand the platform's strengths, weaknesses, opportunities, and
            threats within the rapidly evolving e-betting industry.
          </p>
        </div>
        <div className="bg-indigo-100 p-12 text-indigo-900 ">
          <h2 className="text-xl font-semibold mb-2">
            Financial Due Diligence
          </h2>
          <p>
            Rigorous financial analysis was conducted to scrutinize the
            platform's financial statements, cash flow, revenue streams, and
            cost structures. This step ensured the fiscal stability and
            transparency of the platform, highlighting its financial health and
            potential for sustainable growth.
          </p>
        </div>
        <div className="bg-indigo-100 text-indigo-900 p-12">
          <h2 className="text-xl font-semibold mb-2">Valuation Model</h2>
          <p>
            A comprehensive valuation model was developed, integrating
            Discounted Cash Flow (DCF) and relative valuation techniques. This
            model was calibrated to account for the probabilities of betting
            legalization in various states, providing a nuanced analysis of the
            investment’s prospective worth. The valuation model incorporated
            various scenarios to reflect different legalization outcomes,
            ensuring a robust and flexible investment strategy.
          </p>
        </div>
        <div className="bg-indigo-900 text-white p-12">
          <h2 className="text-xl font-semibold mb-2">
            Investment and Tracking
          </h2>
          <p>
            The hedge fund facilitated a strategic investment in the e-betting
            platform, supported by the detailed due diligence and valuation
            model. A robust tracking mechanism was established to monitor the
            investment's performance, risks, and returns over time. This
            continuous monitoring allowed the hedge fund to make undefineddriven
            decisions and adjust strategies as needed.
          </p>
        </div>
      </div>
      <div className="flex flex-col py-24 md:flex-row justify-around items-center text-center space-y-4 md:space-y-0">
        <div className="text-center">
          <p className="text-red-600 text-3xl font-bold">USD 3 bn</p>
          <p className="text-zinc-700 :text-zinc-300">Fund Raised</p>
        </div>
        <div className="text-center">
          <p className="text-red-600 text-3xl font-bold">30+</p>
          <p className="text-zinc-700 :text-zinc-300">Clients Empowered</p>
        </div>
        <div className="text-center">
          <p className="text-red-600 text-3xl font-bold">7+</p>
          <p className="text-zinc-700 :text-zinc-300">Countries served</p>
        </div>
        <div className="text-center">
          <p className="text-red-600 text-3xl font-bold">$100+Bn</p>
          <p className="text-zinc-700 :text-zinc-300">Client AUM</p>
        </div>
      </div>
      <div className=" py-16 mb-20 :bg-zinc-800 p-6 rounded-lg max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold text-blue-700 :text-blue-500">
          Outcome
        </h2>
        <p className="mt-4 text-zinc-800 :text-zinc-200">
          Systematic evaluation of exit strategies and potential Return on
          Investment (ROI) was conducted throughout the investment period. This
          process involved regular reassessment of market conditions,
          performance metrics, and potential exit opportunities. Ultimately,
          this led to a well-informed decision-making process that culminated in
          a profitable multifold exit post-IPO.
        </p>
        <p className="mt-4 text-zinc-800 :text-zinc-200">
          This case study highlights the importance of thorough due diligence,
          robust financial analysis, and continuous performance monitoring in
          achieving successful investment outcomes in emerging markets. The
          strategic approach adopted by the hedge fund, supported by
          comprehensive commercial and financial due diligence, proved
          instrumental in realizing substantial returns on investment.
        </p>
      </div>

      <div className="slider-container  relative mt-20 max-w-7xl mx-auto pb-16">
        <div className="slider overflow-hidden">
          <div
            className="slider-content flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div key={index} className="w-full lg:w-1/3 flex-shrink-0 mb-20 px-2">
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
        <div className="absolute top-[-3rem] right-0 left-0 flex  items-center  justify-between px-3">
          <h1 className="text-xl sm:text-2xl font-semibold text-blue-900">
            Success Stories
          </h1>
          <div className="flex gap-3 ">
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
        <ContactUs />
      </div>
      <Footer/>
    </>
  );
};

export default MidCaseStudies;
