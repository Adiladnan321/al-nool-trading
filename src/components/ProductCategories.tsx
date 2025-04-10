import React from 'react';
import { BatteryChargingIcon, WatchIcon, TabletIcon, ZapIcon, HeadphonesIcon, BluetoothIcon } from 'lucide-react';
export function ProductCategories() {
  const categories = [{
    name: 'Power Banks',
    description: 'High-capacity portable charging solutions',
    icon: <BatteryChargingIcon className="h-10 w-10 text-blue-600" />,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    name: 'Smart Watches',
    description: 'Connected wearables with health monitoring',
    icon: <WatchIcon className="h-10 w-10 text-blue-600" />,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    name: 'Tablets',
    description: 'Premium tablets for productivity and entertainment',
    icon: <TabletIcon className="h-10 w-10 text-blue-600" />,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    name: 'Chargers',
    description: 'Fast charging solutions for all devices',
    icon: <ZapIcon className="h-10 w-10 text-blue-600" />,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    name: 'TWS Earbuds',
    description: 'True wireless stereo with premium sound quality',
    icon: <BluetoothIcon className="h-10 w-10 text-blue-600" />,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    name: 'Headphones',
    description: 'Over-ear and on-ear premium audio solutions',
    icon: <HeadphonesIcon className="h-10 w-10 text-blue-600" />,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }];
  return <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Product Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We specialize in sourcing and distributing high-quality consumer
            electronics across these major categories
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
                <button className="mt-4 text-blue-600 font-medium flex items-center">
                  View Products
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}