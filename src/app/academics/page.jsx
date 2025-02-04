import Footer from "@/component/global/Footer";
import Navbar from "@/component/global/Navbar";

export default function AcademicsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-1 bg-gray-50">
                {/* Hero Section */}
                <section className="bg-blue-900 text-white py-20 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Academics at Radiant School
                        </h1>
                        <p className="text-xl md:text-2xl font-light">
                            Nurturing Excellence Through Innovative Learning and Holistic Development
                        </p>
                    </div>
                </section>

                {/* Academic Programs Section */}
                <section id="courses" className="py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-4 border-blue-400 pb-2">
                            Our Academic Programs
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Undergraduate Programs */}
                            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                                    Undergraduate Programs
                                </h3>
                                <ul className="space-y-3 list-disc pl-4 mb-4">
                                    <li>Bachelor of Science in Computer Science</li>
                                    <li>Bachelor of Arts in Humanities</li>
                                    <li>Bachelor of Business Administration</li>
                                </ul>
                                <p className="text-gray-600">
                                    Our UG programs combine theoretical knowledge with practical applications,
                                    including industry internships and research projects.
                                </p>
                            </div>

                            {/* Graduate Programs */}
                            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                                    Graduate Programs
                                </h3>
                                <ul className="space-y-3 list-disc pl-4 mb-4">
                                    <li>Master of Science in Data Analytics</li>
                                    <li>MBA with Specializations</li>
                                    <li>M.A. in Education</li>
                                </ul>
                                <p className="text-gray-600">
                                    Advanced programs designed for leadership roles, featuring expert faculty
                                    and state-of-the-art research facilities.
                                </p>
                            </div>

                            {/* Doctoral Programs */}
                            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                                    Doctoral Programs
                                </h3>
                                <ul className="space-y-3 list-disc pl-4 mb-4">
                                    <li>Ph.D. in Computer Science</li>
                                    <li>Ph.D. in Management Studies</li>
                                    <li>Ed.D. in Educational Leadership</li>
                                </ul>
                                <p className="text-gray-600">
                                    Research-intensive programs fostering innovation and contributing to
                                    global knowledge base.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Faculty Section */}
                <section id="faculty" className="bg-white py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-4 border-blue-400 pb-2">
                            Distinguished Faculty
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Faculty Member - Sarah Johnson */}
                            <div className="group p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
                                <div className="aspect-square bg-gray-100 rounded-lg mb-4" />
                                <h3 className="text-xl font-semibold">Dr. Sarah Johnson</h3>
                                <p className="text-blue-600 mb-2">Head of Computer Science</p>
                                <p className="text-gray-600">
                                    15+ years experience in AI research, published in top-tier journals,
                                    and recipient of National Teaching Excellence Award.
                                </p>
                            </div>

                            {/* Faculty Member - Michael Chen */}
                            <div className="group p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
                                <div className="aspect-square bg-gray-100 rounded-lg mb-4" />
                                <h3 className="text-xl font-semibold">Prof. Michael Chen</h3>
                                <p className="text-blue-600 mb-2">Dean of Business Studies</p>
                                <p className="text-gray-600">
                                    Former Fortune 500 executive, specializing in strategic management
                                    and international business development.
                                </p>
                            </div>

                            {/* Faculty Member - Emily Rodriguez */}
                            <div className="group p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
                                <div className="aspect-square bg-gray-100 rounded-lg mb-4" />
                                <h3 className="text-xl font-semibold">Dr. Emily Rodriguez</h3>
                                <p className="text-blue-600 mb-2">Director of Research</p>
                                <p className="text-gray-600">
                                    Leading researcher in educational psychology with multiple
                                    NSF-funded projects and international collaborations.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                                Meet All Faculty
                            </button>
                        </div>
                    </div>
                </section>

                {/* Academic Schedule Section */}
                <section id="timetable" className="py-16 px-4 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-4 border-blue-400 pb-2">
                            Academic Schedule
                        </h2>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <table className="w-full border-collapse">
                                <thead className="bg-blue-600 text-white">
                                    <tr>
                                        <th className="p-4 text-left">Day</th>
                                        <th className="p-4 text-left">Period 1 (9:00-10:30)</th>
                                        <th className="p-4 text-left">Period 2 (10:45-12:15)</th>
                                        <th className="p-4 text-left">Period 3 (1:15-2:45)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b hover:bg-gray-50 transition-colors">
                                        <td className="p-4 font-medium">Monday</td>
                                        <td className="p-4">Computer Science Lab</td>
                                        <td className="p-4">Business Strategy</td>
                                        <td className="p-4">Research Methodology</td>
                                    </tr>
                                    <tr className="border-b hover:bg-gray-50 transition-colors">
                                        <td className="p-4 font-medium">Tuesday</td>
                                        <td className="p-4">Data Structures</td>
                                        <td className="p-4">Financial Management</td>
                                        <td className="p-4">Elective Course</td>
                                    </tr>
                                    <tr className="border-b hover:bg-gray-50 transition-colors">
                                        <td className="p-4 font-medium">Wednesday</td>
                                        <td className="p-4">Guest Lecture Series</td>
                                        <td className="p-4">Project Work</td>
                                        <td className="p-4">Faculty Consultation</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
