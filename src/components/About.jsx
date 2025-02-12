import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 max-w-3xl mx-auto">
      {/* Logo */}
      <img src="/images/brand.png" alt="Annabell's Closet Logo" className="w-32 h-32 mb-4 rounded-full shadow-lg" />

      {/* About Text */}
      <h2 className="text-3xl font-bold text-yellow-800 mb-4">About Us</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Welcome to <span className="font-bold">Annabell's Closet</span>, your leading source for quality, affordable, and fashionable second-hand attire!
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        We carefully select our items from the finest ukay-ukay bundles, ensuring each piece is cleaned, restored, and refreshed before reaching your hands.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Our goal is to offer stylish and sustainable fashion choices at budget-friendly prices, making it simple for you to showcase your style and fashion.
      </p>
      <p className="text-gray-700 leading-relaxed">
        At <span className="font-bold">Annabell's Closet</span>, we are committed to giving clothes a second life while helping you find unique pieces that reflect your personality. Whether you’re on the hunt for vintage, trendy, or daily outfits, we've got you covered!
      </p>
    </div>
  );
};

export default About;
