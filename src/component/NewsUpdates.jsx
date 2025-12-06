"use client";
import { useState, useEffect } from "react";

export default function NewsUpdates() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch(
          "https://sheets.googleapis.com/v4/spreadsheets/1BlrgaR6w2eHittFdriWziHH_rw21BsvmY0lBKeAvCog/values/Sheet1?key=AIzaSyCQkRS9gOg7rpKwEFBO5KTVZn8h1404Snk"
        );
        const data = await response.json();
        
        if (data.values && data.values.length > 0) {
          // Check if the first row is a header
          const firstRow = data.values[0];
          const isHeader = firstRow.includes("Date") || firstRow.includes("Title");
          const dataRows = isHeader ? data.values.slice(1) : data.values;
  
          const formattedEvents = dataRows.map((row) => ({
            date: row[0] || "Unknown Date",
            title: row[1] || "No Title",
            summary: row[2] || "No Summary",
          }));
  
          setEvents(formattedEvents);
        } else {
          console.warn("No event data found in Google Sheet.");
        }
      } catch (error) {
        console.error("Error fetching Google Sheets data:", error);
      }
    }
  
    fetchEvents();
  }, []);
  

  // Calendar helper functions
  const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));

  // Generate calendar days
  const generateCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-8 w-8" />);
    }

    // Actual days
    for (let day = 1; day <= daysInMonth; day++) {
      const formattedDate = `${day} ${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
      const event = events.find((e) => e.date === formattedDate);

      days.push(
        <div 
          key={day}
          className={`h-8 w-8 flex items-center justify-center rounded-full cursor-pointer transition-colors
            ${event 
              ? "bg-green-500 text-white hover:bg-green-600" 
              : "hover:bg-gray-600 text-gray-300"}
          `}
          onClick={() => event && setSelectedEvent(event)}
          title={event ? event.title : ""}
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
        <p className="text-center text-gray-400 mb-8">Stay informed about the latest happenings</p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Announcements Section */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-300">Important Announcements</h3>
            <div className="space-y-4">
              {events.length > 0 ? (
                events.map((event, index) => (
                  <div 
                    key={index} 
                    className={`bg-gray-700 p-4 rounded-lg cursor-pointer transition-colors 
                      ${selectedEvent === event 
                        ? "border-2 border-blue-500" 
                        : "hover:bg-gray-600"}`}
                    onClick={() => setSelectedEvent(event)}
                  >
                    <p className="text-blue-400 font-semibold">{event.date}</p>
                    <p className="font-bold text-gray-300">{event.title}</p>
                    <p className="text-gray-300">{event.summary}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">Loading events...</p>
              )}
            </div>
          </div>

          {/* Calendar Section */}
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
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="h-8 flex items-center justify-center text-sm font-semibold text-gray-400">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 text-gray-300">
                {generateCalendar()}
              </div>

              {/* Event Indicators and Selected Event Details */}
              <div className="mt-4 space-y-2 text-sm text-gray-300">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span>Event Days</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-gray-600 mr-2"></div>
                  <span>Available Dates</span>
                </div>

                {/* Selected Event Details */}
                {selectedEvent && (
                  <div className="mt-4 p-4 bg-gray-700 rounded-lg">
                    <h4 className="text-lg font-bold text-blue-400 mb-2">{selectedEvent.title}</h4>
                    <p className="text-gray-300 mb-1">{selectedEvent.date}</p>
                    <p className="text-gray-300">{selectedEvent.summary}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}