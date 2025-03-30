import React, { useState } from "react";

const About = () => {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div className="about-container relative bg-gradient-to-t from-[#1F2937] via-[#374151] to-[#111827] min-h-screen pt-8 px-4 sm:px-6">
      <div className="mb-6 flex justify-center gap-4 flex-wrap">
        <button
          className={`px-4 py-2 rounded-md text-white text-lg ${
            showDetails ? "bg-red-500" : "bg-gray-500"
          }`}
          onClick={() => setShowDetails(true)}
        >
          Details
        </button>

        <button
          className={`px-4 py-2 rounded-md text-white text-lg ${
            !showDetails ? "bg-red-500" : "bg-gray-500"
          }`}
          onClick={() => setShowDetails(false)}
        >
          Hobbies
        </button>
      </div>

      {showDetails ? (
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full">
          <div className="w-full md:w-1/2 pl-6 text-xl italic text-white">
            <span className="font-bold text-red-500 text-2xl">Aavash</span> is a
            charismatic individual who enjoys the nightlife, especially going to
            clubs and meeting new people. He has a habit of flirting, asking for
            numbers, and making sure everyone is safe after their night out.
            Aavash loves meeting people from different cultures and backgrounds.
            He's known for his fun, rizz-filled personality and likes to enjoy
            life with a drink and a smoke. Whether it's chatting with a Spanish,
            Indian, Bengali, Nepali, or anyone he meets, Aavash has a variety of
            styles when it comes to making connections.
          </div>
          <img
            src="/image/photoo.jpeg" 
            alt="Aavash"
            className="w-60 h-60 md:w-[60vh] md:h-[60vh] object-cover mx-auto my-4 shadow-lg rounded-full"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center w-full text-xl italic text-white">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full sm:w-1/3 text-center">
              <img
                src="https://e3.365dm.com/20/01/768x432/2372001300973217007_4906530.jpg?20200130162816"
                alt="Hobby 1"
                className="w-40 h-40 sm:w-[60vh] sm:h-[60vh] object-cover mx-auto my-4 shadow-lg rounded-full"
              />
              <p className="mt-2 text-white">Drinking and smoking, fun party person, getting drunk with friends.</p>
            </div>
            <div className="w-full sm:w-1/3 text-center">
              <img
                src="https://www.shutterstock.com/shutterstock/photos/143114701/display_1500/stock-photo-group-of-flirting-young-girls-with-happy-smiling-popular-boy-143114701.jpg"
                alt="Hobby 2"
                className="w-40 h-40 sm:w-[60vh] sm:h-[60vh] object-cover mx-auto my-4 shadow-lg rounded-full"
              />
              <p className="mt-2 text-white">Flirting, rizzzing girls, asking for their numbers, Instagram, Snapchat, and clubbing with different girls to explore – same is boring, isn't it?</p>
            </div>
            <div className="w-full sm:w-1/3 text-center">
              <img
                src="https://media.istockphoto.com/id/605748560/photo/couple-flirting-on-the-river-playing-the-guitar.jpg?s=612x612&w=0&k=20&c=3LQY2heBuvOwC_zCc_WM_pu7_nfSWfq60rFN7KpKyBA="
                alt="Hobby 3"
                className="w-40 h-40 sm:w-[60vh] sm:h-[60vh] object-cover mx-auto my-4 shadow-lg rounded-full"
              />
              <p className="mt-2 text-white">He will play you guitar and he likes rizzin up random ass girls on Insta. He loves attention from girls. He will rizz you up, but you need to be fun to not make him bored, because he instantly gets bored.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
