"use client"
import Footer from '@/component/global/Footer';
import Navbar from '@/component/global/Navbar';
import { BookOpen, Users, Globe, Mail, Phone, MapPin, Building, Calendar } from "lucide-react";
import { useEffect } from 'react';

export default function AboutUs() {
  // Handle smooth scrolling when the page loads with a hash
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            const offset = 30; // Adjust this value based on your header height
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: elementPosition - offset,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    };

    // Initial scroll check
    handleHashScroll();

    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashScroll, false);

    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);


  return (
    <>
      <Navbar />
      <div className="bg-gray-50">
        {/* Banner Section */}
        <div
          className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('contact-us.png')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <h1 className="text-6xl font-extrabold text-white z-10">About Us</h1>
        </div>

        {/* About Our School Section */}
        <section id="about-school" className="container mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-gray-900 text-center">About Our School</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Founded in 1995, our school has been a beacon of educational excellence for over two decades. We provide a comprehensive education that combines academic rigor with character development.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our dedicated faculty members bring extensive experience and passion to the classroom, ensuring that each student receives personalized attention and guidance.
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-3 ml-4">
                <li>State-of-the-art facilities</li>
                <li>Experienced teaching staff</li>
                <li>Comprehensive curriculum</li>
                <li>Focus on holistic development</li>
              </ul>
            </div>
            <div className="bg-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-blue-600" />
                  <p className="text-gray-700">1:15 Teacher-Student Ratio</p>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-8 h-8 text-green-600" />
                  <p className="text-gray-700">International Exchange Programs</p>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-8 h-8 text-purple-600" />
                  <p className="text-gray-700">Advanced Learning Programs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure Section */}
        <section id="infrastructure" className="bg-white py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Infrastructure</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <Building className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Academic Facilities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Modern Classrooms</li>
                  <li>Science Laboratories</li>
                  <li>Computer Labs</li>
                  <li>Library & Resource Center</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <Users className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Sports Facilities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Indoor Sports Complex</li>
                  <li>Swimming Pool</li>
                  <li>Basketball Courts</li>
                  <li>Athletic Track</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <Globe className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Additional Amenities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Cafeteria</li>
                  <li>Auditorium</li>
                  <li>Medical Center</li>
                  <li>Transportation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">School Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <Calendar className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Annual Day Celebration</h3>
                <p className="text-gray-600 mb-4">A grand showcase of talent and achievements featuring performances by our students.</p>
                <p className="text-sm text-blue-600">December 2024</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <Calendar className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Sports Meet</h3>
                <p className="text-gray-600 mb-4">Annual athletic competition fostering sportsmanship and physical excellence.</p>
                <p className="text-sm text-blue-600">March 2024</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <Calendar className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Science Fair</h3>
                <p className="text-gray-600 mb-4">Exhibition of innovative projects showcasing scientific creativity.</p>
                <p className="text-sm text-blue-600">October 2024</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-4xl font-bold text-gray-900">Get in Touch</h3>
            <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
              Have questions? We're here to help. Contact us for more information about our school and admissions.
            </p>
            <div className="mt-10 text-lg text-gray-700 space-y-4">
              <p className="flex items-center justify-center gap-2">
                <Mail className="w-6 h-6 text-blue-600" /> Email: <span className="font-semibold">info@ourschool.edu</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <Phone className="w-6 h-6 text-green-600" /> Phone: <span className="font-semibold">+1 (123) 456-7890</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <MapPin className="w-6 h-6 text-red-600" /> Address: <span className="font-semibold">123 Learning Lane, Education City</span>
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}