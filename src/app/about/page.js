"use client";
import Footer from "@/component/global/Footer";
import Navbar from "@/component/global/Navbar";
import {
  BookOpen,
  Users,
  Globe,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  FlaskRound,
  Briefcase,
  Gavel,
  Building,
  Heart,
  Calendar,
} from "lucide-react";
import { useEffect } from "react";

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
            const elementPosition =
              element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: elementPosition - offset,
              behavior: "smooth",
            });
          }
        }, 100);
      }
    };

    // Initial scroll check
    handleHashScroll();

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashScroll, false);

    return () => window.removeEventListener("hashchange", handleHashScroll);
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
          <h2 className="text-4xl font-bold text-gray-900 text-center">
            About Our School
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Radiant Senior Secondary School, located at Nimtoli,Ghansimuli,
                Kharupetia, Darrang operates under the Radiant Education Trust.
                Established with a mission to provide top-quality education, the
                school is dedicated to empowering students from North East India
                to excel at the national level.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                What sets this institution apart from other senior secondary
                schools in Assam is its unique approach to education. With a
                team of expert faculty from renowned institutions such as KOTA
                and NIT, the school ensures that students gain a competitive
                edge and realize their full potential. The curriculum is
                designed not only to achieve outstanding results in HSLC and
                higher secondary exams but also to build a strong foundation for
                diverse career paths.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For science students, the school offers specialized coaching for
                medical and engineering entrance exams, NDA preparation, and
                advanced spoken English training. Commerce students are prepared
                for careers in Chartered Accountancy, MBA, and banking, while
                arts students receive guidance for civil services, law, and
                other prestigious fields.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The school boasts state-of-the-art infrastructure, including
                modern classrooms equipped with T.V. sets, a computer lab, fully
                equipped Physics, Chemistry, and Biology labs, a library, and
                digital learning facilities. Additional features include free
                tuition, regular weekly tests, separate hostels for boys and
                girls, personalized mentorship, and a career counseling room to
                guide students toward success.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Moreover, Radiant Senior Secondary School prioritizes holistic
                personality development with the help of experienced mentors who
                are dedicated to nurturing the talents and aspirations of every
                student. With a committed team of qualified educators, the
                school is steadfast in its goal to help students achieve
                excellence in their chosen fields.
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-3 ml-4">
                <li>
                  Coaching for medical and engineering entrance exams, NDA
                  preparation, and advanced spoken English for science students.
                </li>
                <li>
                  Preparation for Chartered Accountancy, MBA, and banking
                  careers for commerce students.
                </li>
                <li>
                  Guidance for civil services, law, and other prestigious fields
                  for arts students.
                </li>
                <li>
                  Modern classrooms with T.V. sets, computer and science labs, a
                  library with digital learning, free tuition, weekly tests,
                  separate hostels, personalized mentorship, and a career
                  counseling room.
                </li>
              </ul>
            </div>
            <div className="bg-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Key Highlights
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-blue-600" />
                  <p className="text-gray-700">
                    SEPARATE HOSTELS FOR BOYS AND GIRLS.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-green-600" />
                  <p className="text-gray-700">NEP 2020 ALIGNED CURRICULUM.</p>
                </div>
                <div className="flex items-center gap-3">
                  <FlaskRound className="w-8 h-8 text-purple-600" />
                  <p className="text-gray-700">ADVANCED STUDY MATERIALS.</p>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="w-8 h-8 text-teal-600" />
                  <p className="text-gray-700">
                    PROBABLE TEST SERIES NEET/JEE CLASSES FROM VIII ONWARDS.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Gavel className="w-8 h-8 text-red-600" />
                  <p className="text-gray-700">DIGITAL CLASSROOM.</p>
                </div>
                <div className="flex items-center gap-3">
                  <Building className="w-8 h-8 text-indigo-600" />
                  <p className="text-gray-700">
                    DAILY DOUBT CLEARING SESSIONS.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-8 h-8 text-pink-600" />
                  <p className="text-gray-700">
                    COMPLETE THE COURSE WITH MINIMUM AND AFFORDABLE FEES.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-8 h-8 text-pink-600" />
                  <p className="text-gray-700">
                    INTEGRATED SCHOOLING (NEET, IIT-JEE ETC).
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-8 h-8 text-pink-600" />
                  <p className="text-gray-700">
                    SCHOLARSHIPS FOR POOR & MERITORIOUS STUDENTS.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-8 h-8 text-pink-600" />
                  <p className="text-gray-700">
                    EXPERT FACULTY FROM KOTA, IITs, NITs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure Section */}
        <section id="infrastructure" className="bg-white py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Our Infrastructure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Academic Facilities */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <Building className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">
                  Academic Facilities
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Digital Classrooms with Smart TVs & WiFi</li>
                  <li>Well-equipped Science and Computer Labs</li>
                  <li>Comprehensive Library Resources</li>
                  <li>Evening Tuition Classes</li>
                </ul>
              </div>

              {/* Residential Facilities */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <Users className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">
                  Residential Facilities
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Separate Hostels for Boys and Girls</li>
                  <li>WiFi and Sports Amenities</li>
                  <li>Single-Seater Rooms for Privacy</li>
                  <li>CCTV Surveillance for Security</li>
                </ul>
              </div>

              {/* Additional Amenities */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <Globe className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">
                  Additional Amenities
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Modern Canteen with Hygienic Meals</li>
                  <li>Mentorship Programs & Career Guidance</li>
                  <li>Cultural and Extracurricular Activities</li>
                  <li>Integrated Coaching for NEET, JEE, CA & More</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            School Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Annual Day Celebration */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <Calendar className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Annual Day Celebration
                </h3>
                <p className="text-gray-600 mb-4">
                  A grand showcase of talent featuring cultural performances,
                  awards, and achievements by our students.
                </p>
                <p className="text-sm text-blue-600">December 2024</p>
              </div>
            </div>

            {/* Sports Meet */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <Calendar className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Sports Meet</h3>
                <p className="text-gray-600 mb-4">
                  A thrilling event featuring track and field competitions, team
                  sports, and displays of sportsmanship.
                </p>
                <p className="text-sm text-blue-600">March 2024</p>
              </div>
            </div>

            {/* Science Fair */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <Calendar className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Science Fair</h3>
                <p className="text-gray-600 mb-4">
                  An exhibition of innovative projects and experiments by young
                  scientists, promoting critical thinking.
                </p>
                <p className="text-sm text-blue-600">October 2024</p>
              </div>
            </div>

            {/* Cultural Fest */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <Calendar className="w-10 h-10 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cultural Fest</h3>
                <p className="text-gray-600 mb-4">
                  A vibrant celebration with dance, drama, music, and art
                  competitions showcasing diverse talents.
                </p>
                <p className="text-sm text-blue-600">August 2024</p>
              </div>
            </div>

            {/* Debate and Declamation Contest */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <Calendar className="w-10 h-10 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Debate & Declamation
                </h3>
                <p className="text-gray-600 mb-4">
                  A platform for students to express their views on contemporary
                  issues and develop public speaking skills.
                </p>
                <p className="text-sm text-blue-600">November 2024</p>
              </div>
            </div>

            {/* Career Guidance Workshop */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <Calendar className="w-10 h-10 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Career Guidance Workshop
                </h3>
                <p className="text-gray-600 mb-4">
                  Sessions led by experts to help students explore career paths
                  and higher education opportunities.
                </p>
                <p className="text-sm text-blue-600">September 2024</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-4xl font-bold text-gray-900">Get in Touch</h3>
            <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
              Have questions? We are here to help. Contact us for more
              information about our school and admissions.
            </p>
            <div className="mt-10 text-lg text-gray-700 space-y-4">
              <p className="flex items-center justify-center gap-2">
                <Mail className="w-6 h-6 text-blue-600" /> Email:{" "}
                <span className="font-semibold">info@ourschool.edu</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <Phone className="w-6 h-6 text-green-600" /> Phone:{" "}
                <span className="font-semibold">+1 (123) 456-7890</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <MapPin className="w-6 h-6 text-red-600" /> Address:{" "}
                <span className="font-semibold">
                  123 Learning Lane, Education City
                </span>
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
