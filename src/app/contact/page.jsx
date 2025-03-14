"use client";
import Footer from '@/component/global/Footer';
import Navbar from '@/component/global/Navbar';
import React, { useState, useEffect } from 'react';
import emailjs from "emailjs-com";

const ContactUsPage = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [formStatus, setFormStatus] = useState({
        sending: false,
        success: false,
        error: null
    });

    // Initialize EmailJS once when the component mounts
    useEffect(() => {
        // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
        emailjs.init("YOUR_PUBLIC_KEY");
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        
        // Reset form status
        setFormStatus({
            sending: true,
            success: false,
            error: null
        });

        // Validate form data
        if (!formData.name || !formData.email || !formData.message) {
            setFormStatus({
                sending: false,
                success: false,
                error: "Please fill in all fields."
            });
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setFormStatus({
                sending: false,
                success: false,
                error: "Please enter a valid email address."
            });
            return;
        }

        // Send email without the initialization check
        emailjs.send(
            "service_0w1ybzr",  // Your EmailJS service ID
            "template_5arjohj", // Your EmailJS template ID
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                reply_to: formData.email
            },
            "ivxyrG1HmhACHafL0" // Replace with your actual EmailJS public key
        )
        .then((response) => {
            console.log("Email sent successfully!", response);
            setFormStatus({
                sending: false,
                success: true,
                error: null
            });
            
            // Reset form after successful submission
            setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            setFormStatus({
                sending: false,
                success: false,
                error: `Failed to send message. ${error.text || 'Please try again.'}`
            });
        });
    };

    return (
        <>
            <Navbar />
            {/* Banner Section */}
            {/* <div className="relative h-96 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('contact-us.png')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="text-5xl font-bold text-white z-10">Contact Us</h1>
            </div> */}
               {/* Hero Section */}
        <section className="bg-blue-900 text-white py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl font-light">
              Ask your Queries
            </p>
          </div>
        </section>

            {/* Contact Section */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Left Side: Contact Form */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                            
                            {/* Form Status Messages */}
                            {formStatus.error && (
                                <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
                                    {formStatus.error}
                                </div>
                            )}
                            {formStatus.success && (
                                <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
                                    Message sent successfully! We'll get back to you soon.
                                </div>
                            )}

                            <form className="space-y-6" onSubmit={sendEmail}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Write your name"
                                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Write your email"
                                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="How can we help you?"
                                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={formStatus.sending}
                                    className={`w-full py-3 px-6 rounded-lg transition duration-300 
                                        ${formStatus.sending 
                                            ? 'bg-gray-400 cursor-not-allowed' 
                                            : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                                >
                                    {formStatus.sending ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>

                       {/* Right Side: Contact Details and Map */}
                       <div className="space-y-8 bg-re">
                            {/* Contact Details */}
                            <div className="bg-white h-full p-8 rounded-lg shadow-lg">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                                <div className="space-y-6">
                                    {/* Address */}
                                    <div className="flex items-start">
                                        <svg
                                            className="w-6 h-6 mr-4 text-blue-600 flex-shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            ></path>
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            ></path>
                                        </svg>
                                        <div>
                                            <p className="text-lg font-medium text-gray-900">Address</p>
                                            <p className="text-gray-600">
                                                Nimtoli, Ghansimuli, Kharupetia <br />
                                                Darrang, Assam - 784115
                                            </p>
                                        </div>
                                    </div>

                                    {/* General Queries */}
                                    <div className="flex items-start">
                                        <svg
                                            className="w-6 h-6 mr-4 text-blue-600 flex-shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            ></path>
                                        </svg>
                                        <div>
                                            <p className="text-lg font-medium text-gray-900">General Queries</p>
                                            <p className="text-gray-600">
                                                Phone: 6000522263, 6000836915<br />
                                                Email: radiantseniorsecondaryschool@gmail.com
                                            </p>
                                        </div>
                                    </div>

                                    {/* Admissions */}
                                    <div className="flex items-start">
                                        <svg
                                            className="w-6 h-6 mr-4 text-blue-600 flex-shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            ></path>
                                        </svg>
                                        <div>
                                            <p className="text-lg font-medium text-gray-900">Admissions</p>
                                            <p className="text-gray-600">
                                                Phone: 6000522263 <br />
                                                Email: radiantseniorsecondaryschool@gmail.com
                                            </p>
                                        </div>
                                    </div>

                                    {/* Careers */}
                                    <div className="flex items-start">
                                        <svg
                                            className="w-6 h-6 mr-4 text-blue-600 flex-shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            ></path>
                                        </svg>
                                        <div>
                                            <p className="text-lg font-medium text-gray-900">Careers</p>
                                            <p className="text-gray-600">Email: radiantseniorsecondaryschool+career@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                    {/* Google Maps Embed */}
                    {/* <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Location</h2>
                        <div className="w-full h-64 rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d193961.29320691113!2d92.54389999400809!3d26.33368482466977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1741154365672!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div> */}


                    </div>
                
            </div>
            <Footer />
        </>
    );
};

export default ContactUsPage;
