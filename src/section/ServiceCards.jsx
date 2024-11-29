import React from "react";
import { Link } from "react-router-dom";
import Service1 from "../assets/servicefirst.png";
import Service2 from "../assets/servicesecond.png";
import Service3 from "../assets/servicethird.png";

const ServiceCards = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Link to="/services" onClick={scrollToTop}>
        <div className="py-8 max-w-6xl  mx-auto px-4">
          <h1 className="text-2xl text-blue-800 font-semibold text-start mb-8">
            Our Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex bg-gray-100 hover:text-white  hover:bg-blue-900  flex-col items-center">
              <img
                src={Service1}
                alt="Service 1"
                className="mx-auto mr-0 mb-4"
              />
              <div className="hover:text-white">
                <h3 className="text-lg ml-8 font-semibold md:mr-32  mb-4">
                  Management Consulting
                </h3>
                <p className="  mb-6 ml-8 mr-10">
                  NVT Consulting crafts clear strategies and operational
                  plans for business success. We offer tailored solutions, from
                  business plans to insightful studies, guiding you through
                  every challenge. 
                </p>
                <div className="ml-52 mb-4">
                  <a
                    href="#"
                    className="inline-flex items-center  font-medium"
                  >
                    Read More
                    <svg
                      className="ml-1 w-4 h-4"
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
            <div className="flex bg-gray-200 hover:text-white hover:bg-red-700 flex-col items-center">
              <img src={Service2} alt="Service 2" className="mx-auto mb-4" />
              <div className="hover:text-white">
                <h3 className="text-lg ml-8 font-semibold md:mr-36  mb-7">
                  Investment Advisory
                </h3>
                <p className=" mb-6 ml-8 mr-10 ">
                  Navigate complex investment landscapes with NVT
                  Consulting's expert guidance. From financial modeling to
                  opportunity analysis, we equip clients with insights to make
                  informed decisions, aligning investments with their
                  objectives. 
                </p>
                <div className="ml-52 mb-4">
                  <a
                    href="#"
                    className="inline-flex items-center font-medium"
                  >
                    Read More
                    <svg
                      className="ml-1 w-4 h-4"
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
            <div className="flex bg-gray-100 hover:text-white hover:bg-blue-900 flex-col items-center">
              <img src={Service3} alt="Service 3" className="mx-auto mb-4" />
              <div className="hover:text-white">
                <h3 className="text-lg ml-8 font-semibold md:mr-36  mb-7">
                  Business Analytics
                </h3>
                <p className=" mb-6 ml-8 mr-10 ">
                  Enhance decision-making across your enterprise and investment
                  teams with our business analytics services. By leveraging
                  data-driven insights, we enable better decisions that drive
                  growth, improve efficiency, and foster innovation to enable
                  your success.
                </p>
                <div className="ml-52 mb-4 ">
                  <a
                    href="#"
                    className="inline-flex items-center  font-medium"
                  >
                    Read More
                    <svg
                      className="ml-1 w-4 h-4"
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
          </div>
        </div>
      </Link>
    </>
  );
};

export default ServiceCards;
