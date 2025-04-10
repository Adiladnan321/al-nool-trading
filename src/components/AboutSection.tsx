import React from 'react';
import { CheckCircleIcon, TrendingUpIcon, UsersIcon, BuildingIcon } from 'lucide-react';
export function AboutSection() {
  return <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Business meeting" className="rounded-lg shadow-lg max-w-full h-auto" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About Al Nool Trading
            </h2>
            <p className="text-gray-700 mb-6">
              Founded in 2014, Al Nool Trading has established itself as a
              leading international trading company specializing in consumer
              electronics. With a commitment to quality and reliability, we've
              built strong relationships with manufacturers and retailers
              worldwide.
            </p>
            <p className="text-gray-700 mb-8">
              Our mission is to bridge the gap between quality manufacturers and
              global markets, ensuring consumers everywhere have access to the
              latest technology at competitive prices.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mt-1 mr-2" />
                <span>10+ years industry experience</span>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mt-1 mr-2" />
                <span>Global logistics network</span>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mt-1 mr-2" />
                <span>Quality assurance guarantee</span>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mt-1 mr-2" />
                <span>Competitive wholesale pricing</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
              <TrendingUpIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">$50M+ Annual Revenue</h3>
            <p className="text-gray-600">
              Growing year-over-year with expanding market reach
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
              <BuildingIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">30+ Country Network</h3>
            <p className="text-gray-600">
              Global presence with offices in key markets
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
              <UsersIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              500+ Business Clients
            </h3>
            <p className="text-gray-600">
              Trusted by retailers and distributors worldwide
            </p>
          </div>
        </div>
      </div>
    </section>;
}