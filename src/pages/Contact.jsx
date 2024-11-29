import Navbar from "../components/Navbar";
import wmapImg from "../assets/ContactMap.png";
import Footer from "../components/FooterSection";
import ContactImage from "../assets/contact.png";

export default function Widget() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        className="bg-black text-white h-[100vh] md:h-[80vh] pb-10 mb-4 relative "
        style={{
          backgroundImage: `url(${ContactImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <div></div>
        <div className="sm:w-[50%] w-[70%] py-5 px-3  bg-white  min-h-fit text-black mt-20 flex flex-col gap-2 pt-9 rounded-sm border-r-8 border-red-600">
          <p className="ml-4 sm:ml-14 font-bold" style={{ color: "#FF6347" }}>
            Connect with us
          </p>
          <h1 className="text-4xl font-bold  ml-4 sm:ml-14 ">
            Have questions or need expert guidance?
          </h1>
          <p className="ml-4 sm:ml-14 pr-10">
            Reach out to us now at info@nvtconsulting.com today, and let's
            chart the path to your success together.
          </p>
        </div>
        {/* <div className=" text--800 p-5 mt-11 absolute right-16 top-20 border-2 w-[30%] h-fit rounded">
          <h2 className="text-lg font-semibold mb-4 ">
            Generate the master plan to fast track your product to launch
          </h2>
          <form>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Add your full name"
                className="w-full p-2 border border-zinc-300 rounded-md placeholder-black text-sm text-gray-500"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                placeholder="youremailaddress@gmail.com"
                className="w-full p-2 border  placeholder-black border-zinc-300 rounded-md text-sm text-gray-500"
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                placeholder="Add your contact number"
                className="w-full p-2 border  placeholder-black border-zinc-300 rounded-md text-sm text-gray-500"
              />
            </div>
            <div className="mb-3">
              <textarea
                placeholder="Tell us about your project"
                className="w-full p-3 border  placeholder-black border-zinc-300 rounded-md text-sm text-gray-500"
                rows="4"
              ></textarea>
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md text-sm"
            >
              Get a custom quote
            </button>
          </form>
        </div> */}
      </div>
      {/* <div className="max-w-4xl mx-auto ml-4 md:ml-20 px-4 py-28">
        <h2 className="text-3xl font-semibold">Core Service Offerings</h2>
        <p className="mt-4 text-zinc-600 :text-zinc-300">
          At our consulting firm, our core service offerings are designed to
          empower businesses to thrive in today's dynamic landscape. From
          strategic planning and transformational leadership to market entry
          strategies and operational optimization, we provide tailored solutions
          that drive sustainable growth and success. With a focus on innovation,
          collaboration, and client-centricity, we partner with organizations to
          unlock their full potential, achieve their goals, and stay ahead of
          the competition.
        </p>
      </div> */}

      <img className="w-4/5 md:h-auto h-60 mx-auto" src={wmapImg} alt="Map" />

      <div className="max-w-4xl mx-auto ml-9 md:ml-36 py-24">
        <h2 className="text-3xl font-bold mb-4 text-[#1E227F]">Work with us</h2>
        <p className="text-zinc-700 mb-6">
          Join our team of experts and contribute to the real world.
        </p>
        <a
          href="#"
          className="text-red-600 hover:text-red-700 font-semibold flex items-center"
        >
          Contact Us
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            ></path>
          </svg>
        </a>
      </div>
      <Footer />
    </>
  );
}
