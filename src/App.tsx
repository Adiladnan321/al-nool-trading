import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCategories } from './components/ProductCategories';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="min-h-screen w-full bg-gray-50">
      <Header />
      <main>
        <Hero />
        <ProductCategories />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>;
}