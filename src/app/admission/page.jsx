import Footer from "@/component/global/Footer";
import Navbar from "@/component/global/Navbar";

export default function AdmissionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 bg-gray-50">
        {/* Hero Section */}
        <section className="bg-blue-900 text-white py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Admissions</h1>
            <p className="text-xl md:text-2xl font-light">
              Join Radiant School – Your Path to Excellence Begins Here
            </p>
          </div>
        </section>

        {/* Admission Process */}
        <section id="process" className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-4 border-blue-400 pb-2">
              Admission Process
            </h2>
            <p className="text-gray-700 mb-6">
              Our streamlined admission process ensures a smooth experience for students and parents.
            </p>
            <ul className="space-y-4 list-disc pl-4">
              <li>Fill out the online application form.</li>
              <li>Submit necessary documents (birth certificate, academic records, etc.).</li>
              <li>Attend an entrance assessment (if applicable).</li>
              <li>Complete the admission formalities and payment.</li>
            </ul>
          </div>
        </section>

     {/* Fee Structure Section */}
     <section id="fees" className="bg-white py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-4 border-blue-400 pb-2">
              Higher Secondary (1st Year) Fee Structure
            </h2>

            {/* Mobile/Tablet View */}
            <div className="block lg:hidden space-y-6">
              {[
                {
                  stream: 'Science (H.S 1st Year)',
                  details: [
                    { label: 'Course fees', value: '8200' },
                    { label: 'Library fees', value: '1000' },
                    { label: 'College Dev fee', value: '2800' },
                    { label: 'Identity card fee', value: '100' },
                    { label: 'Magazine fee', value: '200' },
                    { label: 'Exam fee', value: '1000' },
                    { label: 'Laboratory fee', value: '4000' },
                    { label: 'Miscellaneous fee', value: '1700' },
                    { label: 'Total', value: '18800' },
                    { label: 'Monthly fee', value: '1800' }
                  ]
                },
                {
                  stream: 'Commerce (H.S 1st Year)',
                  details: [
                    { label: 'Course fees', value: '7000' },
                    { label: 'Library fees', value: '1000' },
                    { label: 'College Dev fee', value: '2000' },
                    { label: 'Identity card fee', value: '100' },
                    { label: 'Magazine fee', value: '200' },
                    { label: 'Exam fee', value: '800' },
                    { label: 'Miscellaneous fee', value: '1700' },
                    { label: 'Total', value: '12800' },
                    { label: 'Monthly fee', value: '1300' }
                  ]
                },
                {
                  stream: 'Arts (H.S 1st Year)',
                  details: [
                    { label: 'Course fees', value: '12800' },
                    { label: 'Library fees', value: '1000' },
                    { label: 'College Dev fee', value: '2000' },
                    { label: 'Identity card fee', value: '100' },
                    { label: 'Magazine fee', value: '200' },
                    { label: 'Exam fee', value: '800' },
                    { label: 'Miscellaneous fee', value: '1700' },
                    { label: 'Total', value: '12800' },
                    { label: 'Monthly fee', value: '1300' }
                  ]
                }
              ].map((stream, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
                >
                  <div className="bg-blue-600 text-white p-3 font-bold text-center">
                    {stream.stream}
                  </div>
                  <div className="p-4">
                    {stream.details.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="flex justify-between py-2 border-b last:border-b-0"
                      >
                        <span className="text-gray-600">{item.label}</span>
                        <span className="font-semibold">₹{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop View */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">Particulars</th>
                    <th className="border border-gray-300 px-4 py-2">Science (H.S 1st Year)</th>
                    <th className="border border-gray-300 px-4 py-2">Commerce (H.S 1st Year)</th>
                    <th className="border border-gray-300 px-4 py-2">Arts (H.S 1st Year)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: 'Course fees', science: '8200', commerce: '7000', arts: '12800' },
                    { label: 'Library fees', science: '1000', commerce: '1000', arts: '1000' },
                    { label: 'College Dev fee', science: '2800', commerce: '2000', arts: '2000' },
                    { label: 'Identity card fee', science: '100', commerce: '100', arts: '100' },
                    { label: 'Magazine fee', science: '200', commerce: '200', arts: '200' },
                    { label: 'Exam fee', science: '1000', commerce: '800', arts: '800' },
                    { label: 'Laboratory fee', science: '4000', commerce: '-', arts: '-' },
                    { label: 'Miscellaneous fee', science: '1700', commerce: '1700', arts: '1700' },
                    { label: 'Total', science: '18800', commerce: '12800', arts: '12800' },
                    { label: 'Monthly fee', science: '1800', commerce: '1300', arts: '1300' }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-blue-50 transition">
                      <td className="border border-gray-300 px-4 py-2 font-semibold bg-gray-100">
                        {row.label}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">₹{row.science}</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">₹{row.commerce}</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">₹{row.arts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Apply Online */}
        <section id="apply" className="py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-4 border-blue-400 pb-2">
              Apply Online
            </h2>
            <p className="text-gray-700 mb-6">
              Start your journey with us by filling out the online application form.
            </p>
            <a
              href="/apply"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Apply Now
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}