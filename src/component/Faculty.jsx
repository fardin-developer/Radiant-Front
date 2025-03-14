"use client";
import { useEffect, useState } from "react";

export default function FacultySection() {
  const [facultyList, setFacultyList] = useState([]);

  useEffect(() => {
    
    async function fetchFacultyData() {
      try {
        const response = await fetch(
          "https://sheets.googleapis.com/v4/spreadsheets/1OjpFbeg0GmfdapUy2Kj_Lpy9lMo97sF36tbcVCpmlMk/values/Sheet1?key=AIzaSyCQkRS9gOg7rpKwEFBO5KTVZn8h1404Snk"
        );
        
        if (!response.ok) {
          console.error("Response not OK:", response.status, response.statusText);
          return;
        }
        
        const data = await response.json();

        if (data.values && data.values.length > 0) {
          const [header, ...rows] = data.values;

          const formattedFaculty = rows.map((row) => {
            return {
              name: row[0] || "No Name",
              title: row[1] || "",
              description: row[2] || "",
              imageUrl: row[3] || "",
            };
          });

          setFacultyList(formattedFaculty);
        } else {
          console.warn("No faculty data found in Google Sheet or data structure is unexpected:", data);
        }
      } catch (error) {
        console.error("Error fetching faculty data:", error);
        console.error("Error details:", error.message, error.stack);
      }
    }

    fetchFacultyData();
  }, []);

  console.log("Before rendering, facultyList:", facultyList);

  return (
    <section id="faculty" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-4 border-blue-400 pb-2">
          Distinguished Faculty
        </h2>

        {console.log("Rendering faculty list, length:", facultyList.length)}
        
        <div className="grid md:grid-cols-3 gap-8">
          {facultyList.length > 0 ? (
            facultyList.map((faculty, index) => {
              console.log("Rendering faculty item:", faculty, "at index:", index);
              return (
                <div
                  key={index}
                  className="group p-6 rounded-lg hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                    {faculty.imageUrl ? (
                      <img
                        src={faculty.imageUrl}
                        alt={faculty.name}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        No Image
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold">{faculty.name}</h3>
                  <p className="text-blue-600 mb-2">{faculty.title}</p>
                  <p className="text-gray-600">{faculty.description}</p>
                </div>
              );
            })
          ) : (
            <p className="text-center col-span-3">Loading faculty information...</p>
          )}
        </div>
      </div>
    </section>
  );
}