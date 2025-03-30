import React, { useState, useEffect } from "react";

const images = [
  "/image/a1.jpeg",
  "/image/a2.jpeg",
  "/image/a3.jpeg",
  "/image/a4.jpeg",
  "/image/a5.jpeg",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumns(1); // Mobile view
      } else if (window.innerWidth < 1024) {
        setColumns(2); // Tablet view
      } else {
        setColumns(3); // Desktop view
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen p-6 text-white">
      <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
        Aavash's Gallery
      </h2>

      {/* Gallery Grid */}
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full h-60 bg-gray-800 rounded-lg overflow-hidden relative"
          >
            <img
              src={img}
              alt={`Aavash ${index + 1}`}
              className="w-full h-full object-cover cursor-pointer transition-transform hover:scale-105"
              onClick={() => setSelectedImage(img)}
            />
          </div>
        ))}
      </div>

      {/* Full-Size Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-full max-h-full">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-red-500"
            >
              &#10005;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
