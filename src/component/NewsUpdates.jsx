'use client';
import { useState } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function NewsUpdates() {
  const [date, setDate] = useState(new Date());
  
  return (
    <section className= "py-12 bg-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-600">News & Updates</h2>
        <p className="text-center text-gray-400 mb-8">Stay informed about the latest happenings at EduExcel Academy</p>
        
        <div className="grid md:grid-cols-2 gap-8 text-gray-300">
          {/* Important Announcements */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Important Announcements</h3>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-blue-400 font-semibold">25 March 2024</p>
                <p className="font-bold">Early Admissions Open</p>
                <p className="text-gray-300">Applications now open for academic year 2024-25. Early bird discounts available.</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-blue-400 font-semibold">20 March 2024</p>
                <p className="font-bold">Annual Sports Meet</p>
                <p className="text-gray-300">Annual sports meet scheduled for April 15-20. Register now for various events.</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-blue-400 font-semibold">15 March 2024</p>
                <p className="font-bold">Parent-Teacher Meeting</p>
                <p className="text-gray-300">PTM scheduled for March 30. Book your slots online.</p>
              </div>
            </div>
          </div>
          
          {/* Event Calendar */}
          {/* <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Event Calendar</h3>
            <Calendar 
              onChange={setDate} 
              value={date} 
              className=" text-black rounded-lg p-2 shadow-md"
              tileClassName="hover:bg-blue-500 hover:text-white rounded-lg p-2"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
