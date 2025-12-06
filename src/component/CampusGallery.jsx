"use client";
import { useEffect, useState } from "react";

const GalleryImages = () => {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    async function fetchGalleryImages() {
      try {
        const response = await fetch(
          "https://sheets.googleapis.com/v4/spreadsheets/19MP4M5GBrHWV_GlTwR6P8xb-xwvSc7f-Vj2Ofr-ahAQ/values/Sheet1?key=AIzaSyCQkRS9gOg7rpKwEFBO5KTVZn8h1404Snk"
        );
        const data = await response.json();

        if (data.values && data.values.length > 0) {
          const firstRow = data.values[0];
          const isHeader = firstRow.includes("Image URL") || firstRow.includes("Title");
          const dataRows = isHeader ? data.values.slice(1) : data.values;

          const formattedImages = dataRows.map((row) => ({
            url: row[1] || "",
            title: row[0] || "No Title",
          }));

          setGalleryImages(formattedImages);
        } else {
          console.warn("No image data found in Google Sheet.");
        }
      } catch (error) {
        console.error("Error fetching Google Sheets data:", error);
      }
    }

    fetchGalleryImages();
  }, []);

  return (
    <section id="gallery" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-4 border-blue-400 pb-2">
          Campus Gallery
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {galleryImages.length > 0 ? (
            galleryImages.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow group"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
                />
                <p className="text-center mt-2 text-gray-700">{image.title}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">Loading images...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default GalleryImages;
