"use client";
import { useState } from 'react';

export default function NewsUpdates() {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Calendar helper functions
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };
  
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };
  
  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };
  
  // Generate calendar days
  const generateCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];
    
    // Add empty cells for days before the first day of month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-8 w-8" />);
    }
    
    // Add actual days
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = 
        new Date().getDate() === day && 
        new Date().getMonth() === currentDate.getMonth() &&
        new Date().getFullYear() === currentDate.getFullYear();
        
      days.push(
        <div 
          key={day} 
          className={`h-8 w-8 flex items-center justify-center rounded-full cursor-pointer transition-colors
            ${isToday ? 'bg-blue-500 text-white' : 'hover:bg-gray-600'}`}
        >
          {day}
        </div>
      );
    }
    
    return days;
  };

  return (
    <section className="py-12 bg-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-600">News & Updates</h2>
        <p className="text-center text-gray-400 mb-8">Stay informed about the latest happenings at Radiant Academy</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Important Announcements */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-300">Important Announcements</h3>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-blue-400 font-semibold">25 March 2024</p>
                <p className="font-bold text-gray-300">Early Admissions Open</p>
                <p className="text-gray-300">Applications now open for academic year 2024-25. Early bird discounts available.</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-blue-400 font-semibold">20 March 2024</p>
                <p className="font-bold text-gray-300">Annual Sports Meet</p>
                <p className="text-gray-300">Annual sports meet scheduled for April 15-20. Register now for various events.</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-blue-400 font-semibold">15 March 2024</p>
                <p className="font-bold text-gray-300">Parent-Teacher Meeting</p>
                <p className="text-gray-300">PTM scheduled for March 30. Book your slots online.</p>
              </div>
            </div>
          </div>
          
          {/* Custom Calendar */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-300">Event Calendar</h3>
            <div className="w-full max-w-sm mx-auto">
              {/* Calendar Header */}
              <div className="flex justify-between items-center mb-4">
                <button 
                  onClick={prevMonth}
                  className="p-2 hover:bg-gray-700 rounded-lg text-gray-300"
                >
                  ←
                </button>
                <h4 className="text-lg font-semibold text-gray-300">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h4>
                <button 
                  onClick={nextMonth}
                  className="p-2 hover:bg-gray-700 rounded-lg text-gray-300"
                >
                  →
                </button>
              </div>
              
              {/* Week Days Header */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div 
                    key={day} 
                    className="h-8 flex items-center justify-center text-sm font-semibold text-gray-400"
                  >
                    {day}
                  </div>
                ))}
              </div>
              
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 text-gray-300">
                {generateCalendar()}
              </div>
              
              {/* Event Indicators */}
              <div className="mt-4 space-y-2 text-sm text-gray-300">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <span>Today</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-gray-600 mr-2"></div>
                  <span>Available Dates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}