import React from 'react';
import { ShoppingBagIcon, FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <ShoppingBagIcon className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Al Nool Trading Co.</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for consumer electronics trading
              solutions in Qatar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Power Banks
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Smart Watches
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Tablets
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Chargers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  TWS Earbuds
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Headphones
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Shipping Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} TechTrade Global. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
}
