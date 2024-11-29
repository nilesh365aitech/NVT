import Contact from "../components/ContactUs";
import Footer from "../components/FooterSection";
import Navbar from "../components/Navbar";
// import Solutions from "../components/Solutions";
import ServiceImage from "../assets/servicesback.png";
import ServiceBuilding from "../assets/ServiceBuilding.png";
import { useState } from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
export default function MainServices() {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const items = [
    {
      title: "Corporates",
      color: "#EBF3FF",
      description:
        "We work with corporations to solve their most pressing problems, from strategic planning to enhancing operational efficiency, helping them stay agile and competitive in todays dynamic business landscape.",
    },
    {
      title: "Real Estate Firms",
      color: "#E2EBF9",
      description: "Description for Real Estate Firms",
    },
    {
      title: "Asset Mgmt. Firms",
      color: "#F0F3F8",
      description: "Description for Asset Mgmt. Firms",
    },
    {
      title: "StartUps",
      color: "#F6F9FF",
      description: "Description for StartUps",
    },
    {
      title: "Governments",
      color: "#ECF3FF",
      description: "Description for Governments",
    },
    { title: "HNIs", color: "#F6F9FF", description: "Description for HNIs" },
  ];
  return (
    <>
      <div
        className="bg-black text-white h-[100vh] md:h-[70vh] pb-10 mb-4 relative "
        style={{
          backgroundImage: `url(${ServiceImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <div className="sm:w-[50%] w-[70%] py-8 px-3  bg-white  min-h-fit text-black mt-20 flex flex-col gap-4 pt-9 rounded-sm border-r-8 border-red-600">
          <p className="ml-4 sm:ml-14 font-bold" style={{ color: "#FF6347" }}>
            Who we are
          </p>
          <h1 className="text-4xl font-bold  ml-4 sm:ml-14 ">
            Empower Businesses through Expertise and Support
          </h1>
          <p className="ml-4 sm:ml-14 pr-10">
            We deliver a spectrum of specialized services, including Investment
            Advisory, Business Analytics, and Management Consultancy, designed
            to foster robust growth and operational excellence, ensuring our
            clients are well-equipped to meet their strategic objectives.
          </p>
        </div>
      </div>
      <div className="max-w-5xl  mx-auto ml-4 md:ml-20 px-4 py-20">
        <h2 className="text-3xl font-semibold text-[#1E227F]">
          Core Service Offerings
        </h2>
        <p className="mt-4 text--600 dark:text-zinc-600">
          At our consulting firm, our core service offerings are designed to
          empower businesses to thrive in today's dynamic landscape. From
          strategic planning and transformational leadership to market entry
          strategies and operational optimization, we provide tailored solutions
          that drive sustainable growth and success. With a focus on innovation,
          collaboration, and client-centricity, we partner with organizations to
          unlock their full potential, achieve their goals, and stay ahead of
          the competition.
        </p>
      </div>
      <div
        style={{ backgroundImage: `url(${ServiceBuilding})` }}
        className="bg-blue-600 text-white bg-no-repeat bg-right-bottom p-5"
      >
        <h1 className="text-2xl md:text-4xl md:ml-10 md:mt-3 md:mb-5 mb-4">
          Management Consulting
        </h1>
        <p className="text-sm md:text-base lg:text-lg mb-4 md:ml-10 md:mr-[33rem]">
          Empower your business with our management consulting services,
          designed to maximize value through in-depth financial, economic, and
          strategic guidance. We specialize in crafting and implementing
          corporate strategies, business planning, go-to-market strategies, and
          strategy execution, ensuring your organization's objectives are met
          with precision and insight.
        </p>
        <div className="grid grid-cols-1 md:ml-10 md:mr-[33rem] md:grid-cols-3 gap-4">
          <ul className="text-sm md:text-base lg:text-lg">
            <li className="pb-2">• Corporate & Business Strategy</li>
            <li className="pb-2">• Project Design & Development</li>
            <li className="pb-2">• Transformation & Expansion Strategy</li>
            <li className="pb-2">• Business Plans</li>
          </ul>
          <ul className="text-sm md:text-base lg:text-lg">
            <li className="pb-2">• Business Process Consulting</li>
            <li className="pb-2">• Board Meeting Readiness and Support</li>
            <li className="pb-2">• Annual Operating Plans</li>
            <li className="pb-2">• HBU & Feasibility Studies</li>
          </ul>
          <ul className="text-sm md:text-base lg:text-lg">
            <li className="pb-4">• Strategy Implementation Support</li>
            {/* <li className="pb-4">• Corporate & Business Strategy</li>
      <li className="pb-4">• Corporate & Business Strategy</li>
      <li className="pb-4">• Corporate & Business Strategy</li> */}
          </ul>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${ServiceBuilding})` }}
        className="bg-white text-black bg-no-repeat bg-left-bottom py-10"
      >
        <h1 className="text-2xl md:text-4xl md:ml-[35rem] md:mt-3 md:mb-5 mb-4">
          Investment Advisory
        </h1>
        <p className="text-sm md:text-base lg:text-lg mb-4 md:ml-[35rem]">
          Our investment advisory services are tailored to enhance business
          outcomes for Institutional Investors through an outsourced capacity
          model, providing meticulous planning and execution of strategic
          projects. We deliver end-to-end support across the deal cycle,
          encompassing research, due diligence, financial modeling, and PPM
          creation, ensuring comprehensive assistance through every facet of the
          investment process.
        </p>
        <div className="grid grid-cols-1 md:ml-[35rem] md:grid-cols-3 gap-4">
          <ul className="text-sm md:text-base lg:text-lg">
            <li className="pb-2">• Transaction Support (IMs, Models)</li>
            <li className="pb-2">• Opportunity Screening and Analysis</li>
            <li className="pb-2">• Portfolio Monitoring & Reporting</li>
            <li className="pb-2">• Pitch Decks & Internal Presentations</li>
          </ul>
          <ul className="text-sm md:text-base lg:text-lg">
            <li className="pb-2">• Investor Kit for fundraising</li>
            <li className="pb-2">• Fund Modeling & Manager Screening</li>
            <li className="pb-2">• Business & Asset Valuation</li>
            <li className="pb-2">• Company & Industry Research</li>
          </ul>
          <ul className="text-sm md:text-base lg:text-lg">
            <li className="pb-2">• Data Room Management</li>
            {/* <li className="pb-4">• Corporate & Business Strategy</li>
      <li className="pb-4">• Corporate & Business Strategy</li>
      <li className="pb-4">• Corporate & Business Strategy</li> */}
          </ul>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${ServiceBuilding})` }}
        className="bg-red-600 text-white bg-no-repeat bg-right-bottom py-10"
      >
        <h1 className="text-2xl md:text-4xl md:ml-10 md:mt-3 md:mb-5 mb-4">
          Business Analytics
        </h1>
        <p className="text-sm md:text-base lg:text-lg mb-4 md:ml-10 md:mr-[33rem]">
          NVT Consulting specializes in Business Consultancy services
          tailored to meet the unique needs of each client. With a focus on
          delivering practical solutions and driving tangible results, we
          collaborate closely with businesses to identify opportunities for
          improvement and growth. From developing innovative strategies to
          optimizing operations, our team of experienced consultants is
          committed to helping businesses thrive in today's competitive
          landscape. Whether it's refining existing processes or exploring new
          market opportunities, we provide expert guidance every step of the
          way. Choose NVT Consulting as your trusted partner in achieving
          sustainable success and realizing your business objectives.
        </p>
        <div className="flex flex-col md:flex-row md:ml-10 md:mr-[33rem] gap-4">
          <ul className="text-sm md:text-base lg:text-lg mb-4 md:mb-0">
            <li className="pb-2">• Data Engineering</li>
            <li className="pb-2">• Data Mining</li>
            <li className="pb-2">• Web Scraping</li>
            <li className="pb-2">• Big Data Analytics</li>
          </ul>
          <ul className="text-sm md:text-base lg:text-lg mb-4 md:mb-0">
            <li className="pb-2">• Descriptive Analytics</li>
            <li className="pb-2">• Prescriptive Analytics</li>
            <li className="pb-2">• Predictive Analytics</li>
            <li className="pb-2">• Business Intelligence</li>
          </ul>
          <ul className="text-sm md:text-base lg:text-lg">
            <li className="pb-2">• Cloud Integration & Migration</li>
            {/* <li className="pb-4">• Corporate & Business Strategy</li>
      <li className="pb-4">• Corporate & Business Strategy</li>
      <li className="pb-4">• Corporate & Business Strategy</li> */}
          </ul>
        </div>
      </div>

      <div className="">
        <div className="max-w-7xl ml-20 mx-auto  px-4 py-20">
          <h2 className="text-3xl font-semibold text-zinc-900 ">
            Who do we cater to?
          </h2>
          <p className="mt-4 text-zinc-600">
            At NVT, we work with organisations of different size, complexity
            and across industries. Our offerings are customised to meet the
            specific requirements across the following and more
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 mb-14 gap-4 max-w-7xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            style={{ backgroundColor: item.color }}
            className="relative text-2xl p-6 text-center cursor-pointer rounded-lg shadow-lg transition-transform duration-300 "
            onClick={() => handleToggle(index)}
          >
            <div className="flex justify-between items-center">
              <span>{item.title}</span>
              <span>
                {expanded === index ? <FaCaretUp /> : <FaCaretDown />}
              </span>
            </div>
            {expanded === index && (
              <div className="mt-4 text-lg transition-opacity duration-300 opacity-100">
                {item.description}
              </div>
            )}
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}
