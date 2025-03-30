import React from "react";

const acharData = [
  { name: "Nepali Achar", rating: 5, image: "https://mallko.store/cdn/shop/collections/Dallas_chilli.jpg?v=1717005406&width=750" },
  { name: "Indian Achar", rating: 2, image: "https://d4pmlgzenkweq.cloudfront.net/p0breg5a6kp4lx7k9oxspwctzxog" },
  { name: "Bangla Achar", rating: 2, image: "https://thaifoodproduct.com/wp-content/uploads/2017/06/acar.jpg" },
  { name: "Spanish Achar", rating: 2, image: "https://cdn11.bigcommerce.com/s-lbtzfspbze/images/stencil/1280x1280/products/3836/8867/spanish__74383.1693254428.jpg?c=2" },
  { name: "African Achar", rating: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpdmmalgrUoYyIiOMAEH5LOOJI1uCeNu8ksQ&s" },
];

const AcharCollection = () => {
  return (
    <div className="bg-gray-900 min-h-screen p-8 text-white">
      <h2 className="text-3xl font-bold text-center text-red-500 mb-6">Achar Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {acharData.map((achar, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
            <div className="w-full h-48 flex items-center justify-center">
              <img
                src={achar.image}
                alt={achar.name}
                className="w-full h-full object-contain rounded-md transition-transform hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-semibold mt-4">{achar.name}</h3>
            <div className="mt-2 flex justify-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < achar.rating ? "text-yellow-500 text-2xl" : "text-gray-500 text-2xl"}>
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcharCollection;
