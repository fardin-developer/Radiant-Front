import FacultySection from "@/component/Faculty";
import Footer from "@/component/global/Footer";
import Navbar from "@/component/global/Navbar";
import HeroSection from "@/component/global/HeroSection";

export default function AcademicsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 bg-gray-50">
        <HeroSection title="Academics at Radiant School" subtitle="Nurturing Excellence Through Innovative Learning and Holistic
              Development"/>

{/* Academic Programs Section */}
<section id="courses" className="py-16 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-4 border-blue-400 pb-2">
      Our Academic Programs
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Pre-Primary & Primary Education */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow md:col-span-3">
        <h3 className="text-xl font-semibold mb-4 text-blue-600">
          SCHOOL EDUCATION (VI TO CLASS X)
        </h3>
        <p className="text-gray-700 mb-4">
          Our school education program follows a comprehensive curriculum from pre-primary to Class 10, ensuring a strong academic foundation. It integrates core subjects, language proficiency, and co-curricular activities to nurture intellectual, creative, and social development. Emphasis is placed on experiential learning, critical thinking, and holistic growth.
        </p>
      </div>

      {/* Higher Secondary Science */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="text-xl font-semibold mb-4 text-blue-600">
          HIGHER SECONDARY SCIENCE
        </h3>
        <ul className="space-y-3 list-disc pl-4 mb-4">
          <li>English, Alt. English, MIL Hindi, MIL Assamese</li>
          <li>Physics, Chemistry, Biology, Mathematics</li>
          <li>Computer Science, Statistics</li>
        </ul>
      </div>

      {/* Higher Secondary Commerce */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="text-xl font-semibold mb-4 text-blue-600">
          HIGHER SECONDARY COMMERCE
        </h3>
        <ul className="space-y-3 list-disc pl-4 mb-4">
          <li>English, Alt. English, MIL Hindi, MIL Assamese</li>
          <li>Accountancy, Business Studies, Finance, Economics</li>
          <li>Information Practices, BSMT</li>
        </ul>
      </div>

      {/* Higher Secondary Arts */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="text-xl font-semibold mb-4 text-blue-600">
          HIGHER SECONDARY ARTS
        </h3>
        <ul className="space-y-3 list-disc pl-4 mb-4">
          <li>English, Alt. English, MIL Hindi, MIL Assamese</li>
          <li>Political Science, History, Logic & Philosophy, Geography</li>
          <li>Education, Economics, Information Practices, Sociology</li>
        </ul>
      </div>
    </div>
  </div>
</section>


     <FacultySection/>

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
                    <th className="p-4 text-left">Period 1 (8:00-1:15)</th>
                    <th className="p-4 text-left">Period 2 (1:15-2:00)</th>
                    <th className="p-4 text-left">Period 3 (2:00-4:00)</th>
                    <th className="p-4 text-left">Period 4 (4:00-6:00)</th>
                    <th className="p-4 text-left">Period 5 (6:00-8:30)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-medium">Monday</td>
                    <td className="p-4">Classes for VI - XII</td>
                    <td className="p-4">Lunch break and rest</td>
                    <td className="p-4">
                      Mon, Tue, Wed coaching for Medical, Engineering, CUET,
                      CLAT etc & Thu, Fri for tuition classes.
                    </td>
                    <td className="p-4">
                      Sports and extra-curricular activities.
                    </td>
                    <td className="p-4">
                      Self-study in classroom along with teachers allotted for
                      doubt class.
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-medium">Tuesday</td>
                    <td className="p-4">Classes for VI - XII</td>
                    <td className="p-4">Lunch break and rest</td>
                    <td className="p-4">
                      Mon, Tue, Wed coaching for Medical, Engineering, CUET,
                      CLAT etc & Thu, Fri for tuition classes.
                    </td>
                    <td className="p-4">
                      Sports and extra-curricular activities.
                    </td>
                    <td className="p-4">
                      Self-study in classroom along with teachers allotted for
                      doubt class.
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-medium">Wednesday</td>
                    <td className="p-4">Classes for VI - XII</td>
                    <td className="p-4">Lunch break and rest</td>
                    <td className="p-4">
                      Mon, Tue, Wed coaching for Medical, Engineering, CUET,
                      CLAT etc & Thu, Fri for tuition classes.
                    </td>
                    <td className="p-4">
                      Sports and extra-curricular activities.
                    </td>
                    <td className="p-4">
                      Self-study in classroom along with teachers allotted for
                      doubt class.
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-medium">Thursday</td>
                    <td className="p-4">Classes for VI - XII</td>
                    <td className="p-4">Lunch break and rest</td>
                    <td className="p-4">
                      Mon, Tue, Wed coaching for Medical, Engineering, CUET,
                      CLAT etc & Thu, Fri for tuition classes.
                    </td>
                    <td className="p-4">
                      Sports and extra-curricular activities.
                    </td>
                    <td className="p-4">
                      Self-study in classroom along with teachers allotted for
                      doubt class.
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-medium">Friday</td>
                    <td className="p-4">Classes for VI - XII</td>
                    <td className="p-4">Lunch break and rest</td>
                    <td className="p-4">
                      Mon, Tue, Wed coaching for Medical, Engineering, CUET,
                      CLAT etc & Thu, Fri for tuition classes.
                    </td>
                    <td className="p-4">
                      Sports and extra-curricular activities.
                    </td>
                    <td className="p-4">
                      Self-study in classroom along with teachers allotted for
                      doubt class.
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-medium">Saturday</td>
                    <td className="p-4" colSpan="5">
                      Weekly test of 20 marks for each subject and monthly test
                      of 50 marks for each subject.
                    </td>
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
