import CampusGallery from "@/component/CampusGallery";
import Footer from "@/component/global/Footer";
import HeroSection from "@/component/global/HeroSection";
import Navbar from "@/component/global/Navbar";
import { Camera, BookOpen, Globe, Music, Trophy } from 'lucide-react';

export default function StudentLifePage() {
  // Sample gallery images (replace with actual image paths)


  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 bg-gray-50">

        <HeroSection title="Student Life" subtitle="Discover, Learn, Grow - Your Journey of Exploration Begins Here"/>

        {/* Activities Section */}
        <section id="activities" className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-4 border-blue-400 pb-2">
              Extracurricular Activities
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  icon: <Music className="w-12 h-12 text-blue-600" />, 
                  title: "Music Club", 
                  description: "Explore your musical talents and perform on stage." 
                },
                { 
                  icon: <Globe className="w-12 h-12 text-blue-600" />, 
                  title: "Cultural Exchange", 
                  description: "Learn about different cultures and broaden your horizons." 
                },
                { 
                  icon: <Trophy className="w-12 h-12 text-blue-600" />, 
                  title: "Sports Teams", 
                  description: "Compete and develop teamwork skills in various sports." 
                },
                { 
                  icon: <BookOpen className="w-12 h-12 text-blue-600" />, 
                  title: "Debate Society", 
                  description: "Enhance critical thinking and public speaking skills." 
                }
              ].map((activity, index) => (
                <div 
                  key={index} 
                  className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">{activity.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{activity.title}</h3>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section id="facilities" className="py-16 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-4 border-blue-400 pb-2">
              School Facilities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  title: "Modern Library", 
                  description: "Extensive collection of books, digital resources, and quiet study areas.",
                  capacity: "Over 20,000 books"
                },
                { 
                  title: "Science Laboratories", 
                  description: "State-of-the-art labs for physics, chemistry, and biology.",
                  capacity: "5 fully equipped labs"
                },
                { 
                  title: "Computer Center", 
                  description: "Advanced computing facilities with latest technology.",
                  capacity: "100+ computers"
                },
                { 
                  title: "Sports Complex", 
                  description: "Indoor and outdoor sports facilities for various activities.",
                  capacity: "Multiple courts and fields"
                },
                { 
                  title: "Auditorium", 
                  description: "Large multipurpose hall for events, performances, and assemblies.",
                  capacity: "Seats 500+"
                },
                { 
                  title: "Art Studios", 
                  description: "Creative spaces for visual arts, music, and performing arts.",
                  capacity: "3 specialized studios"
                }
              ].map((facility, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{facility.title}</h3>
                  <p className="text-gray-600 mb-2">{facility.description}</p>
                  <p className="text-sm text-blue-600 font-medium">{facility.capacity}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <CampusGallery/>
      </main>

      <Footer />
    </div>
  );
}