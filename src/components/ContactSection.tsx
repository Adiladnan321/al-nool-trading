import React from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, ClockIcon } from 'lucide-react';
export function ContactSection() {
  return <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team to discuss your business needs and how we
            can help you source quality consumer electronics
          </p>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Your Name
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                    Company Name
                  </label>
                  <input type="text" id="company" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Company" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="+1 (555) 000-0000" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Product Inquiry" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about your business needs..."></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-6">
                <MapPinIcon className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h4 className="font-semibold">Headquarters</h4>
                  <p className="text-gray-600">
                    Office No:23, 2nd floor, Building No: 25
                    <br />
                    Bin Jaham Al-kuwair Complex, Al Sadd, Qatar
                  </p>
                </div>
              </div>
              <div className="flex items-start mb-6">
                <PhoneIcon className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600">+974 4001-8080</p>
                  <p className="text-gray-600">+974 5581-4904</p>
                </div>
              </div>
              <div className="flex items-start mb-6">
                <MailIcon className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">alnoolelectrical@gmail.com</p>
                  <p className="text-gray-600">alnoolelectrical@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <ClockIcon className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h4 className="font-semibold">Business Hours</h4>
                  <p className="text-gray-600">
                    Sunday - Thursday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
            <div className="mt-8 h-64 rounded-lg overflow-hidden shadow-md">
              {/* This would typically be a Google Map, but we'll use a placeholder image */}
              <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Office location map" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
}