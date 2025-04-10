import React from 'react';
import { TruckIcon, GlobeIcon, AwardIcon } from 'lucide-react';
export function Hero() {
  return <section id="home" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Consumer Electronics Trading Solutions in Qatar
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Your trusted partner for premium consumer electronics. We connect
              manufacturers and retailers with quality products at competitive
              prices.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => (window.location.href = "#products")}
                className="bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition"
              >
              <button onClick={() => (window.location.href = "#products")} className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition">
                Contact Us
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="https://images.unsplash.com/photo-1581093196277-9f6e9b62af6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Electronics showcase" className="rounded-lg shadow-lg max-w-full h-auto" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="flex items-center">
            <div className="bg-blue-500 p-3 rounded-full">
              <TruckIcon className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-lg">Global Shipping</h3>
              <p className="text-blue-100">Worldwide logistics solutions</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-blue-500 p-3 rounded-full">
              <GlobeIcon className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-lg">International Network</h3>
              <p className="text-blue-100">Partners across 30+ countries</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-blue-500 p-3 rounded-full">
              <AwardIcon className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-lg">Quality Assurance</h3>
              <p className="text-blue-100">Certified product standards</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
