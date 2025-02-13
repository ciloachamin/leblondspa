import React from "react";
import service1 from '../assets/public/imgs/limpieza-profunda.png';
import service2 from '../assets/public/imgs/masaje-facial.jpg';
import service3 from '../assets/public/imgs/masajes-relajantes.jpg';

const RelaxationSpa = () => {
  return (
    <div className="bg-gradient-to-b from-[#bc9d5e8c] to-white py-10 px-5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Section */}
          <div className="text-center md:text-left md:w-1/2 space-y-4">
            <h2 className="text-sm text-[#4A5759] font-semibold">we are experts in</h2>
            <h1 className="text-4xl font-bold text-[#BC9C5E] leading-tight">
              Relaxation bath with <span className="text-black">Milani Spa</span>
            </h1>
            <p className="text-gray-600">
              We are working with thousands of business companies around the world & delivering ideas for your business.
            </p>
            <button className="bg-[#BC9C5E] text-white py-2 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition">
              Contact us
            </button>
          </div>

          {/* Right Section */}
          <div className="mt-8 md:mt-0 md:w-1/2 grid grid-cols-2 gap-4">
            <div className="relative">
              <img
                src={service1} // Replace with your image URL
                alt="Relaxation 1"
                className="rounded-full shadow-lg border-4 border-white"
              />
            </div>
            <div className="relative">
              <img
                src={service2} // Replace with your image URL
                alt="Relaxation 2"
                className="rounded-full shadow-lg border-4 border-white"
              />
            </div>
            <div className="relative col-span-2">
              <img
                src={service3}
                alt="Relaxation 3"
                className="rounded-full shadow-lg border-4 border-white mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelaxationSpa;
