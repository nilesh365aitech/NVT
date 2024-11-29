import React, { useState } from "react";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        field: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://hook.eu2.make.com/sks904wnnju9euejec5u9gcvep1vqzlh", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Form submitted successfully!");
                setFormData({ name: "", email: "", field: "", message: "" }); // Reset form
            } else {
                alert("Failed to submit the form. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className="flex flex-col md:flex-row justify-center p-6">
            <div className="md:w-1/2 p-6">
                <h2 className="text-3xl font-semibold text-blue-800 mb-4">Contact Us</h2>
                <p>
                    Reach out to us at{" "}
                    <a href="mailto:info@nvt.com" className="underline">
                        info@nvtconsulting.com
                    </a>{" "}
                    and we’ll share a customised plan to get you launched!
                </p>
            </div>

            <div className="md:w-1/2 p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="w-full p-3 border border-zinc-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 placeholder-blue-900"
                        style={{ backgroundColor: "#F0F3F8" }}
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full p-3 border border-zinc-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 placeholder-blue-900"
                        style={{ backgroundColor: "#F0F3F8" }}
                    />
                    <input
                        type="text"
                        name="field"
                        value={formData.field}
                        onChange={handleChange}
                        placeholder="Industry Type"
                        className="w-full p-3 border border-zinc-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 placeholder-blue-900"
                        style={{ backgroundColor: "#F0F3F8" }}
                    />
                    <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your company"
                        className="w-full p-3 border border-zinc-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 placeholder-blue-900"
                        style={{ backgroundColor: "#F0F3F8" }}
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full p-3 bg-blue-900 text-white rounded-md flex items-center justify-between"
                    >
                        Submit
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
                    </button>
                </form>
            </div>
        </div>
    );
}
