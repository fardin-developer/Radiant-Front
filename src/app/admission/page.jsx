import Footer from "@/component/global/Footer";
import Navbar from "@/component/global/Navbar";
import HeroSection from "@/component/global/HeroSection";
export default function AdmissionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 bg-gray-50">
        <HeroSection title="Admissions" subtitle="Join Radiant School – Your Path to Excellence Begins Here"/>

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
              Fee Structure
            </h2>
            
            {/* Class VI-X Fee Structure */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Class VI - X</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                  <div className="bg-blue-600 text-white p-3 font-bold text-lg">
                    Admission & Basic Fees
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-gray-700 font-medium">Admission - Class VI</div>
                      <div className="text-right font-semibold">₹6000</div>
                      <div className="text-gray-700 font-medium">Class VII</div>
                      <div className="text-right font-semibold">₹7000</div>
                      <div className="text-gray-700 font-medium">Class VIII</div>
                      <div className="text-right font-semibold">₹8000</div>
                      <div className="text-gray-700 font-medium">Class IX and X</div>
                      <div className="text-right font-semibold">₹9800</div>
                      <div className="text-gray-700 font-medium">Monthly Tuition Fee</div>
                      <div className="text-right font-semibold">₹1100</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                  <div className="bg-blue-600 text-white p-3 font-bold text-lg">
                    Quarterly Payment Structure
                  </div>
                  <div className="p-4">
                    <div className="mb-4">
                      <div className="font-semibold text-orange-600">1st quarter - (April, May & June)</div>
                      <div className="flex justify-between">
                        <span>Tuition fee: ₹1100×3</span>
                        <span className="font-semibold">= ₹3300</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="font-semibold text-orange-600">2nd quarter - (July, August & September)</div>
                      <div className="flex justify-between">
                        <span>Tuition fee: ₹1100×3</span>
                        <span className="font-semibold">= ₹3300</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="font-semibold text-orange-600">3rd quarter - (October, November & December)</div>
                      <div className="flex justify-between">
                        <span>Tuition fee: ₹1100×3</span>
                        <span className="font-semibold">= ₹3300</span>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-orange-600">4th quarter - (January, February & March)</div>
                      <div className="flex justify-between">
                        <span>Tuition fee: ₹1100×3</span>
                        <span className="font-semibold">= ₹3300</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Class XI & XII Fee Structure */}
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Class XI - XII</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Arts & Commerce */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-blue-600 text-white p-3 font-bold text-lg">
                  Class XI & XII (ARTS & COMMERCE)
                </div>
                <div className="p-4">
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold">Admission</span>
                    <span className="font-semibold">₹12800</span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="font-semibold text-orange-600">1st quarter - (May, June & July)</div>
                    <div className="flex justify-between">
                      <span>Tuition fee: ₹1300×3</span>
                      <span className="font-semibold">= ₹3900</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="font-semibold text-orange-600">2nd quarter - (August, September & October)</div>
                    <div className="flex justify-between">
                      <span>Tuition fee: ₹1300×3</span>
                      <span className="font-semibold">= ₹3900</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="font-semibold text-orange-600">3rd quarter - (November, December & January)</div>
                    <div className="flex justify-between">
                      <span>Tuition fee: ₹1300×3</span>
                      <span className="font-semibold">= ₹3900</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-orange-600">4th quarter - (February, March & April)</div>
                    <div className="flex justify-between">
                      <span>Tuition fee: ₹1300×3</span>
                      <span className="font-semibold">= ₹3900</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Science */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-blue-600 text-white p-3 font-bold text-lg">
                  Class XI & XII (SCIENCE)
                </div>
                <div className="p-4">
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold">Admission</span>
                    <span className="font-semibold">₹18800</span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="font-semibold text-orange-600">1st quarter - (May, June & July)</div>
                    <div className="flex justify-between">
                      <span>Tuition fee: ₹1800×3</span>
                      <span className="font-semibold">= ₹5400</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="font-semibold text-orange-600">2nd quarter - (August, September & October)</div>
                    <div className="flex justify-between">
                      <span>Tuition fee: ₹1800×3</span>
                      <span className="font-semibold">= ₹5400</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="font-semibold text-orange-600">3rd quarter - (November, December & January)</div>
                    <div className="flex justify-between">
                      <span>Tuition fee: ₹1800×3</span>
                      <span className="font-semibold">= ₹5400</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-orange-600">4th quarter - (February, March & April)</div>
                    <div className="flex justify-between">
                      <span>Tuition fee: ₹1800×3</span>
                      <span className="font-semibold">= ₹5400</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hostel Fee Structure */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Hostel</h3>
              <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden max-w-lg mx-auto">
                <div className="bg-blue-600 text-white p-3 font-bold text-lg text-center">
                  Hostel Fees
                </div>
                <div className="p-4">
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold">Admission</span>
                    <span className="font-semibold">₹5000</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mb-2">
                    <div className="font-semibold text-orange-600">1st quarter</div>
                    <div>₹5500×3</div>
                    <div className="text-right font-semibold">= ₹16500</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mb-2">
                    <div className="font-semibold text-orange-600">2nd quarter</div>
                    <div>₹5500×3</div>
                    <div className="text-right font-semibold">= ₹16500</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mb-2">
                    <div className="font-semibold text-orange-600">3rd quarter</div>
                    <div>₹5500×3</div>
                    <div className="text-right font-semibold">= ₹16500</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className="font-semibold text-orange-600">4th quarter</div>
                    <div>₹5500×3</div>
                    <div className="text-right font-semibold">= ₹16500</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Fee Payment Information</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>All fees must be paid within the first 10 days of each quarter.</li>
                {/* <li>Late payment will incur an additional charge of ₹500.</li>
                <li>Fees can be paid online through our payment portal or at the school office.</li> */}
                <li>For any fee-related queries, please contact our accounts department.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Apply Online */}
        <section id="apply" className="py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-4 border-blue-400 pb-2">
              Apply Now
            </h2>
            <p className="text-gray-700 mb-6">
              Start your journey with us by filling out the online application form.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd2B9nuVQF9yeEiCABIwir7RVri0XC4c7uPVlKGRcj0STBOmg/viewform?usp=dialog"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Apply Link
            </a>
            <p className="m-4">Or</p>
            <a
              href="https://drive.google.com/drive/folders/1uY1TH9GCIkV9YTFAEkDknNj39KoazD6e?usp=sharing"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Download Form
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}