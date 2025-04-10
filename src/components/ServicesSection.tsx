import React from 'react';
import { ShoppingCartIcon, TruckIcon, PackageIcon, BarChart3Icon, ShieldIcon, HeartHandshakeIcon } from 'lucide-react';
export function ServicesSection() {
  const services = [{
    title: 'Wholesale Distribution',
    description: 'Bulk ordering of consumer electronics with competitive pricing tiers and flexible minimum order quantities.',
    icon: <ShoppingCartIcon className="h-10 w-10 text-blue-600" />
  }, {
    title: 'Global Logistics',
    description: 'End-to-end shipping solutions including customs clearance, documentation, and delivery to your warehouse.',
    icon: <TruckIcon className="h-10 w-10 text-blue-600" />
  }, {
    title: 'Product Sourcing',
    description: 'Custom sourcing of specific electronic products based on your market requirements and specifications.',
    icon: <PackageIcon className="h-10 w-10 text-blue-600" />
  }, {
    title: 'Market Analysis',
    description: 'Insights on consumer electronics trends and market opportunities to help guide your purchasing decisions.',
    icon: <BarChart3Icon className="h-10 w-10 text-blue-600" />
  }, {
    title: 'Quality Assurance',
    description: 'Rigorous testing and certification to ensure all products meet international standards and regulations.',
    icon: <ShieldIcon className="h-10 w-10 text-blue-600" />
  }, {
    title: 'After-Sales Support',
    description: 'Comprehensive warranty handling and technical support for all products in our catalog.',
    icon: <HeartHandshakeIcon className="h-10 w-10 text-blue-600" />
  }];
  return <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive trading services to ensure a smooth and
            profitable experience for all our business partners
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>)}
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to partner with us?</h3>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition">
            Request a Quote
          </button>
        </div>
      </div>
    </section>;
}