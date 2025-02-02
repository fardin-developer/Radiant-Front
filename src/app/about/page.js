import Footer from '@/component/global/Footer';
import Navbar from '@/component/global/Navbar';
import { BookOpen, Users, Globe, Mail, Phone, MapPin } from "lucide-react";

export default function AboutUs() {
  return (
   <>
   <Navbar/>
   <div className="bg-gray-50">
      {/* Banner Section */}
      <div
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('contact-us.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <h1 className="text-6xl font-extrabold text-white z-10">About Us</h1>
      </div>

      {/* Introduction Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Welcome to Our School</h2>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Our school is a place of learning, creativity, and excellence. We strive to provide a nurturing environment where students can develop their full potential academically and personally.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 bg-gray-100 rounded-lg shadow-lg flex items-center gap-4">
            <BookOpen className="w-12 h-12 text-blue-600" />
            <div>
              <h3 className="text-3xl font-semibold text-gray-900">Our Mission</h3>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                To inspire and empower students with a holistic education that nurtures intellectual, emotional, and ethical growth.
              </p>
            </div>
          </div>
          <div className="p-8 bg-gray-100 rounded-lg shadow-lg flex items-center gap-4">
            <Globe className="w-12 h-12 text-green-600" />
            <div>
              <h3 className="text-3xl font-semibold text-gray-900">Our Vision</h3>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                To be a globally recognized institution known for academic excellence, innovation, and character-building education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="container mx-auto px-6 py-20">
        <h3 className="text-4xl font-bold text-gray-900 text-center">Our Core Values</h3>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 bg-white rounded-lg shadow-md text-center flex flex-col items-center">
            <BookOpen className="w-12 h-12 text-red-600" />
            <h4 className="text-2xl font-semibold mt-4">Integrity</h4>
            <p className="mt-4 text-gray-700">Honesty and moral principles in every aspect of learning.</p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-md text-center flex flex-col items-center">
            <Globe className="w-12 h-12 text-purple-600" />
            <h4 className="text-2xl font-semibold mt-4">Excellence</h4>
            <p className="mt-4 text-gray-700">A commitment to achieving the highest standards.</p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-md text-center flex flex-col items-center">
            <Users className="w-12 h-12 text-yellow-600" />
            <h4 className="text-2xl font-semibold mt-4">Respect</h4>
            <p className="mt-4 text-gray-700">Promoting inclusivity and mutual understanding.</p>
          </div>
        </div>
      </section>

      {/* Faculty & Staff Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold text-gray-900">Meet Our Faculty</h3>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            Our team of experienced and passionate educators is dedicated to shaping young minds and fostering academic excellence.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h3 className="text-4xl font-bold text-gray-900">Get in Touch</h3>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
          Have questions? We’re here to help. Contact us for more information about our school and admissions.
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
      </section>
    </div>
    <Footer/>
   
   </>
  );
}
