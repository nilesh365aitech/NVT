import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Services() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sections = [
    { title: "Corporates", content: "We work with corporations to solve their most pressing problems, from strategic planning to enhancing operational efficiency, helping them stay agile and competitive in today’s dynamic business landscape." },
    { title: "Governments & SWF", content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero libero voluptate quasi a eveniet eius alias quam nisi porro cumque! Ex amet quod nisi iste delectus eos autem nemo consequuntur!" },  
    { title: "Asset Management Firms", content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero libero voluptate quasi a eveniet eius alias quam nisi porro cumque! Ex amet quod nisi iste delectus eos autem nemo consequuntur!" },
    { title: "HNIs", content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero libero voluptate quasi a eveniet eius alias quam nisi porro cumque! Ex amet quod nisi iste delectus eos autem nemo consequuntur!" },
    { title: "PE & VC", content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero libero voluptate quasi a eveniet eius alias quam nisi porro cumque! Ex amet quod nisi iste delectus eos autem nemo consequuntur!" },
    { title: "Investment Banks", content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero libero voluptate quasi a eveniet eius alias quam nisi porro cumque! Ex amet quod nisi iste delectus eos autem nemo consequuntur!" },
    { title: "Real Estate Firms", content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero libero voluptate quasi a eveniet eius alias quam nisi porro cumque! Ex amet quod nisi iste delectus eos autem nemo consequuntur!" },
    { title: "Hedge Funds", content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero libero voluptate quasi a eveniet eius alias quam nisi porro cumque! Ex amet quod nisi iste delectus eos autem nemo consequuntur!" },
    { title: "Startups", content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero libero voluptate quasi a eveniet eius alias quam nisi porro cumque! Ex amet quod nisi iste delectus eos autem nemo consequuntur!" }
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Who do we cater to?</h2>
        <p className="text-zinc-600 mb-8">
          At NVT, we work with organisations of different size, complexity
          and across industries. Our offerings are customised to meet the
          specific requirements across the following and more.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="text-lg font-semibold text-blue-900 flex justify-between items-center">
                {section.title}
                <span
                  className="cursor-pointer"
                  onClick={() => toggleSection(index)}
                >
                  {expandedSections[index] ? (
                    <IoIosArrowUp className="text-blue-900" />
                  ) : (
                    <IoIosArrowDown className="text-blue-900" />
                  )}
                </span>
              </h3>
              {expandedSections[index] && section.content && (
                <p className="text-zinc-600 mt-2">{section.content}</p>
              )}
            </div>
          ))}
        </div>
       
      </div>
    </>
  );
}
